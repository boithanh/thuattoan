import { home } from "./layout";
import { showNotification } from "./utils";
const body = document.querySelector("body") as HTMLBodyElement;
body.innerHTML = home;
const toggled = document.getElementById("toggle") as HTMLInputElement;
const arrMega: number[] = Array.from({ length: 45 }).map((_, i) => i + 1);
const arrPower: number[] = Array.from({ length: 55 }).map((_, i) => i + 1);
const arrLoto: number[] = Array.from({ length: 35 }).map((_, i) => i + 1);
let arrChoose: number[] = [];
let specialChoosed: number | null = null;
let newArrMega = [...arrMega];
let newArrPower = [...arrPower];
let newArrLoto = [...arrLoto];
let resultPanel = document.querySelector(".number-content") as HTMLElement;
let radios = document.querySelectorAll('input[name="radioRandom"]') as NodeListOf<HTMLInputElement>;
let soLan: number = 0;

toggled.onchange = () => {
    clean();
    if (toggled.checked) {
        document.documentElement.classList.add("dark");
        document.getElementById("toggleLabel")?.classList.add("text-white");
    } else {
        document.documentElement.classList.remove("dark");
        document.getElementById("toggleLabel")?.classList.remove("text-white");
    }

}


function renderBallDefault(number: number, kind?: string | null) {
    return kind === "mega" || kind === "power"
        ? `<p class="animate__animated animate__fadeInRight pulse ${colorCheckDefault(number)}">${number > 0 && number <= 9 ? '0' + number : number}</p>`
        : kind === "loto" ? `<p class="animate__animated animate__fadeInRight pulse bg-lime-400">${number > 0 && number <= 9 ? '0' + number : number}</p>`
            : `<span class="border-1 border-black inline-block min-[768px]:h-[100px] max-[430px]:h-[50px] absolute"></span><p class="animate__animated animate__fadeInRight pulse border-1 bg-red-800 text-white">${number > 0 && number <= 9 ? '0' + number : number}</p>`
}

function renderBallDarkMode(number: number, kind?: string | null) {
    const marbleCssClass = colorCheckDarkMode(number);
    const { marbleGlass, causticsGlass, shadowGlass } = marbleCssClass;
    return kind === "mega" || kind === "power"
        ? `<div class="marble pulse ${marbleGlass}">
        <div class="highlight"></div>
        <div class="caustics ${causticsGlass}"></div>
        <div class="shadow ${shadowGlass}"></div>
         <div class="flex! items-center justify-center h-full"> ${number > 0 && number <= 9 ? '0' + number : number} </div>
        </div>`
        : kind === "loto" ? `<div class="marble pulse">
         <div class="highlight"></div>
        <div class="caustics"></div>
        <div class="shadow shadow-white-glass"></div>
        <div class="flex! items-center justify-center h-full">${number > 0 && number <= 9 ? '0' + number : number}</div>
        </div>`
            : `<span class="border-1 border-black inline-block min-[768px]:h-[160px] max-[430px]:h-[100px] absolute"></span>
            <div class="marble black-glass pulse">
             <div class="highlight"></div>
        <div class="caustics"></div>
        <div class="shadow shadow-black-glass"></div>
           <div class="flex! items-center justify-center h-full"> ${number > 0 && number <= 9 ? '0' + number : number}</div>
            </div>`
}

function colorCheckDarkMode(number: number) {
    let marbleCssClass: Record<string, string> = {
        marbleGlass: "",
        causticsGlass: "",
        shadowGlass: ""
    };
    switch (true) {
        case (number >= 1 && number <= 9): {
            marbleCssClass = { ...marbleCssClass, marbleGlass: "red-glass", causticsGlass: "caustics-red-glass", shadowGlass: "shadow-red-glass" }
            return marbleCssClass;
        }
        case (number >= 10 && number <= 19): {
            marbleCssClass = { ...marbleCssClass, marbleGlass: "orange-glass", causticsGlass: "caustics-orange-glass", shadowGlass: "shadow-orange-glass" }
            return marbleCssClass;
        }
        case (number >= 20 && number <= 29): {
            marbleCssClass = { ...marbleCssClass, marbleGlass: "green-glass", causticsGlass: "caustics-green-glass", shadowGlass: "shadow-green-glass" }
            return marbleCssClass;
        }
        case (number >= 30 && number <= 39): {
            marbleCssClass = { ...marbleCssClass, marbleGlass: "blue-glass", causticsGlass: "caustics-blue-glass", shadowGlass: "shadow-blue-glass" }
            return marbleCssClass;
        }
        case (number >= 40 && number <= 49): {
            marbleCssClass = { ...marbleCssClass, marbleGlass: "purple-glass", causticsGlass: "caustics-purple-glass", shadowGlass: "shadow-purple-glass" }
            return marbleCssClass;
        }
        case (number >= 50 && number <= 55): {
            marbleCssClass = { ...marbleCssClass, marbleGlass: "yellow-glass", causticsGlass: "caustics-yellow-glass", shadowGlass: "shadow-yellow-glass" }
            return marbleCssClass;
        }
        default: {
            return marbleCssClass;
        }
    }
}

function colorCheckDefault(number: number) {
    switch (true) {
        case (number >= 1 && number <= 9): {
            return 'bg-red-500 text-white';
        }
        case (number >= 10 && number <= 19): {
            return 'bg-amber-500';
        }
        case (number >= 20 && number <= 29): {
            return 'bg-green-500 text-white';
        }
        case (number >= 30 && number <= 39): {
            return 'bg-sky-500 text-white';
        }
        case (number >= 40 && number <= 49): {
            return 'bg-violet-500 text-white';
        }
        case (number >= 50 && number <= 55): {
            return 'bg-yellow-500 text-white';
        }
        default: {
            return 'bg-black text-white'
        }
    }
}
function sapXep(arr: number[] = [...arrChoose]) {
    return arr.sort((a: number, b: number): number => a - b);
}



function generateMegaOrPower(arr: number[], kind?: string | null) {
    if (soLan >= 6) return;
    let num = Math.floor(Math.random() * arr.length);
    let index = arr.findIndex((item, i) => {
        return i === num;
    })
    if (index != -1) {
        if (toggled.checked) {
            resultPanel.innerHTML += renderBallDarkMode(arr[index], kind);
        } else {
            resultPanel.innerHTML += renderBallDefault(arr[index], kind);
        }
        arrChoose.push(arr[index]);
        arr.splice(index, 1);
        soLan += 1;
    }
}

function generateSpecial() {
    return Math.floor(Math.random() * 12) + 1;

}

function generateLoto(arrMain: number[], kind?: string | null) {
    if (soLan <= 4) {
        let num = Math.floor(Math.random() * arrMain.length);
        let index = arrMain.findIndex((item, i) => {
            return i === num
        });
        if (index != 1) {
            if (toggled.checked) {
                resultPanel.innerHTML += renderBallDarkMode(arrMain[index], kind)
            }
            else {
                resultPanel.innerHTML += renderBallDefault(arrMain[index], kind)
            }

            arrChoose.push(arrMain[index])
            arrMain.splice(index, 1);
            soLan += 1;
        }
    }
    else {
        specialChoosed = generateSpecial();
        if (toggled.checked) {
            resultPanel.innerHTML += renderBallDarkMode(specialChoosed!);

        }
        else {
            resultPanel.innerHTML += renderBallDefault(specialChoosed!);
        }
        soLan += 1
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
        generateMegaOrPower(newArrMega, selected);
        isValid = true;
    }
    else if (selected == "power") {
        generateMegaOrPower(newArrPower, selected)
        isValid = true;
    }
    else if (selected == "loto") {
        generateLoto(newArrLoto, selected);
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
    if (currentOption && selected !== currentOption) {
        showNotification(`Bạn đang ở chức năng ${currentOption} \n Vui lòng nhấn nút "làm lại" rồi thử lại ^^`, 3000, { background: "linear-gradient(to right, #f6d365, #fda085)", color: "black" });
        return;
    }
    let arrSorted = sapXep();
    let string = "";
    for (let item of arrSorted) {
        if (toggled.checked) {
            string += renderBallDarkMode(item, selected)

        }
        else {
            string += renderBallDefault(item, selected)
        }

    }
    if (string) {
        if (selected === "mega" || selected == "power") { resultPanel.innerHTML = string; }
        else {
            resultPanel.innerHTML = string;
            if (toggled.checked) {
                resultPanel.innerHTML += renderBallDarkMode(specialChoosed!);

            }
            else {
                resultPanel.innerHTML += renderBallDefault(specialChoosed!);
            }

        }
        showNotification("Sắp xếp suôn sẻ", 3000, { background: "linear-gradient(to right, #eea2a2, #bbc1bf, #57c6e1, #b49fda, #7ac5d8)", color: "white" })
    }
}

function clean() {
    resultPanel.replaceChildren();
    arrChoose = [];
    newArrMega = [...arrMega];
    newArrPower = [...arrPower];
    soLan = 0;
    radios.forEach((radio) => {
        radio.checked = false
    })
    selected = null;
    currentOption = null;
}
const btnClean = document.getElementById("btnClean") as HTMLButtonElement;
btnClean.onclick = () => {
    clean();
    showNotification("Clean xong, mời bạn nhấn 'Lấy số'", 1000, { background: "linear-gradient(to right, #fdfcfb, #e2d1c3)", color: "black" })
};


