// src/scenario/gradualEscalation.ts

import {
    mouseTrail,
    randomTyping,
    shakeElement,
    floatingObject,
    fakeError,
    flipScreen,
    randomSounds,
    confettiExplosion
} from '../pranks/index';

/**
 * A scenario that starts with subtle pranks and gradually escalates to more noticeable ones.
 * Perfect for pranking someone over a longer period of time.
 * 
 * @param {number} baseDelay - Base delay in milliseconds between pranks (default: 30000)
 * @param {boolean} fastMode - If true, reduces delays for quicker demonstration (default: false)
 */
const gradualEscalation = (baseDelay: number = 30000, fastMode: boolean = false): void => {
    // Scale timing based on fast mode
    const delayMultiplier = fastMode ? 0.1 : 1;
    const getDelay = (factor: number) => Math.floor(baseDelay * factor * delayMultiplier);

    // Stage 1: Subtle effects (mouse trail)
    mouseTrail();
    console.log('PrankJS: Gradual escalation started - Stage 1/5');

    // Stage 2: Slightly more noticeable (random typing in a field)
    setTimeout(() => {
        randomTyping();
        console.log('PrankJS: Stage 2/5 activated');
    }, getDelay(1));

    // Stage 3: Clearly visible (shaking elements)
    setTimeout(() => {
        shakeElement('button');
        shakeElement('a');
        shakeElement('input');
        console.log('PrankJS: Stage 3/5 activated');
    }, getDelay(2));

    // Stage 4: Very noticeable (floating objects)
    setTimeout(() => {
        floatingObject({
            url: 'https://cdn-icons-png.flaticon.com/512/1168/1168643.png',
            width: '80px',
            height: '80px',
            animate: true,
            clickable: true
        });
        randomSounds();
        console.log('PrankJS: Stage 4/5 activated');
    }, getDelay(3));

    // Stage 5: Impossible to ignore (screen flip, error, confetti)
    setTimeout(() => {
        flipScreen();

        setTimeout(() => {
            fakeError('System prank detected!');

            setTimeout(() => {
                confettiExplosion();
            }, 2000);
        }, 3000);

        console.log('PrankJS: Final stage 5/5 activated');
    }, getDelay(4));

    // Create a progress indicator for the prank if not in fast mode
    if (!fastMode) {
        const indicator = document.createElement('div');
        indicator.style.position = 'fixed';
        indicator.style.bottom = '10px';
        indicator.style.right = '10px';
        indicator.style.background = 'rgba(0,0,0,0.7)';
        indicator.style.color = 'white';
        indicator.style.padding = '5px 10px';
        indicator.style.borderRadius = '5px';
        indicator.style.fontSize = '12px';
        indicator.style.zIndex = '9999';
        indicator.style.opacity = '0.7';
        indicator.textContent = 'Pranks active: 1/5';
        document.body.appendChild(indicator);

        // Update the indicator as pranks progress
        let currentStage = 1;
        const updateInterval = setInterval(() => {
            if (currentStage < 5) {
                currentStage++;
                indicator.textContent = `Pranks active: ${currentStage}/5`;
            } else {
                clearInterval(updateInterval);
                setTimeout(() => {
                    indicator.style.background = 'rgba(0,128,0,0.7)';
                    indicator.textContent = 'Prank complete!';

                    setTimeout(() => {
                        if (document.body.contains(indicator)) {
                            document.body.removeChild(indicator);
                        }
                    }, 3000);
                }, 5000);
            }
        }, baseDelay);
    }
};

export default gradualEscalation;