const invertColors = (): void => {
  let delay = 0;
  let duration = 3000;

  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      document.body.style.filter = "invert(100%)";

      // revert back to normal after the current duration
      setTimeout(() => {
        document.body.style.filter = "none";
      }, duration);

      duration -= 1000;
    }, delay);

    delay += duration + 1000;
  }
};

export default invertColors;
