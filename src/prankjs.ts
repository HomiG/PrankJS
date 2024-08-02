// import { randomInteger } from "./utils/helperFunctions";

// // src/prankjs.ts
// class PrankJS {
//     static floatingObject(url: string): void {
//         const img = document.createElement('img');
//         img.src = url;
//         img.style.position = 'fixed';
//         img.style.zIndex = '9999';
//         img.style.width = '100px';
//         img.style.height = '100px';
//         document.body.appendChild(img);

//         function moveImage(): void {
//             img.style.top = `${Math.random() * window.innerHeight}px`;
//             img.style.left = `${Math.random() * window.innerWidth}px`;
//         }

//         setInterval(moveImage, 1000);
//     }


//     static flipScreen(interval: number): void {
//         setInterval(() => {
//             document.body.style.transform = document.body.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
//         }, interval);
//     }

//     static fakeError(message: string, interval: number): void {
//         setInterval(() => {
//             alert(message);
//         }, interval);
//     }

//     static invertColors(interval: number): void {
//         setInterval(() => {
//             document.body.style.filter = document.body.style.filter === 'invert(1)' ? 'invert(0)' : 'invert(1)';
//         }, interval);
//     }

//     static randomFloatingObjects(sharkImageUrl: string) {
//         // URL to the shark image (you can replace this with any other image URL)
//         console.log(randomInteger(1, 10));
//         // Number of sharks to display
//         const sharkCount = 5;

//         // Function to create a shark element
//         function createShark() {
//             const shark = document.createElement('img');
//             shark.src = sharkImageUrl;
//             shark.classList.add('shark');
//             shark.style.width = '100px';
//             shark.style.position = 'fixed'; // 'fixed' position to stay on top
//             shark.style.top = '0';
//             shark.style.left = '0';
//             shark.style.pointerEvents = 'none'; // Avoid interaction with the page
//             shark.style.zIndex = '9999'; // High z-index to ensure it is above all content
//             document.body.appendChild(shark);
//             return shark;
//         }

//         // Function to set a random position for the shark
//         function setRandomPosition(element: any) {
//             const x = Math.random() * (window.innerWidth - 100); // -100 to keep sharks fully in view
//             const y = Math.random() * (window.innerHeight - 100);
//             element.style.transform = `translate(${x}px, ${y}px)`;
//         }

//         // Function to animate the shark
//         function animateShark(element: any) {
//             setRandomPosition(element);
//             const duration = Math.random() * 5000 + 5000;
//             element.style.transition = `transform ${duration}ms linear`;
//             setTimeout(() => animateShark(element), duration);
//         }

//         // Create and animate sharks
//         for (let i = 0; i < sharkCount; i++) {
//             const shark = createShark();
//             animateShark(shark);
//         }
//     }


//     static randomRedirect(urls: string[]): void {
//         // change every url in the dom and redirect to one of the urls provided

//         const aElements = document.getElementsByTagName('a');
//         for (let i = 0; i < aElements.length; i++) {
//             aElements[i].href = urls[Math.floor(Math.random() * urls.length)];
//         }
//     }
// }

// export default PrankJS;
