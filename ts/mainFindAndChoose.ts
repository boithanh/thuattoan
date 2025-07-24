const mainFindAndChoose = () => {
    return `
    <main>
    <div class="container mx-auto mt-6 px-10">
        <h2 class="text-4xl text-center mb-8">Thống kê lần xuất hiện dựa trên dữ liệu có sẵn</h2>
        <div class="sm:flex justify-center align-items-center mb-5 font-bold gap-10 min-h-screen">
            <div class="max-sm:w-full sm:w-4/12">
                <h2 class="text-2xl font-semibold mb-3">Nhập dãy bạn cần chuyển đổi</h2>
                <label for="message" class="block text-sm font-medium text-gray-900 dark:text-white">Your
                    message</label>
                <textarea id="message" rows="30"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."></textarea>
            </div>
            <div class="max-sm:w-full sm:w-4/12">
                <h2 class="text-2xl font-semibold mb-3">Các số xuất hiện</h2>
                <label for="message" class="block text-sm font-medium text-gray-900 dark:text-white">Your
                    message</label>
                <textarea id="result" rows="30"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Result ->" disabled></textarea>
            </div>
            <div class="max-sm:w-full sm:w-4/12">
                <h2 class="text-2xl font-semibold mb-3">Số không xuất hiện</h2>
                <label for="message" class="block text-sm font-medium text-gray-900 dark:text-white">Your
                    message</label>
                <textarea id="notExist" rows="30"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Result ->" disabled></textarea>
            </div>
        </div>
        <div class="text-center mb-5">
            <div class="mb-3">
                <label for="" class="form-label">Chọn Loại</label>
                <select class="form-select form-select-lg" name="selectLoai" id="selectLoai">
                    <option selected value=45>Mega 6/45</option>
                    <option value=55>Power 6/55</option>
                </select>
            </div>

            <button type="button"
                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3.5 me-2 mb-2 mt-5"
                id="btnLoc">Lọc
                số</button>
            <button type="button"
                class="text-black bg-white hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3.5 me-2 mb-2 mt-5"
                id="btnClear">Reset</button>
        </div>
        <div class="w-8/12 mx-auto">
            <div id="table-inner" class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-left rtl:text-right text-black">
                </table>
            </div>
        </div>
    </div>
    </main>
    `
}
export default mainFindAndChoose;