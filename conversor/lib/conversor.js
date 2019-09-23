angular.module('conversor',['monedas']).controller('ConversorController', 
	function ConversorController(currencyConverter){
		this.qty=1;
		this.qty2=0;
		this.inCurr='EUR';
		this.inCurr2=currencyConverter.criptoconcurrencies[0].id;
		this.currencies=currencyConverter.currencies;
		this.criptoconcurrencies=currencyConverter.criptoconcurrencies;
		this.enviar=function enviar(){
			this.qty2=currencyConverter.convertir(this.qty,this.inCurr,this.inCurr2);
		}
	});