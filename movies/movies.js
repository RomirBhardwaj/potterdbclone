const main_url="https://api.potterdb.com"
let secondary_url = "/v1/movies"

const loader_div = document.querySelector(".loader_div");
const loader = document.querySelector("#loader");

const sec = document.querySelector("#movies");
const container = document.querySelector("#container");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const menu = document.querySelector("#menu");
const burgerMenu = document.querySelector("#burger-menu");
const closeMenu = document.querySelector("#close-menu");
const options = document.querySelector(".options");

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

(async function (){
let a=await fetch(main_url+secondary_url);
let b=await a.json();
let c=b.data;
c.forEach((element)=>{

    const id=element.id;
console.log(id)
    const {poster,title,release_date,rating,running_time}= element.attributes;
    
    
    const wrapper=document.createElement('div')
    wrapper.classList.add("wrapper")
    container.appendChild(wrapper)
    
    
    const img=document.createElement('img')
    img.classList.add("poster")
    img.src=poster
    wrapper.append(img)
    
    const movie_name=document.createElement('h3')
    movie_name.classList.add("movie_name")
    movie_name.innerHTML=title
    wrapper.append(movie_name)
    
    const date=document.createElement('span')
    date.classList.add("release_date")
    date.innerHTML='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg>'+' '+ release_date
    wrapper.append(date)
    
    const ratings=document.createElement('span')
    ratings.classList.add("ratings")
    ratings.innerHTML='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'+" "+rating
    wrapper.append(ratings)
    
    const time=document.createElement('span')
    time.classList.add("time")
    time.innerHTML='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path></svg>'+" "+running_time
    wrapper.append(time)
    
    const btn=document.createElement("a")
    btn.href="movie_info.html"+"?"+id;
    btn.classList.add("movie_btn")
    btn.innerHTML="View Movie"
    wrapper.append(btn)
    

})
loader_div.style.display="none";
sec.style.display="flex";
footer.style.display="flex";


})();


