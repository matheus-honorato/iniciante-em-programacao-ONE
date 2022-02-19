var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
	var alvoDoEvento = event.target;
	var paiDoAlvo = alvoDoEvento.parentNode; //  TR = paciente = remover
	paiDoAlvo.classList.add("fadeOut");

	if(event.target.tagName == "TD"){
		setTimeout(function(){
		paiDoAlvo.remove();
		}, 500);
	}

	
});