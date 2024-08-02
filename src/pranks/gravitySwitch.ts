export default function gravitySwitch() {
    // Create a style element
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        @keyframes fall {
            to {
                transform: translateY(100vh);
            }
        }
        @keyframes spinFall {
            to {
                transform: translateY(100vh) rotate(360deg);
            }
        }
        @keyframes dangleFall {
            0% {
                transform: translateY(0) rotate(0deg);
            }
            50% {
                transform: translateY(20px) rotate(10deg);
            }
            100% {
                transform: translateY(100vh) rotate(0deg);
            }
        }
        .falling {
            animation: fall 4s linear forwards;
            position: relative;
        }
        .spin-fall {
            animation: spinFall 8s linear forwards;
            position: relative;
        }
        .dangle-fall {
            animation: dangleFall 8s linear forwards;
            position: relative;
        }
    `;
    // Append the style element to the head
    document.head.appendChild(style);

    // Select all elements on the page
    const elements = document.querySelectorAll('*');

    // Apply a random falling class to each element
    elements.forEach(element => {
        if (element instanceof HTMLElement) {
            const randomClass = getRandomClass();
            element.classList.add(randomClass);
        }
    });
}



// Function to get a random class for the animation
function getRandomClass() {
    const classes = ['falling', 'spin-fall', 'dangle-fall'];
    return classes[Math.floor(Math.random() * classes.length)];
}