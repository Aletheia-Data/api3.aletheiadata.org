/**
 * @swagger
 * /api/sources:
 *   get:
 *     description: Returns all sources
 *     responses:
 *       200:
 *         description: All Aletheia sources
 */
export default async function handler(req, res) {
    try {
      // const result = await someAsyncOperation()
      res.status(200).json({ sources: 'index' })
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' })
    }
  }