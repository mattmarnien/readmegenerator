function generateMarkdown(data) {
  return `
  # ${data.title}

  ${data.deployed}


  # Table of Contents: 
  
  I. [Installation](#installation)
  II. [Usage](#usage)
  III. [Licenses](#licenses)
  IV. [Contributions](#contributions)
  V. [Tests](#tests)
  VI. [Questions](#questions)
  VII. [About the Developer](#About the Author)
  
  ## Installation

  ${data.install}
  
  ## Usage

  ${data.usage}
  
  ## Licenses

  ${data.licenses}
  
  ## Contributions
  
  ${data.contributions}
  
  ## Tests

  ${data.tests}
  
  ## Questions

  ${data.questions}
  
  ## About the Author

  ${data.author}

`;
}

module.exports = generateMarkdown;
