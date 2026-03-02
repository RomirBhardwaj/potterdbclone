const main_url="https://api.potterdb.com"
let secondary_url = "/v1/spells?page[size]=25"

const loader_div = document.querySelector(".loader_div");
const loader = document.querySelector("#loader");
const sec = document.querySelector("#spells");
const container = document.querySelector("#container");
const body = document.querySelector("body");
const footer=document.querySelector("footer")
const menu = document.querySelector("#menu");
const burgerMenu = document.querySelector("#burger-menu");
const closeMenu = document.querySelector("#close-menu");
const options = document.querySelector(".options");


const search=document.querySelector("#search");
const search_input=document.querySelector("#search-input");
const cross=document.querySelector("#cross")
let flag=0
cross.style.width="1rem"

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
async function render(){
 let a=await fetch(main_url+secondary_url);
let b=await a.json();
let c=b.data;
c.forEach((element)=>{



    const {image,name,incantation,category}= element.attributes;
    const id=element.id;
    
    const wrapper=document.createElement('div')
    wrapper.classList.add("wrapper")
    container.appendChild(wrapper)
    
    
    const img=document.createElement('img')
    img.classList.add("poster")
    if (image === null){
        img.src="https://potterdb.com/images/missing_spell.svg"}
        else{
    img.src=image}
    wrapper.append(img)
    
    const spell_name=document.createElement('h3')
    spell_name.classList.add("spell_name")
    spell_name.innerHTML=name
    wrapper.append(spell_name)
    
    if (incantation !== null){
        const incantation_element=document.createElement('span')
        incantation_element.classList.add("incantation")
        incantation_element.innerHTML='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-304-64l-64-32 64-32 32-64 32 64 64 32-64 32-16 32h208l-86.41-201.63a63.955 63.955 0 0 1-1.89-45.45L416 0 228.42 107.19a127.989 127.989 0 0 0-53.46 59.15L64 416h144l-16-32zm64-224l16-32 16 32 32 16-32 16-16 32-16-32-32-16 32-16z"></path></svg>'+' '+incantation
        wrapper.append(incantation_element);
    }
    if (category !== null){
    const category_element=document.createElement('span')
    category_element.classList.add("category")
    category_element.innerHTML='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM320 112c0-35.3-35.8-64-80-64s-80 28.7-80 64c0 20.9 12.6 39.5 32 51.2V176c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V163.2c19.4-11.7 32-30.3 32-51.2zM208 96a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM134.3 209.3c-8.1-3.5-17.5 .3-21 8.4s.3 17.5 8.4 21L199.4 272l-77.7 33.3c-8.1 3.5-11.9 12.9-8.4 21s12.9 11.9 21 8.4L240 289.4l105.7 45.3c8.1 3.5 17.5-.3 21-8.4s-.3-17.5-8.4-21L280.6 272l77.7-33.3c8.1-3.5 11.9-12.9 8.4-21s-12.9-11.9-21-8.4L240 254.6 134.3 209.3z"></path></svg>'+" "+category
    wrapper.append(category_element);
    }

      const btn=document.createElement("a")
    btn.href="spell_info.html"+"?"+id;
    btn.classList.add("spells_btn")
    btn.innerHTML="View Spell"
    wrapper.append(btn);

});
loader_div.style.display="none";    
sec.style.display="flex";
footer.style.display="flex";

if(flag===0){

lmd=document.createElement("div")
lmd.classList.add("load_more_div")
lm=document.createElement("button")
lm.classList.add("load_more")
lm.innerHTML="Load More"
sec.append(lmd);
lmd.append(lm);
lm.addEventListener("click",()=>{
    sec.removeChild(lmd);
    secondary_url = b.links.next.split("https://api.potterdb.com")[1];
    render();})
}
}
render()


                                                                                                                                                       
search.addEventListener("click",(e)=>{
     search_input.focus();
});


let typingTimer;          // timer identifier
const delay = 500;        // 500ms delay (you can adjust)

body.addEventListener("keyup", (e) => {
    if (e.target.id === "search-input") {

        clearTimeout(typingTimer);   // clear previous timer

        typingTimer = setTimeout(() => {

            if (search_input.value.length > 0) {
                cross.style.display = "block";
                container.innerHTML = "";
                secondary_url = "/v1/spells?filter[name_cont]=" + search_input.value;
                flag = 1;
                render();
            } 
            else {
                cross.style.display = "none";
            }

        }, delay);  // runs only after user stops typing for 500ms
    }
});
body.addEventListener("click",(e)=>{
    if (e.target.id==="search-input"){

        if (search_input.value!==""){
            cross.style.display="block";
        }
    }
    if(e.target.id==="cross"){
        search_input.value="";
        cross.style.display="none";
    }
});