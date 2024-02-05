function createCard(country) {
    return `
    <a href="../pages/main.html?id=${country.name.slug}">
        <div id="card" class="card my-3" style="width: 18rem; cursor:pointer;">
        <img src="${country.flags.png}" class="card-img-top" alt="flag image">
        <div class="card-body">
          <h5 class="card-title">${country.name.common}</h5>
          <div class="lh-1">
              <p class="card-text"><b>Population:</b> ${country.population}</p>
              <p class="card-text"><b>Region:</b> ${country.region}</p>
              <p class="card-text mb-4"><b>Capital:</b> ${country.capital[0]}</p>
          </div>
        </div>
          </div>
    </a>

    `;
}

function aboutCountry(country) {
    return `
    <div id="flag" class="mx-auto border border-2">
        <img src="${country.flags.png}" alt="flag image">
    </div>
    <div class="card w-50 country-card mx-auto">

        <div class="card-section country-card">
            <h5 class="card-title-detail m-3">${country.name.common}</h5>
            <div class="card-body d-flex justify-content-between flex-wrap">
            <div class="about-this-country">
                <p class="card-text"><b>Native Name:</b> ${country.name.nativeName}</p>
                <p class="card-text"><b> Population:</b> ${country.population}</p>
                <p class="card-text mb-4"><b>Region:</b> ${country.region}</p>
                <p class="card-text mb-4"><b>Sub Region:</b> ${country.subregion}</p>
                <p class="card-text mb-4"><b>Capital:</b> ${country.capital[0]}</p>
            </div>
            <div class="about-this-country">
                <p class="card-text"><b>Top Level Domain:</b> ${country.cioc}</p>
                <p class="card-text"><b>Currencies:</b> ${country.currencies}</p>
                <p id="languages" class="card-text mb-4"><b>Languages:</b> </p>
            </div>
            </div>
        </div>

    </div>

    `;
}


export { createCard, aboutCountry};