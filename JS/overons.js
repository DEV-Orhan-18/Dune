let zoomedIn = false;
let img, originalParent;

function toggleSize(event) {
    img = event.target; // Get the clicked image

    if (!zoomedIn) {
        originalParent = img.parentElement; // Save original container
        document.body.appendChild(img); // Move image to body
        img.classList.add("expanded");
        document.addEventListener("mousemove", moveImage);
        img.addEventListener("click", toggleSize); // Allow clicking again to close
        zoomedIn = true;
    } else {
        img.classList.remove("expanded");
        originalParent.appendChild(img); // Move image back
        img.style.transform = "";
        document.removeEventListener("mousemove", moveImage);
        img.removeEventListener("click", toggleSize); // Prevent multiple event listeners
        zoomedIn = false;
    }
}

function moveImage(event) {
    if (!zoomedIn) return;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const moveX = ((event.clientX / screenWidth) - 0.5) * -400;
    const moveY = ((event.clientY / screenHeight) - 0.5) * -400;

    img.style.transform = `translate(-50%, -50%) scale(4) translate(${moveX}px, ${moveY}px)`;
}
