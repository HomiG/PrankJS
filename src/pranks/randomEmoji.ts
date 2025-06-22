/**
 * Displays random emojis that float across the screen.
 * 
 * @returns {void}
 */
const randomEmoji = (): void => {
    // Array of emojis to display
    const emojis = [
        '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃',
        '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '😚', '😙',
        '🥲', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫',
        '🤔', '🤐', '🤨', '😐', '😑', '😶', '😶‍🌫️', '😏', '😒', '🙄',
        '😬', '😮‍💨', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷', '🤒'
    ];

    // Create container for emojis
    const emojiContainer = document.createElement('div');
    emojiContainer.style.position = 'fixed';
    emojiContainer.style.top = '0';
    emojiContainer.style.left = '0';
    emojiContainer.style.width = '100%';
    emojiContainer.style.height = '100%';
    emojiContainer.style.pointerEvents = 'none';
    emojiContainer.style.zIndex = '9999';
    document.body.appendChild(emojiContainer);

    // Function to create a random emoji element
    const createEmoji = () => {
        // Create the emoji element
        const emoji = document.createElement('div');
        emoji.style.position = 'absolute';
        emoji.style.fontSize = `${Math.random() * 20 + 20}px`; // Random size between 20-40px
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        // Set random starting position (from bottom of the screen)
        emoji.style.left = `${Math.random() * 100}%`;
        emoji.style.top = '100%';

        // Add animation
        emoji.style.animation = `float-emoji ${Math.random() * 5 + 5}s linear forwards`;

        // Add to container
        emojiContainer.appendChild(emoji);

        // Remove emoji after animation completes
        setTimeout(() => {
            if (emojiContainer.contains(emoji)) {
                emojiContainer.removeChild(emoji);
            }
        }, 10000);
    };

    // Add CSS animation for floating emojis
    const style = document.createElement('style');
    style.textContent = `
    @keyframes float-emoji {
      0% {
        transform: translate(0, 0) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translate(${Math.random() > 0.5 ? '+' : '-'}${Math.random() * 100 + 50}px, -${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg);
        opacity: 0;
      }
    }
  `;
    document.head.appendChild(style);

    // Create emojis at random intervals
    const createEmojis = () => {
        createEmoji();

        // Schedule next emoji creation
        setTimeout(createEmojis, Math.random() * 500 + 200);
    };

    // Start creating emojis
    createEmojis();

    // Clean up after 10 seconds
    setTimeout(() => {
        document.body.removeChild(emojiContainer);
        document.head.removeChild(style);
    }, 10000);
};

export default randomEmoji;