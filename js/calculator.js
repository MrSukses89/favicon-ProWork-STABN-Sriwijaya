// 1. Fungsi Format Ribuan
function formatNumber(val) {
    if (val === null || val === undefined || val === "") return "";
    let plainNumber = val.toString().replace(/\./g, ""); // Bersihkan titik lama
    if (isNaN(plainNumber)) return val; // Jika bukan angka murni, kembalikan apa adanya
    return Number(plainNumber).toLocaleString('id-ID'); // Kasih titik ala Indo
}

// 2. Fungsi Input Angka & Operator
function inputCalc(val) {
    const display = document.getElementById("calc-display");
    
    // Jika input adalah angka atau titik desimal
    if (!isNaN(val) || val === ".") {
        // Cari angka terakhir di dalam display (setelah operator terakhir)
        let parts = display.value.split(/[\+\-\*\/]/);
        let lastPart = parts[parts.length - 1];
        
        // Gabungkan angka terakhir dengan input baru, lalu format
        let newLastPart = formatNumber(lastPart.replace(/\./g, "") + val);
        
        // Ganti angka terakhir di display dengan yang sudah diformat
        let otherParts = display.value.substring(0, display.value.length - lastPart.length);
        display.value = otherParts + newLastPart;
    } else {
        // Jika input adalah OPERATOR (+, -, *, /)
        // Tambahkan tanpa format agar tidak merusak logika titik
        display.value += val;
    }
}

// 3. Fungsi Hitung Hasil
function calculateResult() {
    const display = document.getElementById("calc-display");
    if (!display.value) return;

    try {
        // Bersihkan SEMUA titik sebelum dievaluasi oleh JS
        let rawExpression = display.value.replace(/\./g, "");
        
        // Proses perhitungan
        let result = eval(rawExpression);
        
        // Tampilkan hasil akhir dengan format titik
        display.value = formatNumber(result);
    } catch (e) {
        display.value = "Error";
        setTimeout(clearCalc, 1500);
    }
}

// 4. Fungsi Tambahan (Hapus)
function clearCalc() {
    document.getElementById("calc-display").value = "";
}

function backspaceCalc() {
    const display = document.getElementById("calc-display");
    // Hapus satu karakter di belakang
    display.value = display.value.slice(0, -1);
    
    // Opsional: Re-format angka terakhir setelah dihapus (biar titik tetap sinkron)
    let parts = display.value.split(/[\+\-\*\/]/);
    let lastPart = parts[parts.length - 1];
    if(lastPart) {
        let formatted = formatNumber(lastPart);
        let otherParts = display.value.substring(0, display.value.length - lastPart.length);
        display.value = otherParts + formatted;
    }
}

function toggleCalculator() {
    const card = document.getElementById("calc-card");
    card.style.display = (card.style.display === "block") ? "none" : "block";
}

// Panggil fungsi drag untuk kalkulator
dragElement(document.getElementById("calc-card"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    // Gunakan header sebagai pegangan untuk menggeser (jika ada)
    // Jika tidak ada header, elemen itu sendiri yang jadi pegangan
    const header = elmnt.querySelector(".calc-header") || elmnt;
    header.style.cursor = "move"; // Ubah kursor jadi simbol geser
    header.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // Ambil posisi awal kursor mouse
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // Panggil fungsi saat mouse digeser
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // Hitung posisi kursor yang baru
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Set posisi elemen yang baru
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        
        // Pastikan position tetap fixed atau absolute supaya bisa pindah
        elmnt.style.bottom = "auto"; 
        elmnt.style.right = "auto";
    }

    function closeDragElement() {
        // Berhenti menggeser saat klik dilepas
        document.onmouseup = null;
        document.onmousemove = null;
    }
}