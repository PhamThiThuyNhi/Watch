function chitietsp(x) {
    let parent = x.parentElement.parentElement.children;
    let img = x.src;
    let name = parent[1].children[0].children[0].innerText;
    let gia = parent[1].children[1].innerText;
    let sp = [img, name, gia];
    localStorage.setItem('sp', JSON.stringify(sp));
    window.location = '../html/ChiTietSanPham.html';
}

function loadchitietsp() {
    let sp = JSON.parse(localStorage.getItem('sp'));
    let hinh = '<img src="' + sp[0] + '" alt="" width="80%">';
    document.getElementById('hinh').innerHTML = hinh;
    document.getElementById('ten').innerHTML = sp[1];
    document.getElementById('gia').innerHTML = sp[2];
}

function addCart() {
    let sp = JSON.parse(localStorage.getItem('sp'));
    let sl = Number(document.getElementById('so').value);
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    let arrSP = [sp[0], sp[1], sl, sp[2]]
    let flag = false;
    for(let i = 0; i < cart.length; i++){
        if(sp[1] == cart[i][1]){
            cart[i][2] += sl
            flag = true;
        }        
    }
    if(!flag){
        cart.push(arrSP);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    let row = '';
    let total = 0;
    let thanhTien;
    for(let i = 0; i < cart.length; i++){
        thanhTien = Number(cart[i][2])* Number(cart[i][3])
         row += '<tr><td><img src = "'+cart[i][0]+'" width = "50px"></td><td>'+cart[i][1]+'</td><td>'+cart[i][2]+'</td><td>'+cart[i][3]+'</td></tr>';
        total+= thanhTien;
    }
    document.getElementById('cart').innerHTML = row;
    document.getElementById('total').innerHTML = total;

}

function cong() {
    let sl = Number(document.getElementById('so').value);
    sl++
    document.getElementById('so').value = sl;

}

function tru() {
    let sl = Number(document.getElementById('so').value);
    if (sl > 1) {
        sl--;
    }
    document.getElementById('so').value = sl;
}