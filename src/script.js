function requestApi(url) {
  let request = new XMLHttpRequest();
  request.open('GET', url, false)
  request.send()
  return request.responseText;
}

function createOptions(country) {
  const option = document.createElement("option");
  option.innerHTML = country.nome.abreviado;
  return option;
}

function returnApi() {
  //api de dados IBGE: https://servicodados.ibge.gov.br/api/docs/paises
  const countriesData = requestApi('https://servicodados.ibge.gov.br/api/v1/paises/%7Bpaises%7D');
  const dataJson = JSON.parse(countriesData);
  const selectCountry = document.getElementById('paises');
  dataJson.forEach(country => {
    let options =  createOptions(country)
    selectCountry.appendChild(options);
  });
}

returnApi();

