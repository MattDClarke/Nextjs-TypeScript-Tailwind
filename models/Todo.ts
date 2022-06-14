import mongoose, { model, Schema, Document } from 'mongoose'

interface ITodo extends Document {
  id: number
  todo: string
  isDone: boolean
}

/* NumOfTheDaySchema will correspond to a collection in your MongoDB database. */
const TodoSchema: Schema = new Schema({
  id: { type: Number, required: true },
  todo: { type: String, required: true },
  isDone: { type: Boolean, required: true },
})

export const TodoModel =
  (mongoose.models.Todo as mongoose.Model<ITodo>) ||
  model<ITodo>('Todo', TodoSchema)
