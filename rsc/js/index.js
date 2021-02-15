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

function sanitizeHTML(text) {
    let element = document.createElement('div')
    element.innerText = text
    let sanitizedText = element.innerHTML
    document.removeChild(element)
    return sanitizedText
}

function clearLocalStorage() {
    localStorage.clear()
    location.reload()
}

window.history.replaceState({}, document.title, "index.html");

let request = new XMLHttpRequest()
request.open("GET", "rsc/shows.json", false)
request.send(null)
const SHOW_DATA = JSON.parse(request.responseText)

for (let i = 0; i < SHOW_DATA["shows"].length; i++) {
    addShowToHTML(SHOW_DATA["shows"][i])
}

for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).startsWith("show")) {
        const SHOW_STRING = localStorage.getItem(localStorage.key(i))
        const SHOW_JSON = JSON.parse(SHOW_STRING)
        addShowToHTML(SHOW_JSON)
    }
}
