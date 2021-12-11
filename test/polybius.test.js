// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius").polybius;

describe("polybius", () => {
  it("should translate the letters i and j to 42 when encoding", () => {
    let input = "jibbs";
    const actual = polybius(input, encode = true);
    const expected = "4242212134";
    
    expect(actual).to.equal(expected);
  })
  
  it("should translate 42 to i/j when decoding", () => {
    let input = "4242212134";
    const actual = polybius(input, encode = false);
    const expected = "(i/j)(i/j)bbs";
    
    expect(actual).to.equal(expected);
  })
  
  it("should ignore capital letters", () => {
    let input = "Yolo";
    const actual = polybius(input, encode = true);
    const expected = "45431343";
    
    expect(actual).to.equal(expected);
  })
  
  it("should maintain spaces", () => {
    let input = "hi there";
    const actual = polybius(input, encode = true);
    const expected = "3242 4432512451";
    
    expect(actual).to.equal(expected);
  })
});
