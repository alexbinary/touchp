
let expect = require('chai').expect

let fsSandbox = require('alexbinary.fs-sandbox')
let fileexists = require('alexbinary.file-exists')

let touchp = require('./../src/index')

fsSandbox.setRoot(__dirname)

describe('touchp', function () {
  it('promise', function (done) {
    // ## Setup
    let sandbox = fsSandbox.newSync()
    let filepath = sandbox.getPath('foo/bar')
    // ## TEST
    touchp(filepath).then(() => {
      // ## Assert
      expect(fileexists.sync(filepath)).to.be.true
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
      expect(fileexists.sync(filepath)).to.be.true
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
    expect(fileexists.sync(filepath)).to.be.true
    // ## Teardown
    fsSandbox.rmSync()
    // ## End
  })
  after(function () {
    fsSandbox.rmSync()
  })
})
