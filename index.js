var fs = require('fs');
var axios = require('axios');
var inquirer = require('inquirer');
var generateReadMe = require('./generateMarkdown');
var getUser = require('./utils/api.js');

function getInfo() {
 return inquirer.prompt([
    {
    type: "input",
    message: "What is your projects Title?",
    name: "title"

    },{
        type: "input",
        message: "What does your project do?",
        name: "description"
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: "install"

    }, {
        type: "input",
        message: "How do you use the project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What licenses does your project use?",
        name: "licenses"

    },{
        type: "input",
        message: "How can people contribute to your project?",
        name: "contributions"

    },{
        type: "input",
        message: "How do you test your project?",
        name: "tests"

    },{
        type: "input",
        message: "What is your github username?",
        name: "github"

    }
])}

function generateMD(data, git) {
    fs.writeFile(`${data.title}ReadMe.md`, generateReadMe(data, git), (err) => {
        if(err){
            throw err;
        }
    }
    )
}

async function makeIt() {
    try {
    const answers = await getInfo();
    const gitRes = await getUser(answers.github);
    await generateMD(answers, gitRes);

    console.log("Readme Sucessfully Generated");


} catch(err) {
    console.log(err)
}
}

makeIt();

    // 
    // console.log(`Readme for ${response.title} sucessfully created`)  



