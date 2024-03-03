
// Creates the content to go inside the readme file
function generateMarkdown(data) {
return `
# ${data.title} ![License](https://img.shields.io/badge/license-${data.license}-yellow.svg)
  
## Description
${data.description}
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation
${data.installation}
  
## Usage
${data.usage}
  
## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}
  
## Tests
${data.tests}
  
## Questions
For questions, please contact me here [Email](mailto:${data.email}).
Additionally view my GitHub account [Here](https://www.github.com/${data.github})
`;
}

module.exports = generateMarkdown;
