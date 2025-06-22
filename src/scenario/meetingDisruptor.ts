// src/scenario/meetingDisruptor.ts

import {
    keyboardLock,
    fakeError,
    popupPrank,
    randomSounds
} from '../pranks/index';

/**
 * A prank scenario designed to disrupt meetings or presentations.
 * Shows fake errors and popups that appear to be system issues.
 * 
 * @param {boolean} includeSound - Whether to include sound effects (default: false)
 */
const meetingDisruptor = (includeSound: boolean = false): void => {
    // Show a fake error first
    fakeError('Critical system update required');

    // Lock keyboard to prevent easy dismissal
    setTimeout(() => {
        keyboardLock();
    }, 2000);

    // Start showing random popups
    setTimeout(() => {
        popupPrank();
    }, 4000);

    // Optionally add random sounds if specified
    if (includeSound) {
        setTimeout(() => {
            randomSounds();
        }, 6000);
    }
};

export default meetingDisruptor;