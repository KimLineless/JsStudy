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
