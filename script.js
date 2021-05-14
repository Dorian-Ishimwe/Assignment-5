let number = 0
let number2 = 0

document.getElementById('area').addEventListener('click', area)
document.getElementById('cir').addEventListener('click', circumference)

function area () {
  number = document.getElementById('radius').value
  number = parseInt(number)

  number = Math.pow(number, 2) * 3.14 
  document.getElementById('answer').innerHTML = number
}

function circumference () {
  number2 = document.getElementById('radius').value
  number2 = parseInt(number2)

  number2 = number2 * 3.14 * 2
  document.getElementById('answer2').innerHTML = number2
}
