import mongoose from 'mongoose'

/* NumOfTheDaySchema will correspond to a collection in your MongoDB database. */
const TodoSchema = new mongoose.Schema({
  id: Number,
  todo: String,
  isDone: Boolean,
})

export const TodoModel =
  mongoose.models.Todo || mongoose.model('Todo', TodoSchema)
