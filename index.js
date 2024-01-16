const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your Project?',
    },
    {
      type: 'input',
      name: 'descritpion',
      message: 'Give a short description of your Project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How to install Project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your project?',
    },
    {
      type: 'list',
      name: 'lisence',
      message: 'Choose license.',
      choices: ['ISC', 'none'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Names of Contributers.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'How to run a test.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
  ]);

  // function to write README file
  function writeToFile(fileName, data) {
    writeFileAsync(fileName, data)
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

// function to initialize program
function init() {
    promptUser()
    .then((answers) => {
      const readmeContent = generateReadmeContent(answers);

      writeToFile('README.md', readmeContent);
    })
    .catch((err) => console.error(err));
}

function generateReadmeContent(answers) {
    promptUser()
    .then((answers) => {

      const readmeContent = generateReadmeContent(answers);

      writeToFile('README.md', readmeContent);
    })
    .catch((err) => console.error(err));
}

function generateReadmeContent(answers) {
  return `

    ## title
     ${answers.title}

    ## Description
    ${answers.descritpion}

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## License
    ${answers.lisence}

    ## Contributing
    ${answers.contributing}

    ## Test
    ${answers.test}

    ## GitHub
    [${answers.github}](https://github.com/${answers.github})
    `;
}

// function call to initialize program
init();