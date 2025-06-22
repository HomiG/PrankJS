/**
 * Creates a fake loading screen overlay that stays for a random amount of time.
 * 
 * @returns {void}
 */
const fakeLoadingScreen = (): void => {
    // Create loading overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.zIndex = '99999';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';

    // Create loading spinner
    const spinner = document.createElement('div');
    spinner.style.width = '50px';
    spinner.style.height = '50px';
    spinner.style.border = '5px solid rgba(255, 255, 255, 0.3)';
    spinner.style.borderTop = '5px solid #ffffff';
    spinner.style.borderRadius = '50%';
    spinner.style.animation = 'spin 1s linear infinite';

    // Add keyframe animation for the spinner
    const style = document.createElement('style');
    style.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
    document.head.appendChild(style);

    // Create loading text
    const text = document.createElement('p');
    text.textContent = 'Loading...';
    text.style.color = '#ffffff';
    text.style.fontFamily = 'Arial, sans-serif';
    text.style.fontSize = '18px';
    text.style.marginTop = '20px';

    // Create progress bar
    const progressContainer = document.createElement('div');
    progressContainer.style.width = '250px';
    progressContainer.style.height = '10px';
    progressContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    progressContainer.style.borderRadius = '5px';
    progressContainer.style.marginTop = '20px';

    const progressBar = document.createElement('div');
    progressBar.style.height = '100%';
    progressBar.style.width = '0%';
    progressBar.style.backgroundColor = '#ffffff';
    progressBar.style.borderRadius = '5px';
    progressBar.style.transition = 'width 0.5s';

    progressContainer.appendChild(progressBar);

    // Add elements to overlay
    overlay.appendChild(spinner);
    overlay.appendChild(text);
    overlay.appendChild(progressContainer);

    // Add overlay to document
    document.body.appendChild(overlay);

    // Set a random progress duration between 3 and 8 seconds
    const duration = Math.random() * 5000 + 3000;
    const interval = setInterval(() => {
        const currentWidth = parseFloat(progressBar.style.width) || 0;
        const increment = Math.random() * 10 + 5; // Random increment between 5-15%

        if (currentWidth < 85) {
            progressBar.style.width = Math.min(currentWidth + increment, 85) + '%';
        }
    }, 500);

    // After the duration, complete the loading quickly and remove overlay
    setTimeout(() => {
        clearInterval(interval);

        // Complete progress
        progressBar.style.width = '100%';
        text.textContent = 'Complete!';

        // Remove overlay after completion
        setTimeout(() => {
            document.body.removeChild(overlay);
            document.head.removeChild(style);
        }, 1000);
    }, duration);
};

export default fakeLoadingScreen;