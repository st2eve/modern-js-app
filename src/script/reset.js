/* ------------------------------ reset for update content ------------------------------ */
function resetContent(){

    const selectWeatherTemp = document.querySelector('.weather__temp')
    const selectWeatherCity = document.querySelector('.weather__city')

    selectWeatherTemp.innerHTML = ""
    selectWeatherCity.innerHTML = ""

    if(document.querySelector('.infos__wind')){

        const removeWind = document.querySelector('.infos__wind')
        const removeDesc = document.querySelector('.infos__desc')
        const removeArticle = document.querySelectorAll('.infos__nextdays')

        removeWind.remove()
        removeDesc.remove()

        for(let l = 0; l < removeArticle.length; l++){
            removeArticle[l].remove()
        }
    }
}
export { resetContent };
/* ------------------------------ reset for update content ------------------------------ */