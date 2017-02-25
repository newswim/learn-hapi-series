const H = require('hapi')
const server = new H.Server()

server.connection({
  host: 'localhost',
  port: 3000
})

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply('hey.')
  }
})

server.start((err) => {
  if (err) throw err
  console.log(`Server started on port ${server.info.uri}`)
})
