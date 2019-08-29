// Declare UI variables
const btnsEl = document.querySelectorAll('.drum');

// Loop through the buttons
for(let i = 0; i < btnsEl.length; i++) {
    // Add event listener when a button is clicked
    btnsEl[i].addEventListener('click', function() {
        // Create the variable for key text content
        const contentHtml = this.innerHTML;
        // Call the makeSound function when a button is clicked
        makeSound(contentHtml);
        // Add the animation to the button when is clicked
        buttonAnimation(contentHtml);
    });
}

// Add event listener when a key is pressed
document.addEventListener('keypress', function(event) {
    // Call the makeSound function when a key is pressed
    makeSound(event.key);
    // Add the animation to the button when a key is pressed
    buttonAnimation(event.key)
});

// Create the makeSound - switching the keyPressed or button clicked
const makeSound = function(keyPressed) {
    // Switch through the cases
    switch(keyPressed) {
        // Select the case
        case 'w':
            // Create the variable with new audio element - object
            const tom1 = new Audio('sounds/tom-1.mp3');
            // Play the audio when the key is pressed
            tom1.play();
        break;

        case "a":
            const tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case "s":
            const tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "d":
            const tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case "j":
            const snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;

        case "k":
            const crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case "l":
            const kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;

        default:
            console.log(keyPressed);
    }
}

// Create the buttonAnimation for buttons
function buttonAnimation(currentKey) {
    // Create the variable for active button - class = with keyPressed
    const activeButton = document.querySelector(`.${currentKey}`);

    // Add a new class to the active button - pressed
    activeButton.classList.add('pressed');

    // Remove the class added after a while - creating the animation
    setTimeout(function() {
        activeButton.classList.remove('pressed');
    }, 100); // Set the time for animation - default 100

}