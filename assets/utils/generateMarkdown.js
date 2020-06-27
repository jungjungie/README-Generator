// function to generate markdown for README
function generateMarkdown(userAnswers) {
  return `
  # ${userAnswers.title}
  ![GitHub license]()

  ## Description
  ${userAnswers.description}

  ## Table of Contents
  * [Installation]()
  * [Usage]()
  * [License]()
  * [Contributions]()
  * [Tests]()
  * [Questions]()

  ## Installation
  To install necessary dependencies, run the following command:
  > ${userAnswers.dependencies}

  ## Usage
  ${userAnswers.usage}

  ## License
  ${userAnswers.licenses}

  ## Contributions
  ${userAnswers.contributions}

  ## Tests
  ${userAnswers.test}

  ## Questions
  If you have any questions about the repo, please open an issue or contact me at the following:
  - GitHub: ${userAnswers.username}
  - Email:  ${userAnswers.email}
`;
}

module.exports = generateMarkdown;
