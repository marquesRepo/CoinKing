/* https://bittrex.com/api/v1.1/public/getmarkets    
https://bittrex.com/api/v1.1/public/getcurrencies    
https://bittrex.com/api/v1.1/public/getticker  
https://bittrex.com/api/v1.1/public/getmarketsummaries   
https://bittrex.com/api/v1.1/public/getmarketsummary?market=btc-ltc  
*/
const BITTREX_SEARCH_URL= 'https://api.cryptonator.com/api/full/btc-usd'

function getDataFromApi(searchTerm, callback) {
  const overview = {
    url:BITTREX_SEARCH_URL,
}
function renderResult(result) {
  return `
    <div>
      
    </div>
  `;
}
function displaySearchData(data) {
  const results = data.items.map((item, index) => renderResult(item));
  $('.js-search-results').html(results);
}
function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.tickerSymbolInput');
    const query = queryTarget.val();
    
    queryTarget.val("");
    getDataFromApi(query, displayGitHubSearchData);
  });
}
