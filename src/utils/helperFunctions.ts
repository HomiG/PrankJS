export function randomMilliseconds(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export const randomInteger = (min: number = 1, max: number = 10): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Creates a fixed overlay container for pranks.
 * Common pattern used in many pranks for displaying elements on top of page content.
 * 
 * @param zIndex - The z-index for the container (default: 9999)
 * @param backgroundColor - Optional background color for the overlay
 * @returns The created container element
 */
export function createOverlayContainer(
    zIndex: number = 9999,
    backgroundColor?: string
): HTMLDivElement {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = zIndex.toString();
    
    if (backgroundColor) {
        container.style.backgroundColor = backgroundColor;
    }
    
    document.body.appendChild(container);
    return container;
}

/**
 * Injects CSS styles into the document head.
 * Common pattern for adding animations and custom styles.
 * 
 * @param css - The CSS content to inject
 * @returns The created style element
 */
export function injectStyles(css: string): HTMLStyleElement {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    return style;
}

/**
 * Generates a random position within the viewport.
 * 
 * @param padding - Percentage padding from edges (default: 10)
 * @returns Object with top and left percentages
 */
export function randomPosition(padding: number = 10): { top: string; left: string } {
    const max = 100 - padding * 2;
    const top = Math.random() * max + padding;
    const left = Math.random() * max + padding;
    return {
        top: `${top}%`,
        left: `${left}%`
    };
}

/**
 * Selects random elements from an array.
 * 
 * @param array - The array to select from
 * @param count - Number of elements to select
 * @returns Array of randomly selected elements
 */
export function selectRandomElements<T>(array: T[], count: number): T[] {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, array.length));
}

/**
 * Creates a cleanup function that will run after a specified duration.
 * 
 * @param callback - The cleanup function to run
 * @param duration - Duration in milliseconds before cleanup
 * @returns The timeout ID
 */
export function scheduleCleanup(callback: () => void, duration: number): number {
    return window.setTimeout(callback, duration);
}