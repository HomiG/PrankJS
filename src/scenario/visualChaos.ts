// src/scenario/visualChaos.ts

import {
    invertColors,
    randomBlur,
    flipScreen,
    randomEmoji,
    mirrorEffect
} from '../pranks/index';

/**
 * A prank scenario that causes visual chaos on the screen.
 * Combines various visual effects for maximum impact.
 * 
 * @param {number} duration - Duration in milliseconds for the entire scenario (default: 15000)
 */
const visualChaos = (duration: number = 15000): void => {
    // Start with a color inversion
    invertColors(3000, 0, 1);

    // Add some random emojis floating around
    setTimeout(() => {
        randomEmoji();
    }, 1000);

    // Add blur effects to random elements
    setTimeout(() => {
        randomBlur();
    }, 3000);

    // Flip the screen briefly
    setTimeout(() => {
        flipScreen();
    }, 5000);

    // Mirror the page for added confusion
    setTimeout(() => {
        mirrorEffect();
    }, 7000);

    // Clean up after the specified duration
    setTimeout(() => {
        // Return screen to normal state
        document.body.style.filter = '';
        document.body.style.transform = '';

        // Show completion notification
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.backgroundColor = 'rgba(0, 128, 0, 0.8)';
        notification.style.color = 'white';
        notification.style.padding = '10px 20px';
        notification.style.borderRadius = '5px';
        notification.style.zIndex = '9999';
        notification.textContent = '🎉 Visual Chaos Completed!';
        document.body.appendChild(notification);

        setTimeout(() => {
            document.body.removeChild(notification);
        }, 3000);
    }, duration);
};

export default visualChaos;