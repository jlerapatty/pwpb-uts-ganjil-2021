function luasTanah(lebar, panjang) {
    return panjang * lebar;
}

// Besar Pajak
function besarPajak(panjang,lebar) {
    const luas = luasTanah(panjang, lebar);
    if (luas >= 150) {
        return luas * 150000;
    } else {
        return luas * 100000;
    }
}

// Area tanam jagung
function areatanamJagung(lebar, panjang) {
    const luas = luasTanah(lebar, panjang);
    return luas / (2 * 2);
}

// Jumlah benih jagung
function jumlahBenihJagung(lebar, panjang) {
    const luas = luasTanah(lebar, panjang);
    const area = areatanamJagung(lebar, panjang);
    if (area == 2*2) {
        return 15;
    } else {
        return 10;
    }
}

console.log(luasTanah(20, 20));
console.log(besarPajak(20, 20));
console.log(areatanamJagung(2g0, 20));
console.log(jumlahBenihJagung(20,15));

