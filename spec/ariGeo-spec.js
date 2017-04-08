var app = require("./aritGeo.js");
(function(){
  'use strict';

  describe("Determine the sequence of an array of numbers: ", function() {

    describe("Case for an empty array", function() {

      it("should return 0 for an empty array", function() {
        var value = app.aritGeo([]);
        expect(value).toEqual(0);
      });

    });

    describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        var value = app.aritGeo([2, 4, 6, 8, 10]);
        expect(value).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
        var value = app.aritGeo([5, 11, 17, 23, 29, 35, 41]);
        expect(value).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
        var value =app.aritGeo([15, 10, 5, 0, -5, -10]);
        expect().toEqual('Arithmetic');
      });

    });

    describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        
        var value = app.aritGeo([2, 6, 18, 54, 162]);
        expect(value).toEqual('Geometric');
      });

      it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
        var value = app.aritGeo([0.5, 3.5, 24.5, 171.5])
        expect(value).toEqual('Geometric');
      });

      it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {
        var value  = app.aritGeo([-128, 64, -32, 16, -8]);
        expect(value).toEqual('Geometric');
      });

    });

    describe("Case for neither arithmetic nor geometric sequence", function() {

      it("should return -1 for [1, 2, 3, 5, 8]", function() {
        var value = app.aritGeo([1, 2, 3, 5, 8]);
        expect(value).toEqual(-1);
      });

      it("should return -1 for [1, 3, 6, 10, 15]", function() {
        var value  =app.aritGeo([1, 3, 6, 10, 15])
        expect(value).toEqual(-1);
      });

      it("should return -1 for [1, 8, 27, 64, 125]", function() {
        var value = app.aritGeo([1, 8, 27, 64, 125]);
        expect(value).toEqual(-1);
      });
      
    });
  });
})();