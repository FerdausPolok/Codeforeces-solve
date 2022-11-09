tc = prompt();

for (let i = 0; i < tc; i++) {
  n = parseInt(prompt());
  N = n;
  counter = 0;
  arr1 = [];

  for (i = 2; i * i <= N; i++) {
    if (n % i == 0) {
      counter++;
      n = n / i;
      arr1.push(i);
    }
    if (counter == 2) {
      arr1.push(n);
      break;
    }
  }

  if (counter < 2) {
    console.log("No");
  } else if (arr1[0] == arr1[2] || arr1[1] == arr1[2]) {
    console.log("No");
  } else {
    console.log("Yes");
    console.log(arr1);
  }
}
