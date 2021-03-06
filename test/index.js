
let chai = require('chai')
let expect = chai.expect
chai.use(require('chai-fs'))

let fsSandbox = require('alexbinary.fs-sandbox')
fsSandbox.setRoot(__dirname)

let touchp = require('./../src/index')

describe('touchp', function () {
  it('promise', function (done) {
    // ## Setup
    let sandbox = fsSandbox.newSync()
    let filepath = sandbox.getPath('foo/bar')
    // ## TEST
    touchp(filepath).then(() => {
      // ## Assert
      expect(filepath).to.be.a.file()
      // ## Teardown
      fsSandbox.rmSync()
      // ## End
    }).then(() => done()).catch(done)
  })
  it('callback', function (done) {
    // ## Setup
    let sandbox = fsSandbox.newSync()
    let filepath = sandbox.getPath('foo/bar')
    // ## TEST
    touchp(filepath, (err) => {
      // ## Assert
      expect(err).to.be.null
      expect(filepath).to.be.a.file()
      // ## Teardown
      fsSandbox.rmSync()
      // ## End
      done()
    })
  })
  it('sync', function () {
    // ## Setup
    let sandbox = fsSandbox.newSync()
    let filepath = sandbox.getPath('foo/bar')
    // ## TEST
    touchp.sync(filepath)
    // ## Assert
    expect(filepath).to.be.a.file()
    // ## Teardown
    fsSandbox.rmSync()
    // ## End
  })
  after(function () {
    fsSandbox.rmSync()
  })
})
