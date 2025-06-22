/**
 * Displays random popup messages at unpredictable intervals.
 * 
 * @returns {void}
 */
const popupPrank = (): void => {
    // Array of funny/random messages
    const messages = [
        "Did you know? Pressing Alt+F4 speeds up your browser!",
        "Your computer has been selected for a free upgrade!",
        "Breaking news: Internet will be shut down for maintenance this weekend!",
        "Congratulations! You're the 1,000,000th visitor!",
        "Warning: Your computer's warranty is about to expire!",
        "Alert: Computer not having enough fun. Please play games immediately.",
        "System notification: Coffee break detected. Continue?",
        "Your PC misses you when you're away.",
        "Important update: Cats have officially taken over the internet.",
        "Secret message: Your coworkers are watching you right now."
    ];

    // Create and show a popup with a message
    const showPopup = (message: string) => {
        // Create popup container
        const popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.top = `${Math.random() * 70 + 10}%`;
        popup.style.left = `${Math.random() * 70 + 10}%`;
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.backgroundColor = 'white';
        popup.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        popup.style.borderRadius = '8px';
        popup.style.padding = '15px';
        popup.style.zIndex = '10000';
        popup.style.maxWidth = '300px';
        popup.style.fontFamily = 'Arial, sans-serif';

        // Create header with title and close button
        const header = document.createElement('div');
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.style.marginBottom = '10px';

        // Random title based on message type
        const title = document.createElement('div');
        title.textContent = message.includes('Warning') || message.includes('Alert')
            ? 'System Alert'
            : message.includes('Congratulations')
                ? 'Congratulations!'
                : 'Information';
        title.style.fontWeight = 'bold';

        // Close button
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;';
        closeButton.style.background = 'none';
        closeButton.style.border = 'none';
        closeButton.style.fontSize = '20px';
        closeButton.style.cursor = 'pointer';
        closeButton.style.padding = '0';
        closeButton.style.lineHeight = '1';
        closeButton.onclick = () => document.body.removeChild(popup);

        header.appendChild(title);
        header.appendChild(closeButton);

        // Message content
        const content = document.createElement('div');
        content.textContent = message;

        // Button area
        const buttonArea = document.createElement('div');
        buttonArea.style.marginTop = '15px';
        buttonArea.style.display = 'flex';
        buttonArea.style.justifyContent = 'flex-end';

        const okButton = document.createElement('button');
        okButton.textContent = 'OK';
        okButton.style.padding = '5px 15px';
        okButton.style.border = 'none';
        okButton.style.backgroundColor = '#007bff';
        okButton.style.color = 'white';
        okButton.style.borderRadius = '4px';
        okButton.style.cursor = 'pointer';
        okButton.onclick = () => document.body.removeChild(popup);

        buttonArea.appendChild(okButton);

        // Assemble popup
        popup.appendChild(header);
        popup.appendChild(content);
        popup.appendChild(buttonArea);

        // Add to document
        document.body.appendChild(popup);

        // Auto-remove after random time
        setTimeout(() => {
            if (document.body.contains(popup)) {
                document.body.removeChild(popup);
            }
        }, Math.random() * 5000 + 5000);
    };

    // Show first popup immediately
    const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
    showPopup(randomMessage());

    // Show more popups at random intervals
    let popupCount = 0;
    const maxPopups = 4;

    const scheduleNextPopup = () => {
        if (popupCount < maxPopups) {
            setTimeout(() => {
                showPopup(randomMessage());
                popupCount++;
                scheduleNextPopup();
            }, Math.random() * 5000 + 2000); // Random interval between 2-7 seconds
        }
    };

    scheduleNextPopup();
};

export default popupPrank;