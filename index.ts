let arrMega = Array.from({ length: 45 }).map((_, i) => i + 1);
let arrChoose: number[] = []
let theP = '';
let resultPanel = document.querySelector(".number-content") as HTMLElement;
let soLan: number = 0;

function renderP(number: number) {
    return `<p class="animate__animated animate__fadeInRight pulse ${colorCheck(number)}">${number}</p>`
}

function randomNoDuplicate() {
    let num;
    do {
        num = Math.floor(Math.random() * 45) + 1;
    } while (arrChoose.includes(num))
    return num;
}

function randomDefault() {
    let num = Math.floor(Math.random() * 45) + 1;
    return num;
}

function colorCheck(number: number) {
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
        case (number >= 40 && number <= 45): {
            return 'bg-light';
        }
        default: {
            return 'bg-info'
        }
    }
}
function sapXep(arr: number[] = [...arrChoose]) {
    return arr.sort((a: number, b: number): number => a - b);
}
function timSoDauTien(arr = [...arrMega], num?: number) {

    if (arr.length == 0 || soLan >= 6) return;
    num = arrChoose.length > 0 ? randomNoDuplicate() : randomDefault();
    resultPanel.innerHTML += renderP(num);
    let index = arr.findIndex((item, index) => {
        return item === num;
    })

    if (index != -1) {
        arrChoose.push(arrMega[index]);
        arrMega.splice(index, 1);
        // console.log([...arrMega]);
        soLan += 1;
    }
    else {
        timSoDauTien([...arrMega])
    }
}
const btn = document.getElementById("btnGen") as HTMLButtonElement
btn.onclick = function () {
    timSoDauTien();
}
const btnSort = document.getElementById("btnSort") as HTMLButtonElement
btnSort.onclick = function () {
    let arrSorted = sapXep();
    // console.log(arrSorted);
    let string = "";
    for (let item of arrSorted) {
        string += renderP(item)
    }
    resultPanel.innerHTML = string;
}
const btnClean = document.getElementById("btnClean") as HTMLButtonElement;
btnClean.onclick = function () {
    resultPanel.replaceChildren();
    arrChoose = [];
    soLan = 0;
};







