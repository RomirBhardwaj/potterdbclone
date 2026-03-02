const main_url="https://api.potterdb.com"
const secondary_url=window.location.href.split("?")[1];

const loader_div = document.querySelector(".loader_div");
const loader = document.querySelector("#loader");
const sec = document.querySelector("#books-info");
const container = document.querySelector("#container");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const titles=document.querySelector("title")

const menu = document.querySelector("#menu")  ;
const burgerMenu = document.querySelector("#burger-menu");
const closeMenu = document.querySelector("#close-menu");
const options = document.querySelector(".options");

const title=document.querySelector("#name");
const image=document.querySelector("#poster");
const links=document.querySelector("#links");
const api=document.querySelector("#api");
const wiki=document.querySelector("#wiki");
const data_div=document.querySelector("#data-div")
const more_info=document.querySelector("#more-info")

body.addEventListener("click",(e)=>{
    if (e.target.id === "burger-menu"){
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
 let url=main_url+"/v1/books/"+secondary_url;
 let a=await fetch(url);
 let b=await a.json();
 let c=b.data;
 let d=c.attributes;
                                                
const orderedArray = [                                                                                               

  "title",
  "cover",
  "author",
  "release_date",
  "pages",
  "dedication",
  "summary",
  "wiki"
];

const keys = orderedArray.filter(key => {
  let value = d[key];
  const k=key;
const text=k.replace("_"," ")
  if (value == null) return false; // removes null + undefined
  if (Array.isArray(value) && value.length === 0) return false;
  if (key == "slug") return false;

  
  if (key=="title"){
    title.innerText=value;
    titles.innerText=value+" "+"|"+" "+"Potter DB"
  }

  if (key=="cover"){
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
    key.classtitle="keys"
    
    key.innerHTML=text;
    data_div.appendChild(key)

    value=document.createElement("p")
    value.classtitle="values"
    value.innerHTML=d[k];
    data_div.appendChild(value)

  return true;
});
 url=main_url+"/v1/books/"+secondary_url+"/chapters";
  a=await fetch(url);
  b=await a.json();
  c=b.data;
  console.log(c)
  let idx=1;
  c.forEach((e)=>{
    const {title,summary}=e.attributes;


        const datas=document.createElement("div")
    datas.classList.add("datas")
    more_info.appendChild(datas)
    const left_div=document.createElement("div")
    datas.appendChild(left_div)
    const up=document.createElement("h4")
    up.innerText=`${idx}`+". "+title;
    left_div.appendChild(up)
    const down=document.createElement("p")
    down.classList.add("nun")
    down.innerText=summary;
    left_div.appendChild(down)

    const arrow=document.createElement("div")
    arrow.innerHTML='<svg class="arrowimg" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="w-6 h-6 transform " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path></svg>'
    datas.appendChild(arrow)
    datas.addEventListener("click",(e)=>{
      arrow.firstChild.classList.toggle("rotate")
      down.classList.toggle("nun")
  })
      idx+=1;

  })


loader_div.style.display="none";
sec.style.display="flex";
footer.style.display="flex";
})();
