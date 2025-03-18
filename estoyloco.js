let botao = document.querySelector("#butao");
botao.style.background="lightblue";
let ferrou=false;

botao.addEventListener("mouseover", e =>{
				if(ferrou===false);
				botao.style.background="orange";
				botao.innerHTML="Isso...";
});

botao.addEventListener("mouseout", e =>{
				if(ferrou===false);
				botao.style.background="lightblue";
				botao.innerHTML="Clica In Mim:)";
});

botao.addEventListener("click", e =>{
				botao.style.background="red";
				botao.innerHTML="Instalando Cavalo de Tróia...";
				ferrou=true;
});
