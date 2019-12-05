import { usePhotos } from "./Photodataprovider.js";
import photoCardComponent from "./Photo.js";

const singlePhotoCard = document.querySelector(".photo__container")

const PhotoListComponent = () => {

    const photos = usePhotos()

    singlePhotoCard.innerHTML += `
        ${ 
               photos.photos.map(photo => {
                   return photoCardComponent(photo)}).join("")
        }
    `
}

export default PhotoListComponent


