console.log("Testing")

// fetch - https://itunes.apple.com/search?term=nsync

fetch ('https://itunes.apple.com/search?term=nsync', {
    method: 'GET',
    headers: {},
})
    .then(function(response) {  // response: what you got from code above 
        return response.json()
    })
    .then (function (data) {  // data is what's retuned in line 8
        console.log('The response is', data.results)
        // Test - Band Info Div - working
        const mainContainer = document.querySelector('#mainDiv')  

        let results = data.results.slice(1)
            for (let result of results) {
                let bandDiv = document.createElement('div')
                bandDiv.classList.add('bandPanel')

        let imgThumb = document.createElement('img')  
            imgThumb.classList.add('bImg')
            imgThumb.src = result.artworkUrl100 
            bandDiv.appendChild(imgThumb)

        let artName = document.createElement('p') 
            artName.classList.add('bName')
            artName.innerText = result.artistName 
            bandDiv.appendChild(artName)
    
        let songName = document.createElement('p')  
            songName.classList.add('bSong')
            songName.innerText = result.trackName 
            bandDiv.appendChild(songName)

        mainContainer.appendChild(bandDiv)

        }

    })

// Search Form

// let messageDiv = document.querySelector('#message')

let form = document.querySelector('#search-form')
console.log(`This is my search form: ${form}`)

form.addEventListener('submit', 
                      function(event) {
  console.log(`This is the form submit event: ${event}`)
let guest = document.querySelector('#search-input')
console.log(guest.value)

// let message = document.createElement('p')
// let text = document.createTextNode(`${guest.value}, You have signed up for the party!`)
// message.appendChild(text)
// messageDiv.appendChild(message)
})