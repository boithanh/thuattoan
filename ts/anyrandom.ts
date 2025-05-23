import { anyRandom } from "./layout";
document.querySelector("body")!.innerHTML = anyRandom
document.getElementById("btnHighLow")?.style.setProperty("display", "none");
const userSelected = document.getElementById("numbers") as HTMLInputElement;
if (userSelected) {
    userSelected.addEventListener("change", function () {
        if (userSelected.value === "655" || userSelected.value === "645") {
            document.getElementById("btnHighLow")?.style.setProperty("display", "inline-block");
        }
    })
}
const btnAccept = document.getElementById('btnAccept') as HTMLElement;
const btnDecline = document.getElementById('btnDecline') as HTMLElement;
const btnClose = document.getElementById('btnClose') as HTMLElement;
const btnXaoTron = document.getElementById('btnXaoTron') as HTMLElement;
const frmRandom = document.getElementById("frmRandom") as HTMLFormElement;
const tagP = document.getElementById("modalContent") as HTMLElement;
const btnTang = document.getElementById("btnTang") as HTMLElement;
const btnGiam = document.getElementById("btnGiam") as HTMLElement;
declare var Modal: any;
import { showNotification } from "./utils";
const options = {
    placement: 'center',
    backdrop: 'dynamic',
    backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
    closable: true,
    // onHide: () => {
    //     console.log('modal is hidden');
    // },
    // onShow: () => {
    //     console.log('modal is shown');
    // },
    // onToggle: () => {
    //     console.log('modal has been toggled');
    // }
};

document.addEventListener("DOMContentLoaded", () => {
    const modalEl = document.getElementById('default-modal');
    if (modalEl && Modal) {
        const modal = new Modal(modalEl, options);

        function getValue() {
            let textAria = document.getElementById("message") as HTMLInputElement;
            let values = textAria.value;
            return values;
        }

        function convertData(str: string) {
            let regex = /[\s.,]+/;
            let convertStr = str.trim().split(regex)
            return convertStr
        }

        function randomArray(arr: any[]) {
            return arr[Math.floor(Math.random() * arr.length)]
        }

        function shuttfleArr(arr: any[]) {
            for (let i = arr.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * arr.length);
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }
        function sortIncrease(arr: any[]) {
            return arr.sort((a: number, b: number) => a - b)
        }

        function sortDescrease(arr: any[]) {
            return arr.sort((a: number, b: number) => b - a)
        }

        frmRandom.onsubmit = function (e: SubmitEvent) {
            e.preventDefault();
            // let value = e.target.value;
            let target = e.target as HTMLFormElement; // Ép kiểu
            let textAria = target.querySelector("textarea[id='message']") as HTMLInputElement;
            let values = textAria.value;
            if (values) {
                let data = convertData(values);
                let result = randomArray(data);
                tagP.innerHTML = result;
                modal.show();
            }
            else {
                showNotification("Bạn chưa nhập gì nha người đẹp")
            }
        }
        btnAccept.onclick = () => {
            let textAria = document.getElementById("message") as HTMLInputElement;
            textAria.value = "";
            modal.hide();
        }
        btnDecline.onclick = () => {
            modal.hide();
        }
        btnClose.onclick = () => {
            modal.hide();
        }
        btnXaoTron.onclick = () => {
            let data = getValue();
            if (data) {
                let str = "";
                let dataConverted = convertData(data);
                let result = shuttfleArr(dataConverted).join("\n");
                tagP.innerHTML = result;
                modal.show();
            }
            else {
                showNotification("Chưa nhập mà đã muốn trộn rồi seo @o@")
            }
        }
        btnTang.addEventListener('click', function () {
            let data = getValue();
            if (data) {
                let dataConverted = sortIncrease(convertData(data)).join("\n").trim();
                tagP.innerHTML = dataConverted;
                modal.show();
            }
            else {
                showNotification("Chưa có gì nên chưa sắp xếp nha ní")
            }
        });
        btnGiam.addEventListener('click', function () {
            let data = getValue();
            if (data) {
                let dataConverted = sortDescrease(convertData(data)).join("\n").trim();
                tagP.innerHTML = dataConverted;
                modal.show();
            }
            else {
                showNotification("Chưa có gì nên chưa sắp xếp nha")
            }
        })
        document.getElementById("btnChanLe")?.addEventListener('click', function () {
            let data = getValue();
            if (data) {
                let dataConverted = convertData(data);
                // console.log(dataConverted);
                let even: string = "";
                let odd: string = "";
                let demChan = 0;
                let demLe = 0;
                for (let num of dataConverted) {
                    if (Number(num) % 2 === 0) {
                        even += " - ";
                        demChan++;
                    }
                    else {
                        odd += " + ";
                        demLe++;
                    }
                }
                // let even = dataConverted.filter((item: any) => item % 2 === 0).join("\n").trim();
                // let odd = dataConverted.filter((item: any) => item % 2 !== 0).join("\n").trim();
                tagP.innerHTML = dataConverted.join(" ").trim();
                tagP.innerHTML += "\n" + even + odd;
                tagP.innerHTML += "\n" + "Nhận xét: " + demChan + "(chẵn)" + " - " + demLe + "(lẻ)";
                modal.show();
            }
            else {
                showNotification("Bạn phải nhập trước khi xem template chẵn lẻ nha")
            }
        })


        document.getElementById("btnHighLow")?.addEventListener('click', function () {
            let data = getValue();
            if (data) {
                let dataConverted = convertData(data);
                let demCao = 0;
                let demThap = 0;
                if (userSelected?.value === "645") {
                    let high = dataConverted.filter((item: any) => {
                        if (Number(item) >= 23) {
                            demCao++;
                            return item;
                        }
                    }
                    ).join(" ").trim();
                    let low = dataConverted.filter((item: any) => {
                        if (Number(item) < 23) {
                            demThap++;
                            return item;
                        }
                    }).join(" ").trim();
                    tagP.innerHTML = "Các số cao:" + high + "\n" + "Các số thấp:" + low + "\n" + "Template: " + demCao + "(cao)" + "-" + demThap + "(thấp)";
                    modal.show();

                }
                else if (userSelected?.value === "655") {
                    let high = dataConverted.filter((item: any) => {
                        if (Number(item) >= 28) {
                            demCao++;
                            return item;
                        }
                    }
                    ).join(" ").trim();
                    let low = dataConverted.filter((item: any) => {
                        if (Number(item) < 28) {
                            demThap++;
                            return item;
                        }
                    }).join(" ").trim();
                    tagP.innerHTML = "Các số cao: " + high + "\n" + "Các số thấp: " + low + "\n" + "Template: " + demCao + "(cao)" + "-" + demThap + "(thấp)";
                    modal.show();
                }
            }
        })
    }
});

