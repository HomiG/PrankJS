// src/scenario/officePrank.ts

import {
    shakeElement,
    randomFloatingObjects,
    mouseTrail,
    jumbleText
} from '../pranks/index';

/**
 * A prank scenario designed for office environments.
 * Gradually applies several pranks that escalate in noticeable effect.
 * 
 * @param {number} timing - Time in milliseconds between each prank activation (default: 5000)
 */
const officePrank = (timing: number = 5000): void => {
    // Start with subtle mouse trail effect
    mouseTrail();

    // After a delay, make UI elements shake
    setTimeout(() => {
        shakeElement('button');
        shakeElement('.header');
        shakeElement('input');
    }, timing);

    // After another delay, jumble some visible text
    setTimeout(() => {
        jumbleText();
    }, timing * 2);

    // Finally, show floating objects (most noticeable effect)
    setTimeout(() => {
        randomFloatingObjects('https://cdn-icons-png.flaticon.com/512/3112/3112946.png');
    }, timing * 3);
};

export default officePrank;