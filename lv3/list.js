// array, object 자료형

// let products = [
//   { id: 0, price: 70000, title: 'Blossom Dress' },
//   { id: 1, price: 50000, title: 'Springfield Shirt' },
//   { id: 2, price: 60000, title: 'Black Monastery' },
// ];

// let card = document.querySelectorAll('.card');
// let tit = document.querySelectorAll('.title');
// let pri = document.querySelectorAll('.price');

// for (let i = 0; i < card.length; i++) {
//   tit[i].innerHTML = products[i].title;
//   pri[i].innerHTML = '가격 : ' + products[i].price;
// }

// ajax 개념정리

// $.get('https://codingapple1.github.io/price.json')
//   .done(function (data) {
//     console.log(data.price);
//   })
//   .fail(function () {
//     console.log('404error');
//   });

//

// let products = [
//   { id: 0, price: 70000, title: 'Blossom Dress' },
//   { id: 1, price: 50000, title: 'Springfield Shirt' },
//   { id: 2, price: 60000, title: 'Black Monastery' },
// ];

// let row = document.querySelector('.row');

// products.forEach((a, i) => {
//   let txt = `<div class="col-sm-4">
// <img src="https://via.placeholder.com/600" class="w-100" />
// <h5> ${products[i].title}</h5>
// <p>가격 : ${products[i].price}</p>
// <button class="buy">구매</button>
// </div>`;
//   row.insertAdjacentHTML('beforeend', txt);
// });

// 버튼

let btn = document.querySelector('.more');

// btn.addEventListener('click', function () {
//   $.get('https://codingapple1.github.io/js/more1.json').done(function (data) {
//     data.forEach((a, i) => {
//       let txt = `<div class="col-sm-4">
//       <img src="https://via.placeholder.com/600" class="w-100" />
//       <h5> ${data[i].title}</h5>
//       <p>가격 : ${data[i].price}</p>
//       </div>`;
//       row.insertAdjacentHTML('beforeend', txt);
//     });
//   });
// });

// 응용예제

function more(data) {
  data.forEach((a, i) => {
    let txt = `<div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100" />
          <h5> ${data[i].title}</h5>
          <p>가격 : ${data[i].price}</p>
          <button class='buy'>구매</button>
          </div>`;
    row.insertAdjacentHTML('beforeend', txt);
  });
}

let cnt = 1;

btn.addEventListener('click', function (a, i) {
  console.log(cnt);
  if (cnt == 2) {
    btn.classList.add('form-hide');
  }
  if (cnt < 3) {
    $.get(`https://codingapple1.github.io/js/more${cnt}.json`).done(function (
      data
    ) {
      more(data);
      cnt++;
    });
  }
});

//  sort, map, filter 함수

let arr = [7, 3, 5, 2, 40];
let arr2 = ['a', 'c', 'b'];

// sort 정렬

// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr);

// arr2.sort(function (a, b) {
//   if (a > b) return -1;
//   else if (b > a) return 1;
//   else return 0;
// });
// console.log(arr2);

// filter 원하는것만 자를때 (ex 몇만원 미만 보기)

// let narr = arr.filter(function (a) {
//   return a < 4;
// });

// console.log(narr);

// map 자료 전부 변형 (ex 환율가격보기)

// let narr = arr.map(function (a) {
//   return a * 4;
// });

// console.log(narr);

// 가격 순 정렬

let sot = document.querySelector('.sor');

sot.addEventListener('click', function () {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  row.innerHTML = '';

  products.forEach((a, i) => {
    let txt = `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100" />
  <h5> ${products[i].title}</h5>
  <p>가격 : ${products[i].price}</p>
  <button class='buy'>구매</button>
  </div>`;
    row.insertAdjacentHTML('beforeend', txt);
  });
});

// 다나가순 정렬

let da = document.querySelector('.da');

da.addEventListener('click', function () {
  products.sort(function (a, b) {
    if (a.title > b.title) return -1;
    else if (b.title > a.title) return 1;
    else return 0;
  });
  row.innerHTML = '';

  products.forEach((a, i) => {
    let txt = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100" />
    <h5> ${products[i].title}</h5>
    <p>가격 : ${products[i].price}</p>
    <button class='buy'>구매</button>
    </div>`;
    row.insertAdjacentHTML('beforeend', txt);
  });
});

// 6만원 미만 상품

let six = document.querySelector('.six');

six.addEventListener('click', function () {
  let newpro = products.filter(function (a) {
    return a.price <= 60000;
  });
  row.innerHTML = '';

  newpro.forEach((a, i) => {
    let txt = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100" />
    <h5> ${newpro[i].title}</h5>
    <p>가격 : ${newpro[i].price}</p>
    <button class='buy'>구매</button>
    </div>`;
    row.insertAdjacentHTML('beforeend', txt);
  });
});

// 장바구니 기능과 localStorage

// localStorage.setItem('이름', 'kim');
// localStorage.getItem('이름');
// console.log(localStorage.getItem('이름'));
// let arr3 = [1, 2, 3];
// let newarr = JSON.stringify(arr3);

// localStorage.setItem('num2', newarr);
// let 꺼낸거 = localStorage.getItem('num2');

// console.log(JSON.parse(꺼낸거));

let products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' },
];

let row = document.querySelector('.row');

products.forEach((a, i) => {
  let txt = `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100" />
  <h5> ${products[i].title}</h5>
  <p>가격 : ${products[i].price}</p>
  <button class="buy">구매</button>
  </div>`;
  row.insertAdjacentHTML('beforeend', txt);
});

$('.buy').click(function (e) {
  let title = $(e.target).siblings('h5').text();

  if (localStorage.getItem('cart') != null) {
    let 꺼낸거 = JSON.parse(localStorage.cart);
    꺼낸거.push(title);
    localStorage.setItem('cart', JSON.stringify(꺼낸거));
  } else {
    localStorage.setItem('cart', JSON.stringify([title]));
  }
});
