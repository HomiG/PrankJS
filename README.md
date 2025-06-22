Collecting workspace information

# PrankJS

<p align="center">
  <img src="https://img.shields.io/npm/v/prankjs.svg" alt="npm version">
  <img src="https://img.shields.io/npm/dm/prankjs.svg" alt="downloads">
  <img src="https://img.shields.io/github/license/HomiG/PrankJS.svg" alt="license">
</p>

<p align="center">
  A playful JavaScript library for adding interactive pranks to web applications
</p>

## 🎉 Overview

PrankJS is a lightweight, easy-to-use library that allows you to add fun and interactive pranks to your web applications. Whether you're creating an April Fools' Day surprise, adding playful interactions to your website, or just wanting to make your users smile, PrankJS has got you covered.

## 📦 Installation

### npm
```bash
npm install prankjs
```

### CDN
```html
<script src="https://unpkg.com/prankjs@latest/dist/prankjs.umd.js"></script>
```

## 🚀 Quick Start

### ES Modules
```javascript
import { Pranks } from 'prankjs';

// Shake an element
Pranks.shakeElement('.my-element');

// Create floating images
Pranks.randomFloatingObjects('https://example.com/image.png');

// Display a fake error message
Pranks.fakeError('This is a fake error message!');
```

### Browser (UMD)
```html
<script src="https://unpkg.com/prankjs@latest/dist/prankjs.umd.js"></script>
<script>
  // Access through the global PrankJS object
  PrankJS.Pranks.invertColors(3000, 0, 1);
  PrankJS.Pranks.flipScreen();
</script>
```

## ✨ Features

### Individual Pranks

PrankJS offers a variety of standalone pranks:

| Prank                                       | Description                                                 |
| ------------------------------------------- | ----------------------------------------------------------- |
| `shakeElement(selector)`                    | Makes specified elements shake on the screen                |
| `floatingObject(options)`                   | Creates a floating image that can be animated and clickable |
| `randomFloatingObjects(imageUrl)`           | Populates the screen with multiple floating images          |
| `invertColors(duration, delay, repetition)` | Temporarily inverts the colors on the page                  |
| `fakeError(message)`                        | Displays a convincing error dialog                          |
| `flipScreen(duration)`                      | Flips the screen upside down                                |
| `gravitySwitch()`                           | Makes elements appear to fall due to gravity                |
| `keyboardLock()`                            | Temporarily prevents keyboard input                         |
| `mouseTrail()`                              | Creates a trail that follows the mouse cursor               |
| `disappearingElements()`                    | Makes elements randomly fade out and back in                |
| `fakeLoadingScreen()`                       | Shows a fake loading screen                                 |
| `randomBlur()`                              | Applies random blur effects to elements                     |
| `randomEmoji()`                             | Shows random emojis floating across the screen              |
| `randomSounds()`                            | Plays random sounds at unpredictable intervals              |
| `confettiExplosion()`                       | Creates a festive confetti explosion effect                 |

### Scenarios

Scenarios combine multiple pranks for a more immersive experience:

| Scenario                                 | Description                                                          |
| ---------------------------------------- | -------------------------------------------------------------------- |
| `demoDisruption()`                       | A basic demonstration of multiple pranks                             |
| `officePrank(timing)`                    | Designed for pranking in office environments                         |
| `meetingDisruptor(includeSound)`         | Perfect for creating simulated technical issues during presentations |
| `visualChaos(duration)`                  | Combines various visual effects for maximum impact                   |
| `aprilFools(redirectUrls)`               | A comprehensive April 1st prank sequence                             |
| `gradualEscalation(baseDelay, fastMode)` | Starts with subtle pranks that gradually escalate                    |

## 📋 Usage Examples

### Basic Examples

```javascript
// Import specific pranks
import { Pranks } from 'prankjs';

// Make a button shake
Pranks.shakeElement('#submit-button');

// Create a clickable floating object
Pranks.floatingObject({
  url: 'https://example.com/image.png',
  width: '100px',
  height: '100px',
  animate: true,
  clickable: true
});

// Invert colors with 3-second duration, no delay, once
Pranks.invertColors(3000, 0, 1);
```

### Using Scenarios

```javascript
import { Scenarios } from 'prankjs';

// Run the office prank with custom timing (5 seconds between pranks)
Scenarios.officePrank(5000);

// Run the visual chaos scenario for 20 seconds
Scenarios.visualChaos(20000);

// Run gradual escalation in fast mode for demos
Scenarios.gradualEscalation(10000, true);
```

## ⚙️ Configuration

Most pranks accept parameters to customize their behavior. For example:

```javascript
// Customize the random floating objects
Pranks.randomFloatingObjects('https://example.com/image.png');

// Custom error message
Pranks.fakeError('Critical system failure! Just kidding!');

// Custom flip screen duration
Pranks.flipScreen(5000);
```

## 🧪 Browser Compatibility

PrankJS works in all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🚨 Disclaimer

PrankJS is designed for fun and entertainment purposes. Please use responsibly:

- Be aware of accessibility considerations
- Do not use pranks that may trigger seizures or other health issues
- Use appropriately in work environments
- Consider your audience when implementing pranks

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-prank`)
3. Commit your changes (`git commit -m 'Add some amazing prank'`)
4. Push to the branch (`git push origin feature/amazing-prank`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License:
MIT License

Copyright (c) 2024 HomiG

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## 💖 Support

If you find this project helpful, please consider giving it a star on GitHub!

---

Made with ❤️ by [HomiG](https://github.com/HomiG)