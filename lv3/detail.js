let tab = document.querySelectorAll('.tab-button');
let con = document.querySelectorAll('.tab-content');

// 반복문
// for (let i = 0; i < tab.length; i++) {
//   tab[i].addEventListener('click', () => {
//     tabc(i);
//   });
// }

// 이벤트버블링 응용

document.querySelector('.list').addEventListener('click', (e) => {
  tabc(e.target.dataset.id);
});

function tabc(j) {
  tab[0].classList.remove('orange');
  tab[1].classList.remove('orange');
  tab[2].classList.remove('orange');
  tab[j].classList.add('orange');
  con[0].classList.remove('show');
  con[1].classList.remove('show');
  con[2].classList.remove('show');
  con[j].classList.add('show');
}

// Array 와 Object 자료형

let car = ['소나타', 50000, 'white'];
car[1] = 70000;
console.log(car[1]);
let car2 = { name: '아반떼', price: [50000, 3000, 4000], color: 'white' };
console.log(car2['price']);

document.querySelector('.carName').innerHTML = car2.name;
document.querySelector('.carPrice').innerHTML = car2.price[0];

// select 인풋 다루기

// document.querySelector('.form-select').addEventListener('input', () => {
//   if (document.querySelectorAll('.form-select')[0].value == '셔츠') {
//     document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
//     document.querySelectorAll('.form-select')[1].innerHTML = shirts;
//   } else if (document.querySelectorAll('.form-select')[0].value == '모자') {
//     document.querySelectorAll('.form-select')[1].classList.add('form-hide');
//   } else if (document.querySelectorAll('.form-select')[0].value == '바지') {
//     document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
//     document.querySelectorAll('.form-select')[1].innerHTML = pants;
//   }
// });

// Select 2 : 자바스크립트로 html 생성하는 법

// let tem = '<p>안녕</p>';
// document.querySelector('#test').insertAdjacentHTML('beforeend', tem);
// document.querySelector('#test').innerHTML = tem;

let pants = [28, 30, 32, 34];
let shirts = [95, 100, 105];
// Select 3 : forEach, for in 반복문
document.querySelector('.form-select').addEventListener('input', () => {
  if (document.querySelectorAll('.form-select')[0].value == '셔츠') {
    document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
    document.querySelectorAll('.form-select')[1].innerHTML = '';
    shirts.forEach((a) => {
      document
        .querySelectorAll('.form-select')[1]
        .insertAdjacentHTML('beforeend', `<option> ${a} </option>`);
    });
  } else if (document.querySelectorAll('.form-select')[0].value == '모자') {
    document.querySelectorAll('.form-select')[1].classList.add('form-hide');
  } else if (document.querySelectorAll('.form-select')[0].value == '바지') {
    document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
    document.querySelectorAll('.form-select')[1].innerHTML = '';
    pants.forEach((a) => {
      document
        .querySelectorAll('.form-select')[1]
        .insertAdjacentHTML('beforeend', `<option> ${a} </option>`);
    });
  }
});

let obj = { name: 'kim', age: 27 };

for (let key in obj) {
  console.log(obj[key]);
}

// array, for 반복문 향상 과제
// 1 이름찾기
let 출석부 = ['흥민', '영희', '철수', '재석'];

function 이름찾기(name) {
  for (let i = 0; i < 출석부.length; i++) {
    if (name == 출석부[i]) {
      console.log('있어요');
      return;
    }
  }
}

이름찾기('철수');

// 2 구구단

for (let j = 2; j < 10; j++) {
  for (let i = 1; i < 10; i++) {
    // console.log(j * i);
  }
}

// 평균점수 계산기
function score(t, k) {
  let plus = 0;

  for (let i = 0; i < t.length; i++) {
    plus = plus + t[i];
  }

  if (plus / t.length < k) {
    console.log(k - plus / t.length + '점이나 올랐네요');
  } else {
    console.log(plus / t.length - k + '점이나 떨어졌네요');
  }
}

score([20, 30, 40], 10);
