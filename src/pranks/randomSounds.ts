/**
 * Plays random sounds at unpredictable intervals.
 * 
 * @returns {void}
 */
const randomSounds = (): void => {
    // Array of simple sound effects created with the Web Audio API
    const playSound = (type: string) => {
        try {
            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

            // Create oscillator for the sound
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            switch (type) {
                case 'beep':
                    oscillator.type = 'sine';
                    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                    oscillator.start();
                    oscillator.stop(audioContext.currentTime + 0.2);
                    break;

                case 'boop':
                    oscillator.type = 'sine';
                    oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.3);
                    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                    oscillator.start();
                    oscillator.stop(audioContext.currentTime + 0.3);
                    break;

                case 'ping':
                    oscillator.type = 'triangle';
                    oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1);
                    gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                    oscillator.start();
                    oscillator.stop(audioContext.currentTime + 0.1);
                    break;

                case 'chirp':
                    oscillator.type = 'sine';
                    oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
                    gainNode.gain.setValueAtTime(0.09, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                    oscillator.start();
                    oscillator.stop(audioContext.currentTime + 0.1);
                    break;

                case 'buzz':
                    oscillator.type = 'sawtooth';
                    oscillator.frequency.setValueAtTime(100, audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
                    oscillator.start();
                    oscillator.stop(audioContext.currentTime + 0.2);
                    break;
            }

            // Clean up
            setTimeout(() => {
                gainNode.disconnect();
                oscillator.disconnect();
            }, 500);

        } catch (e) {
            // Silently fail if Web Audio API is not supported
            console.warn('Web Audio API not supported in this browser');
        }
    };

    // Array of sound types
    const soundTypes = ['beep', 'boop', 'ping', 'chirp', 'buzz'];

    // Play a random sound
    const playRandomSound = () => {
        const randomType = soundTypes[Math.floor(Math.random() * soundTypes.length)];
        playSound(randomType);
    };

    // Create a small indicator when sounds play
    const createIndicator = () => {
        const indicator = document.createElement('div');
        indicator.style.position = 'fixed';
        indicator.style.bottom = '20px';
        indicator.style.left = '20px';
        indicator.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        indicator.style.color = 'white';
        indicator.style.padding = '8px 12px';
        indicator.style.borderRadius = '4px';
        indicator.style.fontFamily = 'Arial, sans-serif';
        indicator.style.fontSize = '12px';
        indicator.style.zIndex = '9999';
        indicator.textContent = '🔊 Random sounds active';

        document.body.appendChild(indicator);

        return indicator;
    };

    const indicator = createIndicator();

    // Schedule random sounds
    const playRandomSounds = (remainingCount: number) => {
        if (remainingCount <= 0) {
            // Clean up when done
            if (document.body.contains(indicator)) {
                document.body.removeChild(indicator);
            }
            return;
        }

        // Play a sound
        playRandomSound();

        // Flash the indicator
        indicator.style.backgroundColor = 'rgba(255, 165, 0, 0.9)';
        setTimeout(() => {
            indicator.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        }, 200);

        // Schedule next sound with random delay
        const delay = Math.random() * 3000 + 1000; // 1-4 seconds
        setTimeout(() => {
            playRandomSounds(remainingCount - 1);
        }, delay);
    };

    // Start playing sounds (up to 10 sounds)
    playRandomSounds(10);
};

export default randomSounds;