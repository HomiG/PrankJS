export default function randomFloatingObjects(sharkImageUrl: string) {
    // URL to the shark image (you can replace this with any other image URL)
    // Number of sharks to display
    const sharkCount = 5;

    // Function to create a shark element
    function createShark() {
        const shark = document.createElement('img');
        shark.src = sharkImageUrl;
        shark.classList.add('shark');
        shark.style.width = '100px';
        shark.style.position = 'fixed'; // 'fixed' position to stay on top
        shark.style.top = '0';
        shark.style.left = '0';
        shark.style.pointerEvents = 'none'; // Avoid interaction with the page
        shark.style.zIndex = '9999'; // High z-index to ensure it is above all content
        document.body.appendChild(shark);
        return shark;
    }

    // Function to set a random position for the shark
    function setRandomPosition(element: any) {
        const x = Math.random() * (window.innerWidth - 100); // -100 to keep sharks fully in view
        const y = Math.random() * (window.innerHeight - 100);
        element.style.transform = `translate(${x}px, ${y}px)`;
    }

    // Function to animate the shark
    function animateShark(element: any) {
        setRandomPosition(element);
        const duration = Math.random() * 5000 + 5000;
        element.style.transition = `transform ${duration}ms linear`;
        setTimeout(() => animateShark(element), duration);
    }

    // Create and animate sharks
    for (let i = 0; i < sharkCount; i++) {
        const shark = createShark();
        animateShark(shark);
    }
}
