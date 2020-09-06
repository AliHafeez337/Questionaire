const User = {
  questionaires(parent, args, { db }, info) {
    return db.questionaires.filter((questionaire) => {
      return questionaire.author === parent.id
    })
  },
  questions(parent, args, { db }, info) {
    return db.questions.filter((question) => {
      return question.author === parent.id
    })
  }
}

export { User as default }