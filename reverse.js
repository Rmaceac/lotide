const array = process.argv.slice(2);
for (let i = 0; i < array.length; i++) {
  let result = "";
  for (let x = array[i].length - 1; x >= 0; x--) {
    result += array[i][x];
  } console.log(result);
}