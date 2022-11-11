const listRef = document.querySelector('.country-list'); 
export function createCountryList(countries) {
  const markup = countries
    .map(country => {
      return `<li>
        <img src="${country.flags.svg}" alt="Flag of ${country.name.official}" width="30" hight="20">
           <b>${country.name.official}</p>
                  </li>`;
    })
    .join('');
  listRef.innerHTML = markup;
}
export  function createCountry(countries) {
  const markup = countries
    .map(country => {
      return `<li>
        <img src="${country.flags.svg}" alt="Flag of ${
        country.name.official
      }" width="30" hight="20">
           <p><b>${country.name.official}</b></p>
              <p><b>Capital</b>: ${country.capital}</p>
              <p><b>Population</b>: ${country.population}</p>
              <p><b>Languages</b>: ${Object.values(country.languages)} </p>
                  </li>`;
    })
    .join('');
  listRef.innerHTML = markup;
}
