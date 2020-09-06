const Answer = {
  author(parent, args, { db }, info) {
    return db.users.find((user) => {
      return user.id === parent.author
    })
  },
  questionaire(parent, args, { db }, info) {
    return db.questionaires.find((questionaire) => {
      return questionaire.id === parent.questionaire
    })
  },
  question(parent, args, { db }, info) {
    return db.questions.find((question) => {
      return question.id === parent.question
    })
  }
}

export { Answer as default }