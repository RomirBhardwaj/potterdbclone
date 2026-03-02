const main_url="https://api.potterdb.com"
let secondary_url = "/v1/characters?page[size]=25";

const loader_div = document.querySelector(".loader_div");
const loader = document.querySelector("#loader");
const sec = document.querySelector("#characters");
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

    const {image,name,species,gender}= element.attributes;
    
    
    const wrapper=document.createElement('div')
    wrapper.classList.add("wrapper")
    container.appendChild(wrapper)
    
    
    const img=document.createElement('img')
    img.classList.add("poster")
    if (image === null){
        img.src="https://potterdb.com/images/missing_character.svg"}
        else{
    img.src=image}
    wrapper.append(img)
    
    const character_name=document.createElement('h3')
    character_name.classList.add("character_name")
    character_name.innerHTML=name
    wrapper.append(character_name)
    
    if (species !== null){
    const Species=document.createElement('span')
    Species.classList.add("species")
    Species.innerHTML='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"></path></svg>'+" "+species
    
    wrapper.append(Species)
    }

    if (gender !== null){
    const character_gender=document.createElement('span')
    character_gender.classList.add("character_gender")
    character_gender.innerHTML='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M564 0h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-48.7 48.7C422.5 72.1 396.2 64 368 64c-33.7 0-64.6 11.6-89.2 30.9 14 16.7 25 36 32.1 57.1 14.5-14.8 34.7-24 57.1-24 44.1 0 80 35.9 80 80s-35.9 80-80 80c-22.3 0-42.6-9.2-57.1-24-7.1 21.1-18 40.4-32.1 57.1 24.5 19.4 55.5 30.9 89.2 30.9 79.5 0 144-64.5 144-144 0-28.2-8.1-54.5-22.1-76.7l48.7-48.7 16.9 16.9c2.4 2.4 5.4 3.5 8.4 3.5 6.2 0 12.1-4.8 12.1-12V12c0-6.6-5.4-12-12-12zM144 64C64.5 64 0 128.5 0 208c0 68.5 47.9 125.9 112 140.4V400H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.6 112-71.9 112-140.4 0-79.5-64.5-144-144-144zm0 224c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg>'+" "+gender
    wrapper.append(character_gender)
    }
    
    
    const btn=document.createElement("a")
    btn.href="character_info.html"+"?"+id;
    btn.classList.add("character_btn")
    btn.innerHTML="View Character"
    wrapper.append(btn)
    
    
})
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
    sec.removeChild(lmd)
    secondary_url = b.links.next.split("https://api.potterdb.com")[1]
    render();})
}
}
render();


                                                                                                                                                            
                                                                                                                                                            
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
                secondary_url = "/v1/characters?filter[name_cont]=" + search_input.value;
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