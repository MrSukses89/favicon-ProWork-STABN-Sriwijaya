// --- 1. DATA PLAYLIST ---
// Gunakan link raw.githubusercontent.com agar file bisa di-stream langsung
// --- 1. DATA PLAYLIST ---
const songList = [

    {
        title: "Chan Of Metta",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Chant%20Of%20Metta.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Buddhajayamanggala Gatha",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Buddhajayamanggala%20Gatha.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Jinapanjara Gatha",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/JINAPANJARA%20GATHA.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Karaniyametta Sutta",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Karaniyametta%20Sutta.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Kumpulan Paritta I",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Kumpulan%20Paritta%20I.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Kumpulan Paritta II",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Kumpulan%20Paritta%20II.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Tegar",
        artist: "Vanessa Halkin",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Vanessa%20Halkin%20-%20Tegar%20(Official%20Lyric%20Video)%20(128%20kbps).mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Tak Akan Berpaling",
        artist: "Marvella",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Marvella%20-%20Tak%20Akan%20Berpaling%20(Lagu%20Buddhis)%20(128%20kbps).mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Indahnya Kasih",
        artist: "Lawrence Anzela",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Lawrence%20Anzela%20-%20Indahnya%20Kasih%20(Official%20Music)%20(128%20kbps).mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Berkah Kathina",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/LAGU%20BUDDHIS%20BERKAH%20KATHINA%20(128%20kbps).mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Apa yang harus kita lakukan?",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/BARU/LAGU%20BUDDHIS%20APA%20YANG%20SUDAH%20KITA%20LAKUKAN%20(128%20kbps).mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Saat memberi, saat menerima",
        artist: "Alvania Artamevia",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/BARU/ALVANIA%20ARTAMEVIA%20-%20SAAT%20MEMBERI,%20SAAT%20MENERIMA%20(OFFICIAL%20MUSIC%20VIDEO)%20(128%20kbps).mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Buka Hatimu",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/1.Bukalah%20Hatimu.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Tekad Siswa Sang Buddha",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/2.Tekad%20Siswa%20Sang%20Buddha.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Tiga Perlindungan",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/3.Tiga%20Perlindungan.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Melodi Kehidupan",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/4.Melodi%20Kehidupan.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Jalan Dhamma",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/5.Jalan%20Dhamma.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Untuk Kita Renungkan",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/6.Untuk%20Kita%20Renungkan.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Hadirkan Cinta",
        artist: "Iyed Bustami",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/7.Hadirkan%20Cinta.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Sang Bhagava",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/8.Sang%20Bhagava.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Kebenaran Sejati",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/9.Kebenaran%20Sejati.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Sang Guru",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/10.Sang%20Guru.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Ajaran Buddha",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Ajaran%20Buddha.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Arahat",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Arahat.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Berbahagialah",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Berbahagialah.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Bersama Kita Melangkah",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Bersama%20Kita%20Melangkah.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Buddha Pedomanku",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Buddha%20Pedomanku.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Buddha Satu Untukku",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Buddha%20Satu%20Untukku.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Buddha yang Mulia",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Buddha%20Yang%20Mulia.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Jalan Nirwana",
        artist: "Candani",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Candani%20-%20Jalan%20Nirwana.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Cinta Kasih Buddha",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Cinta%20Kasih%20Buddha.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Dalam Dhammamu",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Dalam%20Dhamma%20Mu.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Dengarlah",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Dengarlah.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Dhamma Sang Buddha",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Dhamma%20Sang%20Buddha.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Faithfull",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Faithfull.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Hari Kathina",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Hari%20kathina.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Harumnya Kebajikan",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Harumnya%20Kebajikan.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Hidup Bahagia",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Hidup%20Bahagia.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Hidup yang benar",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Hidup%20Yang%20Benar.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Hiduplah sesuai ajarannya",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Hiduplah%20Sesuai%20Ajarannya.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "I love you Buddha",
        artist: "LSR",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/I%20Love%20You%20Buddha%20-%20Light%20Simple%20Rhythm%20(LSR).mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Tentang Kita",
        artist: "LSR",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Light%20Simple%20Rhythm%20-%20Tentang%20Kita.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Andaikan",
        artist: "Ida Laksmi",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Ida%20Laksmi%20-%20Andaikan.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Dhammacaka Pavatana Sutta",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Dhammacakka%20Pavatana%20Sutta.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Hanyalah Padamu",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/HANYALAH%20PADAMU.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Kasih Buddha",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Kasih%20Buddha.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Mahakarunikonato",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Mahakarunikonato.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Malam Suci Waisak",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/malam%20suci%20waisak.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Mari Memujanya Kepadanya",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/MARI%20MEMUJA%20PADANYA.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Sang Guru",
        artist: "Meici Widjaja",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Meicie%20Widjaja%20-%20Sang%20Guru.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Kasih Dunia",
        artist: "Olivia Yunita",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Olivia%20Yunita%20-%20Kasih%20Dunia.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Lentera Dunia",
        artist: "Olivia Yunita",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Olivia%20Yunita%20-%20Lentera%20Dunia.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Sambutlah Kelahirannya",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Sambutlah%20Kelahirannya.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Sang Bhagava I",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Sang%20Bhagava%20I.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Sang Bhagava III",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Sang%20BhagavaII.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Sangha",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Sangha.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Sehelai Kertas Untukmu",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Sehelai%20Kertas%20Untukmu.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Selamat Berpisah",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Selamat%20Berpisah.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Selamat Jalan",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Selamat%20Jalan.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Selamat Ulang Tahun",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Selamat%20Ulang%20Tahun.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Tathagata",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Tathagata.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Trimalah Karmamu",
        artist: "Various Artist",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/Trimalah%20Karmamu.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Buddha yang teragung",
        artist: "Mahadighasvara",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/MAHADHIGASVARA%20-%20BUDDHA%20YANG%20TERAGUNG.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
    {
        title: "Hidup adalah perjuangan",
        artist: "Mahadighasvara",
        src: "https://raw.githubusercontent.com/MrSukses89/Buddhis_Song/main/MAHADHIGASVARA%20-%20HIDUP%20ADALAH%20PERJUANGAN.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },


    { 
        title: "Whataya Want From Me", 
        artist: "Adam Lambert", 
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/what_from_me.mp3", 
        cover: "linear-gradient(135deg, #feb47b, #ff7e5f)"
    }, 
    { 
        title: "Hall of Fame", 
        artist: "The Script ft. will.i.am", 
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/hall%20of%20fame.mp3", 
        cover: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {   
        title: "It's My Life",
        artist: "Bon Jovi",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/its_My_Life.mp3",
        cover: "linear-gradient(135deg, #43e97b, #38f9d7)"
    }, 
{   
        title: "Green Day - 21 Guns",
        artist: "Green Day",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Green%20Day_21%20Gun.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
    title: "Iris",
    artist: "Goo Goo Dolls",
    // Gunakan format RAW agar lancar jaya
    src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Iris.mp3",
    cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    }, 

{
        title: "Don't Cry",
        artist: "Guns N' Roses",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/dont%20cry%20gnr.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Bad Liar",
        artist: "Imagine Dragons",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/bad%20liar.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "In The End",
        artist: "Linkin Park",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/in%20the%20end.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
    title: "Young Dumb & Broke",
    artist: "Khalid",
    // Link sudah diperbaiki ke format RAW yang benar
    src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/young_dumb.mp3",
    cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Slow Dancing in the Burning Room",  
        artist: "John Mayer",
        // Pastikan file ini memang eksis di repo GitHub lo
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/slow_dacing.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Can We Kiss Forever?",
        artist: "Kina ft. Adriana Proenza",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/can_we_kiss.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Poker Face",
        artist: "Lady Gaga",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/poker_face.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Rain On Me",
        artist: "Lady Gaga & Ariana Grande",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/rain_on_me.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Numb",
        artist: "Linkin Park",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/numb.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Perfect",
        artist: "Simple Plan",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Perfect_simpel.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Surender",
        artist: "Natalie Taylor",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/surender.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Something Like This",
        artist: "The Chainsmokers & Coldplay",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/something%20like%20this.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Akatsuki No Ito",
        artist: "Wakaki",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/akatsuki%20no%20ito.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "What I've Done",
        artist: "Linkin Park",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/what%20ive%20done.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Where You Will Go",
        artist: "OneRepublic",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/where%20you%20will%20go.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Avenged Sevenfold - Hail To The King 01",
        artist: "Avenged Sevenfold",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/avenged%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Avenged Sevenfold - Hail To The King 02",
        artist: "Avenged Sevenfold",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/avenged%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Avenged Sevenfold - Hail To The King 03",
        artist: "Avenged Sevenfold",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/avenged%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Avenged Sevenfold - Hail To The King 04",
        artist: "Avenged Sevenfold",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/avenged%2004.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "barat - 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/barat%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "barat - 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/barat%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "barat - 03",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/barat%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "ghibli - 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ghibli%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "ghibli - 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/gibli%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },

{
        title: "river flow rock",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/River%20Flow%20Rock.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "rock - 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/rock%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "rock - 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/rock%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "rock - 03",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/rock%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Getcha",
        artist: "Sania Twain",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/sania_twain_getcha.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic - 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic - 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic - 03",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic - 04",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2004.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic - 05",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2005.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic - 06",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2006.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Clasic - 07",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2007.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"

    },
{
        title: "Clasic - 08",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/clasic%2008.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "yiruma - 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/yiruma%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "yiruma - 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/yiruma%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Padi - 01",
        artist: "Padi",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/padi%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Padi - 02",
        artist: "Padi",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/padi%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Padi - 03",
        artist: "Padi",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/padi%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },

{
        title: "Viera - 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/viera%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Viera - 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/viera%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Didi Kempot - 01",
        artist: "Didi Kempot",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/didi%20kempot%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Didi Kempot - 02",
        artist: "Didi Kempot",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/didi%20kempot%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Didi Kempot - 03",
        artist: "Didi Kempot",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/didi%20kempot%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Daughtry",
        artist: "Daughtry",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Daughtry.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Scorpion - 01",
        artist: "Scorpion",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Sorpion%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Scorpion 02",
        artist: "Scorpion",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Sorpion%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Scorpion - 03",
        artist: "Scorpion",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Sorpion%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Andmesh - 01",
        artist: "Andmesh",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/andmesh%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Andmesh - 02",
        artist: "Andmesh",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/andmesh%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Ungu - 01",
        artist: "Ungu",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ungu%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Ungu - 02",
        artist: "Ungu",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ungu%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Ungu - 03",
        artist: "Ungu",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ungu%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Noah - 01",
        artist: "Noah",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/noah%20001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },

{
        title: "Noah - 02",
        artist: "Noah",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/noah%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"

        
    },
{
        title: "Noah - 03",
        artist: "Noah",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/noah%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Noah - 04",
        artist: "Noah",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/noah%2004.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Noah - 05",
        artist: "Noah",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/noah%2005.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Noah - 06",
        artist: "Noah",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/noah%2006.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Sheila On 7 - 01",
        artist: "Sheila On 7",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/sheila%20on%207.%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Sheila On 7 - 02",
        artist: "Sheila On 7",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/sheila%20on%207.%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Sheila On 7 - 03",
        artist: "Sheila On 7",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/sheila%20on%207.%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Sheila On 7 - 04",
        artist: "Sheila On 7",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/sheila%20on%207.%2004.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },

{
        title: "Naff - 01",
        artist: "Naff",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/naff%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Naff - 02",
        artist: "Naff",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/naff%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Naff - 03",
        artist: "Naff",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/naff%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Geisha - 01",
        artist: "Geisha",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/geisya%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Geisha - 02",
        artist: "Geisha",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/geisya%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Adele - 01",
        artist: "Adele",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/adele%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Adele - 02",
        artist: "Adele",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/adele%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Adele - 03",
        artist: "Adele",
        // Link sudah diperbaiki ke format RAW yang benar   
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/adele%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Ed Sheeran - 01",
        artist: "Ed Sheeran",
        // Link sudah diperbaiki ke format RAW yang benar
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ed%20sheeran%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Ed Sheeran - 02",
        artist: "Ed Sheeran",
        // Link sudah diperbaiki ke format RAW yang benar
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ed%20sheeran%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Ed Sheeran - 03",
        artist: "Ed Sheeran",
        // Link sudah diperbaiki ke format RAW yang benar
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/ed%20sheeran%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Dewa 19 - 01",
        artist: "Dewa 19",
        // Link sudah diperbaiki ke format RAW yang benar
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/dewa%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Dewa 19 - 02",
        artist: "Dewa 19",
        // Link sudah diperbaiki ke format RAW yang benar   
            src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/dewa%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Dewa 03",
        artist: "Dewa 19",
        // Link sudah diperbaiki ke format RAW yang benar   
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/dewa%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Tiara Andini - 01",
        artist: "Tiara Andini",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/tiara%20andini%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Tiara Andini -02",
        artist: "Tiara Andini",
        // Link sudah diperbaiki ke format RAW yang benar   
            src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/tiara%20andini%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Radja -01",
        artist: "Radja",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/radja%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Radja -02",
        artist: "Radja",
        // Link sudah diperbaiki ke format RAW yang benar   
            src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/radja%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Radja - 03",
        artist: "Radja",
        // Link sudah diperbaiki ke format RAW yang benar   
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/radja%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Indo 2026 - 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/indo%202026.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Indo 2026 - 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/indo%202026%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },

  
{
        title: "Indo 2026 - 03",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/indo%202026%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Lagu Cafe - 01",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/lagu%20cafe%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
   },
{
        title: "Lagu Cafe - 02",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/lagu%20cafe%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Lagu Cafe - 03",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/lagu%20cafe%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    }, 
{
        title: "Lagu Cafe - 04",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/lagu%20cafe%2004.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Lagu Cafe - 05",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/lagu%20cafe%2005.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Lagu Cafe - 06",
        artist: "Various Artists",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/lagu%20cafe%2006.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Bon Jovi - 01",
        artist: "Bon Jovi",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/bon%20jovi%2001.mp3", 
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Bon Jovi - 02",
        artist: "Bon Jovi",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/bon%20jovi%2002.mp3", 
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{   
        title: "Bon Jovi - 03",
        artist: "Bon Jovi",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/bon%20jovi%2003.mp3", 
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Bon Jovi - 04",
        artist: "Bon Jovi",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/bon%20jovi%2004.mp3", 
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Jamrud - 01",
        artist: "Jamrud",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/jamrud%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
   },
{
        title: "Jamrud - 02",
        artist: "Jamrud",
        // Link sudah diperbaiki ke format RAW yang benar       
            src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/jamrud%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{

        title: "Last Child - 01",
        artist: "Last Child",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/last%20child%2001mp3.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
   },
{
        title: "Last Child - 02",
        artist: "Last Child",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/last%20child%2002mp3.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"  
    },
{
        title: "Boomerang - 01",
        artist: "Boomerang",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/boomerang%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Boomerang - 02",
        artist: "Boomerang",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/boomerang%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Kangen Band - 01",
        artist: "Kangen Band",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/kangen%20band%2001.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Kangen Band - 02",
        artist: "Kangen Band",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/kangen%20band%2002.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Kangen Band - 03",
        artist: "Kangen Band",
        // Link sudah diperbaiki ke format RAW yang benar   
         src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/kangen%20band%2003.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },

    
];


// --- 2. SETUP AUDIO ---
let trackIndex = 0;
let isPlaying = false;
let audio = new Audio();
audio.crossOrigin = "anonymous"; 

// --- 3. FUNGSI LOAD LAGU ---
function loadTrack(index) {
    if (!songList[index]) return; 
    
    audio.src = songList[index].src;
    audio.load();
    
    // Update UI Player
    document.getElementById("song-title").innerText = songList[index].title;
    document.getElementById("artist-name").innerText = songList[index].artist;
    document.querySelector(".album-art").style.background = songList[index].cover;
    
    // Refresh Playlist agar tanda 'active' pindah
    renderPlaylist(document.getElementById('songSearch').value);
}

// --- 4. RENDER DAFTAR LAGU (PLAYLIST) + FITUR SEARCH ---
function renderPlaylist(filterQuery = "") {
    const playlistEl = document.getElementById("playlist");
    if (!playlistEl) return;

    playlistEl.innerHTML = ""; // Kosongkan list

    songList.forEach((song, index) => {
        // Cek apakah judul/artis cocok dengan pencarian
        const isMatch = song.title.toLowerCase().includes(filterQuery.toLowerCase()) || 
                        song.artist.toLowerCase().includes(filterQuery.toLowerCase());
        
        if (isMatch) {
            const li = document.createElement("li");
            li.className = `playlist-item ${index === trackIndex ? 'active' : ''}`;
            
            li.innerHTML = `
                <div style="display:flex; flex-direction:column;">
                    <span class="song-name">${song.title}</span>
                    <span style="font-size:10px; opacity:0.6;">${song.artist}</span>
                </div>
                ${index === trackIndex ? '<span style="font-size:12px;">🎵</span>' : ''}
            `;

            li.onclick = () => {
                trackIndex = index;
                loadTrack(trackIndex);
                playMusic(true); // Paksa putar
            };
            playlistEl.appendChild(li);
        }
    });
}

// --- 5. KONTROL UTAMA ---
function playMusic(forcePlay = false) {
    const playBtn = document.getElementById("play-btn");
    const wave = document.getElementById("wave-container");
    
    if (forcePlay) isPlaying = false; // Reset state jika dipaksa play dari list

    if (!isPlaying) {
        audio.play().then(() => {
            isPlaying = true;
            playBtn.innerText = "⏸";
            if(wave) wave.style.display = "flex";
        }).catch(e => console.error("Error playing audio:", e));
    } else {
        audio.pause();
        isPlaying = false;
        playBtn.innerText = "▶";
        if(wave) wave.style.display = "none";
    }
}

function nextSong() {
    trackIndex = (trackIndex + 1) % songList.length;
    loadTrack(trackIndex);
    if (isPlaying) audio.play();
}

function prevSong() {
    trackIndex = (trackIndex - 1 + songList.length) % songList.length;
    loadTrack(trackIndex);
    if (isPlaying) audio.play();
}

// --- 6. PROGRESS BAR & TIME ---
audio.addEventListener("timeupdate", () => {
    const progress = document.getElementById("progress");
    const currTime = document.getElementById("current-time");
    const durTime = document.getElementById("duration-time");

    if (audio.duration) {
        const pc = (audio.currentTime / audio.duration) * 100;
        progress.style.width = pc + "%";

        // Format Waktu
        const curM = Math.floor(audio.currentTime / 60);
        const curS = Math.floor(audio.currentTime % 60);
        const durM = Math.floor(audio.duration / 60);
        const durS = Math.floor(audio.duration % 60);
        
        currTime.innerText = `${curM}:${curS < 10 ? '0'+curS : curS}`;
        durTime.innerText = `${durM}:${durS < 10 ? '0'+durS : durS}`;
    }
});

// Klik pada progress bar untuk skip
function seekAudio(e) {
    const container = document.querySelector(".progress-container");
    const rect = container.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pos * audio.duration;
}

// --- 7. TOGGLE UI (BUKA/TUTUP) ---
function toggleMusic() {
    const card = document.getElementById("music-card");
    card.style.display = (card.style.display === "block") ? "none" : "block";
}

function togglePlaylist() {
    const card = document.getElementById("music-card");
    const side = document.getElementById("side-playlist");
    card.classList.toggle("list-open");
    side.style.display = card.classList.contains("list-open") ? "block" : "none";
}

// --- 8. SEARCH EVENT ---
document.getElementById('songSearch').addEventListener('input', (e) => {
    renderPlaylist(e.target.value);
});

// Jalankan saat pertama kali load
window.onload = () => {
    loadTrack(trackIndex);
};

// Auto next kalau lagu habis
audio.onended = nextSong;

// Listener untuk input pencarian
const searchInput = document.getElementById('songSearch');

if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const keyword = e.target.value;
        renderPlaylist(keyword); // Memanggil fungsi render yang sudah saya buat sebelumnya
    });
}s


// Pastikan variabel audio kamu sudah terdefinisi secara global
// Jika belum ada, pastikan baris ini ada: const audio = new Audio();

function changeVolume(val) {
    audio.volume = val;
    const volIcon = document.getElementById('vol-icon');
    
    // Ubah ikon berdasarkan level volume
    if (val == 0) {
        volIcon.innerText = "🔇";
    } else if (val < 0.5) {
        volIcon.innerText = "🔉";
    } else {
        volIcon.innerText = "🔊";
    }
}

// Fungsi mute klik ikon
function toggleMute() {
    const volSlider = document.getElementById('volume-slider');
    if (audio.volume > 0) {
        audio.oldVolume = audio.volume; // Simpan volume terakhir
        audio.volume = 0;
        volSlider.value = 0;
    } else {
        audio.volume = audio.oldVolume || 1;
        volSlider.value = audio.volume;
    }
    changeVolume(audio.volume);
}