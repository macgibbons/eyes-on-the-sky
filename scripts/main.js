import PhotoListComponent from "./Photos/Photolist.js";
import { getPhotos, usePhotos } from "./Photos/Photodataprovider.js";

// PhotoListComponent()

getPhotos().then(
    PhotoListComponent
)

usePhotos