const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users
    }

    return db.users.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase())
    })
  },
  questionaires(parent, args, { db }, info) {
    if (!args.titleOrBody) {
      return db.questionaires
    }

    return db.questionaires.filter((questionaire) => {
      const isTitleMatch = questionaire.title.toLowerCase().includes(args.titleOrBody.toLowerCase())
      const isBodyMatch = questionaire.body.toLowerCase().includes(args.titleOrBody.toLowerCase())
      return isTitleMatch || isBodyMatch
    })
  },
  questions(parent, args, { db }, info) {
    if (!args.text) {
      return db.questions
    }

    return db.questions.filter((question) => {
      return question.text.toLowerCase().includes(args.text.toLowerCase())
    })
  },
  answers(parent, args, { db }, info) {
    if (!args.text) {
      return db.answers
    }

    return db.answers.filter((answer) => {
      return answer.text.toLowerCase().includes(args.text.toLowerCase())
    })
  },
  me() {
    return {
      id: '123098',
      name: 'Mike',
      email: 'mike@example.com'
    }
  },
  questionaire(parent, args, { db }, info) {
    let q
    db.questionaires.forEach(questionaire => {
      console.log(questionaire.id, args.id)
      if (questionaire.id == args.id){
        q = questionaire
      }
    });
    return q
  },
  question(parent, args, { db }, info) {
    let q
    db.questions.forEach(question => {
      if (question.id == args.id){
        q = question
      }
    });
    return q
  },
  answer(parent, args, { db }, info) {
    let q
    db.answers.forEach(answer => {
      if (answer.id == args.id){
        q = answer
      }
    });
    return q
  }
}

export { Query as default }