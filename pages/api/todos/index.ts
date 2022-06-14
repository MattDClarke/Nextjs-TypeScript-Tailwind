import { NextApiRequest, NextApiResponse } from 'next'
import { TodoModel } from '../../../models/Todo'
import { dbConnect } from '../../../utils/dbConnect'
import catchErrors from '../../../utils/ErrorHandler'

export default catchErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
      await dbConnect()
      const result = await TodoModel.find({})
      res.status(200).json(result)
    } else {
      res.status(405).json({
        message: 'Method not allowed',
      })
    }
  }
)
