/**
 * Generates random floating objects with the given image URL.
 * 
 * @param {string} imageUrl - The URL of the image to be used for the floating objects.
 * @returns {void}
 */
export default function randomFloatingObjects(imageUrl: string) {
    // Number of Objects to display
    const ObjectCount = 5;

    function createObject() {
        const object = document.createElement('img');
        object.src = imageUrl;
        object.classList.add('object');
        object.style.width = '100px';
        object.style.position = 'fixed'; // 'fixed' position to stay on top
        object.style.top = '0';
        object.style.left = '0';
        object.style.pointerEvents = 'none'; // Avoid interaction with the page
        object.style.zIndex = '9999'; // High z-index to ensure it is above all content
        document.body.appendChild(object);
        return object;
    }

    // Function to set a random position for the object
    function setRandomPosition(element: any) {
        const x = Math.random() * (window.innerWidth - 100); // -100 to keep Objects fully in view
        const y = Math.random() * (window.innerHeight - 100);
        element.style.transform = `translate(${x}px, ${y}px)`;
    }

    // Function to animate the object
    function animateObject(element: any) {
        setRandomPosition(element);
        const duration = Math.random() * 5000 + 5000;
        element.style.transition = `transform ${duration}ms linear`;
        setTimeout(() => animateObject(element), duration);
    }

    // Create and animate Objects
    for (let i = 0; i < ObjectCount; i++) {
        const object = createObject();
        animateObject(object);
    }
}
