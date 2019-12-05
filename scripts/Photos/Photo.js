const photoCardComponent = (photo) => {
    return `
        <section class="photo__card" id="photo--${photo.id}" class="journalEntry">
            <img src="${photo.img_src}" alt="photo of rover" class="photo">
            <div> Camera: ${photo.camera.name} </div>
            <div> Rover: ${photo.rover.name} </div>
            <button class="fav__button">Favorite</button>

        </section>
    `
}

export default photoCardComponent

