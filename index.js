const inquirer = require("inquirer");
const maxLengthPrompt = require("inquirer-maxlength-prompt"); 
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

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
    let logoShape = ``

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
}