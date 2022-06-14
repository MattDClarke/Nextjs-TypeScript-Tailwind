import { NextApiRequest, NextApiResponse } from 'next'
import { TodoModel } from '../../models/Todo'
import { dbConnect } from '../../utils/dbConnect'
import catchErrors from '../../utils/ErrorHandler'

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    id: number
    todo: string
    isDone: boolean
  }
}

export default catchErrors(
  async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
      const { body } = req
      await dbConnect()
      await new TodoModel(body).save()
      return res.status(200).json({ messsage: 'Added todo successfully' })
    }
    res.status(405).json({
      message: 'Method not allowed',
    })
  }
)
