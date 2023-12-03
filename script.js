// your code here
const name=document.getElementById("name");
const year=document.getElementById("year");
const url=document.getElementById("url");
const btn=document.getElementById("button");

btn.addEventListener("click",()=>getData(name,year));
function   getData(name,year) {
	  text = url.innerText+"?"+name.value+year.value
	  url.innerText=text;
}
