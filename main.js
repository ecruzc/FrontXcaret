function updatePolicies() {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append("Accept", "application/json");
	myHeaders.append("Authorization", "Basic REVGQVVMVFxBZG1pbjpBZG1pbjEk");
	myHeaders.append("Cookie", "JSESSIONID=0FEE2CE61994E2933616C0EFCFA089DB");
	myHeaders.append("Access-Control-Allow-Origin", "http://127.0.0.1");
	myHeaders.append("Access-Control-Allow-Methods", "POST");
	myHeaders.append("Access-Control-Allow-Origin", "Content-Type, Authorization");
		
	var raw = JSON.stringify({
		"IdPromotor": document.getElementById('idpromotor').value,
		"PBase":parseFloat(document.getElementById('pbase').value),
		"MetaVentas":parseFloat(document.getElementById('metaventas').value),
		"PMetaVentas":parseFloat(document.getElementById('pmetaventas').value),
		"PVentaEspecial":parseFloat(document.getElementById('pventaespecial').value)
	});
	
	console.log(document.getElementById('idpromotor').value);
	console.log(parseFloat(document.getElementById('pbase').value));
	console.log(parseFloat(document.getElementById('metaventas').value));
	console.log(parseFloat(document.getElementById('pmetaventas').value));
	console.log(parseFloat(document.getElementById('pventaespecial').value));

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};
		
	fetch("http://dev-actico.southcentralus.cloudapp.azure.com:8088/executionserver/rest/1/ruleServices/XcaretCompensaciones/versions/0.0.1-SNAPSHOT/rules/XcaretCompensaciones/Xcaret/getCompensation/executions", requestOptions)
	.then(response => response.json())
	.then(result => console.log(result))
	.catch(error => console.log('error', error));

	return response.json;
}

function getCompensation() {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append("Accept", "application/json");
	myHeaders.append("Authorization", "Basic REVGQVVMVFxBZG1pbjpBZG1pbjEk");
	myHeaders.append("Cookie", "JSESSIONID=C512D95C653FA5F368DC6C8D24B2DF76");
		
	var raw = JSON.stringify({
		"IdPromotor": document.getElementById('idpromotor').value,
		"MetaVenta":parseFloat(document.getElementById('metaventa').value),
		"VentaEspecial":parseFloat(document.getElementById('switch').value)
	});
	
	console.log(document.getElementById('idpromotor').value);
	console.log(parseFloat(document.getElementById('metaventa').value));
	console.log(parseFloat(document.getElementById('switch').value));

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};



		
	fetch("http://dev-actico.southcentralus.cloudapp.azure.com:8088/executionserver/rest/1/ruleServices/XcaretCompensaciones/versions/0.0.1-SNAPSHOT/rules/XcaretCompensaciones/Xcaret/getCompensation/executions", requestOptions)
	.then(response => response.json())

	.then(data=>{

		let element = document.getElementById('modPago')
		element.innerHTML = `<p>${data.IdPromotor}</p>`
		element.innerHTML = `<p>${data.MetaVenta}</p>`
		element.innerHTML = `<p>${data.IdPromotor}</p>`

		console.log(data)

	})
	.then(result => console.log(result))
	.catch(error => console.log('error', error));

	
}

