/* ------------------------------ Weather for today ------------------------------ */
import {
    getCityName
} from './weather.js';
/* ------------------------------ Weather for today ------------------------------ */

/* ------------------------------ Graphique ------------------------------ */
import {
    getChart,
    updateCharts
} from './charts.js';
/* ------------------------------ Graphique ------------------------------ */

/* ------------------------------ Forecast ------------------------------ */
function getForecast(){

    const apiKey = '7692fdfcc503a7509f924505444ba26a'

    getCityName()
    
    const selectFormInputText = document.querySelector('.form__input-text')
    let cityName = ""
    cityName = selectFormInputText.value

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=5&appid=${apiKey}&units=metric&lang=fr`)
    .then(response => response.json())
    .then(dataBis => {
        for(let i = 0; i < 5; i++){
            let recupForTemp = dataBis['list'][i]['main']['temp']
            let recupForcastDesc = dataBis['list'][i]['weather'][0]['description']
            let createArticle = document.createElement('article')
            createArticle.setAttribute('class', 'infos__nextdays')

            let createPForTemp = document.createElement('p')
            createPForTemp.setAttribute('class', 'nextdays__temp')
            createPForTemp.innerHTML = ""
            createPForTemp.innerHTML = `${recupForTemp} °c`
            createArticle.appendChild(createPForTemp)

            let createForDesc = document.createElement('p')
            createForDesc.setAttribute('class', 'nextdays__desc')
            createForDesc.innerHTML = ""
            createForDesc.innerHTML = recupForcastDesc
            createArticle.appendChild(createForDesc)

            const imgClass = ['infos__clear', 'infos__clouds', 'infos__abitclouds', 'infos__mist', 'infos__snow', 'infos__thunder', 'infos__rain']
            const imgSrc = ['src/img/sun.png', 'src/img/clouds.png', 'src/img/abitclouds.png', 'src/img/mist.png', 'src/img/snow.png', 'src/img/thunder.png', 'src/img/rain.png']

            for(let j = 0; j < imgClass.length; j++){
                let creatImg = document.createElement('img')
                creatImg.setAttribute('class', imgClass[j])
                creatImg.setAttribute('src', imgSrc[j])
                createArticle.appendChild(creatImg)   
            }

            const selectWeatherInfos = document.querySelector('.weather__infos')

            selectWeatherInfos.appendChild(createArticle)

            const selectInfosDescs = document.querySelectorAll('.nextdays__desc')
            const infosDescsClouds = document.querySelectorAll('.infos__clouds')
            const infosDescClears = document.querySelectorAll('.infos__clear')
            const infosDescABitClouds = document.querySelectorAll('.infos__abitclouds')
            const infosDescsMists = document.querySelectorAll('.infos__mist')
            const infosDescsSnows = document.querySelectorAll('.infos__snow')
            const infosDescsThunders = document.querySelectorAll('.infos__thunder')
            const infosDescsRains = document.querySelectorAll('.infos__rain')

            if(selectInfosDescs[i].innerHTML == 'couvert' || selectInfosDescs[i].innerHTML == 'nuageux' || selectInfosDescs[i].innerHTML == 'partiellement nuageux'){
                infosDescsClouds[i].setAttribute('style', 'display: initial')
            }else if(selectInfosDescs[i].innerHTML == 'ciel dégagé'){
                infosDescClears[i].setAttribute('style', 'display: initial')
            }else if(selectInfosDescs[i].innerHTML == 'peu nuageux'){
                infosDescABitClouds[i].setAttribute('style', 'display: initial')
            }else if(selectInfosDescs[i].innerHTML == 'brume sèche'){
                infosDescsMists[i].setAttribute('style', 'display: initial')
            }else if(selectInfosDescs[i].innerHTML == 'neige'){
                infosDescsSnows[i].setAttribute('style', 'display: initial')
            }else if(selectInfosDescs[i].innerHTML == 'orage' || selectInfosDescs[i].innerHTML == 'orageux'){
                infosDescsThunders[i].setAttribute('style', 'display: initial')
            }else if(selectInfosDescs[i].innerHTML == 'pluie' || selectInfosDescs[i].innerHTML == 'pluvieux' || selectInfosDescs[i].innerHTML == 'légère pluie' || selectInfosDescs[i].innerHTML == 'pluie modérée'){
                infosDescsRains[i].setAttribute('style', 'display: initial')
            }    
        }
        getChart()
    })
    .catch(err => alert('There is a problem with the weather app code'))
}
export { getForecast };
/* ------------------------------ Forecast ------------------------------ */