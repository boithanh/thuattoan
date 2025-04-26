
declare var Modal: any;
const btnAccept = document.getElementById('btnAccept') as HTMLElement;
const btnDecline = document.getElementById('btnDecline') as HTMLElement;
const btnClose = document.getElementById('btnClose') as HTMLElement;
const btnXaoTron = document.getElementById('btnXaoTron') as HTMLElement;
const frmRandom = document.getElementById("frmRandom") as HTMLFormElement;
const tagP = document.getElementById("modalContent") as HTMLElement;
const btnTang = document.getElementById("btnTang") as HTMLElement;
const btnGiam = document.getElementById("btnGiam") as HTMLElement;
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
    if (modalEl && window.Modal) {
        const modal = new window.Modal(modalEl, options);

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
                alert("Bạn chưa nhập gì nha người đẹp")
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
                alert("Chưa nhập mà đã muốn trộn rồi seo @o@");
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
                alert("Chưa có gì nên chưa sắp xếp nha")
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
                alert("Chưa có gì nên chưa sắp xếp nha")
            }

        })
    }
});