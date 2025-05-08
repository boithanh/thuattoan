let textInput = document.getElementById("message") as HTMLInputElement;
let textOutput = document.getElementById("result") as HTMLInputElement;
let textNotExist = document.getElementById("notExist") as HTMLInputElement;
let selectLoai = document.getElementById("selectLoai") as HTMLInputElement;
let tableContent = document.querySelector("table") as HTMLElement
import { showNotification } from "./utils";


document.getElementById("btnLoc")!.onclick = () => {
    if (getValue()) {
        textOutput.value = removeDuplicate().map(Number).join("\n"); //.map(Number) : duyệt qua từng phần tử và chuyển string thành number. Cách viết tường mình: .map(Number(a[i]))
        textNotExist.value = numberNotExist(Number(selectLoai.value)).map(Number).join("\n");
        document.getElementById("table-inner")?.classList.remove("hidden");
        tableContent.innerHTML = renderColumn();
        showNotification("Phân tích thành công", 3000, { background: "linear-gradient(to right, #13547a , #80d0c7)", color: "white" });
    }
    else {
        showNotification("Nhớ nhập dãy số nha bạn!!", 3000, { background: "linear-gradient(to right, #ff0844, #ffb199)", color: "white" })
    }
}
document.getElementById("btnClear")!.onclick = () => {
    textInput.value = "";
    textOutput.value = "";
    textNotExist.value = ""
    tableContent.innerHTML = "";
    showNotification("Reset thành công", 3000, { background: "linear-gradient(to right, #13547a , #80d0c7)", color: "white" });
}
function getValue() {
    return textInput.value.trim();
}

function convertToArray(str: string) {
    let regex = /[\s.,]+/;
    let result = str.split(regex);
    if (result[0].length <= 2) {
        return result
    }
    let result2 = result.map(line => line.match(/\d{2}/g) || []);
    return result2.flat();
}

function convertStr(str: string) {
    const lines = str.trim().split('\n');
    const result = lines.map(line => line.match(/\d{2}/g));
    return result.flat();
}

function removeDuplicate() {
    let arrData = convertToArray(getValue());
    let arrSet = [...new Set(arrData)];
    let backtoArr = [...arrSet];
    return backtoArr;
}

function numberNotExist(loai: number = 45) {
    let arrExist = removeDuplicate().map(Number);
    let newArr = [];
    for (let i = 1; i <= loai; i++) {
        let value = i;
        if (!arrExist.includes(value)) {
            newArr.push(value)
        }
    }
    return newArr;
}

function shuttfleArr(arr: any[]) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * arr.length);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


function getDuplicateValues() {
    let arrData = convertToArray(getValue());
    return arrData.filter((item, index) => (arrData.indexOf(item) !== index))
}

// Tìm các phần tử đã lọc trùng trong mảng gốc và In ra số lầ xuất hiện của chúng trong mảng gốc
//Cách 1: 
function findingNumber() {
    let originArr = convertToArray(getValue());
    let arrFiltered = removeDuplicate();
    let result: { data: string, dem: number }[] = [];
    for (let index in arrFiltered) {
        let dem = 0;
        for (let value of originArr) {
            if (value == arrFiltered[index]) {
                dem++;
            }
        }
        result.push({ data: arrFiltered[index], dem })
    }
    return result;
}


//cách 2:
function findingNumberVer2() {
    let originArr = convertToArray(getValue());
    let arrFiltered = removeDuplicate();
    let result: { data: string, dem: number }[] = [];
    for (let item in arrFiltered) {
        let dem = 0;
        originArr.find((data, index) => {
            if (data === item) {
                dem++;
            }
            else {
                dem = 1
            }
        })
        result.push({ data: item, dem })
    }

    return result;
}


//cách 3:
function countingDuplicate() {
    let arr = convertToArray(getValue());
    let counts: Record<string, number> = {};
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (counts[value]) {
            counts[value]++
        }
        else counts[value] = 1
    }
    return counts;
}


function renderColumn() {
    let objCount = countingDuplicate();

    // Phân loại dữ liệu
    let oneTime: string[] = [];
    let twoTimes: string[] = [];
    let threeTimes: string[] = [];
    let fourTimes: string[] = [];
    let fineTimes: string[] = [];
    let sixTimes: string[] = [];
    let seventTimes: string[] = [];
    let zeroTimes: string[] = textNotExist.value.split("\n")

    for (let key in objCount) {
        if (objCount[key] === 1) oneTime.push(key);
        else if (objCount[key] === 2) twoTimes.push(key);
        else if (objCount[key] === 3) threeTimes.push(key);
        else if (objCount[key] === 4) fourTimes.push(key);
        else if (objCount[key] === 5) fineTimes.push(key);
        else if (objCount[key] === 6) sixTimes.push(key);
        else if (objCount[key] === 7) seventTimes.push(key);
    }

    const maxLength = Math.max(oneTime.length, twoTimes.length, threeTimes.length, fourTimes.length, fineTimes.length, sixTimes.length, seventTimes.length);

    // Render bảng
    let str = `
    <thead class="text-black uppercase bg-gray-600 border-b border-blue-400 dark:text-white text-xl">
        <tr>
            <th scope="col" class="px-6 py-3">0 có</th>
            <th scope="col" class="px-6 py-3">1 lần</th>
            <th scope="col" class="px-6 py-3">2 lần</th>
            <th scope="col" class="px-6 py-3">3 lần</th>
            <th scope="col" class="px-6 py-3">4 lần</th>
            <th scope="col" class="px-6 py-3">5 lần</th>
            <th scope="col" class="px-6 py-3">6 lần</th>
            <th scope="col" class="px-6 py-3">7 lần</th>
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
            <td class="px-6 py-4">${zero}</td>
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

