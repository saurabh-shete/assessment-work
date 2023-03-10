const form = document.getElementById('form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phoneNumber')
const message = document.getElementById('message')
const success_message = document.getElementById('success-message')

var flag = 0
const showError = (input, message) => {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  let small = formControl.querySelector('small')
  small.innerText = message
}

const getFieldName = input => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

const checkRequired = inputArr => {
  inputArr.forEach(input => {
    if (input.value === '') {
      flag = 1
      showError(input, `${getFieldName(input)} is required`)
    }
    flag = 0
  })
}

form.addEventListener('submit', e => {
  e.preventDefault()
  checkRequired([name, email, message])

  document.getElementById('name').value = ''
  document.getElementById('email').value = ''
  document.getElementById('phoneNumber').value = ''
  document.getElementById('message').value = ''
  if (flag === 0) {
    const formControl = success_message.parentElement
    formControl.className = 'container success success-message'
  }
})
