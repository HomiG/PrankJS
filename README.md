# PrankJS

## 🚧 **WARNING: Super Early Development Stage** 🚧

PrankJS is a fun and experimental JavaScript library designed to bring a little chaos to your web applications by introducing a variety of pranks and interactive scenarios. However, please note:

### **THIS PROJECT IS IN A VERY EARLY STAGE OF DEVELOPMENT.**

### 🚨 **NOT EVEN ALPHA VERSION** 🚨

This project is currently in a phase that's even more unstable than an alpha version. This means:

- **Heavy Refactors Are Imminent:** The structure, API, and even the purpose of the library might change dramatically as development progresses.
- **Incomplete Features:** Most features are either not fully implemented or may have significant bugs.
- **Breaking Changes:** Expect breaking changes with little or no warning as the project evolves.
- **No Guarantees:** The library may not work as expected, or at all, in its current form.

### What’s in the Works?

- **Core Pranks:** Basic implementations of various pranks like floating objects, random redirects, and screen flipping.
- **Interactive Scenarios:** Early prototypes of scenarios that combine multiple pranks for a more immersive experience.
- **Cleanup Functions:** Mechanisms to undo the pranks, though these are still being fleshed out.

### What’s Missing?

- **Documentation:** The current documentation is sparse and subject to change. Proper usage guides and examples will be added as the library matures.
- **Tests:** Testing is minimal at this stage, so stability cannot be guaranteed.
- **Performance Optimizations:** The library has not been optimized for performance, and using it may have a significant impact on your application’s performance.

### Contributing

We welcome contributions, but please be aware that the codebase is likely to change significantly. If you’re interested in contributing, please reach out to discuss the roadmap and where you can best help.


## Usage

Can be imported in any browser application

``` Typescript
import randomBlur from './src/pranks/randomBlur';

import { Pranks } from 'prankjs'

randomBlur()
Pranks.shakeElement('elementId')
Pranks.flipScreen()
```