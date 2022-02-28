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

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2
  callback(result)
}

printResultVoid(add(1, 7))

// let combineValues: Function
let combineValues: (a: number, b:number) => number

combineValues = add
// combineValues = printResultVoid

console.log(combineValues(7, 1));

addAndHandle(10, 20, (result) => {
  console.log(result);
})