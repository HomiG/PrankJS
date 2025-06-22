/**
 * Creates a trail of elements that follow the mouse cursor.
 * 
 * @returns {void}
 */
const mouseTrail = (): void => {
    // Define trail parameters
    const trailLength = 20;
    const trailElements: HTMLDivElement[] = [];
    const colors = [
        '#FF5252', '#FF4081', '#E040FB', '#7C4DFF',
        '#536DFE', '#448AFF', '#40C4FF', '#18FFFF',
        '#64FFDA', '#69F0AE', '#B2FF59', '#EEFF41'
    ];

    // Create container for trail elements
    const trailContainer = document.createElement('div');
    trailContainer.style.position = 'fixed';
    trailContainer.style.top = '0';
    trailContainer.style.left = '0';
    trailContainer.style.width = '100%';
    trailContainer.style.height = '100%';
    trailContainer.style.pointerEvents = 'none'; // Ensures the trail doesn't interfere with clicks
    trailContainer.style.zIndex = '9999';
    document.body.appendChild(trailContainer);

    // Create trail elements
    for (let i = 0; i < trailLength; i++) {
        const trail = document.createElement('div');
        trail.style.position = 'absolute';
        trail.style.width = `${12 - i * 0.5}px`;
        trail.style.height = `${12 - i * 0.5}px`;
        trail.style.borderRadius = '50%';
        trail.style.backgroundColor = colors[i % colors.length];
        trail.style.opacity = `${(trailLength - i) / trailLength}`;
        trail.style.transform = 'translate(-50%, -50%)';
        trail.style.boxShadow = `0 0 ${6 - i * 0.2}px ${colors[i % colors.length]}`;

        trailContainer.appendChild(trail);
        trailElements.push(trail);
    }

    // Store mouse position
    const mousePosition = { x: 0, y: 0 };

    // Update mouse position on move
    const handleMouseMove = (e: MouseEvent) => {
        mousePosition.x = e.clientX;
        mousePosition.y = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Update trail positions with delay
    const positions: { x: number, y: number }[] = Array(trailLength).fill({ x: 0, y: 0 });

    const updateTrail = () => {
        // Update positions array, shifting all elements
        positions.pop();
        positions.unshift({ x: mousePosition.x, y: mousePosition.y });

        // Update trail elements to follow the positions
        trailElements.forEach((element, index) => {
            const position = positions[index] || { x: 0, y: 0 };
            element.style.left = `${position.x}px`;
            element.style.top = `${position.y}px`;
        });

        requestAnimationFrame(updateTrail);
    };

    updateTrail();

    // Clean up after 10 seconds
    setTimeout(() => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.body.removeChild(trailContainer);
    }, 10000);
};

export default mouseTrail;