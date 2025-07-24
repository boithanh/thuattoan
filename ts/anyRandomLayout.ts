import footer from "./footer"
import mainAnyRandom from "./mainAnyRandom"
import navigation from "./navigation"
const anyRandomLayout = () => {
    return `
   ${navigation("./../index.html", null, "./find-and-choose-number.html")}
    ${mainAnyRandom()}
    ${footer()}
    `
}
export default anyRandomLayout;