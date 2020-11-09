const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/

let number =
  '555-555-5555,(555)555-5555,(555) 555-5555,555 555 5555,5555555555,1 555 555 5555'

let a = number.split(',')

for (let i = 0; i < a.length; i++) {
  console.log(regex.test(a[i]))
}
