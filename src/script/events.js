/* ------------------------------ Constantes principales ------------------------------ */
import {
    selectContainerForm, 
    selectFormInputButton, 
    selectCityOne, selectCityTwo, 
    selectButtonCityOne, 
    selectButtonCityTwo, 
    selectButtonCompare
} from '/src/script/var.js';
/* ------------------------------ Constantes principales ------------------------------ */

/* ------------------------------ Forecast ------------------------------ */
import {
    getForecast
} from './forecast.js';
/* ------------------------------ Forecast ------------------------------ */

/* ------------------------------ City compare ------------------------------ */
import {
    cityCompareOne, 
    cityCompareTwo,  
    cityCompareDisplay
} from './citycompare.js';
/* ------------------------------ City compare ------------------------------ */

/* ------------------------------ all events ------------------------------ */
function allEvents(){
    selectContainerForm.addEventListener('keydown', event => {
        if (event.which === 13) {
            event.preventDefault();
            getForecast();
        }
    })
    selectFormInputButton.addEventListener('click', getForecast)

    selectButtonCompare.addEventListener('click', cityCompareDisplay)

    selectCityOne.addEventListener('keydown', event => {
        if (event.which === 13) {
            event.preventDefault();
            cityCompareOne();
        }
    })
    selectButtonCityOne.addEventListener('click', cityCompareOne)

    selectCityTwo.addEventListener('keydown', event => {
        if (event.which === 13) {
            event.preventDefault();
            cityCompareTwo();
        }
    })
    selectButtonCityTwo.addEventListener('click', cityCompareTwo)
}
allEvents()
export { allEvents }
/* ------------------------------ all events ------------------------------ */