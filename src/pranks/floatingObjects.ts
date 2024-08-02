const floatingObject = (url: string): void => {
    const img = document.createElement('img');
    img.src = url;
    img.style.position = 'fixed';
    img.style.zIndex = '9999';
    img.style.width = '100px';
    img.style.height = '100px';
    document.body.appendChild(img);

    function moveImage(): void {
        img.style.top = `${Math.random() * window.innerHeight}px`;
        img.style.left = `${Math.random() * window.innerWidth}px`;
    }

    setInterval(moveImage, 1000);
};

export default floatingObject;
