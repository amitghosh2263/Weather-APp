

var fetchWeather="/weather" ;

const weatehrform=document.querySelector('form')
const search=document.querySelector('input')


const weatherIcon=document.querySelector('.weatherIcon i')
const weatehrCondition=document.querySelector('.weatherCondition')
const tempElement=document.querySelector('.temperature span')
const locationElement=document.querySelector('.place')
const dateElement=document.querySelector('.date')

const monthNames=["jan","feb","march","apr","may","june","july","aug","sep","oct","nov","dec"]



dateElement.textContent=new Date().getDate()+","+monthNames[new Date().getMonth()].substring(0,3)



weatehrform.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(search.value)
    locationElement.textContent="loding......";
    tempElement.textContent="";
    weatehrCondition.textContent="";
    const locationApi=fetchWeather+"?address="+search.value;
    fetch(locationApi).then(response=>{
       response.json().then(data=>{
           // console.log(data)
           if (data.error) {
            locationElement.textContent=data.error;
            tempElement.textContent="";
            weatehrCondition.textContent="";
           }else{
            locationElement.textContent=data.cityName;
            tempElement.textContent=(data.temperature-273.5).toFixed(2)+String.fromCharCode(176);
            weatehrCondition.textContent=data.description.toUpperCase();
           }
       })
    })
})