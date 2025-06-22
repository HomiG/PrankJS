/**
 * Modifies links on the page to redirect to random URLs.
 * 
 * @param {string[]} urls - Array of URLs to redirect to (defaults to harmless sites if not provided)
 * @returns {void}
 */
const randomRedirect = (urls: string[] = [
    'https://www.google.com',
    'https://www.youtube.com',
    'https://www.wikipedia.org',
    'https://www.github.com',
    'https://www.reddit.com',
    'https://www.twitter.com'
]): void => {
    // Find all anchor tags
    const links = document.querySelectorAll('a');

    // Store original URLs to restore later
    const originalUrls = new Map<HTMLAnchorElement, string>();

    // Function to get a random URL from the array
    const getRandomUrl = (): string => {
        return urls[Math.floor(Math.random() * urls.length)];
    };

    // Create a notification to let users know links have been changed
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    notification.style.color = 'white';
    notification.style.padding = '12px 20px';
    notification.style.borderRadius = '5px';
    notification.style.fontFamily = 'Arial, sans-serif';
    notification.style.zIndex = '9999';
    notification.style.maxWidth = '300px';
    notification.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    notification.textContent = '🔄 Links on this page have been scrambled! They will return to normal in 15 seconds.';

    document.body.appendChild(notification);

    // Modify each link
    links.forEach((link) => {
        const anchor = link as HTMLAnchorElement;

        // Skip if it's a special link (e.g., javascript:, mailto:)
        if (!anchor.href || anchor.href.startsWith('javascript:') || anchor.href.startsWith('mailto:')) {
            return;
        }

        // Store original href
        originalUrls.set(anchor, anchor.href);

        // Change href to a random URL
        anchor.href = getRandomUrl();

        // Add visual indication
        anchor.style.textDecoration = 'underline wavy red';
        anchor.title = 'This link has been redirected as a prank!';

        // Optional: Add click handler to show a warning
        anchor.addEventListener('click', (e) => {
            if (confirm('This link has been modified as a prank. Do you want to continue to a random website?')) {
                return true;
            } else {
                e.preventDefault();
                return false;
            }
        }, { once: true });
    });

    // Restore original URLs after 15 seconds
    setTimeout(() => {
        originalUrls.forEach((originalUrl, anchor) => {
            anchor.href = originalUrl;
            anchor.style.textDecoration = '';
            anchor.title = '';
        });

        // Update notification
        notification.textContent = '✅ Links have been restored to normal!';
        notification.style.backgroundColor = 'rgba(0, 128, 0, 0.8)';

        // Remove notification after a delay
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 2000);
    }, 15000);
};

export default randomRedirect;