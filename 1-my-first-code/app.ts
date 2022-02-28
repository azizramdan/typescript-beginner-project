function add(n1: number, n2: number): number {
  return n1 + n2
}

function printResultVoid(num: number): void {
  console.log('Result: ' + num);
}

function printResultUndefined(num: number): undefined {
  console.log('Result: ' + num);
  return
}

printResultVoid(add(1, 7))

// let combineValues: Function
let combineValues: (a: number, b:number) => number

combineValues = add
// combineValues = printResultVoid

console.log(combineValues(7, 1));