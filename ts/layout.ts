import footer from "./footer";
import navigation from "./navigation";

export const home: string = `
<!-- Breadcrumb -->
${navigation(null, "./view/any-random.html", "./view/find-and-choose-number.html")}
<main>
        <section id="numberPanel">
  <div class="container mx-auto px-4">
    <div class="flex flex-col items-center justify-center">
      <div class="w-full">
        <div class="number-content"></div>
      </div>
      <div class="w-full sm:w-4/5 md:w-7/12 lg:w-1/2 xl:w-2/5">
        <div class="control-panel my-5">
          <div class="w-full">
            <div class="frmCheckPanel">
              <div class="form-check inline-flex items-center mb-3 mr-3">
                <input
                  class="form-check-input mr-2"
                  type="radio"
                  name="radioRandom"
                  id="radioMega"
                  value="mega"
                />
                <label class="form-check-label" for="">Mega</label>
              </div>
              <div class="form-check inline-flex items-center mr-3">
                <input
                  class="form-check-input mr-2"
                  type="radio"
                  name="radioRandom"
                  id="radioPower"
                  value="power"
                />
                <label class="form-check-label" for="">Power</label>
              </div>
              <div class="form-check inline-flex items-center">
                <input
                  class="form-check-input mr-2"
                  type="radio"
                  name="radioRandom"
                  id="radioLoto"
                  value="loto"
                />
                <label class="form-check-label" for="">Loto</label>
              </div>
            </div>
          </div>
          <div class="w-full mt-4 space-x-2">
            <button id="btnGen" class="btn bg-black text-white px-4 py-2">Lấy số</button>
            <button id="btnSort" class="btn bg-blue-500 text-white px-4 py-2">Sắp xếp</button>
            <button id="btnClean" class="btn bg-gray-200 text-black px-4 py-2">Làm lại</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
    ${footer()}
    `;


export const anyRandom: string = `
${navigation("./../index.html", null, "./find-and-choose-number.html")}
    <main>
            <section class="any-random py-10 min-h-screen">
                <div class="container mx-auto px-3">
                    <h1 class="mb-4 text-2xl font-extrabold text-gray-900 md:text-5xl lg:text-3xl text-center"><span
                            class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Nhập
                            chuỗi </span>mà bạn muốn random</h1>
                    <form class="max-w-md mx-auto" id="frmRandom">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                            message</label>
                        <textarea id="message" rows="20"
                            class="block p-2.5 mb-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Leave a string which you want..." aria-valuetext=""></textarea>
                        <div class="text-center mx-auto">                    
  <select id="numbers" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Chỉ chọn field này khi sử dụng "xem cao thấp"</option>
    <option value="645">Xem cao thấp theo Mega 6/45</option>
    <option value="655">Xem cao thấp theo Power 6/55</option>
  </select>

                            <button type="submit"
                                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-3 mt-5">Random!!!
                            </button>
                            <button id="btnXaoTron" type="button"
                                class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Xáo
                                trộn</button>
                            <button type="button"
                                class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                id="btnTang">Sort
                                Tăng dần</button>
                            <button type="button"
                                class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                id="btnGiam">Sort
                                giảm dần</button>
                                <button id="btnChanLe" type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Xem Chẵn lẻ</button>
                                <button id="btnHighLow" type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Xem cao thấp</button>
                        </div>
                    </form>
                </div>
    
                <!-- Main modal -->
                <div id="default-modal" tabindex="-1"
                    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-2 max-sm:w-full sm:w-6/12 max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow-sm">
                            <!-- Modal header -->
                            <div
                                class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                                <h3 class="text-xl font-semibold text-gray-900">
                                    Số ngẫu nhiên
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
                                <pre id="modalContent" class="text-2xl leading-relaxed text-black">
                                </pre>
                            </div>
                            <!-- Modal footer -->
                            <div
                                class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 gap-2">
                                <button id="btnDecline" data-modal-hide="default-modal" type="button"
                                    class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Tiếp tục</button>
                                <button id="btnAccept" data-modal-hide="default-modal" type="button"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </main>
        ${footer()}
        `;

export const findAndChooseNumber: string = `
${navigation("./../index.html", "./any-random.html", null)}
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
  ${footer()}
    `;