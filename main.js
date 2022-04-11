console.log("Testing")

// Search Form


let form = document.querySelector('#search-form')
console.log(`This is my search form: ${form}`)

form.addEventListener('submit', function(event) {
event.preventDefault()
 console.log(`This is the form submit event: ${event}`)

let uInput = document.querySelector('#search-input')
console.log(uInput.value)

fetch (`https://proxy-itunes-api.glitch.me/search?term=${uInput.value}&media=music`, {
    method: 'GET',
    headers: {},
})
    .then(function(response) {  // response: what you got from code above 
        return response.json()
    })
    .then (function (data) {  // data is what's retuned in line 21
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
                    
                let playAudio = document.createElement("audio");
                playAudio.classList.add('playAudio')
                playAudio.controls = true
                playAudio.src = result.previewUrl
                playAudio.addEventListener("click", event)
                bandDiv.appendChild(playAudio)

                mainContainer.appendChild(bandDiv)

                
        }
    })
})


// Thought for audio: link or button in bandDiv that links to .result.previewUrl that plays on the audio player in HTML with the ID of player
// let songPreview = 

// mish moshing random code
// let pagePlayer = document.querySelector("#player");
// pagePlayer.src = result.previewUrl
// //https://stackoverflow.com/questions/55998756/need-help-using-javascript-with-htmlplayer/56000290#56000290
// pagePlayer.addEventListener('click'

