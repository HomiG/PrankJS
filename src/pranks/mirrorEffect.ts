const mirrorEffect = (): void => {
    const body = document.body;
    body.style.transform = 'scaleX(-1)';
    body.style.transition = 'transform 0.5s ease-in-out';
};

// Implementation of the mirrorEffect prank

export default mirrorEffect;