var app = require("./getPrime.js");

describe("Get Prime numbers within a number",function(){
	it("The function should generate list from a number", function(){
		 	var value = app.getPrimes(8);
		 	expect(value).toEqual([2,3,5,7])
		 });

	it("The function should generate list from a number", function(){
		 	var value = app.getPrimes(0);
		 	expect(value).toEqual(undefined)
		 });
	it("The function should generate list from a number", function(){
		 	var value = app.getPrimes("a");
		 	expect(value).toEqual(undefined)
		 });
	it("The function should generate list from a number", function(){
		 	var value = app.getPrimes(15);
		 	expect(value).toEqual([2,3,5,7,11,13])
		 });
	it("The function should generate list from a number", function(){
		 	var value = app.getPrimes(21);
		 	expect(value).toEqual([2,3,5,7,11,13,17,19])
		 });
});