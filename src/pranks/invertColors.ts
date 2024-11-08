/**
 * Inverts the color of the web page, controlled by passed parameters
 *
 * @param {number} initialDuration - Initial duration of how long the inversion should happen (in ms)
 * @param {number} delay - Delay between each color inversion (in ms)
 * @param {number} repetition - Number of times the inversion should repeat
 * @returns {void}
 */
const invertColors = (
  initialDuration: number = 3000,
  delay: number = 0,
  repetition: number = 3,
): void => {
  let duration = initialDuration;

  for (let i = 1; i <= repetition; i++) {
    setTimeout(() => {
      document.body.style.filter = "invert(100%)";

      setTimeout(() => {
        document.body.style.filter = "none";
      }, duration);
    }, delay);

    // decrease the duration after each repetition
    duration = Math.max(1000, duration - 1000);

    // increase the delay for the next iteration
    delay += duration + 1000;
  }
};

export default invertColors;
