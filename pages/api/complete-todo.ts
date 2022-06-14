import { NextApiRequest, NextApiResponse } from 'next'
import { TodoModel } from '../../models/Todo'
import { dbConnect } from '../../utils/dbConnect'
import catchErrors from '../../utils/ErrorHandler'

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    id: number
  }
}

export default catchErrors(
  async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    if (req.method === 'PATCH') {
      const { id } = req.body
      console.log('comeplete todo API... id = ', id)
      await dbConnect()
      const todo = await TodoModel.findOne({ id })
      todo.isDone = !todo.isDone
      await todo.save()
      return res
        .status(200)
        .json({ message: 'Marked todo as completed successfully' })
    }
    res.status(405).json({
      message: 'Method not allowed',
    })
  }
)
