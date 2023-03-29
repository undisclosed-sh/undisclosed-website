import { NextApiRequest, NextApiResponse } from 'next'

type GenericResponse = {
  code: number
  message: string
}

type RequestBody = {
  name: string
  email: string
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GenericResponse>,
) {
  const { body }: { body: RequestBody } = req

  if (!body || !body.name || !body.email || !body.message) {
    return res.status(400).json({
      message: 'Bad Request',
      code: 400,
    })
  }

  // TODO: send email somewhere

  return res.status(200).json({
    message: 'Ok',
    code: 200,
  })
}
