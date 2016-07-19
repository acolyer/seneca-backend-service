module.exports = function ${role_name}(options) {

  this.add({role: '${role_name}', cmd: 'ping'}, function ping(msg,respond)) {
    respond(null, {answer: 'pong'})
  }
  
}
