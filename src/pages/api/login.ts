import { NextApiRequest, NextApiResponse } from 'next'
import logger from '@/app/lib/logger';

export default async function createMessage(req: NextApiRequest, res: NextApiResponse) {

  logger.info(req.query)
  const url = 'http://localhost:8080/oauth2/authorization/github'
  logger.info('url: ' + url)

  try {
    logger.info('About to call the BFF.')
    logger.info('url: ' + url)
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X_CONV_ID': 'convo-id-123456',
      },
    })
    const data = await response.json()
    logger.info('BFF response received.')
    logger.info(data)
    res.status(200).json({ data })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
