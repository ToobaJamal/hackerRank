function countApplesAndOranges(s, t, a, b, apples, oranges){
  let appleYield = 0
  let orangeYield = 0
  for(let apple of apples) {
    if(a + apple >= s && a + apple <=t) {
      appleYield += 1
    }
  }
  for(let orange of oranges) {
    if(b + orange >= s && b + orange <=t) {
      orangeYield += 1
    }
  }
  console.log(`appleYield
  orangeYield`)
}
