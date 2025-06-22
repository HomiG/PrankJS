/**
 * Hijacks the scrolling behavior of the page, making it unpredictable.
 * 
 * @returns {void}
 */
const hijackScroll = (): void => {
    // Store the original scroll position
    const originalScrollY = window.scrollY;

    // Variable to control if we're currently in an auto-scroll
    let isAutoScrolling = false;

    // Create notification
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.fontFamily = 'Arial, sans-serif';
    notification.style.zIndex = '9999';
    notification.style.textAlign = 'center';
    notification.innerHTML = '🔄 Scroll hijacked for 10 seconds!';
    document.body.appendChild(notification);

    // Function to scroll to a random position
    const scrollToRandom = () => {
        // Mark that we're auto-scrolling
        isAutoScrolling = true;

        // Calculate a random position
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );

        // Random target between 0 and document height
        const target = Math.floor(Math.random() * documentHeight);

        // Scroll to the target with smooth animation
        window.scrollTo({
            top: target,
            behavior: 'smooth'
        });

        // Update the notification with the current scroll position
        notification.innerHTML = `🔄 Scroll hijacked! Going to position ${target}px`;

        // Reset the auto-scrolling flag after the animation is likely complete
        setTimeout(() => {
            isAutoScrolling = false;
        }, 1000);
    };

    // Function to make scrolling unpredictable
    const reverseScroll = (e: WheelEvent) => {
        // If we're already auto-scrolling, don't interfere
        if (isAutoScrolling) return;

        // Prevent the default scroll behavior
        e.preventDefault();

        // Reverse the scroll direction with some amplification
        const scrollFactor = -2; // Negative for reversal, amplified
        window.scrollBy({
            top: e.deltaY * scrollFactor,
            behavior: 'smooth'
        });
    };

    // Add event listeners
    window.addEventListener('wheel', reverseScroll, { passive: false });

    // Execute random scrolls periodically
    const scrollInterval = setInterval(() => {
        scrollToRandom();
    }, 2000); // Every 2 seconds

    // Create a countdown in the notification
    let secondsLeft = 10;
    const countdownInterval = setInterval(() => {
        secondsLeft--;
        if (secondsLeft > 0) {
            notification.innerHTML = `🔄 Scroll hijacked! ${secondsLeft} seconds remaining...`;
        }
    }, 1000);

    // Clean up after 10 seconds
    setTimeout(() => {
        // Remove event listeners
        window.removeEventListener('wheel', reverseScroll);

        // Clear intervals
        clearInterval(scrollInterval);
        clearInterval(countdownInterval);

        // Restore original scroll position
        window.scrollTo({
            top: originalScrollY,
            behavior: 'smooth'
        });

        // Update notification
        notification.innerHTML = '✅ Scroll behavior restored';
        notification.style.backgroundColor = 'rgba(0, 128, 0, 0.8)';

        // Remove notification after a delay
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 2000);
    }, 10000);
};

export default hijackScroll;