import floatingObjectWithOptions from './floatingObject';
import { randomPosition } from '../utils/helperFunctions';

/**
 * Creates a simple floating object that moves to random positions.
 * This is a simplified wrapper around the full-featured floatingObject function.
 * 
 * @param url - The URL of the image to display
 * @returns void
 */
const floatingObject = (url: string): void => {
    const position = randomPosition();
    const img = floatingObjectWithOptions({
        url,
        width: '100px',
        height: '100px',
        initialPosition: position,
        animate: false,
        clickable: false
    });

    // Move to random positions periodically
    function moveImage(): void {
        const newPosition = randomPosition();
        img.style.top = newPosition.top;
        img.style.left = newPosition.left;
    }

    setInterval(moveImage, 1000);
};

export default floatingObject;
