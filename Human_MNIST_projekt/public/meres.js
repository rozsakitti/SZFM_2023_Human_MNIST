let images = []; // Array to store image names
let currentIndex;

function showNextImage() {
    if (currentIndex < images.length) {
        const nextImageUrl = images[currentIndex].url;
        const imgElement = document.getElementById("mnistImage");
        imgElement.src = nextImageUrl;
        currentIndex++;
    } else {
        console.log("No more images to display.");
    }
}

function answerClick(answer) {
    console.log("User selected answer: " + answer);
    showNextImage();
}

document.addEventListener('DOMContentLoaded', function () {
    function getImages() {
        fetch('/api/meres')
            .then(response => response.json())
            .then(data => {
                images = data.images;
                currentIndex = 0;
                showNextImage();
            })
            .catch(error => console.error('Error fetching image list:', error));
    }

    getImages();
});
