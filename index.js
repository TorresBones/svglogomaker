const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shape.js");
const { error } = require("console");

const prompts = [
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter a color for the logo."
    },
    {
        type: "input",
        name: "textColor",
        message: "Please enter a color for the text."
    },
    {
        type: "list",
        name: "shapeInput",
        message: "Select a shape.",
        choices: ["Triangle", "Square", "Circle"]
    },
    {
        type: "maxLength-input",
        name: "textInput",
        message: "Select up to 3 characters for your logo."
    }
]

function createLogo(data) {
    let shape
    let logoText = ``

    if (data.shapeInput == "Triangle") {
        shape = new Triangle()
        logoText = `<text x="109" y="135" font-size="45" fill="${data.textColor}">${data.textInput}</text>`
    } else if (data.shapeInput == "Square") {
        shape = new Square()
        logoText = `<text x="109" y="115" font-size="45" fill="${data.textColor}">${data.textInput}</text>`
    } else if (data.shapeInput == "Circle") {
        shape = new Circle()
        logoText = `<text x="109" y="115" font-size="45" fill="${data.textColor}">${data.textInput}</text>`
    }

    shape.setColor(data.shapeColor)
    const logoShape = shape.render()

    const finalLogo = 
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${logoShape}
    ${logoText}
    </svg>`

    fs.writeFile("examples/logo.svg", finalLogo, (error) => error ? console.error(error) : console.log("Logo SVG Generated"))
}

function init() {
    inquirer.prompt(prompts).then((data) => createLogo(data))
}

init()