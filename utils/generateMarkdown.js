function renderLicenseBadge(license) {
    // Implement logic to return license badge based on the license type
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'GNU GPLv3') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'Apache 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else {
        return ''; // No badge for other licenses
    }
}

function renderLicenseLink(license) {
    // Implement logic to return license link based on the license type
    if (license === 'MIT') {
        return '[MIT License](https://opensource.org/licenses/MIT)';
    } else if (license === 'GNU GPLv3') {
        return '[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'Apache 2.0') {
        return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    } else {
        return ''; // No license link for other licenses
    }
}

function renderLicenseSection(license) {
    // Implement logic to return license section based on the license type
    if (license) {
        return `## License

This project is licensed under the ${license}. Click the badge above for more details.`;
    } else {
        return ''; // No license section if no license is chosen
    }
}

function generateMarkdown(data) {
    // Implement logic to generate markdown content based on user input data
    return `# ${data.title}

${renderLicenseBadge(data.license)}

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

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions about this project, please contact [${data.username}](https://github.com/${data.username}) via GitHub or email at ${data.email}.
`;
}

module.exports = {
    renderLicenseBadge,
    renderLicenseLink,
    renderLicenseSection,
    
}
module.exports = generateMarkdown;
