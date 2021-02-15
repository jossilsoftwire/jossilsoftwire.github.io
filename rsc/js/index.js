const FILLER = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const MANDALORIAN = {
    name:"The Mandalorian",
    rating:8,
    genre:"Space Western",
    summary:FILLER,
    img:"rsc/img/theMandalorianIcon.jpg"
}

const HIS_DARK_MATERIALS = {
    name:"His Dark Materials",
    rating:9,
    genre:"Fantasy Drama",
    summary:FILLER,
    img:"rsc/img/hisDarkMaterialsIcon.jpg"
}

const CARNIVAL_ROW = {
    name:"Carnival Row",
    rating:3,
    genre:"Steampunk",
    summary:FILLER,
    img:"rsc/img/carnivalRowIcon.jpg"
}

const ALEX_RIDER = {
    name:"Alex Rider",
    rating:6,
    genre:"Spy Thriller",
    summary:FILLER,
    img:"rsc/img/alexRiderIcon.jpg"
}

const SHOWS_LIST = document.querySelector(".shows")

function addShowToHTML(show) {
    let tvShow = document.createElement("div")
    tvShow.classList.add("tvShow")
    SHOWS_LIST.appendChild(tvShow)

    let image = document.createElement("img")
    image.setAttribute("src", show.img)
    image.setAttribute("alt", `Icon for ${show.name}`)
    tvShow.appendChild(image)

    let textRegion = document.createElement("div")
    tvShow.appendChild(textRegion)

    let title = document.createElement("h2")
    title.classList.add("name")
    title.innerText = show.name
    textRegion.appendChild(title)

    addTextSection(textRegion, "Rating", show.rating)
    addTextSection(textRegion, "Genre", show.genre)
    addTextSection(textRegion, "Summary", show.summary)
}

function addTextSection(regionToAddTo, name, content) {
    let newTextElement = document.createElement("p")
    newTextElement.classList.add(name.toLowerCase())
    newTextElement.innerHTML = `<b>${name}:</b> ${content}`
    regionToAddTo.appendChild(newTextElement)
}

addShowToHTML(MANDALORIAN)
addShowToHTML(HIS_DARK_MATERIALS)
addShowToHTML(CARNIVAL_ROW)
addShowToHTML(ALEX_RIDER)