// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution").substitution;

describe("substitution", () => {
  it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    let input = "hello";
    let alphabet = "xoyqmcgrukswaflnthdjpzibe"
    const actual = substitution(input, alphabet, encode = true);
    const expected = false;
    
    expect(actual).to.equal(expected)
  });
  
  it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    
    expect(actual).to.equal(expected);
  });
  
  it("should return false if there are any duplicate characters in the given alphabet", () => {
    const actual = substitution("hey there", "xxoyqmcgrukswaflnthdjpzibe");
    const expected = false;
    
    expect(actual).to.equal(expected)
  })
  
  it("maintains spaces in the message, before and after encoding or decoding", () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj dne";
    
    expect(actual).to.equal(expected)
  })
  
  it("ignores capital letters", () => {
    const actual = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    
    expect(actual).to.equal(expected)
  });
});