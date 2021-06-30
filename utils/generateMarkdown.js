// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n[License](#license)\n`;
  } return '';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if ( license !== 'none') {
    return `## License 
    This project is licensed with ${license}.`;
  } return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# 💻${data.title}💻

  ${renderLicenseBadge(data.license)}


  ## Description
  ${data.description}

  <ur>

  ## 🌐Table of Contents🌐
  [Installation](#installation)

  [Usage](#usage)

  ${renderLicenseLink(data.license)}

  [Contributing](#contributing)

  [Test](#test)

  [Questions](#questions)

 
  
  ## 🛠️Installation🛠️
  ${data.install}

  <ur>

  ## 📁Usage📁
  ${data.usage}
  ${renderLicenseSection(data.license)}

  <ur>

  ## 👨‍💼Contributing👩‍💼
  ${data.contribution}
  <ur>

  ## 📈Test📈
  ${data.test}
  <ur>

  ## ❓Questions❓
  Any questions? Contact ${data.email}. Access more of my work at [${data.username}](https://github.com/${data.username}/).
`;
}

module.exports = generateMarkdown;
