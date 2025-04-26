"use strict";
let arrMega = Array.from({ length: 45 }).map((_, i) => i + 1);
let arrPower = Array.from({ length: 55 }).map((_, i) => i + 1);
let arrChoose = [];
let theP = '';
let resultPanel = document.querySelector(".number-content");
let radios = document.querySelectorAll('input[name="radioRandom"]');
let soLan = 0;
function renderP(number) {
    return `<p class="animate__animated animate__fadeInRight pulse ${colorCheck(number)}">${number > 0 && number <= 9 ? '0' + number : number}</p>`;
}
function randomNoDuplicate(loai = 45) {
    let num;
    do {
        num = Math.floor(Math.random() * loai) + 1;
    } while (arrChoose.includes(num));
    return num;
}
function colorCheck(number) {
    switch (true) {
        case (number >= 1 && number <= 9): {
            return 'bg-danger text-white';
        }
        case (number >= 10 && number <= 19): {
            return 'bg-warning';
        }
        case (number >= 20 && number <= 29): {
            return 'bg-success text-white';
        }
        case (number >= 30 && number <= 39): {
            return 'bg-primary text-white';
        }
        case (number >= 40 && number <= 49): {
            return 'bg-light';
        }
        case (number >= 50 && number <= 55): {
            return 'bg-black text-white';
        }
        default: {
            return 'bg-info';
        }
    }
}
function sapXep(arr = [...arrChoose]) {
    return arr.sort((a, b) => a - b);
}
function randomMega(arr = arrMega) {
    if (soLan >= 6)
        return;
    let num = randomNoDuplicate();
    let index = arr.findIndex((item, index) => {
        return item === num;
    });
    if (index != -1) {
        resultPanel.innerHTML += renderP(arr[index]);
        arrChoose.push(arr[index]);
        arr.splice(index, 1);
        soLan += 1;
    }
}
function randomPower(arr = arrPower) {
    if (soLan >= 6)
        return;
    let num = randomNoDuplicate(55);
    let index = arr.findIndex((item, index) => {
        return item === num;
    });
    if (index != -1) {
        resultPanel.innerHTML += renderP(arr[index]);
        arrChoose.push(arr[index]);
        arr.splice(index, 1);
        soLan += 1;
    }
}
const btn = document.getElementById("btnGen");
btn.onclick = function () {
    let isValid = false;
    radios.forEach(radio => {
        if (radio.checked && radio.value == "mega") {
            isValid = true;
            randomMega();
        }
        else if (radio.checked && radio.value == "power") {
            isValid = true;
            randomPower();
        }
    });
    if (!isValid) {
        alert("Chưa chọn loại gì nha bạn hiền");
    }
};
const btnSort = document.getElementById("btnSort");
btnSort.onclick = function () {
    if (arrChoose.length < 1) {
        alert("Chưa có gì khỏi sắp xếp nha ní");
    }
    let arrSorted = sapXep();
    let string = "";
    for (let item of arrSorted) {
        string += renderP(item);
    }
    resultPanel.innerHTML = string;
};
const btnClean = document.getElementById("btnClean");
btnClean.onclick = function () {
    let isValid = false;
    resultPanel.replaceChildren();
    radios.forEach(radio => {
        if (radio.checked && radio.value == "mega") {
            arrMega = Array.from({ length: 45 }).map((_, i) => i + 1);
            isValid = true;
        }
        else if (radio.checked && radio.value == "power") {
            arrPower = Array.from({ length: 55 }).map((_, i) => i + 1);
            isValid = true;
        }
    });
    if (!isValid)
        alert("Chưa có gì, làm lại mần chi ^^");
    arrChoose = [];
    soLan = 0;
};
