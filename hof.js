//pythagoras
function pythagoras(a, b) {
  return Math.sqrt(a * a + b * b);
}
// pythagoras(3,4)

//areaoftraingke
function areaoftriangle(a, b) {
  return 0.5 * a * b;
}
// areaoftriangle(3,4)

//final
let calculate = (a, b, logic) => {
  result = logic(a, b);
  console.log(result);
};
result1 = calculate(3, 4, pythagoras);
result2 = calculate(3, 4, areaoftriangle);
