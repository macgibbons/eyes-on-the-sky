const photoCardComponent = (photo) => {
    return `
        <section class="photo__card"  class="journalEntry">
        <div class="photo__title"> ${photo.id} </div>
            <div class="photo__content">
                <img src="${photo.img_src}" alt="photo of rover" class="photo">
                <div>Date: ${new Date(photo.earth_date).toLocaleDateString('en-US')}</div>
                <p class="rover">Rover: ${photo.rover.name}</p>
                <button class="fav__button">Favorite</button>
            </div>

        </section>
    `
}

export default photoCardComponent