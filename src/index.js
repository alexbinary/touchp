
let touchp = require('touchp')
let promisify = require('@alexbinary/promisify')

let mytouchp = promisify(touchp)
mytouchp.sync = touchp.sync

module.exports = mytouchp
