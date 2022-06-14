import { NextApiRequest, NextApiResponse } from 'next'
import { TodoModel } from '../../models/Todo'
import { dbConnect } from '../../utils/dbConnect'
import catchErrors from '../../utils/ErrorHandler'

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    id: number
    newTodo: string
  }
}

export default catchErrors(
  async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    if (req.method === 'PATCH') {
      const { id, newTodo } = req.body
      await dbConnect()
      const todo = await TodoModel.findOne({ id })
      todo.todo = newTodo
      await todo.save()
      return res
        .status(200)
        .json({ message: 'Todo was edited completed successfully' })
    }
    res.status(405).json({
      message: 'Method not allowed',
    })
  }
)
