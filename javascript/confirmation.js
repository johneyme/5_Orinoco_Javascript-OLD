
if(localStorage.length === 0){
    location.replace("paniervide.html")
}

const urlInfo = window.location.search.substr(1).split('&');
const orderId = urlInfo[0].replace('id=', '');
const total = urlInfo[1].replace('price=', '');
const pseudo = urlInfo[2].replace('user=', '');

const pseudoHtml = document.getElementById('pseudo');
const orderHtml = document.getElementById('numcommande');
const prixHtml = document.getElementById('prix');

pseudoHtml.textContent = pseudo;
orderHtml.textContent = orderId;
prixHtml.textContent = total;

localStorage.clear();