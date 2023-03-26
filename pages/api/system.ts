import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cookies } = req

  res.status(200).json({
    data: {
      date: new Date(),
    },
    message: 'Success',
  })
}
