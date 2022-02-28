function combine(input1: number|string, input2: number|string, resultConversion: 'as-number'|'as-text') {
  let result

  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }

  return result
}

const combineAge = combine(24, 24, 'as-number')
console.log(combineAge);

const combineStringAge = combine('24', '24', 'as-number')
console.log(combineStringAge);

const combineName = combine('Aziz', 'Rysa', 'as-text')
console.log(combineName);

