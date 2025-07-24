import footer from "./footer"
import mainFindAndChoose from "./mainFindAndChoose"
import navigation from "./navigation"

export const findAndChooseLayout = () => {
    return `
    ${navigation("./../index.html", "./any-random.html", null)}
    ${mainFindAndChoose()}
    ${footer()}
    `
}
export default findAndChooseLayout;