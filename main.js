const CRYPTONATOR_SEARCH_URL= 'https://api.cryptonator.com/api/full/btc-usd'

function getDataFromApi(searchTerm, callback) {
  const query = {
    q: `${searchTerm} in:base`
  }
  $.getJSON(CRYPTONATOR_SEARCH_URL, query, callback);
}
function renderResult(result) {
  return `
    <div>
    	<ul>
    		<li></li>
    		<li></li>
    		<li></li>
    		<li></li>
    		<li></li>
    	</ul>  
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
    getDataFromApi(query, displaySearchData);
  });
}
$(watchSubmit);