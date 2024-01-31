/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

function Page () {
    return (
        <div>
        <img className="logo"
            src="./react-logo.png" width="40px" alt="React Logo" />
        <h1>Why I'am excited to learn React</h1>
            <ol>
                <li>It's declarative.</li>
                <li>It's easy to learn. </li>
                <li>it's a in demand skill.</li>
                <li>It's composable and SEO friendly.</li>
            </ol>
    </div>
    )
}

ReactDOM.render(
    <Page />,
    document.getElementById("root")
)