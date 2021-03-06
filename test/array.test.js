// Here are some tests for some of JavaScript's built-in Array methods
var chai = require('/home/mstoiovici/ada_testing_module/di-workshop-07-tdd-intro/node_modules/chai/index')
var expect = chai.expect

describe('Array', function() {
  describe('#push()', function() {
    it('should add an item to the array', function() {
      var array = [1, 2, 3, 4]
      array.push(5)
      expect(array).to.deep.equal([1, 2, 3, 4, 5])
    })

    it('should alter the length properly', function() {
      var array = [1, 1, 1, 1]
      array.push(1)
      expect(array.length).to.equal(5)
    })
  })
})

describe('Array', function() {
  describe('#pop()', function() {
    it('should remove an item from the array', function() {
      var array = [1, 2, 3, 4]
      array.pop(4)
      expect(array).to.deep.equal([1, 2, 3])
    })

    it('should alter the length properly', function() {
      var array = [1, 1, 1, 1]
      array.pop(1)
      expect(array.length).to.equal(3)
    })
  })
})
