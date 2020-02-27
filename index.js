var fs = require('fs');
var axios = require('axios');
var inquirer = require('inquirer');

inquirer.prompt([
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
]).then(response => {
    fs.writeFile(`${title}ReadMe.md`, `<meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>${response.userName}</title>
</head>
<body>
    <header class="container">
        <h1>Hi! My Name is ${response.userName}</h1>
    </header>
    <p class="container">I am from ${response.userLocation}.</p>
    <h4 class="container">Example heading <button>Contact Me</button></h4>
    <section class="container card">
        <div class="container list-group-item"> My Github profile is at ${response.userGH}</div>
        <div class="container list-group-item"><a href="${response.userLI}>LinkedIn</a></div>
    </section>
</body>
</html>
`, err => {
    if (err){
        throw err
    }
    console.log("Readme sucessfully created")
})
})
