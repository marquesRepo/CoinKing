const CRYPTONATOR_SEARCH_URL= 'https://api.cryptonator.com/api/full/'
console.log("whatever")
function getDataFromApi(searchTerm, callback) {
  const query = {
  	url: CRYPTONATOR_SEARCH_URL,
  	data: {
      q: `${searchTerm} in:base`
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(query);
}
function renderResult(result) {
  return `
    <div>
    	<ul>
    		<li>${result}</li>
    		<li>${result}</li>
    		<li>${result}</li>
    		<li>${result}</li>
    		<li>${result}</li>
    	</ul>  
    </div>
  `;
}
function displaySearchData(data) {
  const results = data.items.map((item, index) => renderResult(item));
  $('.js-search-results').html(results);
}
function watchSubmit() {
  console.log("function start");
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.tickerSymbolInput');
    const query = queryTarget.val();    
    queryTarget.val("");
    getDataFromApi(query, displaySearchData);
  });
}

function resultsBox(){
	$(searchSymbol).on('click', event =>{
		$(js-search-results).show();
	});
}
watchSubmit();
//resultsBox();