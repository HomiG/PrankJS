/**
 * Temporarily locks keyboard input, preventing the user from typing.
 * 
 * @returns {void}
 */
const keyboardLock = (): void => {
    // Create an overlay notification
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.fontFamily = 'Arial, sans-serif';
    notification.style.zIndex = '9999';
    notification.style.textAlign = 'center';
    notification.textContent = '⌨️ Keyboard temporarily locked';

    document.body.appendChild(notification);

    // Keep track of original focus
    const originalActiveElement = document.activeElement;

    // Store any active input or textarea elements that had focus
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (input === document.activeElement) {
            (input as HTMLElement).blur();
        }
    });

    // Function to prevent keyboard input
    const preventKeyboard = (e: KeyboardEvent) => {
        e.preventDefault();
        e.stopPropagation();

        // Make the notification flash to indicate keyboard is locked
        notification.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
        setTimeout(() => {
            notification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }, 100);

        return false;
    };

    // Add event listeners
    document.addEventListener('keydown', preventKeyboard, true);
    document.addEventListener('keypress', preventKeyboard, true);
    document.addEventListener('keyup', preventKeyboard, true);

    // Set a countdown
    let timeLeft = 5;
    const updateCountdown = () => {
        notification.textContent = `⌨️ Keyboard locked (${timeLeft}s)`;
        timeLeft--;

        if (timeLeft >= 0) {
            setTimeout(updateCountdown, 1000);
        } else {
            // Remove lock after countdown
            document.removeEventListener('keydown', preventKeyboard, true);
            document.removeEventListener('keypress', preventKeyboard, true);
            document.removeEventListener('keyup', preventKeyboard, true);

            // Update notification
            notification.textContent = '⌨️ Keyboard unlocked!';
            notification.style.backgroundColor = 'rgba(0, 128, 0, 0.8)';

            // Remove notification after a brief delay
            setTimeout(() => {
                document.body.removeChild(notification);

                // Restore focus to original element if possible
                if (originalActiveElement && originalActiveElement instanceof HTMLElement) {
                    originalActiveElement.focus();
                }
            }, 1500);
        }
    };

    updateCountdown();
};

export default keyboardLock;