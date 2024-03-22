function hitung() {
    var bil1 = parseFloat(document.getElementById('bil1').value);
    var bil2 = parseFloat(document.getElementById('bil2').value);
    var operasi = document.getElementById('operasi').value;
    var hasil = 0;

    switch (operasi) {
        case 'tambah':
            hasil = bil1 + bil2;
            break;
        case 'kurang':
            hasil = bil1 - bil2;
            break;
        case 'kali':
            hasil = bil1 * bil2;
            break;
        case 'bagi':
            hasil = bil1 / bil2;
            break;
    }

    document.getElementById('hasil').value = hasil;
}