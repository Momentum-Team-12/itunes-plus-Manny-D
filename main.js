console.log("Testing")

fetch ('https://itunes.apple.com/search?term=nsyc', {
    method: 'GET',
    headers: {},
})
    .then(function(response) {  // response: what you got from code above 
        return response.json()
    })
    .then (function (data) {  // data is what's retuned in line 8
        console.log('The response is', data.results)

        // for (let i of data.results) {
        //     console.log(i.trackname)

        // //test - add band/artist thumbnail
        // let imgDiv = document.querySelector('#imgDiv')
        // let bandImage = document.createElement('img')
        // bandImage.classList.add('thumbnail')
        // imgDiv.appendChild(bandImage)
        // bandImage.src = `${results.artworkUrl100}`
        // imgDiv.appendChild(bandImage)



        // //test - Pulling Data - working (found StackO for data pull)
        // let nameDiv = document.querySelector('#tDiv')
        // let bandName = document.createElement('p')
        // bandName.classList.add('aName')
        // nameDiv.appendChild(bandName)
        // bandName.innerText = `Artist: ${results.artistName}`
        // nameDiv.appendChild(bandName)

        //Test - for search bar
        const searchContainer = document.querySelector('#search')


        const mainContainer = document.querySelector('#bandDivs')  

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