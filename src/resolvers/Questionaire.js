const Questionaire = {
  author(parent, args, { db }, info) {
    return db.users.find((user) => {
        return user.id === parent.author
    })
  },
  questions(parent, args, { db }, info) {
    return db.questions.filter((question) => {
      return question.questionaire === parent.id
    })
  }
}

export { Questionaire as default }