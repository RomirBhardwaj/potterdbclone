const main_url="https://api.potterdb.com"
let secondary_url = "/v1/books"

const loader_div = document.querySelector(".loader_div");
const loader = document.querySelector("#loader");
const sec = document.querySelector("#books");
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
    


    const {cover,title,release_date,pages,author}= element.attributes;
    
    
    const wrapper=document.createElement('div')
    wrapper.classList.add("wrapper")
    container.appendChild(wrapper)
    
    
    const img=document.createElement('img')
    img.classList.add("poster")
    img.src=cover
    wrapper.append(img)
    
    const movie_name=document.createElement('h3')
    movie_name.classList.add("movie_name")
    movie_name.innerHTML=title
    wrapper.append(movie_name)
    
    const date=document.createElement('span')
    date.classList.add("release_date")
    date.innerHTML='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg>'+' '+ release_date
    wrapper.append(date)
    
    const page=document.createElement('span')
    page.classList.add("pages")
    page.innerHTML='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path></svg>'+" "+pages
    wrapper.append(page)
    
    const author_name=document.createElement('span')
    author_name.classList.add("author")
    author_name.innerHTML='<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>'+" "+author
    wrapper.append(author_name)
    
    const btn=document.createElement("a")
    btn.href="books_info.html"+"?"+id;
    btn.classList.add("book_btn")
    btn.innerHTML="View Book"
    wrapper.append(btn)
    

})
loader_div.style.display="none";
sec.style.display="flex";
footer.style.display="flex";
})();


