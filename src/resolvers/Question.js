const Question = {
  author(parent, args, { db }, info) {
    return db.users.find((user) => {
      return user.id === parent.author
    })
  },
  questionaire(parent, args, { db }, info) {
    return db.questionaires.find((questionaire) => {
      return questionaire.id === parent.questionaire
    })
  }
}

export { Question as default }