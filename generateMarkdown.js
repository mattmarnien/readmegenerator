function generateMarkdown(data, git) {
  return `
  # ${data.title.toUpperCase()}

  ${data.description}

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
  https://img.shields.io/badge/license-${data.licenses}-critical

  ${data.licenses}
  
  ## Contributions
  
  ${data.contributions}
  
  ## Tests

  ${data.tests}
  
  ## Questions

 
  
  ## About the Author

  

  [image](${git.data.avatar_url})

`;
}

module.exports = generateMarkdown;
