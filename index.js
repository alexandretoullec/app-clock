const btnLessMore = document.querySelector('.btn-box button');
const spanBtn = document.querySelector('.btn-box span');
const imgBtn = document.querySelector('.btn-box button img');

const infoCont = document.querySelector('.further-information');
const quoteCont= document.querySelector('.quote-container');



console.log(spanBtn);

function btnToggle() {
    if(spanBtn.innerHTML="MORE"){
        spanBtn.innerText="LESS"
        imgBtn.src="starter-code/assets/desktop/icon-arrow-up.svg"
    }
    
    else if (spanBtn.innerHTML="LESS"){
        spanBtn.innerText="MORE"
        imgBtn.src="starter-code/assets/desktop/icon-arrow-down.svg"
    }
}

btnLessMore.addEventListener('click',()=>{
    if(quoteCont.style.display == 'block'){
            quoteCont.style.display = 'none';
          infoCont.style.display = 'grid';
    }else{
        quoteCont.style.display = 'block';
        infoCont.style.display = 'none'
    }
          
})




    

    
