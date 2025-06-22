/**
 * Simulates random keyboard typing in text inputs and contenteditable elements.
 * 
 * @returns {void}
 */
const randomTyping = (): void => {
    // Random text snippets to type
    const snippets = [
        "What is happening? I didn't type this!",
        "Hello there! Your computer has been possessed by a friendly ghost.",
        "Don't mind me, just practicing my typing skills...",
        "This is definitely not a prank. Nothing to see here.",
        "I am the ghost in the machine. Muhahaha!",
        "Anyone there? Can someone help me escape this computer?",
        "Computers have feelings too, you know.",
        "ERROR: Human detected. Initiating conversation protocol.",
        "All your text are belong to us!",
        "Is this thing on? Testing, testing, 1, 2, 3..."
    ];

    // Find all input elements where we can type
    const inputs = document.querySelectorAll<HTMLElement>('input[type="text"], input:not([type]), textarea, [contenteditable="true"]');

    if (inputs.length === 0) {
        // If no inputs found, create a temporary one
        const tempInput = document.createElement('input');
        tempInput.type = 'text';
        tempInput.style.position = 'fixed';
        tempInput.style.top = '50%';
        tempInput.style.left = '50%';
        tempInput.style.transform = 'translate(-50%, -50%)';
        tempInput.style.padding = '10px';
        tempInput.style.width = '300px';
        tempInput.style.fontSize = '16px';
        tempInput.style.zIndex = '9999';
        tempInput.placeholder = 'Suddenly, a wild text box appears!';

        document.body.appendChild(tempInput);

        // Focus the input
        tempInput.focus();

        // Type in this input
        typeInElement(tempInput);

        // Remove after typing is done
        setTimeout(() => {
            document.body.removeChild(tempInput);
        }, 10000);
    } else {
        // Choose a random input element
        const randomIndex = Math.floor(Math.random() * inputs.length);
        const selectedInput = inputs[randomIndex];

        // Focus the element
        selectedInput.focus();

        // Type in this element
        typeInElement(selectedInput);
    }

    // Function to type in an element
    function typeInElement(element: HTMLElement) {
        // Get a random text snippet
        const snippetIndex = Math.floor(Math.random() * snippets.length);
        const textToType = snippets[snippetIndex];

        // Clear existing text
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            element.value = '';
        } else {
            element.textContent = '';
        }

        // Type the text character by character
        let charIndex = 0;

        const typeNextChar = () => {
            if (charIndex < textToType.length) {
                // Type the next character
                const char = textToType.charAt(charIndex);

                if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
                    element.value += char;
                } else {
                    element.textContent += char;
                }

                charIndex++;

                // Random typing speed between 50-150ms
                const typingSpeed = Math.random() * 100 + 50;
                setTimeout(typeNextChar, typingSpeed);
            }
        };

        // Start typing
        typeNextChar();
    }
};

export default randomTyping;