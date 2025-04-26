"use strict";
const btnAccept = document.getElementById('btnAccept');
const btnDecline = document.getElementById('btnDecline');
const btnClose = document.getElementById('btnClose');
const btnXaoTron = document.getElementById('btnXaoTron');
const frmRandom = document.getElementById("frmRandom");
const tagP = document.getElementById("modalContent");
const btnTang = document.getElementById("btnTang");
const btnGiam = document.getElementById("btnGiam");
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
            let textAria = document.getElementById("message");
            let values = textAria.value;
            return values;
        }
        function convertData(str) {
            let regex = /[\s.,]+/;
            let convertStr = str.trim().split(regex);
            return convertStr;
        }
        function randomArray(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }
        function shuttfleArr(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * arr.length);
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }
        function sortIncrease(arr) {
            return arr.sort((a, b) => a - b);
        }
        function sortDescrease(arr) {
            return arr.sort((a, b) => b - a);
        }
        frmRandom.onsubmit = function (e) {
            e.preventDefault();
            // let value = e.target.value;
            let target = e.target; // Ép kiểu
            let textAria = target.querySelector("textarea[id='message']");
            let values = textAria.value;
            if (values) {
                let data = convertData(values);
                let result = randomArray(data);
                tagP.innerHTML = result;
                modal.show();
            }
            else {
                alert("Bạn chưa nhập gì nha người đẹp");
            }
        };
        btnAccept.onclick = () => {
            let textAria = document.getElementById("message");
            textAria.value = "";
            modal.hide();
        };
        btnDecline.onclick = () => {
            modal.hide();
        };
        btnClose.onclick = () => {
            modal.hide();
        };
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
        };
        btnTang.addEventListener('click', function () {
            let data = getValue();
            if (data) {
                let dataConverted = sortIncrease(convertData(data)).join("\n").trim();
                tagP.innerHTML = dataConverted;
                modal.show();
            }
            else {
                alert("Chưa có gì nên chưa sắp xếp nha");
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
                alert("Chưa có gì nên chưa sắp xếp nha");
            }
        });
    }
});
