console.log('---adscale script start---');

function printVar(varName, varVal){
	try{
		if(typeof(varVal)!='undefined'){
			console.log(varName + '=' + varVal);
		}
		else{
			console.log(varName + ' undefined');
		}
	}
	catch(e){
		console.log(e);
	}
}
function adscaleAddToCart(pId,pVal){
	console.log('---adscale adscaleAddToCart---');
	printVar('pId', pId);
	printVar('pVal', pVal);
}


try{
	printVar('adscale_product_id', adscale_product_id);
}catch(e){
	console.log('adscale_product_id is null');
}

try{
	printVar('adscale_order_id', adscale_order_id);
}catch(e){
	console.log('adscale_order_id is null');
}

try{
	printVar('adscale_order_value', adscale_order_value);
}catch(e){
	console.log('adscale_order_value is null');
}
	


console.log('---adscale script end---');
