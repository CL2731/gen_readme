function generateReadme(data){
    return `![License] (https://img.shields.io/badge/license-${data.license}-blue.svg)
    ![GitHub] (https://github.com/${data.username})

    # ${data.title}

    ## Table of Contents
    *[Description](#description)
    *[Instillation](#instillation)
    *[License](#license)
    *[Usage](#usage)
    *[Contributers](#contributers)
    *[Questions](#username)
    
    ## Description
    ${data.description}
    
    ## Instillation
    To install the dependancies run the following command ${data.instillation}

    ## Usage
    ${data.usage}

    ## Contributers
    ${data.contributers}
    
    ## Questions
    ${data.username}
    ${data.email}
    `;
}
module.exports = generateReadme;