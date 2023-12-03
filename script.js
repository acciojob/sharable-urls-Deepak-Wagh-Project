// your code here
const name=document.getElementById("name");
const year=document.getElementById("year");
const url=document.getElementById("url");
const btn=document.getElementById("button");
const form=document.getElementById("form");

form.addEventListener("submit",(e)=>{
	e.preventDefault();
	getData(name,year)});
function   getData(name,year) {
	if(!year.value&&!name.value){
		return;
	}
	if(year.value===""){
		 text = "https://localhost:8080/?" +"name="+name.value
	  url.innerText=text;
		return;
	}
	else if(name.value===""){

	 text = "https://localhost:8080/?" +"year="+year.value
	  url.innerText=text;
		return;
	}
	else{
	 text = "https://localhost:8080/?" +"name="+name.value+"&year="+year.value
	  url.innerText=text;	
		return;
	}
	
}
