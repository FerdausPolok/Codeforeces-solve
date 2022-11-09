tc = prompt();

for (let i = 0; i < tc; i++) {
  a = parseInt(prompt());
  b = parseInt(prompt());

  if (a >= b) {
    [a, b] = [b, a];
  }
  if ((a + b) % 3 == 0 && a * 2 >= b) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
