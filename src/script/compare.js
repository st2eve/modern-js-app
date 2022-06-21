/* ------------------------------ Constantes principales ------------------------------ */
import {
    selectButtonCompare
} from '/src/script/var.js';
/* ------------------------------ Constantes principales ------------------------------ */

/* ------------------------------ reset for update compare ------------------------------ */
function displayCompareAndTitle(){

    const selectBlockCompare = document.querySelector('.main__block-compare')

    if(selectBlockCompare.getAttribute('style') != null){
        selectButtonCompare.setAttribute('style', 'display: none')
    }else{
        selectButtonCompare.setAttribute('style', 'display: block')
    }

    const selectTitle = document.querySelector('.main__title')
    selectTitle.setAttribute('style', 'display: none')
}
export { displayCompareAndTitle };
/* ------------------------------ reset for update compare ------------------------------ */