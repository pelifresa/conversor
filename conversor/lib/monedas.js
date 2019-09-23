angular.module('monedas',[].factory('currencyConverter',['$http', function(
	$http){
	//valores iniciales de las listas desplegables
	var monedasfiat=['USD','EUR'];
	var criptomonedas=[
	{id:'bitcoin', valor:'BTC (bitcoin)'},
	{id:'ethereum', valor:'ETH (Ethereum)'},
	{id:'monero', valor:'XMR (Monero)'},
	{id:'nem', valor:'XER (Nem)'},
	{id:'ripple', valor:'XRP (Ripple)'}
	];

	var dataJSON={};

	// conversión del valor de la criptomoneda a moneda FIAT
	var convertir=function(cantidad,inCurr,inCurr2){
		console.log="Convertir: "+cantidad+' -'+inCurr+'- a -'+inCurr2+'-'
		if(Object.keys(dataJSON).length===0 && dataJSON.constructor===Object){
			console.log("No se ha cargado correctamente la información de la cotización. Error en el archivo de JSON")
		return 0;
		}

		var i;
		if (inCurr==='EUR'){return cantidad*dataJSON[i]['price_eur'];}
		else if(inCurr==='USD'){return cantidad*dataJSON[i]['price_usd'];}
		else return 0;
	};
	var obtener = function(){
		console.log("Obteniendo las cotizaciones de CoinMarketCap");
		var url='https://api.coinmarketcap.com/v1/ticker/?convert=EUR';

		return $http.get(url).then(function(response){
			dataJSON=response.data;
		}, function(err){
			console.log("¡¡Error, en el intento de conexión con HTTP a coinmarketcap"
				+err.status+' '+err.statusText);});
	}

	//al cargar el módulo, se obtienen las cotizaciones de la web
	obtener();
	return{
		currencies:monedasfiat,
		criptocurrencies:critpomonedas,
		convertir:convertir
	}

}])