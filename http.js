const http = require('http');

const server = http.createServer(function(request, response) {
  response.write('This is not working!')
  response.end();
})

module.exports = {
  print: function() {
    console.log('is this really working?')
  },
  server: server
}
