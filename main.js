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
    	<ul style= "list-style: none; padding: 0px;">
    		<li>${result.name}</li>
    		<li>${result.symbol}</li>
    		<li>$${result.price_usd}</li>
    	</ul>  
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
      return item.name.toLowerCase()==symbol.toLowerCase();
});
    if(filterArray.length==0){
      return {
        name: "There is no cryptocurrency by that name. Check spelling and CAPS lock.",
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
function animateMessages(){
  setInterval(function(){
    $(".messageContainer").toggleClass("modifier");
  },5000);
}
 function footerClickWatch(){
   $(".currencyList li").on("click", function(){
    let value = $(this).text();
    $(".tickerSymbolInput").val(value);
   });
 }
footerClickWatch();
animateMessages();
watchSubmit();
resultsBox();