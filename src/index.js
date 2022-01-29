module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false
  }
  const bracketsMap = Object.fromEntries(bracketsConfig)

  const stack = []
  for (const char of str) {
    const openCloseSame = char === bracketsMap[char]
    if (bracketsMap[char] && !openCloseSame) {
      stack.push(char)
    } else if (openCloseSame) {
      const lastInStack = stack[stack.length - 1]
      if (lastInStack === char) {
        stack.pop()
      } else {
        stack.push(char)
      }
    } else {
      const lastInStack = stack.pop()
      if (bracketsMap[lastInStack] !== char) {
        return false
      }
    }
  }
  return stack.length === 0
}