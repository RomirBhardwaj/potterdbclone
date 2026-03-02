const main_url="https://api.potterdb.com"
let secondary_url = "/v1/potions?page[size]=25"

const loader_div = document.querySelector(".loader_div");
const loader = document.querySelector("#loader");
const sec = document.querySelector("#potions");
const container = document.querySelector("#container");
const body = document.querySelector("body");
const footer = document.querySelector("footer");

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

    const id=element.id;


    const {image,name,difficulty,effect,characteristics}= element.attributes;
    
    
    const wrapper=document.createElement('div')
    wrapper.classList.add("wrapper")
    container.appendChild(wrapper)
    
    
    const img=document.createElement('img')
    img.classList.add("poster")
    if (image === null){
        img.src="https://potterdb.com/images/missing_potion.svg"}
        else{
    img.src=image}
    wrapper.append(img)
    
    const potion_name=document.createElement('h3')
    potion_name.classList.add("potion_name")
    potion_name.innerHTML=name
    wrapper.append(potion_name)
    
    if (difficulty !== null){
    const difficulty_element=document.createElement('span')
    difficulty_element.classList.add("difficulty")
    difficulty_element.innerHTML='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'+' '+difficulty
    wrapper.append(difficulty_element);
    }

    if (effect !== null){
    const effectiveness=document.createElement('span')
    effectiveness.classList.add("effectiveness")
    effectiveness.innerHTML='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg>'+' '+effect
    wrapper.append(effectiveness);
    }
    if (characteristics !== null){
    const properties=document.createElement('span')
    properties.classList.add("characteristics")
    properties.innerHTML='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>'+" "+characteristics
    wrapper.append(properties);
    }
    
const btn=document.createElement("a")
    btn.href="potion_info.html"+"?"+id;
    btn.classList.add("potion_btn")
    btn.innerHTML="View Potion"
    wrapper.append(btn)
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
};
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
                secondary_url = "/v1/potions?filter[name_cont]=" + search_input.value;
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