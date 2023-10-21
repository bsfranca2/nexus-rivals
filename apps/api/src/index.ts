// import { createServer } from './server'

// const port = process.env.PORT || 5001
// const server = createServer()

// server.listen(port, () => {
//   console.log(`api running on ${port}`)
// })

import { storage } from './redis'

async function main() {
  console.log('running main')
  await storage.setItem('item1', 'something')
  const item1 = await storage.getItem('item1')
  console.log('item1', item1)
}

main()
