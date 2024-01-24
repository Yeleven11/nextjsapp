// Select the .container element
var container = document.querySelector('.container');

// Add a click event listener
container.addEventListener('click', function() {
    // Select the .image element
    var image = document.querySelector('.image');

    // Change the left property to 50%
    image.style.right = '50%';
});