/**
 * Applies random blur effects to elements on the page.
 * 
 * @returns {void}
 */
const randomBlur = (): void => {
    // Get all elements that we can safely blur
    const elements = document.querySelectorAll('img, div, p, h1, h2, h3, h4, h5, h6, section, article, main');

    // Store original styles to restore later
    const originalStyles = new Map<Element, string>();

    // Apply blur to random elements
    const applyRandomBlur = () => {
        // Clear previous blurs
        originalStyles.forEach((style, element) => {
            (element as HTMLElement).style.filter = style;
        });
        originalStyles.clear();

        // Number of elements to blur (random between 3-10 or fewer if not enough elements)
        const count = Math.min(Math.floor(Math.random() * 8) + 3, elements.length);

        // Select random elements and apply blur
        const shuffled = Array.from(elements).sort(() => 0.5 - Math.random());

        for (let i = 0; i < count; i++) {
            const element = shuffled[i] as HTMLElement;

            // Store original filter value
            originalStyles.set(element, element.style.filter || '');

            // Apply random blur intensity
            const blurAmount = Math.random() * 5 + 1; // 1-6px blur
            element.style.filter = `${element.style.filter || ''} blur(${blurAmount}px)`;

            // Add transition for smooth effect
            element.style.transition = 'filter 0.5s ease-in-out';
        }
    };

    // Apply initial blur
    applyRandomBlur();

    // Change blurred elements every few seconds
    const intervalId = setInterval(applyRandomBlur, 3000);

    // Clean up after a certain duration
    setTimeout(() => {
        clearInterval(intervalId);

        // Restore all elements to original state with transition
        originalStyles.forEach((style, element) => {
            (element as HTMLElement).style.filter = style;
        });
    }, 15000);
};

export default randomBlur;