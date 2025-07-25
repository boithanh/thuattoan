import radio from "./radio";
import toggle from "./toggle";

const mainHome = () => `<main>
        <section id="numberPanel">
  <div class="container mx-auto px-4">
    <div class="flex flex-col items-center justify-center">
    <div class="w-full">
    ${toggle("dark", "Dark Mode")}
    </div>
      <div class="w-full">
        <div class="number-content"></div>
      </div>
      <div class="sm:w-4/5 md:w-7/12 lg:w-1/2 xl:w-2/5">
        <div class="control-panel my-5">
          <div class="w-full pb-5">
            <div class="frmCheckPanel">
              ${radio()}
            </div>
          </div>
          <div class="w-full mt-4 space-x-2">
            <button id="btnGen" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Lấy số</button>
            <button id="btnSort" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sắp xếp</button>
            <button id="btnClean" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Làm lại</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</main>
`
export default mainHome;