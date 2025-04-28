// Task 1 ============================================
/*  
Після натискання на кнопку b-1 функція присвоює блоку div-1 
ширину 200px, висоту 90px і вивидить значення в блок.  
*/

const btn1 = document.getElementById("b-1");
const div1 = document.getElementById("div-1");

if (btn1 && div1) {
  btn1.addEventListener("click", () => {
    div1.style.width = "200px";
    div1.style.height = "90px";
    div1.innerHTML = `width: ${div1.style.width}, height: ${div1.style.height}`;
  });
} else {
  console.error("Error: Elements for Task 1 not found");
}

// Task 2 ============================================
/*  
За натисканням на кнопку b-2 функція t2, яка надає блоку div-2 клас .bg-orange 
*/
const btn2 = document.getElementById("b-2");
const div2 = document.getElementById("div-2");

if (btn2 && div2) {
  btn2.addEventListener("click", () => {
    div2.classList.toggle("bg-orange");
  });
} else {
  console.error("Error: Elements for Task 2 not found");
}
// Task 3 ============================================
/*  
За натисканням b-3 запускайте функцію, яка перевіряє наявність класу .bg-orange у блоку div-3 (так, саме div-2 ). Результат – true або false, виводьте у out-3. 
*/

const btn3 = document.getElementById("b-3");
const div3 = document.getElementById("div-2");
const out3 = document.getElementById("out-3");
if (btn3 && div3) {
  btn3.addEventListener("click", () => {
    if (div3.classList.contains("bg-orange")) {
      out3.innerHTML = `true`;
    } else {
      out3.innerHTML = `false`;
    }
  });
} else {
  console.error("Error: Elements for Task 3 not found");
}

// Task 4 ============================================
/*  
За натискання кнопки b-4 запускайте функцію, яка надає блокам out-4 клас .bg-red. Зверніть увага, що даних блоків більше одного, отже потрібен цикл.
*/

const btn4 = document.getElementById("b-4");
const out4 = document.querySelectorAll(".out-4");

if (btn4) {
  btn4.addEventListener("click", () => {
    out4.forEach((i) => {
      i.classList.toggle("bg-red");
    });
  });
} else {
  console.error("Error: Elements for Task 4 not found");
}

// Task 5 ============================================
/*  
Ускладнимо попередні завдання. За допомогою циклу повісимо на блоки out-5 подію клік. По кліку має виконуватися функція. Функція повинна робити toggle клас .bg-orange тому out-5 на якому клікнули.
*/

const out5 = document.querySelectorAll(".out-5");

out5.forEach((i) => {
  i.addEventListener("click", () => {
    i.classList.toggle("bg-orange");
  });
});

// Task 6 ============================================
/*  
Створіть HTML-сторінку з можливістю введення числового значення через кнопки (більше, менше). Користувач не повинен мати можливість друкувати текст або цифри. Число змінюється лише при натисканні на кнопки. 
*/
const up = document.getElementById("btn-increment");
const down = document.getElementById("btn-decrement");
const n = document.getElementById("number");

up.addEventListener("click", () => {
  n.value = parseInt(n.value) + 1;
});

down.addEventListener("click", () => {
  n.value = parseInt(n.value) - 1;
});
// Task 7 ============================================
/*
  Створіть HTML-сторінку з кнопкою, натисканням на яку додаються кольорові блоки на сторінку (кольора рандомні). Блок має видалятися зі сторінки по кліку на сам блок. 
*/
const btnAdd = document.getElementById("btn-color");
const container = document.getElementById("block-color");
btnAdd.addEventListener("click", () => {
  const e = document.createElement("div");
  e.style.width = "100px";
  e.style.height = "100px";
  e.style.cursor = "pointer";
  e.style.backgroundColor = "red";
  e.addEventListener("click", () => {
    e.remove();
  });
  container.appendChild(e);
});
// Task 8 ============================================
/*
  Створіть HTML-сторінку з текстом і палітрою кольорів. Натискаючи на колір палітри, колір тексту має змінюватися на обраний. Для вказівки, якій клітинці відповідає той чи інший колір, можна скористатися атрибутом data-color у кожній клітинці, а потім, за допомогою JS, отримувати необхідний колір із цього атрибуту. 
*/
const palet = document.querySelectorAll(".color-palette__item");
const txt = document.querySelector(".text-color");

palet.forEach((i) => {
  i.addEventListener("click", () => {
    txt.style.color = i.getAttribute("data-color");
  });
});
