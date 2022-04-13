console.log("Connected")

// Search Form
let form = document.querySelector('#search-form')

form.addEventListener('submit', function(event) {
event.preventDefault()

// Reloads / refreshes mainDiv 
function adios (parent) {
    while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
    }
}
adios(mainDiv)


let uInput = document.querySelector('#search-input')


fetch (`https://proxy-itunes-api.glitch.me/search?term=${uInput.value}&media=music`, {
    method: 'GET',
    headers: {},
})
    .then(function(response) {  // response: what you got from code above 
        return response.json()
    })
    .then (function (data) {  // data is what's retuned in line 27
        // console.log('The response is', data.results)

        // Band Info Div - working
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
                    

                // Song name now linked and opens player at top
                let songName = document.createElement('p')  
                let a = document.createElement('a')
                a.classList.add('cToPlay')
                let linkedSong = document.createTextNode(`${result.trackName}`)
                a.appendChild(linkedSong)
                a.title = `${result.trackName}`
                a.href = `${result.previewUrl}`
                bandDiv.appendChild(a)
                let clickMe = document.createElement('p')
                clickMe.innerText = "Click song title above to hear a preview!"
                bandDiv.appendChild(clickMe)

                mainContainer.appendChild(bandDiv)
            

                // Test for top Audio player / gross but working and clears
                const topPlayer = document.querySelector("#player")
                a.addEventListener("click", function () {
                    if (topPlayer.innerHTML === "") {
                        let imgThumb = document.createElement('img')  
                        imgThumb.classList.add('bImg')
                        imgThumb.src = result.artworkUrl100 
                        let player = document.createElement('audio')
                        player.controls = true
                        // player.controlsList= "nodownload"
                        player.src = result.previewUrl
                        player.play()
                        // player.prop('preload','none')
                        let trackName = document.createElement('p') 
                        trackName.innerText = `Now Listening to: ${result.trackName}`
                        topPlayer.appendChild(imgThumb)
                        topPlayer.appendChild(player)
                        topPlayer.appendChild(trackName)
                    } else {
                        if (topPlayer.innerHTML !== "") {
                        topPlayer.innerHTML = ""
                        uInput.value = "" 
                        let imgThumb = document.createElement('img')  
                        imgThumb.classList.add('bImg')
                        imgThumb.src = result.artworkUrl100 
                        let player = document.createElement('audio')
                        player.controls = true
                        // player.controlsList= "nodownload"
                        player.src = result.previewUrl
                        player.play()
                        // player.prop('preload','none')
                        let trackName = document.createElement('p') 
                        trackName.innerText = `Now Listening to: ${result.trackName}`
                        topPlayer.appendChild(imgThumb)
                        topPlayer.appendChild(player)
                        topPlayer.appendChild(trackName)
                    } 
                }
            })
        }
    })
})