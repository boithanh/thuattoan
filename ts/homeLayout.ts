import footer from "./footer";
import mainHome from "./mainHome";
import navigation from "./navigation"

const homeLayout = () => {
    return `
    ${navigation(null, "./view/any-random.html", "./view/find-and-choose-number.html")}
    ${mainHome()}
    ${footer()}
    `
}

export default homeLayout;