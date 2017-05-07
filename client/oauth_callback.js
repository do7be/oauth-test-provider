var callBackUrl = new URLSearchParams(window.location.hash.replace(/#/, ''))
var accessToken = callBackUrl.get('access_token')

fetch('https://shrouded-ravine-50926.herokuapp.com/').then((response) => {
  return response.text()
}).then((text) => {
  console.log('nashi', text)
})

fetch('https://shrouded-ravine-50926.herokuapp.com/', {
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
}).then((response) => {
  return response.text()
}).then((text) => {
  console.log(text)
})