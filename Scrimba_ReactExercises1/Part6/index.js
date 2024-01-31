// import React from "react"
// import ReactDOM from "react-dom"

const page = (
    <div>
    <h1>ToDo list</h1>
    <p>This is a list of the things i need to get done by COB tomorrow</p>
    <ul>
        <li>FATCA and CRS Presentation</li>
        <li>CFM video development</li>
        <li>Drop off files to 135 Benoni</li>
    </ul>
    </div>
)
console.log(page);
// document.getElementById("root").append(JSON.stringify(page))
ReactDOM.render(page, document.getElementById("root"))