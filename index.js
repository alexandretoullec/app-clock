const btnLessMore = document.querySelector('.btn-box button');
const spanBtn = document.querySelector('.btn-box span');
const imgBtn = document.querySelector('.btn-box button img');

const infoCont = document.querySelector('.further-information');
const quoteCont= document.querySelector('.quote-container');


btnLessMore.addEventListener("click",()=> {
    if(spanBtn.innerHTML==="MORE"){
        spanBtn.innerText="LESS"
        imgBtn.src="starter-code/assets/desktop/icon-arrow-down.svg"
    }
    
    else if(spanBtn.innerHTML==="LESS") {
        spanBtn.innerText="MORE"
        imgBtn.src="starter-code/assets/desktop/icon-arrow-up.svg"
    }

    
}) 


btnLessMore.addEventListener("click", () => {
    
    const visiblityQuote = quoteCont.getAttribute("data-visible");
    const furtherInfo = infoCont.getAttribute("data-visible")

    if (visiblityQuote === "false") {
        quoteCont.setAttribute("data-visible", true);
        infoCont.setAttribute("data-visible", false);
        
    } else {
        quoteCont.setAttribute("data-visible", false);
        infoCont.setAttribute("data-visible", true);
        
    }
    
   

})

// btnLessMore.addEventListener('click', () => {
    
//     if (quoteCont.style.display == 'none') {
//             quoteCont.style.display = 'block';
//             infoCont.style.display = 'none';
        
//     } else {
//         quoteCont.style.display = 'none';
//         infoCont.style.display = 'grid'
//         }
          
// })




