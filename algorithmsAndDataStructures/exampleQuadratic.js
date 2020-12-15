const quadratic = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i)
    for (let j = i; j < n; j++) {
      console.log(j)
    }
  }
}

quadratic(50)
