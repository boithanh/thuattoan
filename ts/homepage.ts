import { home } from "./layout";
import { showNotification } from "./utils";
document.querySelector("body")!.innerHTML = home;
const arrMega: number[] = Array.from({ length: 45 }).map((_, i) => i + 1);
const arrPower: number[] = Array.from({ length: 55 }).map((_, i) => i + 1);
let arrChoose: number[] = [];
let newArrMega = [...arrMega];
let newArrPower = [...arrPower];
let resultPanel = document.querySelector(".number-content") as HTMLElement;
let radios = document.querySelectorAll('input[name="radioRandom"]') as NodeListOf<HTMLInputElement>;
let soLan: number = 0;

function renderP(number: number) {
    return `<p class="animate__animated animate__fadeInRight pulse ${colorCheck(number)}">${number > 0 && number <= 9 ? '0' + number : number}</p>`
}

function randomNoDuplicate(loai: number = 45) {
    let num;
    do {
        num = Math.floor(Math.random() * loai) + 1;
    } while (arrChoose.includes(num))
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
        case (number >= 40 && number <= 49): {
            return 'bg-light';
        }
        case (number >= 50 && number <= 55): {
            return 'bg-black text-white';
        }
        default: {
            return 'bg-info'
        }
    }
}
function sapXep(arr: number[] = [...arrChoose]) {
    return arr.sort((a: number, b: number): number => a - b);
}

function randomMega(arr = newArrMega) {
    if (soLan >= 6) return;

    let num = Math.floor(Math.random() * arr.length);
    console.log(num);

    let index = arr.findIndex((item, index) => {
        return item === num;
    })
    if (index != -1) {
        resultPanel.innerHTML += renderP(arr[index]);
        arrChoose.push(arr[index]);
        arr.splice(index, 1);
        soLan += 1;
    }
}

function randomPower(arr = newArrPower) {
    if (soLan >= 6) return;
    let num = randomNoDuplicate(55);
    let index = arr.findIndex((item, index) => {
        return item === num;
    })
    if (index != -1) {
        resultPanel.innerHTML += renderP(arr[index]);
        arrChoose.push(arr[index]);
        arr.splice(index, 1);
        soLan += 1;
    }
}
let currentOption: any = null;
let selected: string | null = null;
radios.forEach(radio => {
    radio.onclick = function (event) {
        let temp = event.target as HTMLInputElement;
        selected = temp.value;
    }
})

const btn = document.getElementById("btnGen") as HTMLButtonElement
btn.onclick = function () {
    let isValid = false;
    if (currentOption && selected !== currentOption) {
        showNotification(`Bạn đang ở chức năng ${currentOption} \n Vui lòng nhấn nút "làm lại" rồi thử lại ^^`, 3000, { background: "linear-gradient(to right, #f6d365, #fda085)", color: "black" });
        return;
    }
    if (soLan >= 6) {
        showNotification("Đã chọn đủ số vui lòng reset lại", 3000, { background: "linear-gradient(to right, #30cfd0 , #330867)", color: "white" })
        return;
    }
    currentOption = selected;
    if (selected == "mega") {
        randomMega();
        isValid = true;
    }
    else if (selected == "power") {
        randomPower();
        isValid = true;
    }
    if (!isValid) {
        showNotification("Chưa chọn loại gì nha bạn hiền", 3000, { background: "linear-gradient(to right, #ff758c, #ff7eb3)", color: "white" })
    }
}

const btnSort = document.getElementById("btnSort") as HTMLButtonElement
btnSort.onclick = function () {
    if (arrChoose.length < 1) {
        showNotification("Chưa có gì khỏi sắp xếp nha ní", 3000, { background: "linear-gradient(to right, #667eea, #764ba2)", color: "white" })
    }
    let arrSorted = sapXep();
    let string = "";
    for (let item of arrSorted) {
        string += renderP(item)
    }
    if (string) {
        resultPanel.innerHTML = string;
        showNotification("Sắp xếp suôn sẻ", 3000, { background: "linear-gradient(to right, #eea2a2, #bbc1bf, #57c6e1, #b49fda, #7ac5d8)", color: "white" })
    }
}
const btnClean = document.getElementById("btnClean") as HTMLButtonElement;
btnClean.onclick = function () {
    resultPanel.replaceChildren();
    showNotification("Clean xong, mời bạn nhấn 'Lấy số'", 1000, { background: "linear-gradient(to right, #fdfcfb, #e2d1c3)", color: "black" })
    arrChoose = [];
    newArrMega = [...arrMega];
    newArrPower = [...arrPower];
    soLan = 0;
    radios.forEach((radio) => {
        radio.checked = false
    })
    selected = null;
    currentOption = null;
};