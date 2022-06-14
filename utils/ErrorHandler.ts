import { NextApiRequest, NextApiResponse } from 'next'

interface NextFetchFunc {
  (req: NextApiRequest, res: NextApiResponse): Promise<void>
}

export default function catchErrors(handler: NextFetchFunc): NextFetchFunc {
  return async (req: NextApiRequest, res: NextApiResponse) =>
    handler(req, res).catch((error: Error) => {
      console.error(error)
      return res.status(500).json({ message: 'There was a server error' })
    })
}
