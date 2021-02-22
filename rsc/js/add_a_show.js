function addAShow() {
    const NAME = document.querySelector('#name').value
    const RATING = document.querySelector('#name').value
    const GENRE = document.querySelector('#name').value
    const SUMMARY = document.querySelector('#name').value
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