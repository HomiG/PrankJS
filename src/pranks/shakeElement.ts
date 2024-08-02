/**
 * Adds a shake effect to the specified elements.
 * 
 * @param {string} selector - The CSS selector of the elements to shake.
 * @returns {void}
 */
export default function shakeElement(selector: string): void {
    // Define the shake keyframes and class styles
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
        .shake {
            animation: shake 0.5s;
            animation-iteration-count: infinite;
        }
    `;
    document.head.appendChild(style);


    // Get the elements matching the selector
    const elements = document.querySelectorAll(selector);

    // Loop through the selected elements
    elements.forEach((element) => {
        // Add the shake class to the element
        element.classList.add('shake');
    });

    // Log a message to the console
    console.log(`Shaking elements matching the selector: ${selector}`);
}