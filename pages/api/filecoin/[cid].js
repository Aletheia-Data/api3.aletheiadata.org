export default async function handler(req, res) {
  const { cid } = req.query
  try {
    // const result = await someAsyncOperation()
    res.status(200).json({ cid: cid })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}