const { Klass } = require("../index.js")

describe("Klass", function() {
  describe("toString()", function () {
    it("Returns an empty string", function () {
      expect(new Klass().toString()).toBe("")
    })
  })
})
