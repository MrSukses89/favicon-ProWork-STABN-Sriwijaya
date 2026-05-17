/* --- FUNGSI BIODATA --- */
function toggleBiodata() {
    const card = document.getElementById("biodata-card");
    if (!card) return;

    // Sembunyikan card lain
    const otherCards = ["calc-card", "music-card"];
    otherCards.forEach(id => {
        const c = document.getElementById(id);
        if (c) c.style.display = "none";
    });

    if (card.style.display === "block") {
        card.style.display = "none";
    } else {
        card.style.display = "block";
        setupDriveEnterKey(); 
    }
}

/* --- LOGIKA ACCESS DRIVE --- */
function checkAccess() {
    const inputEl = document.getElementById("drive-pass");
    const secretPass = "123456"; 
    
    if (!inputEl) return;

    if (inputEl.value === secretPass) {
        // Langsung buka OneDrive
        goToDrive();

        // Tampilkan area sukses
        document.getElementById("login-area").style.display = "none";
        document.getElementById("drive-area").style.display = "block";
        
        inputEl.value = "";
        const errorMsg = document.getElementById("error-msg");
        if (errorMsg) errorMsg.style.display = "none";
    } else {
        const errorMsg = document.getElementById("error-msg");
        if (errorMsg) errorMsg.style.display = "block";
        
        const card = document.getElementById("biodata-card");
        card.style.animation = "none";
        setTimeout(() => card.style.animation = "shake 0.3s", 10);
    }
}

/* --- REDIRECT KE ONEDRIVE --- */
function goToDrive() {
    const linkDrive = "https://1drv.ms/w/c/143EA9686221F233/IQAGQIcTC3PdSaUzW-xB11usASouzRxBQ5wdwKNfl_Oby34?e=ZhGss2";
    window.open(linkDrive, "_blank");
}

function lockAgain() {
    document.getElementById("login-area").style.display = "block";
    document.getElementById("drive-area").style.display = "none";
}

function togglePassword() {
    const passInput = document.getElementById("drive-pass");
    const eyeIcon = document.getElementById("toggle-eye");
    if (passInput.type === "password") {
        passInput.type = "text";
        eyeIcon.innerText = "😏";
    } else {
        passInput.type = "password";
        eyeIcon.innerText = "😎";
    }
}

function setupDriveEnterKey() {
    const input = document.getElementById("drive-pass");
    if (input && !input.dataset.listenerActive) {
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                checkAccess();
            }
        });
        input.dataset.listenerActive = "true";
    }
}