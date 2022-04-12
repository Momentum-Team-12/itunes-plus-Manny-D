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
    .then (function (data) {  // data is what's retuned in line 19
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
    
                // Orig working songname that I'll test linking    
                // let songName = document.createElement('p')  
                //     songName.classList.add('bSong')
                //     songName.innerText = result.trackName 
                //     bandDiv.appendChild(songName)
                    
                // Song name now linked and opens player at top / have to clear tho
                let songName = document.createElement('p')  
                let a = document.createElement('a')
                a.classList.add('cToPlay')
                let linkedSong = document.createTextNode(`${result.trackName}`)
                a.appendChild(linkedSong)
                a.title = `${result.trackName}`
                a.href = `${result.previewUrl}`
                bandDiv.appendChild(a)

                // Working player in each div
                // let playAudio = document.createElement("audio");
                // playAudio.classList.add('playAudio')
                // playAudio.controls = true
                // playAudio.src = result.previewUrl
                // playAudio.addEventListener("click", event)
                // bandDiv.appendChild(playAudio)

                mainContainer.appendChild(bandDiv)

                // Test for top Audio player / working but needs to clear on new
                const topPlayer = document.querySelector("#player")
                a.addEventListener("click", function () {
                let player = document.createElement('audio')
                player.controls = true
                player.src = result.previewUrl
                let trackName = document.createElement('p') 
                trackName.innerText = `Now Playing: ${result.trackName}`
                topPlayer.appendChild(player)
                topPlayer.appendChild(trackName)
            })
        }
    })
})

// Test - clear for next search

// document.querySelector("search").addEventListener('click', event) 
// document.querySelector("search").innerHTML = '';
