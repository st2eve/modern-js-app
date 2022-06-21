/* ------------------------------ Constantes principales ------------------------------ */
import {
    selectCityOne, 
    selectCityTwo,
    selectButtonCompare
} from '/src/script/var.js';
/* ------------------------------ Constantes principales ------------------------------ */

/* ------------------------------ City compare One ------------------------------ */
function cityCompareOne(){

    let cityNameOne = ""
    cityNameOne = selectCityOne.value
    const apiKey = '7692fdfcc503a7509f924505444ba26a'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameOne}&appid=${apiKey}&units=metric&lang=fr`)
    .then(response => response.json())
    .then(data => {

        let recupName = data['name']
        let recupDesc = data['weather']['0']['description']
        let recupTemp = data['main']['temp']
        let recupWind = data['wind']['speed']
        let selectTempCityOne = document.querySelector('.compare__temp-cityOne')

        let createPWind = document.createElement('p')
        createPWind.setAttribute('class', 'infos__wind')
        createPWind.innerHTML = `Vent : ${Math.round(recupWind*3.6)} km/h`
        selectTempCityOne.prepend(createPWind)

        let createPDesc = document.createElement('p')
        createPDesc.setAttribute('class', 'infos__desc')
        createPDesc.innerHTML = recupDesc
        selectTempCityOne.prepend(createPDesc)

        let createPTemp = document.createElement('p')
        createPTemp.setAttribute('class', 'infos__temp')
        createPTemp.innerHTML = `${recupTemp} °c`
        selectTempCityOne.prepend(createPTemp)

        let createPName = document.createElement('p')
        createPName.setAttribute('class', 'infos__name')
        createPName.innerHTML = recupName
        selectTempCityOne.prepend(createPName)
    })
}
/* ------------------------------ City compare One ------------------------------ */



/* ------------------------------ City compare Two ------------------------------ */
function cityCompareTwo(){

    let cityNameTwo = ""
    cityNameTwo = selectCityTwo.value
    const apiKey = '7692fdfcc503a7509f924505444ba26a'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameTwo}&appid=${apiKey}&units=metric&lang=fr`)
    .then(response => response.json())
    .then(data => {

        let recupName = data['name']
        let recupDesc = data['weather']['0']['description']
        let recupTemp = data['main']['temp']
        let recupWind = data['wind']['speed']
        let selectTempCityTwo = document.querySelector('.compare__temp-cityTwo')

        let createPWind = document.createElement('p')
        createPWind.setAttribute('class', 'infos__wind')
        createPWind.innerHTML = `Vent : ${Math.round(recupWind*3.6)} km/h`
        selectTempCityTwo.prepend(createPWind)

        let createPDesc = document.createElement('p')
        createPDesc.setAttribute('class', 'infos__desc')
        createPDesc.innerHTML = recupDesc
        selectTempCityTwo.prepend(createPDesc)

        let createPTemp = document.createElement('p')
        createPTemp.setAttribute('class', 'infos__temp')
        createPTemp.innerHTML = `${recupTemp} °c`
        selectTempCityTwo.prepend(createPTemp)

        let createPName = document.createElement('p')
        createPName.setAttribute('class', 'infos__name')
        createPName.innerHTML = recupName
        selectTempCityTwo.prepend(createPName)
    })
}
/* ------------------------------ City compare Two ------------------------------ */



/* ------------------------------ style for block City Compare ------------------------------ */
function cityCompareDisplay(){

    const selectMain = document.querySelector('main')
    const selectBlockCompare = document.querySelector('.main__block-compare')

    selectMain.setAttribute('style', 'grid-template-columns: 2fr 1fr;')
    selectButtonCompare.setAttribute('style', 'display: none')
    selectBlockCompare.setAttribute('style', 'display: grid; grid-template-rows: 1fr 1fr; justify-content: center;')

}
/* ------------------------------ style for block City Compare ------------------------------ */

export { cityCompareOne, cityCompareTwo,  cityCompareDisplay};