/**
 * Displays a fake error message overlay on the screen.
 * 
 * @param message - The error message to display (defaults to a generic error message)
 * @returns {void}
 */
const fakeError = (message: string = "An unexpected error has occurred."): void => {
    // Create the error overlay container
    const errorOverlay = document.createElement('div');
    errorOverlay.style.position = 'fixed';
    errorOverlay.style.top = '0';
    errorOverlay.style.left = '0';
    errorOverlay.style.width = '100%';
    errorOverlay.style.height = '100%';
    errorOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    errorOverlay.style.zIndex = '99999';
    errorOverlay.style.display = 'flex';
    errorOverlay.style.alignItems = 'center';
    errorOverlay.style.justifyContent = 'center';

    // Create the error message container
    const errorBox = document.createElement('div');
    errorBox.style.backgroundColor = '#fff';
    errorBox.style.padding = '20px';
    errorBox.style.borderRadius = '8px';
    errorBox.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    errorBox.style.maxWidth = '80%';
    errorBox.style.textAlign = 'center';

    // Create the error icon
    const errorIcon = document.createElement('div');
    errorIcon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#FF3A30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12" y2="16"></line>
    </svg>
  `;
    errorIcon.style.marginBottom = '15px';

    // Create the error title
    const errorTitle = document.createElement('h2');
    errorTitle.textContent = 'Error';
    errorTitle.style.color = '#FF3A30';
    errorTitle.style.margin = '0 0 10px 0';
    errorTitle.style.fontFamily = 'Arial, sans-serif';

    // Create the error message
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.style.margin = '0 0 20px 0';
    errorMessage.style.fontFamily = 'Arial, sans-serif';
    errorMessage.style.color = '#333';

    // Create the OK button
    const okButton = document.createElement('button');
    okButton.textContent = 'OK';
    okButton.style.backgroundColor = '#007AFF';
    okButton.style.color = '#fff';
    okButton.style.border = 'none';
    okButton.style.borderRadius = '4px';
    okButton.style.padding = '8px 16px';
    okButton.style.cursor = 'pointer';
    okButton.style.fontFamily = 'Arial, sans-serif';
    okButton.style.fontWeight = 'bold';
    okButton.onclick = () => {
        document.body.removeChild(errorOverlay);
    };

    // Assemble the error box
    errorBox.appendChild(errorIcon);
    errorBox.appendChild(errorTitle);
    errorBox.appendChild(errorMessage);
    errorBox.appendChild(okButton);

    // Add the error box to the overlay
    errorOverlay.appendChild(errorBox);

    // Add the overlay to the page
    document.body.appendChild(errorOverlay);

    // Add a fake error sound if the Audio API is available
    try {
        const errorSound = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YWwGAACBhYqFbF1fdJivrJBhNxlKk9f0xHEjAFTk/vnLUg76R8L+/9uEGdgdKbj///1oGw0t7J0SBgAAAAAAAAAAAAAAU8vwm0XBEoC+GgPZ5McDZLgeAKDO/fS4NRYJxgcJMLj+/9dSIS4ox4sJBgAAAAAAAAAAAAAAs+3/gRtQIbQmBgAAAAAAAAAAAAAAZtj/pjgcBOkMBgAAAAAAAAAAAAAAj9f8gB82HMH2A/r1BRcJCONAAwAAAAAAAAAAiKKvoGBhaMfh27gnDfL6+QwHCQ8AAAAAAAAAAAAAAAA3n8arTRwJxPX7CggB9vr/EAgDAAAAAAAAAAAAAAAAAAAAsOXzijsdA/H6BAwEAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8vX5/QMCAO/v8/kFBQIAAAAAAAAAAAAAAAAAAAAA6+31/AsFAQAAAAAAAAAAAAAAAAAAAADj4On2FBIG8fT5/wYDAQAAAAAAAAAAAAAAAAD3/P8HCAf+/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNz/faVh0AsL7SbCgZ3OrTRBULqbTAYzMkydvLVCUOpJmaQzk2pcJRHA8sNXAmFtrbzo0uFrXVxlYdBJhHFhIJChAEJM3juYQQQxYrmqx1YT4dReMdR2FcUzkAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//9QSwECFwMUAAgACAB4q1VF2m2B8p4HAAAYLgAABwAJAAAAAAAAAAAAAIAAAAAAY2hlY2sxLmpzVVQFAAODIv5adXgLAAEEOAAAAARkAAAAUEsFBgAAAAABAAEATgAAANIHAAAAAA==');
        errorSound.play();
    } catch (e) {
        // If audio playback fails, just continue silently
    }
};

export default fakeError;