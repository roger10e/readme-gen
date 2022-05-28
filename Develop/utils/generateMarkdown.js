// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-green)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.name}

## Table of Contents:
* [Description](#Description)
* [Installation Instructions](#Installation)
* [Usage](#Usage)
* [Contributions](#Contributions)
* [Testing](#Test)
* [Licenses](#Licenses)
* [Questions](#Questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.testing}

## Licenses
${renderLicenseBadge(data.license)}

## Questions
${data.username}
${data.email}`
};

module.exports = generateMarkdown