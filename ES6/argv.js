const addNumbers = () => {
  const args = process.argv.slice(2)
  const a = parseInt(args[0])
  const b = parseInt(args[1])

  console.log(a + b)
}

addNumbers()
