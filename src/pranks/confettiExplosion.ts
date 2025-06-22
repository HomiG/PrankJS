/**
 * Creates a festive confetti explosion effect on the screen.
 * 
 * @returns {void}
 */
const confettiExplosion = (): void => {
    // Create a container for the confetti
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';
    document.body.appendChild(container);

    // Confetti configuration
    const confettiCount = 150;
    const colors = [
        '#f44336', '#e91e63', '#9c27b0', '#673ab7',
        '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4',
        '#009688', '#4caf50', '#8bc34a', '#cddc39',
        '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'
    ];

    // Function to create a confetti piece
    const createConfetti = () => {
        // Create confetti piece
        const confetti = document.createElement('div');

        // Random size between 5px and 10px
        const size = Math.random() * 5 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;

        // Random shape (circle or square)
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';

        // Random color
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Position at the center of the screen initially
        confetti.style.position = 'absolute';
        confetti.style.left = `50%`;
        confetti.style.top = `50%`;

        // Add to container
        container.appendChild(confetti);

        // Random direction and distance
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 250 + 50; // 50-300px from center

        // Final position calculation
        const x = distance * Math.cos(angle);
        const y = distance * Math.sin(angle);

        // Random initial rotation
        const rotation = Math.random() * 360;

        // Random duration between 1-3 seconds
        const duration = Math.random() * 2 + 1;

        // Animation
        confetti.animate([
            {
                transform: `translate(-50%, -50%) rotate(0deg)`,
                opacity: 1
            },
            {
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotation}deg)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)',
            fill: 'forwards'
        });

        // Remove confetti after animation
        setTimeout(() => {
            if (container.contains(confetti)) {
                container.removeChild(confetti);
            }
        }, duration * 1000);
    };

    // Create initial explosion of confetti
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(createConfetti, Math.random() * 500); // Stagger creation over 500ms
    }

    // Add celebration sound effect
    try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

        // Create short celebration sound
        const createCelebrationSound = () => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.type = 'triangle';
            oscillator.frequency.setValueAtTime(500, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
            oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.2);

            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.2);
        };

        createCelebrationSound();
    } catch (e) {
        // Silently fail if Web Audio API is not supported
    }

    // Clean up after 3 seconds
    setTimeout(() => {
        document.body.removeChild(container);
    }, 3000);
};

export default confettiExplosion;