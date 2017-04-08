'use strict'

var app = require('./fizzBuzz.js');


describe("Fizz Buzz tests ", function() {


  it("should return `Fizz` for number divisible by 3", function() {
    var value = app.fizzBuzz(3);
    expect(value).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    var value = app.fizzBuzz(5);
    expect(value).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    var value = app.fizzBuzz(15);
    expect(value).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    var value = app.fizzBuzz(45);
    expect(value).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    var value = app.fizzBuzz(90);
    expect(value).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    var value = app.fizzBuzz(63);
    expect(value).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    var value = app.fizzBuzz(7);
    expect(value).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    var value = app.fizzBuzz(101);
    expect(value).toBe(101);
  });

});