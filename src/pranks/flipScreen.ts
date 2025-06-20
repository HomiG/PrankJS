const flipScreen = (): void => {
    const body = document.body;
    body.style.transform = 'rotate(180deg)';
    body.style.transition = 'transform 0.5s ease-in-out';
};

// Implementation of the flipScreen prank

export default flipScreen;