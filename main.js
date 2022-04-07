console.log("Testing")

let profileDiv1 = document.querySelector('#profile')

fetch ('https://itunes.apple.com/search?term=nsyc', {
    method: 'GET',
    headers: {},
})
    .then(function(response) {  // response: what you got from code above 
        return response.json()
    })
    .then (function (data) {  // data is what's retuned in line 10
        console.log('The response is', data)

        //test - add band/artist thumbnail
        let imgDiv = document.querySelector('#imgDiv')
        let bandImage = document.createElement('img')
        bandImage.classList.add('thumbnail')
        imgDiv.appendChild(bandImage)
        bandImage.src = `${data.results[0].artworkUrl100}`
        imgDiv.appendChild(bandImage)


        //test - Pulling Data - working (found StackO for data pull)
        let nameDiv = document.querySelector('#tDiv')
        let bandName = document.createElement('p')
        bandName.classList.add('aName')
        nameDiv.appendChild(bandName)
        bandName.innerText = `Artist: ${data.results[0].artistName}`
        nameDiv.appendChild(bandName)


})