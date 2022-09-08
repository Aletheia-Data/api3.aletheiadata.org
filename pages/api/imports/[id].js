export default async function handler(req, res) {
    const { id } = req.query
    try {
      // const result = await someAsyncOperation()
      res.status(200).json({ id: id })
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' })
    }
  }