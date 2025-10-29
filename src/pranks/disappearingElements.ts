import { selectRandomElements } from '../utils/helperFunctions';

/**
 * Creates a disappearing effect for random elements on the page.
 * Elements will gradually fade out and then back in.
 * 
 * @returns {void}
 */
const disappearingElements = (): void => {
    // Get all elements that can safely be manipulated
    const allElements = Array.from(
        document.querySelectorAll('p, img, h1, h2, h3, h4, h5, h6, div, span, button, a, li')
    );

    // Filter to only visible elements with content
    const visibleElements = allElements.filter(element => {
        const htmlElement = element as HTMLElement;
        return htmlElement.offsetParent !== null &&
               (htmlElement.textContent?.trim() || htmlElement.tagName === 'IMG');
    });

    // Select a random set of elements (up to 5 or 20% of all elements, whichever is smaller)
    const count = Math.min(5, Math.floor(visibleElements.length * 0.2));
    const selectedElements = selectRandomElements(visibleElements, count) as HTMLElement[];

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
        const delay = Math.random() * 3000 + 2000;
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