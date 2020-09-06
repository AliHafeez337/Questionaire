import { v4 as uuidv4 } from 'uuid';

const Mutation = {
  createUser(parent, args, { db }, info) {
    const emailTaken = db.users.some((user) => user.email === args.data.email)

    if (emailTaken) {
      throw new Error('Email taken')
    }

    const user = {
      id: uuidv4(),
      ...args.data
    }

    db.users.push(user)

    return user
  },
  deleteUser(parent, args, { db }, info) {
    const userIndex = db.users.findIndex((user) => user.id === args.id)

    if (userIndex === -1) {
      throw new Error('User not found')
    }

    const deletedUsers = db.users.splice(userIndex, 1)

    db.questionaires = db.questionaires.filter((questionaire) => {
      const match = questionaire.author === args.id

      if (match) {
        db.questions = db.questions.filter((question) => question.questionaire !== questionaire.id)
      }

      return !match
    })
    db.questions = db.questions.filter((question) => question.author !== args.id)

    return deletedUsers[0]
  },
  updateUser(parent, args, { db }, info) {
    const { id, data } = args
    const user = db.users.find((user) => user.id === id)

    if (!user) {
      throw new Error('User not found')
    }

    if (typeof data.email === 'string') {
      const emailTaken = db.users.some((user) => user.email === data.email)

      if (emailTaken) {
        throw new Error('Email taken')
      }

      user.email = data.email
    }

    if (typeof data.name === 'string') {
      user.name = data.name
    }

    if (typeof data.age !== 'undefined') {
      user.age = data.age
    }

    return user
  },
  createQuestionaire(parent, args, { db }, info) {
    const userExists = db.users.some((user) => user.id === args.data.author)

    if (!userExists) {
      throw new Error('User not found')
    }

    const questionaire = {
      id: uuidv4(),
      ...args.data
    }

    db.questionaires.push(questionaire)

    return questionaire
  },
  deleteQuestionaire(parent, args, { db }, info) {
    const questionaireIndex = db.questionaires.findIndex((Questionaire) => Questionaire.id === args.id)

    if (questionaireIndex === -1) {
      throw new Error('Questionaire not found')
    }

    const deletedQuestionaires = db.questionaires.splice(questionaireIndex, 1)

    db.questions = db.questions.filter((question) => question.questionaire !== args.id)

    return deletedQuestionaires[0]
  },
  updateQuestionaire(parent, args, { db }, info) {
    const { id, data } = args
    const questionaire = db.questionaires.find((questionaire) => questionaire.id === id)

    if (!questionaire) {
        throw new Error('Questionaire not found')
    }

    if (typeof data.title === 'string') {
      questionaire.title = data.title
    }

    if (typeof data.body === 'string') {
      questionaire.body = data.body
    }

    if (typeof data.published === 'boolean') {
      questionaire.published = data.published
    }

    return questionaire
  },
  createQuestion(parent, args, { db }, info) {
    const userExists = db.users.some((user) => user.id === args.data.author)
    const questionaireExists = db.questionaires.some((questionaire) => questionaire.id === args.data.questionaire && questionaire.published)

    if (!userExists) {
      throw new Error('Unable to find the user.')
    } else if (!questionaireExists) {
      throw new Error('Unable to find an active questionaire.')
    }

    const question = {
      id: uuidv4(),
      ...args.data
    }

    db.questions.push(question)

    return question
  },
  deleteQuestion(parent, args, { db }, info) {
    const questionIndex = db.questions.findIndex((question) => question.id === args.id)

    if (questionIndex === -1) {
      throw new Error('Questions not found')
    }

    const deletedQuestions = db.questions.splice(questionIndex, 1)

    return deletedQuestions[0]
  },
  updateQuestion(parent, args, { db }, info) {
    const { id, data } = args
    const question = db.questions.find((question) => question.id === id)

    if (!question) {
      throw new Error('Question not found')
    }

    if (typeof data.text === 'string') {
      question.text = data.text
    }

    return question
  },
  createAnswer(parent, args, { db }, info) {
    const userExists = db.users.some((user) => user.id === args.data.author)
    const questionaireExists = db.questionaires.some((questionaire) => questionaire.id === args.data.questionaire && questionaire.published)
    const questionExists = db.questions.some((question) => question.id === args.data.question)

    if (!userExists) {
      throw new Error('Unable to find the user.')
    } else if (!questionaireExists) {
      throw new Error('Unable to find an active questionaire.')
    } else if (!questionExists) {
      throw new Error('Unable to find the question.')
    }

    const answer = {
      id: uuidv4(),
      ...args.data
    }

    db.answers.push(answer)

    return answer
  },
  deleteAnswer(parent, args, { db }, info) {
    const answerIndex = db.answers.findIndex((answer) => answer.id === args.id)

    if (answerIndex === -1) {
      throw new Error('Answers not found')
    }

    const deletedAnswers = db.answers.splice(answerIndex, 1)

    return deletedAnswers[0]
  },
  updateAnswer(parent, args, { db }, info) {
    const { id, data } = args
    const answer = db.answers.find((answer) => answer.id === id)

    if (!answer) {
      throw new Error('Answer not found.')
    }

    if (typeof data.text === 'string') {
      answer.text = data.text
    }

    return answer
  }
}

export { Mutation as default }