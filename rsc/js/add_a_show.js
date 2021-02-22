function addAShow() {
    const NAME = document.querySelector('#name').value
    const RATING = document.querySelector('#rating').value
    const GENRE = document.querySelector('#genre').value
    const SUMMARY = document.querySelector('#summary').value
    const IMG_URL = document.querySelector('#imgUrl').value
    const NEW_SHOW = {
        name: NAME,
        rating: RATING,
        genre: GENRE,
        summary: SUMMARY,
        img: IMG_URL
    }
    localStorage.setItem(`show_${NAME}`, JSON.stringify(NEW_SHOW))
}