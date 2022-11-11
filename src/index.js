import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import { createCountryList, createCountry } from './markup';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');
const countryInfo = document.querySelector('.country-info');
const listRef = document.querySelector('.country-list'); 


inputRef.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
function onSearch(evt) {
    evt.preventDefault();
    const countryName = evt.target.value.trim();
    onClearMarkup();
    checkSearchValue(countryName)
   
}
function onClearMarkup() {
    listRef.innerHTML = '';
    countryInfo.innerHTML = '';
}
    
  

//
function checkValue(resolveData) {
    if (resolveData.length > 10) {
        return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
    }
    if (resolveData.length === 0) 
        {
         return Notiflix.Notify.failure('Oops, there is no country with that name');
    
        
        }



    }
   
//---

        function renderData(resolve) { 

            if (resolve.length >= 2 && resolve.length <= 10) {

                return createCountryList(resolve);
            }
            if (resolve.length === 1) {return createCountry(resolve);}
        }
    function checkSearchValue(countryName) {
        if (countryName !== '') {
     
    
            fetchCountries(countryName)
            .then(resolve => {
             checkValue(resolve);
             renderData(resolve);
            
            });
         }

    }
    