// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar").caesar;

describe("caesar", () => {
  it("function should exist", () => {
    const actual = typeof caesar === "function";
    const expected = typeof caesar === "function";
    
    expect(actual).to.equal(expected);
  })
  
  it("should return false if the shift value isn't present", () => {
    let input = "thinkful";
    let shift = undefined;
    const actual = caesar(input, shift, encode = true);
    const expected = false;
    
    expect(actual).to.equal(expected);
  });
  
  it("should return false if the shift value is 0", () => {
    let input = "thinkful";
    let shift = 0;
    const actual = caesar(input, shift, encode = true);
    const expected = false;
    
    expect(actual).to.equal(expected);
  })
  
  it("should return false if the shift value is less than -25", () => {
    let input = "thinkful";
    let shift = -26;
    const actual = caesar(input, shift, encode = true);
    const expected = false;
    
    expect(actual).to.equal(expected);
  })
  
  it("should return false if the shift value is greater than 25", () => {
    let input = "thinkful";
    let shift = 26;
    const actual = caesar(input, shift, encode = true);
    const expected = false;
    
    expect(actual).to.equal(expected);
  })
  
  it("should wrap around to the front of the alphabet if a letter is shifted so that it goes off the alphabet", () => {
    let input = "zebra";
    let shift = 3;
    const actual = caesar(input, shift, encode = true);
    const expected = "cheud";
   
    expect(actual).to.equal(expected);
  })
  
  it("should ignore capital letters", () => {
    let input = "Yolo";
    let shift = 3;
    const actual = caesar(input, shift, encode = true);
    const expected = "bror";
    
    expect(actual).to.equal(expected);
  })
  
  it("spaces and characters should be maintained", () => {
    let input = "@#$% *&^&*&^ @#$%$#@";
    let shift = 3;
    let actual = caesar(input, shift, encode = true);
    let expected = "@#$% *&^&*&^ @#$%$#@";
    expect(actual).to.equal(expected);
  });
});