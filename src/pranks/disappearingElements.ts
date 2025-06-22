/**
 * Creates a disappearing effect for random elements on the page.
 * Elements will gradually fade out and then back in.
 * 
 * @returns {void}
 */
const disappearingElements = (): void => {
    // Get all elements that can safely be manipulated
    const allElements = Array.from(document.querySelectorAll('p, img, h1, h2, h3, h4, h5, h6, div, span, button, a, li'));

    // Select a random set of elements (up to 5 or 20% of all elements, whichever is smaller)
    const elementsToAffect = Math.min(5, Math.floor(allElements.length * 0.2));
    const selectedElements: HTMLElement[] = [];

    // Select random elements
    for (let i = 0; i < elementsToAffect; i++) {
        const randomIndex = Math.floor(Math.random() * allElements.length);
        const element = allElements[randomIndex] as HTMLElement;

        // Only add the element if it's visible and has content
        if (element.offsetParent !== null &&
            (element.textContent?.trim() || element.tagName === 'IMG')) {
            selectedElements.push(element);
            // Remove from original array to avoid duplicates
            allElements.splice(randomIndex, 1);
        }
    }

    // Apply effect to each selected element
    selectedElements.forEach(element => {
        // Store original opacity
        const originalOpacity = element.style.opacity || '1';
        const originalTransition = element.style.transition || '';

        // Add transition effect
        element.style.transition = 'opacity 2s ease-in-out';

        // Fade out
        element.style.opacity = '0';

        // Fade back in after random delay
        const delay = Math.random() * 3000 + 2000; // 2-5 seconds
        setTimeout(() => {
            element.style.opacity = originalOpacity;

            // Remove transition after element has reappeared
            setTimeout(() => {
                element.style.transition = originalTransition;
            }, 2000);
        }, delay);
    });
};

export default disappearingElements;