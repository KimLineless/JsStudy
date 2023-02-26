let products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' },
];

let card = document.querySelectorAll('.card');
let tit = document.querySelectorAll('.title');
let pri = document.querySelectorAll('.price');

for (let i = 0; i < card.length; i++) {
  tit[i].innerHTML = products[i].title;
  pri[i].innerHTML = '가격 : ' + products[i].price;
}
