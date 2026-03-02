const main_url="https://api.potterdb.com"
const secondary_url=window.location.href.split("?")[1];

const loader_div = document.querySelector(".loader_div");
const loader = document.querySelector("#loader");
const sec = document.querySelector("#spells-info");
const container = document.querySelector("#container");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const title=document.querySelector("title")

const menu = document.querySelector("#menu");
const burgerMenu = document.querySelector("#burger-menu");
const closeMenu = document.querySelector("#close-menu");
const options = document.querySelector(".options");

const name=document.querySelector("#name");
const alias=document.querySelector("#alias");
const image=document.querySelector("#poster");
const links=document.querySelector("#links");
const api=document.querySelector("#api");
const wiki=document.querySelector("#wiki");
const data_div=document.querySelector("#data-div")
const more_info=document.querySelector("#more-info")

body.addEventListener("click",(e)=>{
    if (e.target.id  === "burger-menu"){
        burgerMenu.style.display = "none";
        closeMenu.style.display = "block";
        options.style.display = "flex";
    };
    if (e.target.id === "close-menu"){
        closeMenu.style.display = "none";
        burgerMenu.style.display = "block";
        options.style.display = "none";
    }
    else if (e.target.id !== "burger-menu" && e.target.id !== "close-menu" && options.style.display === "flex"){
        options.style.display = "none";
        closeMenu.style.display = "none";
        burgerMenu.style.display = "block";
    }   
});


(async function(){
 const url=main_url+"/v1/spells/"+secondary_url;
 const a=await fetch(url);
 const b=await a.json();
 const c=b.data;
 const d=c.attributes;

const orderedArray = [
  "name",
  "incantation",
  "effect",
  "category",
  "light",
  "hand",
  "creator",
  "image",
  "wiki"
];

const keys = orderedArray.filter(key => {
  let value = d[key];
  const k=key;
const text=k.replace("_"," ")
  if (value == null) return false; // removes null + undefined
  if (Array.isArray(value) && value.length === 0) return false;
  if (key == "slug") return false;

  
  if (key=="name"){
    name.innerText=value;
    title.innerText=value+" "+"|"+" "+"Potter DB"
  }
  if (key=="incantation")
  alias.innerText=value;
  if (key=="image"){
    image.src=value;
  return true;
  }
  if (key=="wiki"){
wiki.href=value;
wiki.innerHTML="Wiki"+" "+'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="ml-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"></path><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"></path></svg>'
api.href=url;
api.innerHTML="API"+" "+'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="ml-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"></path><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"></path></svg>'
  return true;
  }

    key=document.createElement("h4")
    key.className="keys"
    
    key.innerHTML=text;
    data_div.appendChild(key)

    value=document.createElement("p")
    value.className="values"
    value.innerHTML=d[k];
    data_div.appendChild(value)

  return true;
});

loader_div.style.display="none";
sec.style.display="flex";
footer.style.display="flex";
 })()
