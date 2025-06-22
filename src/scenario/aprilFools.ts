// src/scenario/aprilFools.ts

import {
    randomRedirect,
    gravitySwitch,
    disappearingElements,
    fakeLoadingScreen,
    confettiExplosion
} from '../pranks/index';

/**
 * A comprehensive April Fools prank scenario.
 * Combines multiple pranks in sequence for maximum surprise.
 * 
 * @param {string[]} redirectUrls - Optional array of URLs to redirect links to
 */
const aprilFools = (redirectUrls?: string[]): void => {
    // Start with a fake loading screen
    fakeLoadingScreen();

    // After loading completes (approx. 8 seconds), start with gravity effect
    setTimeout(() => {
        gravitySwitch();
    }, 8000);

    // After gravity completes, start disappearing elements
    setTimeout(() => {
        disappearingElements();
    }, 12000);

    // After elements reappear, change links on the page
    setTimeout(() => {
        const urls = redirectUrls || [
            'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Rick Roll
            'https://isitchristmas.com/',
            'https://crouton.net/',
            'https://theuselessweb.com/'
        ];
        randomRedirect(urls);
    }, 17000);

    // Finale: Confetti explosion
    setTimeout(() => {
        confettiExplosion();
    }, 22000);
};

export default aprilFools;