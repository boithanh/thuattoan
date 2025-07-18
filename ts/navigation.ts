const navigation = (homeHref: string | null, anyRandomHref: string | null, chooseNumberHref: string | null) => `
<header class=${homeHref === null ? "Home"
        : anyRandomHref === null ? "anyRandom"
            : chooseNumberHref === null ? "choose" : ""}>
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item ${homeHref === null ? "active" : ""}">${homeHref === null ? '<span class= "ms-1 small fw-medium text-muted md:ms-2" > Home </span>' : `<a href=${homeHref} class="ms-1 small fw-medium text-secondary text-decoration-none hover:text-primary md:ms-2">Home</a>`}</li>
    <li class="breadcrumb-item ${anyRandomHref === null ? "active" : ""}">${anyRandomHref === null ? '<span class= "ms-1 small fw-medium text-muted md:ms-2" > Anyrandom </span>' : `<a href=${anyRandomHref} class="ms-1 small fw-medium text-secondary text-decoration-none hover:text-primary md:ms-2">Any random</a>`}</li>
    <li class="breadcrumb-item ${chooseNumberHref === null ? "active" : ""}" aria-current="page">${chooseNumberHref === null ? '<span class= "ms-1 small fw-medium text-muted md:ms-2" > Find & choose number </span>' : ` <a href=${chooseNumberHref} class="ms-1 small fw-medium text-secondary text-decoration-none hover:text-primary md:ms-2">Find & choose number</a>`}</li>
  </ol>
</nav>
</header>
`
export default navigation