"use strict";
(() => {
  // ts/utils.ts
  function showNotification(text = "", duration = 3e3, style = { background: "linear-gradient(to right, #ff8177, #ff867a,#ff8c7f, #f99185, #cf556c, #b12a5b)", color: "white" }) {
    Toastify({
      text,
      duration,
      destination: "https://boithanh-dev.vercel.app/",
      newWindow: true,
      close: true,
      gravity: "top",
      // `top` or `bottom`
      position: "right",
      // `left`, `center` or `right`
      stopOnFocus: true,
      // Prevents dismissing of toast on hover
      style,
      onClick: function() {
      }
      // Callback after click
    }).showToast();
  }

  // ts/homepage.ts
  document.querySelector("body").innerHTML = `
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
                                <button id="btnGen" class="btn btn-dark me-2">L\u1EA5y s\u1ED1</button>
                                <button id="btnSort" class="btn btn-info me-2">S\u1EAFp x\u1EBFp</button>
                                <button id="btnClean" class="btn btn-light me-2">L\xE0m l\u1EA1i</button>
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
                    <p class="text-white">Copyright B\u1ED1i Th\u1EA1nh @2025</p>
                </div>
            </div>
        </div>
    </footer>`;
  var arrMega = Array.from({ length: 45 }).map((_, i) => i + 1);
  var arrPower = Array.from({ length: 55 }).map((_, i) => i + 1);
  var arrChoose = [];
  var resultPanel = document.querySelector(".number-content");
  var radios = document.querySelectorAll('input[name="radioRandom"]');
  var soLan = 0;
  function renderP(number) {
    return `<p class="animate__animated animate__fadeInRight pulse ${colorCheck(number)}">${number > 0 && number <= 9 ? "0" + number : number}</p>`;
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
        return "bg-danger text-white";
      }
      case (number >= 10 && number <= 19): {
        return "bg-warning";
      }
      case (number >= 20 && number <= 29): {
        return "bg-success text-white";
      }
      case (number >= 30 && number <= 39): {
        return "bg-primary text-white";
      }
      case (number >= 40 && number <= 49): {
        return "bg-light";
      }
      case (number >= 50 && number <= 55): {
        return "bg-black text-white";
      }
      default: {
        return "bg-info";
      }
    }
  }
  function sapXep(arr = [...arrChoose]) {
    return arr.sort((a, b) => a - b);
  }
  function randomMega(arr = arrMega) {
    if (soLan >= 6) return;
    let num = randomNoDuplicate();
    let index = arr.findIndex((item, index2) => {
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
    if (soLan >= 6) return;
    let num = randomNoDuplicate(55);
    let index = arr.findIndex((item, index2) => {
      return item === num;
    });
    if (index != -1) {
      resultPanel.innerHTML += renderP(arr[index]);
      arrChoose.push(arr[index]);
      arr.splice(index, 1);
      soLan += 1;
    }
  }
  var currentOption = null;
  var selected = null;
  radios.forEach((radio) => {
    radio.onclick = function(event) {
      let temp = event.target;
      selected = temp.value;
    };
  });
  var btn = document.getElementById("btnGen");
  btn.onclick = function() {
    let isValid = false;
    if (currentOption && selected !== currentOption) {
      showNotification(`B\u1EA1n \u0111ang \u1EDF ch\u1EE9c n\u0103ng ${currentOption} 
 Vui l\xF2ng nh\u1EA5n n\xFAt "l\xE0m l\u1EA1i" r\u1ED3i th\u1EED l\u1EA1i ^^`, 3e3, { background: "linear-gradient(to right, #f6d365, #fda085)", color: "black" });
      return;
    }
    if (soLan >= 6) {
      showNotification("\u0110\xE3 ch\u1ECDn \u0111\u1EE7 s\u1ED1 vui l\xF2ng reset l\u1EA1i", 3e3, { background: "linear-gradient(to right, #30cfd0 , #330867)", color: "white" });
      return;
    }
    currentOption = selected;
    if (selected == "mega") {
      randomMega();
      isValid = true;
    } else if (selected == "power") {
      randomPower();
      isValid = true;
    }
    if (!isValid) {
      showNotification("Ch\u01B0a ch\u1ECDn lo\u1EA1i g\xEC nha b\u1EA1n hi\u1EC1n", 3e3, { background: "linear-gradient(to right, #ff758c, #ff7eb3)", color: "white" });
    }
  };
  var btnSort = document.getElementById("btnSort");
  btnSort.onclick = function() {
    if (arrChoose.length < 1) {
      showNotification("Ch\u01B0a c\xF3 g\xEC kh\u1ECFi s\u1EAFp x\u1EBFp nha n\xED", 3e3, { background: "linear-gradient(to right, #667eea, #764ba2)", color: "white" });
    }
    let arrSorted = sapXep();
    let string = "";
    for (let item of arrSorted) {
      string += renderP(item);
    }
    if (string) {
      resultPanel.innerHTML = string;
      showNotification("S\u1EAFp x\u1EBFp su\xF4n s\u1EBB", 3e3, { background: "linear-gradient(to right, #eea2a2, #bbc1bf, #57c6e1, #b49fda, #7ac5d8)", color: "white" });
    }
  };
  var btnClean = document.getElementById("btnClean");
  btnClean.onclick = function() {
    resultPanel.replaceChildren();
    showNotification("Clean xong, m\u1EDDi b\u1EA1n nh\u1EA5n 'L\u1EA5y s\u1ED1'", 1e3, { background: "linear-gradient(to right, #fdfcfb, #e2d1c3)", color: "black" });
    arrChoose = [];
    soLan = 0;
    radios.forEach((radio) => {
      radio.checked = false;
    });
    selected = null;
    currentOption = null;
  };
})();
