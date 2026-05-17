// 1. Inisialisasi Catatan & State (Reset ke Home saat refresh)
let noteBox, noteInput, status;

window.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen DOM yang dibutuhkan
    noteBox = document.getElementById('noteBox');
    noteInput = document.getElementById('noteInput');
    status = document.getElementById('status');

    // Jalankan fungsi switch ke home agar dock lain tersembunyi
    switchScene('home');

    // Reset Catatan dari LocalStorage
    const savedNote = localStorage.getItem('userNote');
    if (savedNote && noteInput) noteInput.value = savedNote;

    // Pasang listener input untuk auto-save
    if (noteInput) {
        noteInput.addEventListener('input', () => {
            localStorage.setItem('userNote', noteInput.value);
            if (status) status.innerText = "Menyimpan...";
            clearTimeout(window.saveTimer);
            window.saveTimer = setTimeout(() => { 
                if (status) status.innerText = "Tersimpan"; 
            }, 800);
        });
    }
});

// 2. FUNGSI SWITCH SCENE (Ganti Dock di Bawah)
function switchScene(sceneId) {
    const target = document.getElementById('dock-' + sceneId);
    if (!target) return;

    const isAlreadyActive = !target.classList.contains('dock-hidden') && target.style.display !== 'none';

    if (isAlreadyActive) {
        target.classList.add('dock-hidden');
        setTimeout(() => {
            target.style.display = 'none';
        }, 500);
    } else {
        const allDocks = document.querySelectorAll('.dock');
        allDocks.forEach(d => {
            d.classList.add('dock-hidden');
            d.style.display = 'none';
        });

        target.style.display = 'flex';
        setTimeout(() => {
            target.classList.remove('dock-hidden');
        }, 10);
    }
}

// 3. FUNGSI TOGGLE MENU (Pop-up di tengah layar)
// PERBAIKAN: Menggunakan FLEX agar ikon otomatis rata tengah
function toggleMenu(menuId) {
    const allMenus = document.querySelectorAll('.menu-container');
    const targetMenu = document.getElementById(menuId);

    // Sembunyikan menu lain yang sedang terbuka
    allMenus.forEach(menu => {
        if (menu.id !== menuId) {
            menu.classList.remove('show');
            setTimeout(() => { menu.style.display = 'none'; }, 300);
        }
    });

    // Logika untuk menu yang diklik
    if (targetMenu.classList.contains('show')) {
        targetMenu.classList.remove('show');
        setTimeout(() => { targetMenu.style.display = 'none'; }, 300);
    } else {
        // PENTING: Gunakan 'flex' agar justify-content: center di CSS bekerja
        targetMenu.style.display = 'flex'; 
        
        // Trigger animasi zoomIn
        targetMenu.style.animation = 'zoomIn 0.3s ease forwards';
        
        setTimeout(() => {
            targetMenu.classList.add('show');
        }, 10);
    }
}

// 4. LOGIKA KLIK LUAR (Menutup menu jika klik di area kosong)
window.addEventListener('click', function(event) {
    const isIcon = event.target.closest('.dock-icon') || 
                   event.target.closest('.nav-icon') || 
                   event.target.closest('.menu-container'); // Agar klik di dalam menu tidak menutup sendiri
    
    if (!isIcon) {
        document.querySelectorAll('.menu-container').forEach(m => {
            m.classList.remove('show');
            setTimeout(() => { m.style.display = "none"; }, 300);
        });
    }
});

// 5. FUNGSI CATATAN
function toggleNote() {
    if (!noteBox) noteBox = document.getElementById('noteBox');
    
    // Animasi bounce pada icon yang diklik
    const noteIcon = event.currentTarget; 
    if (noteIcon && noteIcon.classList) {
        noteIcon.classList.add('animate-bounce');
        setTimeout(() => noteIcon.classList.remove('animate-bounce'), 400);
    }

    const currentDisplay = noteBox ? window.getComputedStyle(noteBox).display : 'none';
    if (noteBox) {
        noteBox.style.display = (currentDisplay === 'none') ? 'flex' : 'none';
        // Tambahkan animasi zoom jika perlu
        if(noteBox.style.display === 'flex') {
            noteBox.style.animation = 'zoomIn 0.3s ease forwards';
        }
    }
}