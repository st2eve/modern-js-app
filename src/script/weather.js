/* ------------------------------ reset for update content ------------------------------ */
import {
    resetContent
} from './reset.js';
/* ------------------------------ reset for update content ------------------------------ */

/* ------------------------------ reset for update compare ------------------------------ */
import {
    displayCompareAndTitle
} from './compare.js';
/* ------------------------------ reset for update compare ------------------------------ */

/* ------------------------------ Weather for today ------------------------------ */
export { getCityName };

function getCityName(){

    resetContent()

    const selectFormInputText = document.querySelector('.form__input-text')
    const apiKey = '7692fdfcc503a7509f924505444ba26a'
    let cityName = ""
    cityName = selectFormInputText.value


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=fr`)
    .then(response => response.json())
    .then(data => {
        let recupName = data['name']
        let recupDesc = data['weather']['0']['description']
        let recupTemp = data['main']['temp']
        let recupWind = data['wind']['speed']

        const selectWeatherInfos = document.querySelector('.weather__infos')

        let createPWind = document.createElement('p')
        createPWind.setAttribute('class', 'infos__wind')
        createPWind.innerHTML = `Vent : ${Math.round(recupWind*3.6)} km/h`
        selectWeatherInfos.prepend(createPWind)

        let createPDesc = document.createElement('p')
        createPDesc.setAttribute('class', 'infos__desc')
        createPDesc.innerHTML = recupDesc
        selectWeatherInfos.prepend(createPDesc)

        const selectWeatherTemp = document.querySelector('.weather__temp')
        const selectWeatherCity = document.querySelector('.weather__city')

        selectWeatherTemp.innerHTML = `${recupTemp} °c`
        selectWeatherCity.innerHTML = recupName

        const selectMainContainer = document.querySelector('.main__container')

        if(recupDesc == 'couvert' || recupDesc == 'nuageux' || recupDesc == 'partiellement nuageux'){
            selectMainContainer.setAttribute('style', 'background-image: url("https://i.gifer.com/srG.gif"); background-repeat: no-repeat; background-size: cover;')
        }else if(recupDesc == 'ciel dégagé'){
            selectMainContainer.setAttribute('style', 'background-image: url("https://i.gifer.com/GIWH.gif"); background-repeat: no-repeat; background-size: cover;')
        }else if(recupDesc == 'peu nuageux'){
            selectMainContainer.setAttribute('style', 'background-image: url("https://i.gifer.com/Lx0q.gif"); background-repeat: no-repeat; background-size: cover;')
        }else if(recupDesc == 'brume sèche'){
            selectMainContainer.setAttribute('style', 'background-image: url("https://i.gifer.com/DfSR.gif"); background-repeat: no-repeat; background-size: cover;')
        }else if(recupDesc == 'neige'){
            selectMainContainer.setAttribute('style', 'background-image: url("https://i.gifer.com/1Uiq.gif"); background-repeat: no-repeat; background-size: cover;')
        }else if(recupDesc == 'orage' || recupDesc == 'orageux'){
            selectMainContainer.setAttribute('style', 'background-image: url("https://i.gifer.com/Rnim.gif"); background-repeat: no-repeat; background-size: cover;')
        }else if(recupDesc == 'pluie' || recupDesc == 'pluvieux' || recupDesc == 'pluie modérée' || recupDesc == 'légère pluie'){
            selectMainContainer.setAttribute('style', 'background-image: url("https://i.gifer.com/JTCO.gif"); background-repeat: no-repeat; background-size: cover;')
        }
    })
    .catch(err => alert('You entered Wrong city name'))

    displayCompareAndTitle()
}
/* ------------------------------ Weather for today ------------------------------ */