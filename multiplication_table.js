function multiplication_table(n) {
  if (n < 1) return "";
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${n} x ${i} = ${n * i}\n`;
  }
  return table;
}

function addition_table(n) {
  if (n < 1) return "";
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${n} + ${i} = ${n + i}\n`;
  }
  return table;
}

function subtraction_table(n) {
  if (n < 1) return "";
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${n} - ${i} = ${n - i}\n`;
  }
  return table;
}

function division_table(n) {
  if (n < 1) return "";
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${n} / ${i} = ${n / i}\n`;
  }
  return table;
}
