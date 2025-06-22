/**
 * Jumbles the text content of elements on the page.
 * 
 * @returns {void}
 */
const jumbleText = (): void => {
    // Select elements that typically contain text content
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, a, button, span, label, div');

    // Function to jumble a string
    const jumbleString = (str: string): string => {
        // Don't jumble short strings
        if (str.length <= 3) return str;

        // Extract words
        const words = str.split(' ').filter(word => word.trim() !== '');

        // Jumble each word
        const jumbledWords = words.map(word => {
            // Keep very short words intact
            if (word.length <= 3) return word;

            // Keep the first and last letter, jumble the rest
            const first = word[0];
            const last = word[word.length - 1];
            const middle = word.substring(1, word.length - 1).split('');

            // Shuffle the middle part
            for (let i = middle.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [middle[i], middle[j]] = [middle[j], middle[i]];
            }

            return first + middle.join('') + last;
        });

        return jumbledWords.join(' ');
    };

    // Store original text content to restore later
    const originalContent: Map<Element, string> = new Map();

    // Apply jumbling to selected elements
    textElements.forEach((element) => {
        // Skip elements with no text content or hidden elements
        if (!element.textContent || element.textContent.trim() === '') return;

        // Skip elements that are script or style tags
        if (element.tagName.toLowerCase() === 'script' || element.tagName.toLowerCase() === 'style') return;

        // Store original content
        originalContent.set(element, element.textContent || '');

        // Replace with jumbled text
        element.textContent = jumbleString(element.textContent || '');
    });

    // Restore original text after a few seconds
    setTimeout(() => {
        originalContent.forEach((text, element) => {
            element.textContent = text;
        });
    }, 5000);
};

export default jumbleText;