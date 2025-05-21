export const home: string = `
<!-- Breadcrumb -->
<header>
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active"><span class="ms-1 small fw-medium text-muted md:ms-2">Home</span></li>
    <li class="breadcrumb-item"><a href="./view/any-random.html" class="ms-1 small fw-medium text-secondary text-decoration-none hover:text-primary md:ms-2">Any random</a></li>
    <li class="breadcrumb-item" aria-current="page"> <a href="./view/find-and-choose-number.html" class="ms-1 small fw-medium text-secondary text-decoration-none hover:text-primary md:ms-2">Find & choose number</a></li>
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


export const anyRandom: string = `
    <header>
            <nav class="flex px-5 py-3 text-gray-700 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
                aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <a href="./../index.html"
                            class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Home</a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-white " aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Any random</span>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180  w-3 h-3 mx-1 text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 9 4-4-4-4" />
                            </svg>
                           <a href="./find-and-choose-number.html" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Find & choose number</a>
                    </li>
                </ol>
            </nav>
        </header>
    <main>
            <section class="any-random py-10 min-h-screen">
                <div class="container mx-auto px-3">
                    <h1 class="mb-4 text-2xl font-extrabold text-gray-900 md:text-5xl lg:text-3xl text-center"><span
                            class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Nhập
                            chuỗi </span>mà bạn muốn random</h1>
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
         <footer class="footer-container bg-black py-3">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12 text-center">
                        <p class="text-white">Copyright Bối Thạnh @2025</p>
                    </div>
                </div>
            </div>
        </footer>`;

export const findAndChooseNumber: string = `<!-- Breadcrumb -->
    <header>
        <nav class="flex px-5 py-3 text-gray-700 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <a href="./index.html"
                        class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Home</a>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <a href="./any-random.html"
                            class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Any
                            random</a>
                    </div>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Find & choose
                            number</span>
                </li>
            </ol>
        </nav>
    </header>
    <div class="container mx-auto mt-6 px-10">
        <h2 class="text-4xl text-center mb-8">Thống kê lần xuất hiện dựa trên dữ liệu có sẵn</h2>
        <div class="sm:flex justify-center align-items-center mb-5 font-bold gap-10 min-h-screen">
            <div class="max-sm:w-full sm:w-4/12">
                <h2 class="text-2xl font-semibold">Nhập dãy bạn cần chuyển đổi</h2>
                <label for="message" class="block text-sm font-medium text-gray-900 dark:text-white">Your
                    message</label>
                <textarea id="message" rows="30"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."></textarea>
            </div>
            <div class="max-sm:w-full sm:w-4/12">
                <h2 class="text-2xl font-semibold">Các số xuất hiện</h2>
                <label for="message" class="block text-sm font-medium text-gray-900 dark:text-white">Your
                    message</label>
                <textarea id="result" rows="30"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Result ->" disabled></textarea>
            </div>
            <div class="max-sm:w-full sm:w-4/12">
                <h2 class="text-2xl font-semibold">Số không xuất hiện</h2>
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
    <footer class="footer-container bg-black py-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12 text-center">
                    <p class="text-white">Copyright Bối Thạnh @2025</p>
                </div>
            </div>
        </div>
    </footer>`;