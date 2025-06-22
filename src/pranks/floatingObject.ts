interface FloatingObjectOptions {
  url: string;
  width?: string;
  height?: string;
  initialPosition?: {
    top: string;
    left: string;
  };
  animate?: boolean;
  clickable?: boolean;
}

/**
 * Creates a floating object on the page that can optionally be animated or clickable.
 * @param options Configuration options for the floating object
 * @returns The created image element
 */
const floatingObject = (options: FloatingObjectOptions): HTMLImageElement => {
  const { 
    url, 
    width = '100px', 
    height = '100px',
    initialPosition = { top: '10%', left: '10%' },
    animate = false,
    clickable = false
  } = options;
  
  const img = document.createElement('img');
  img.src = url;
  img.style.position = 'fixed';
  img.style.zIndex = '9999';
  img.style.width = width;
  img.style.height = height;
  img.style.top = initialPosition.top;
  img.style.left = initialPosition.left;
  img.style.transition = 'all 0.5s ease-in-out';
  
  document.body.appendChild(img);
  
  if (animate) {
    let directionX = 1;
    let directionY = 1;
    
    setInterval(() => {
      const rect = img.getBoundingClientRect();
      
      // Check window boundaries
      if (rect.right >= window.innerWidth) directionX = -1;
      if (rect.left <= 0) directionX = 1;
      if (rect.bottom >= window.innerHeight) directionY = -1;
      if (rect.top <= 0) directionY = 1;
      
      // Move the element
      img.style.left = `${rect.left + (5 * directionX)}px`;
      img.style.top = `${rect.top + (5 * directionY)}px`;
    }, 50);
  }
  
  if (clickable) {
    img.style.cursor = 'pointer';
    img.onclick = () => {
      const randomTop = Math.floor(Math.random() * 80) + 10;
      const randomLeft = Math.floor(Math.random() * 80) + 10;
      
      img.style.top = `${randomTop}%`;
      img.style.left = `${randomLeft}%`;
    };
  }
  
  return img;
};

export default floatingObject;