module.exports = {
  create: [
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter a name for the initial project template: ',
      default: 'project-template',
    },
    {
      type: 'list',
      name: 'type',
      message: 'What type template do you want to create?',
      choices: [
        'react-native',
        'react-single-page',
        'react-multiple-pages'
      ]
    }
  ]
}