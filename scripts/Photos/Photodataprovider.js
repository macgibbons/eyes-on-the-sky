
let photos = []

export const usePhotos = () => {
    return photos
}

export const getPhotos = () => {
    console.log("***I am going to fetch the data***");
    return fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=HtEnsqaU15rdC5JHjjZYUfFVohAQbx8tsyzenH26")
        .then(response => response.json())
        .then(
            parsedPhotos => {
                console.log("***I have the data***");
                console.table(parsedPhotos)
                photos = parsedPhotos.photos.slice()
            }
        )
}



