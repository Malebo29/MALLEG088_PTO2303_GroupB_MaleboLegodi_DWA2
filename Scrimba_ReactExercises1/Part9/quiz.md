Quiz!

1. What is a React component?
A self-contained, reusable piece of code that returns HTML elements to be rendered on the web page.
    A function that returns React element.

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
The component name is starting with a small letter and React component names must start with a capital letter.

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```
The issue is in the ReactDOM.render() call because when rendering a component in React, we should pass the component itself (not an invocation of the component) to ReactDOM.render().