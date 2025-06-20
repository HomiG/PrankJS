// prankjs.d.ts

declare module 'prankjs' {
    /**
     * Namespace containing all available pranks
     */
    export namespace Pranks {
        /**
         * Creates random floating objects with the given image URL
         * @param imageUrl - The URL of the image to use for floating objects
         */
        export function randomFloatingObjects(imageUrl: string): void;

        /**
         * Inverts the colors of the webpage
         * @param initialDuration - Initial duration of the inversion in milliseconds (default: 3000)
         * @param delay - Delay between each inversion in milliseconds (default: 0)
         * @param repetition - Number of times to repeat the inversion (default: 3)
         */
        export function invertColors(initialDuration?: number, delay?: number, repetition?: number): void;

        /**
         * Displays a fake error message
         * @param message - The error message to display
         */
        export function fakeError(message: string): void;

        /**
         * Flips the screen upside down
         * @param duration - Duration between flips in milliseconds
         */
        export function flipScreen(duration: number): void;

        /**
         * Creates a single floating image on the screen
         * @param url - The URL of the image to float
         */
        export function floatingObject(url: string): void;

        /**
         * Applies a gravity effect to elements on the page making them appear to fall
         * @param initialDuration - Initial duration of the gravity effect in milliseconds
         * @param delay - Delay before applying the effect in milliseconds
         * @param repetition - Number of times to repeat the effect
         */
        export function gravitySwitch(initialDuration?: number, delay?: number, repetition?: number): void;

        /**
         * Adds a shake effect to specified elements
         * @param selector - CSS selector for the elements to shake
         */
        export function shakeElement(selector: string): void;

        /**
         * Creates a disappearing effect for elements
         */
        export function disappearingElements(): void;

        /**
         * Displays a fake loading screen
         */
        export function fakeLoadingScreen(): void;

        /**
         * Hijacks the scrolling behavior of the page
         */
        export function hijackScroll(): void;

        /**
         * Jumbles the text content of elements
         */
        export function jumbleText(): void;

        /**
         * Locks keyboard input
         */
        export function keyboardLock(): void;

        /**
         * Applies a mirror effect to the page
         */
        export function mirrorEffect(): void;

        /**
         * Creates a trail that follows the mouse cursor
         */
        export function mouseTrail(): void;

        /**
         * Displays random popup messages
         */
        export function popupPrank(): void;

        /**
         * Applies random blur effects to elements
         */
        export function randomBlur(): void;

        /**
         * Displays random emojis on the screen
         */
        export function randomEmoji(): void;

        /**
         * Redirects links to random URLs
         * @param urls - Array of URLs to redirect to
         */
        export function randomRedirect(urls: string[]): void;

        /**
         * Plays random sounds at unpredictable intervals
         */
        export function randomSounds(): void;

        /**
         * Simulates random keyboard typing
         */
        export function randomTyping(): void;

        /**
         * Creates a confetti explosion effect
         */
        export function confettiExplosion(): void;
    }

    /**
     * Namespace containing all available scenarios
     * (combinations of multiple pranks)
     */
    export namespace Scenarios {
        /**
         * Demo disruption scenario that combines multiple pranks
         */
        export function demoDisruption(): void;
    }

    // Add utility functions if you want to expose them
    export namespace Utils {
        /**
         * Generates a random integer between min and max (inclusive)
         * @param min - Minimum value (default: 1)
         * @param max - Maximum value (default: 10)
         */
        export function randomInteger(min?: number, max?: number): number;

        /**
         * Generates a random millisecond value between min and max
         * @param min - Minimum value
         * @param max - Maximum value
         */
        export function randomMilliseconds(min: number, max: number): number;
    }
}