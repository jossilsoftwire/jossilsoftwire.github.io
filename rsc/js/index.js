const API_KEY = "tYOfY36jWYfu5BJeO6IPUR9pGFiTQXto"
const GIPHY_URL = "https://api.giphy.com/v1/gifs/search?"
const SHOWS_LIST = document.querySelector(".shows")

function spin() {
    const ELEMENTS = document.querySelectorAll("img, div, h2")
    for (let i = 0; i < ELEMENTS.length; i++) {
        ELEMENTS[i].classList.toggle("spin")
    }
    const body = document.querySelector("body")
    body.classList.toggle("flash")

}

function addGifToElement(query, elementToAppendTo) {
    const requestUrl = `${GIPHY_URL}api_key=${API_KEY}&q=${query}&limit=1&lang=en`

    let gif = document.createElement("img")
    gif.setAttribute("alt", `Gif for ${query}`)
    gif.classList.add("gif")
    elementToAppendTo.appendChild(gif)

    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            gif.setAttribute("src", data.data[0].images.original.url)
        })
}

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
    addGifToElement(show.name, textRegion)
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

fetch("rsc/shows.json")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data["shows"].length; i++) {
            addShowToHTML(data["shows"][i])
        }
    })

if (localStorage.length === 0) {
    document.querySelector("#clearButton").classList.add("hidden")
} else {

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).startsWith("show")) {
            const SHOW_STRING = localStorage.getItem(localStorage.key(i))
            const SHOW_JSON = JSON.parse(SHOW_STRING)
            addShowToHTML(SHOW_JSON)
        }
    }
}