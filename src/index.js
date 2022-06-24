document.addEventListener("DOMContentLoaded", function(){
    fetchDogImages()
    
})


function fetchDogImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response =>  {return response.json()})
    .then(data => {
        let images = data.message
        images.forEach(image => loadImagestoDOM(image))
        })
}


function loadImagestoDOM(image){
    let dogsCont = document.getElementById("dog-image-container")

    let ourImage = document.createElement('img')

    ourImage.src = image

    dogsCont.appendChild(ourImage)
}