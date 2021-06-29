import { serve } from 'https://deno.land/std@0.99.0/http/server.ts'
import { red } from 'fmt/colors.ts'

console.log(red('hello world'))
const server = serve({ port: 8082 })
console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/`)

for await (const request of server) {
  let bodyContent = 'Your user-agent is:\n\n'
  bodyContent += request.headers.get('user-agent') || 'Unknown'

  request.respond({ status: 200, body: bodyContent })
}
