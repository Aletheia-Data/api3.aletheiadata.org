export default async function handler(req, res) {
    try {
      // const result = await someAsyncOperation()
      res.status(200).json({ imports: 'index' })
    } catch (err) {
      res.status(500).json({ error: 'failed to load data' })
    }
  }