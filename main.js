const CRYPTONATOR_SEARCH_URL= 'https://api.coinmarketcap.com/v1/ticker/'
function getDataFromApi(callback) {
  const settings = {
  	url: CRYPTONATOR_SEARCH_URL,
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
}
function renderResult(result) {
  return `
    <div>
    	<ul>
    		<p>${result.name}</p>
    		<p>${result.symbol}</p>
    		<p>$${result.price_usd}</p>
    	</ul>  
    </div>
  `;
}
function displaySearchData(data) {
  let query = $(".tickerSymbolInput").val();
  let currency = filterCurrenciesBySymbol(query, data);
  const results = renderResult(currency);
  $('.js-search-results').html(results);
}
function filterCurrenciesBySymbol(symbol, data){
      let filterArray = data.filter(function(item){
      return item.name==symbol;
});
    if(filterArray.length==0){
      return {
        name: "There is no cryptocurrency by that name.",
        price_usd: 0.00,
        symbol: ""
      }
    }
    return filterArray[0];
}
function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    getDataFromApi(displaySearchData);
  });
}
function resultsBox(){
	$(".searchSymbol").on('click', event =>{
		$(".js-search-results").show();
	});
}
watchSubmit();
resultsBox();