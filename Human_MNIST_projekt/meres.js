let images = []; // Array to store image names
let currentIndex = 0;

function showNextImage() {
    // Check if there are images to display
    if (currentIndex < images.length) {
        document.getElementById("mnistImage").src = "auth/img/mnist/" + images[currentIndex];
        currentIndex++;
    } else {
        console.log("No more images to display.");
        // You can handle the end of the images here
    }
}

function answerClick(answer) {
    console.log("User selected answer: " + answer);
    // You can handle the user's answer here
    showNextImage();
}

document.addEventListener("DOMContentLoaded", function() {
    // Fetch the list of images from the server
    fetch('/getImagesList') // Replace with the actual endpoint to get the image list
        .then(response => response.json())
        .then(data => {
            images = data.images;
            // Display the first image when the page loads
            showNextImage();
        })
        .catch(error => console.error('Error fetching image list:', error));
});
