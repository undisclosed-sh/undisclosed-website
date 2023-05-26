import { NextApiRequest, NextApiResponse } from 'next'
import { writeFileSync } from 'fs'

// import CzTranslations from './../../content/locales/cs.json'
// import EnTranslations from './../../content/locales/en.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { body }: { body: `{ locale: 'en' | 'cs' }` } = req
    const locale: 'en' | 'cs' = JSON.parse(body).locale

    if (locale === 'en') {
      res.status(200).json({
        // data: EnTranslations,
        message: 'success',
      })
    } else if (locale === 'cs') {
      res.status(200).json({
        // data: CzTranslations,
        message: 'success',
      })
    } else {
      res.status(500).json({
        data: {},
        message: 'No translation data found for provided locale',
      })
    }
  } else if (req.method === 'PUT') {
    const { body }: { body: `{ locale: 'en' | 'cs', data: string }` } = req
    const locale: 'en' | 'cs' = JSON.parse(body).locale
    const data: string = JSON.parse(body).data

    if (locale === 'cs') {
      writeFileSync('content/locales/cs.json', data)

      res.status(200).json({ data: [], message: 'Data updated' })
    } else if (locale === 'en') {
      writeFileSync('content/locales/en.json', data)

      res.status(200).json({ data: [], message: 'Data updated' })
    }
  } else {
    res.status(405).json({ data: [], message: 'Method not allowed' })
  }
}
