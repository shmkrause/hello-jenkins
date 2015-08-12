var app = require('../app.js');

describe("Hello world", function() {
    it("says hello", function() {
        expect(request(app).get('/')).toEqual("hello jenkins");
    });
});
