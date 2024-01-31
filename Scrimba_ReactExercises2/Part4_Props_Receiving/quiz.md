1. What do props help us accomplish?
Props allow components to share data with each other. They are used to pass data from a parent component to a child component. This makes components reusable and dynamic because the can render different data based on the props they receive.

2. How do you pass a prop into a component?
We pass a prop into a component by including it as an attribute when we use the component.
e.g: `<ChildComponent propName={propValue} />` In this example, propName is the name of the prop, and propValue is the value we want to pass to the ChildComponent.

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   No we can not pass a custom prop to a native DOM element because React has a list of attributes that it recognizes and will pass to the actual DOM.

4. How do I receive props in a component?

We can receive props through the component's function parameters..I have added to the Navbar component below:

function Navbar(props) {
    return (
        <header>
            ...
        </header>
    )
}

5. What data type is `props` when the component receives it?
When a component receives props, it is an object. Each key in the object corresponds to a prop name,and the value of each key is the value of that prop.