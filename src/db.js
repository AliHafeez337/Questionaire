const users = [{
    id: '1',
    name: 'Andrew',
    email: 'andrew@example.com',
    age: 27
}, {
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com'
}, {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com'
}]

const questionaires = [{
    id: '10',
    title: 'GraphQL 101',
    body: 'This is how to use GraphQL...',
    published: true,
    author: '1'
}, {
    id: '11',
    title: 'GraphQL 201',
    body: 'This is an advanced GraphQL questionaire...',
    published: false,
    author: '1'
}, {
    id: '12',
    title: 'Programming Music',
    body: '',
    published: true,
    author: '2'
}]

const questions = [{
    id: '102',
    text: 'This worked well for me. Thanks!',
    author: '3',
    questionaire: '10'
}, {
    id: '103',
    text: 'Glad you enjoyed it.',
    author: '1',
    questionaire: '10'
}, {
    id: '104',
    text: 'This did no work.',
    author: '2',
    questionaire: '11'
}, {
    id: '105',
    text: 'Nevermind. I got it to work.',
    author: '1',
    questionaire: '12'
}]

const answers = [{
  id: '202',
  text: 'This worked well for me. Thanks!',
  author: '3',
  questionaire: '10',
  question: '102'
}, {
  id: '203',
  text: 'Glad you enjoyed it.',
  author: '1',
  questionaire: '10',
  question: '102'
}, {
  id: '204',
  text: 'This did no work.',
  author: '2',
  questionaire: '11',
  question: '103'
}, {
  id: '205',
  text: 'Nevermind. I got it to work.',
  author: '1',
  questionaire: '12',
  question: '105'
}]

const db = {
  users,
  questionaires,
  questions,
  answers
}

export { db as default }