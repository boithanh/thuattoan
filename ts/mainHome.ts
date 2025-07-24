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
`
export default mainHome;