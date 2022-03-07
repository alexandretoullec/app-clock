const btnLessMore = document.querySelector('.btn-box button');
const spanBtn = document.querySelector('.btn-box span');
const imgBtn = document.querySelector('.btn-box button img');

const infoCont = document.querySelector('.further-information');
const quoteCont= document.querySelector('.quote-container');

// recup infos

const tZ = document.querySelector('.time-zone-text');
const weekDay = document.querySelector('.time-zone-day-week-text');
const yearDay = document.querySelector('.time-zone-day-text');
const weekNum = document.querySelector('.time-zone-weeks-text');

// DateHourMin

const hourMin = document.querySelector('.hour-text');

// country city

const localisation = document.querySelector('.localisation');

// quote generator

btnQuote = document.querySelector('.refresh');
quoteText = document.querySelector('.quote-text');
quoteAuthor = document.querySelector('.quote-author');

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
    // const furtherInfo = infoCont.getAttribute("data-visible")

    if (visiblityQuote === "false") {
        quoteCont.setAttribute("data-visible", true);
        infoCont.setAttribute("data-visible", false);
        
    } else {
        quoteCont.setAttribute("data-visible", false);
        infoCont.setAttribute("data-visible", true);
        
    }
    
   

})





// ***************
// API
// **************


const apiKeyIp = 'd831ff40-900d-11ec-8f0f-e35fdbc72bb5'
const urlIP = "https://api.freegeoip.app/json/?apikey="+apiKeyIp

if(navigator.geolocation) {
    getIP();
    

}else{
        
alert(`Vous avez refusé la géolocalisation, l'application ne peux pas fonctionner, veuillez l'activer.!`)
        
}

function getIP () {
    fetch(urlIP)
    .then((reponse) => {
        return reponse.json();
    })
    .then((dataIP) => {
        const timeZ = dataIP.time_zone;
        console.log(dataIP);
        callAPI (timeZ);

        // city and country

        localisation.innerText = `IN ${dataIP.city}, ${dataIP.country_name}`


    })
}



function callAPI (timeZone) {
    fetch(`http://worldtimeapi.org/api/timezone/${timeZone}`)
    .then((reponse) => {
        return reponse.json();
    })
    .then((data) => {
        console.log(data);

        // further info
        tZ.innerText=data.timezone;
        weekDay.innerText=data.day_of_week;
        yearDay.innerText=data.day_of_year;
        weekNum.innerText=data.week_number;


        // schedule

        const schedParse = Date.parse(data.datetime)
        const dateHour = new Date(schedParse)
        console.log(dateHour.getHours());
        console.log(dateHour.getMinutes());
        hourMin.innerText = `${dateHour.getHours()}:${dateHour.getMinutes()}`

    })
}


// ***************
// API Quote
// **************





function quoteGen (){
    fetch(`https://programming-quotes-api.herokuapp.com/Quotes/random`)
    .then((reponse) => {
        return reponse.json();
    })
    .then((data) => {
        quoteText.innerText = data.en;
        quoteAuthor.innerText = data.author;
    })
}


btnQuote.addEventListener('click',quoteGen)
