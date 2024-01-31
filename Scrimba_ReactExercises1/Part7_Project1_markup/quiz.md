1. Why do we need to `import React from "react"` in our files?
In React, JSX elements transpile to React.createElement() calls.  React is used behind the scenes whenever we use JSX.
    React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?
console.log(page) logs the 'page' constant to the console. We get an object with propeties like type (type of element), props (any props passed to the element) and children(any children elements).
    A JavaScript object. React elements that describe what React should eventually add to the real DOM for us.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
We are attempting to return two things which won't work because JSX expressions must  have atleast one parent element to wrap both elements.
    We need our JSX to be nested under a single parent element

4. What does it mean for something to be "declarative" instead of "imperative"?
Declarative programming involves writing code that describes what you want to achieve, not necessarily how to achieve it. It’s more about declaring the desired result.
    Declarative means I can tell the computer WHAT to do and expect it to handle the details. Imperative means I need to tell it HOW to do each step.

5. What does it mean for something to be "composable"?
The ability to combine simple parts to create more complex systems.
    We have small pieces that we can put together to make something larger/greater than the individual pieces.
