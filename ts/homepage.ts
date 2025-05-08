import { showNotification } from "./utils";
document.querySelector("body")!.innerHTML = `
<!-- Breadcrumb -->
<header>
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active"><span class="ms-1 small fw-medium text-muted md:ms-2">Home</span></li>
    <li class="breadcrumb-item"><a href="./any-random.html" class="ms-1 small fw-medium text-secondary text-decoration-none hover:text-primary md:ms-2">Any random</a></li>
    <li class="breadcrumb-item" aria-current="page"> <a href="./find-and-choose-number.html" class="ms-1 small fw-medium text-secondary text-decoration-none hover:text-primary md:ms-2">Find & choose number</a></li>
  </ol>
</nav>
</header>
<main>
        <section id="numberPanel">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-12">
                        <div class="number-content"></div>
                    </div>
                    <div class="col-12 col-sm-8 col-md-7 col-lg-6 col-xl-5">
                        <div class="control-panel my-5">
                            <div class="col-12">
                                <div class="frmCheckPanel">
                                    <div class="form-check form-check-inline mb-3">
                                        <input class="form-check-input" type="radio" name="radioRandom" id="radioMega"
                                            value="mega" />
                                        <label class="form-check-label" for="">Mega</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="radioRandom" id="radioPower"
                                            value="power" />
                                        <label class="form-check-label" for="">Power</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <button id="btnGen" class="btn btn-dark me-2">Lấy số</button>
                                <button id="btnSort" class="btn btn-info me-2">Sắp xếp</button>
                                <button id="btnClean" class="btn btn-light me-2">Làm lại</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer-container bg-black py-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12 text-center">
                    <p class="text-white">Copyright Bối Thạnh @2025</p>
                </div>
            </div>
        </div>
    </footer>`;

let arrMega = Array.from({ length: 45 }).map((_, i) => i + 1);
let arrPower = Array.from({ length: 55 }).map((_, i) => i + 1);
let arrChoose: number[] = []
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
function randomMega(arr = arrMega) {
    if (soLan >= 6) return;
    let num = randomNoDuplicate();

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

function randomPower(arr = arrPower) {
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
    soLan = 0;
    radios.forEach((radio) => {
        radio.checked = false
    })
    selected = null;
    currentOption = null;
};