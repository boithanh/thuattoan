"use strict";
(() => {
  // ts/anyrandom.ts
  document.querySelector("body").innerHTML = `<main>
        <section class="any-random py-10">
            <div class="container mx-auto">
                <h1 class="mb-4 text-2xl font-extrabold text-gray-900 md:text-5xl lg:text-3xl text-center"><span
                        class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Nh\u1EADp
                        chu\u1ED7i </span>m\xE0 b\u1EA1n mu\u1ED1n random</h1>
                <form class="max-w-sm mx-auto" id="frmRandom">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        message</label>
                    <textarea id="message" rows="20"
                        class="block p-2.5 mb-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Leave a string which you want..." aria-valuetext=""></textarea>
                    <div class="text-center mx-auto">
                        <button type="submit"
                            class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-3 mt-5">Random!!!
                        </button>
                        <button id="btnXaoTron" type="button"
                            class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">X\xE1o
                            tr\u1ED9n</button>
                        <button type="button"
                            class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            id="btnTang">Sort
                            T\u0103ng d\u1EA7n</button>
                        <button type="button"
                            class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            id="btnGiam">Sort
                            gi\u1EA3m d\u1EA7n</button>
                    </div>
                </form>
            </div>

            <!-- Main modal -->
            <div id="default-modal" tabindex="-1"
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-2 w-full max-w-2xl max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                        <!-- Modal header -->
                        <div
                            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                S\u1ED1 ng\u1EABu nhi\xEAn
                            </h3>
                            <button id="btnClose" type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"><svg
                                    class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <!-- Modal body -->
                        <div class="p-4 md:p-5 space-y-4">
                            <pre id="modalContent" class="text-base leading-relaxed text-black dark:text-white">
                            </pre>
                        </div>
                        <!-- Modal footer -->
                        <div
                            class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button id="btnAccept" data-modal-hide="default-modal" type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset</button>
                            <button id="btnDecline" data-modal-hide="default-modal" type="button"
                                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">L\xE0m
                                l\u1EA1i</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    </main>`;
  var btnAccept = document.getElementById("btnAccept");
  var btnDecline = document.getElementById("btnDecline");
  var btnClose = document.getElementById("btnClose");
  var btnXaoTron = document.getElementById("btnXaoTron");
  var frmRandom = document.getElementById("frmRandom");
  var tagP = document.getElementById("modalContent");
  var btnTang = document.getElementById("btnTang");
  var btnGiam = document.getElementById("btnGiam");
  var options = {
    placement: "center",
    backdrop: "dynamic",
    backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
    closable: true
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
    const modalEl = document.getElementById("default-modal");
    if (modalEl && window.Modal) {
      let getValue2 = function() {
        let textAria = document.getElementById("message");
        let values = textAria.value;
        return values;
      }, convertData2 = function(str) {
        let regex = /[\s.,]+/;
        let convertStr = str.trim().split(regex);
        return convertStr;
      }, randomArray2 = function(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }, shuttfleArr2 = function(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * arr.length);
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      }, sortIncrease2 = function(arr) {
        return arr.sort((a, b) => a - b);
      }, sortDescrease2 = function(arr) {
        return arr.sort((a, b) => b - a);
      };
      var getValue = getValue2, convertData = convertData2, randomArray = randomArray2, shuttfleArr = shuttfleArr2, sortIncrease = sortIncrease2, sortDescrease = sortDescrease2;
      const modal = new window.Modal(modalEl, options);
      frmRandom.onsubmit = function(e) {
        e.preventDefault();
        let target = e.target;
        let textAria = target.querySelector("textarea[id='message']");
        let values = textAria.value;
        if (values) {
          let data = convertData2(values);
          let result = randomArray2(data);
          tagP.innerHTML = result;
          modal.show();
        } else {
          alert("B\u1EA1n ch\u01B0a nh\u1EADp g\xEC nha ng\u01B0\u1EDDi \u0111\u1EB9p");
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
        let data = getValue2();
        if (data) {
          let str = "";
          let dataConverted = convertData2(data);
          let result = shuttfleArr2(dataConverted).join("\n");
          tagP.innerHTML = result;
          modal.show();
        } else {
          alert("Ch\u01B0a nh\u1EADp m\xE0 \u0111\xE3 mu\u1ED1n tr\u1ED9n r\u1ED3i seo @o@");
        }
      };
      btnTang.addEventListener("click", function() {
        let data = getValue2();
        if (data) {
          let dataConverted = sortIncrease2(convertData2(data)).join("\n").trim();
          tagP.innerHTML = dataConverted;
          modal.show();
        } else {
          alert("Ch\u01B0a c\xF3 g\xEC n\xEAn ch\u01B0a s\u1EAFp x\u1EBFp nha");
        }
      });
      btnGiam.addEventListener("click", function() {
        let data = getValue2();
        if (data) {
          let dataConverted = sortDescrease2(convertData2(data)).join("\n").trim();
          tagP.innerHTML = dataConverted;
          modal.show();
        } else {
          alert("Ch\u01B0a c\xF3 g\xEC n\xEAn ch\u01B0a s\u1EAFp x\u1EBFp nha");
        }
      });
    }
  });
})();
