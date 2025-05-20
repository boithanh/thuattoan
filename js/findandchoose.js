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

  // ts/findandchoose.ts
  var textInput = document.getElementById("message");
  var textOutput = document.getElementById("result");
  var textNotExist = document.getElementById("notExist");
  var selectLoai = document.getElementById("selectLoai");
  var tableContent = document.querySelector("table");
  document.getElementById("btnLoc").onclick = () => {
    if (getValue()) {
      textOutput.value = removeDuplicate().map(Number).join("\n");
      textNotExist.value = numberNotExist(Number(selectLoai.value)).map(Number).join("\n");
      document.getElementById("table-inner")?.classList.remove("hidden");
      tableContent.innerHTML = renderColumn();
      showNotification("Ph\xE2n t\xEDch th\xE0nh c\xF4ng", 3e3, { background: "linear-gradient(to right, #13547a , #80d0c7)", color: "white" });
    } else {
      showNotification("Nh\u1EDB nh\u1EADp d\xE3y s\u1ED1 nha b\u1EA1n!!", 3e3, { background: "linear-gradient(to right, #ff0844, #ffb199)", color: "white" });
    }
  };
  document.getElementById("btnClear").onclick = () => {
    textInput.value = "";
    textOutput.value = "";
    textNotExist.value = "";
    tableContent.innerHTML = "";
    showNotification("Reset th\xE0nh c\xF4ng", 3e3, { background: "linear-gradient(to right, #13547a , #80d0c7)", color: "white" });
  };
  function getValue() {
    return textInput.value.trim();
  }
  function convertToArray(str) {
    let regex = /[\s.,]+/;
    let result = str.split(regex);
    if (result[0].length <= 2) {
      return result;
    }
    let result2 = result.map((line) => line.match(/\d{2}/g) || []);
    return result2.flat();
  }
  function removeDuplicate() {
    let arrData = convertToArray(getValue());
    let arrSet = [...new Set(arrData)];
    let backtoArr = [...arrSet];
    return backtoArr;
  }
  function numberNotExist(loai = 45) {
    let arrExist = removeDuplicate().map(Number);
    let newArr = [];
    for (let i = 1; i <= loai; i++) {
      let value = i;
      if (!arrExist.includes(value)) {
        newArr.push(value);
      }
    }
    return newArr;
  }
  function shuttfleArr(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * arr.length);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  function countingDuplicate() {
    let arr = convertToArray(getValue());
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
      if (counts[value]) {
        counts[value]++;
      } else counts[value] = 1;
    }
    return counts;
  }
  function renderColumn() {
    let objCount = countingDuplicate();
    let oneTime = [];
    let twoTimes = [];
    let threeTimes = [];
    let fourTimes = [];
    let fineTimes = [];
    let sixTimes = [];
    let seventTimes = [];
    let zeroTimes = textNotExist.value.split("\n");
    for (let key in objCount) {
      if (objCount[key] === 1) oneTime.push(key);
      else if (objCount[key] === 2) twoTimes.push(key);
      else if (objCount[key] === 3) threeTimes.push(key);
      else if (objCount[key] === 4) fourTimes.push(key);
      else if (objCount[key] === 5) fineTimes.push(key);
      else if (objCount[key] === 6) sixTimes.push(key);
      else if (objCount[key] === 7) seventTimes.push(key);
    }
    shuttfleArr(zeroTimes);
    shuttfleArr(oneTime);
    shuttfleArr(twoTimes);
    shuttfleArr(threeTimes);
    shuttfleArr(fourTimes);
    shuttfleArr(fineTimes);
    shuttfleArr(sixTimes);
    shuttfleArr(seventTimes);
    const maxLength = Math.max(zeroTimes.length, oneTime.length, twoTimes.length, threeTimes.length, fourTimes.length, fineTimes.length, sixTimes.length, seventTimes.length);
    let str = `
    <thead class="text-black uppercase bg-gray-600 border-b border-blue-400 dark:text-white text-xl">
        <tr>
            <th scope="col" class="px-6 py-3">0 c\xF3</th>
            <th scope="col" class="px-6 py-3">1 l\u1EA7n</th>
            <th scope="col" class="px-6 py-3">2 l\u1EA7n</th>
            <th scope="col" class="px-6 py-3">3 l\u1EA7n</th>
            <th scope="col" class="px-6 py-3">4 l\u1EA7n</th>
            <th scope="col" class="px-6 py-3">5 l\u1EA7n</th>
            <th scope="col" class="px-6 py-3">6 l\u1EA7n</th>
            <th scope="col" class="px-6 py-3">7 l\u1EA7n</th>
        </tr>
    </thead>
    <tbody>`;
    for (let i = 0; i < maxLength; i++) {
      const zero = zeroTimes[i] ?? "";
      const one = oneTime[i] ?? "";
      const two = twoTimes[i] ?? "";
      const three = threeTimes[i] ?? "";
      const four = fourTimes[i] ?? "";
      const fine = fineTimes[i] ?? "";
      const six = sixTimes[i] ?? "";
      const seven = seventTimes[i] ?? "";
      str += `
        <tr class="bg-gray-100 border-b border-black text-md">
            <td class="px-6 py-4">${zero === "" ? "" : Math.floor(Number(zero) / 10) !== 0 ? zero : "0" + zero}</td>
            <td class="px-6 py-4">${one}</td>
            <td class="px-6 py-4">${two}</td>
            <td class="px-6 py-4">${three}</td>
            <td class="px-6 py-4">${four}</td>
            <td class="px-6 py-4">${fine}</td>
            <td class="px-6 py-4">${six}</td>
            <td class="px-6 py-4">${seven}</td>
        </tr>`;
    }
    str += `</tbody>`;
    return str;
  }
})();
