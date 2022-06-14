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
    if (req.method === 'DELETE') {
      const { id } = req.body
      await dbConnect()
      await TodoModel.deleteOne({ id })
      return res.status(200).json({ message: 'Deleted todo successfully' })
    }
    res.status(405).json({
      message: 'Method not allowed',
    })
  }
)
