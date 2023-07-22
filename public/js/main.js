const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');

const city_name = document.getElementById('city_name');

const temp_status = document.getElementById('temp_status');
const temp_real_val = document.querySelector('#temp_real_val');

const dataHide = document.querySelector('.middle_layer');


const getInfo = async (event) => {
    event.preventDefault();
    
    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = 'Please Write the name before search';
        alert('Please Write the name before search');
        dataHide.classList.add('data_hide');
    }

    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=1deacfa2904c5f9192e2b71bdddc3381`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];


            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            // Consition to check status
            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color:#eccc68;'></i>";
            }
            else if(tempMood == "Haze"){
                temp_status.innerHTML = "<i class='fa-solid fa-smog' style='color:#BA704F;'></i>";
            }
            else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color:#f1f2f6;'></i>";
            }
            else if(tempMood == "Rain"){
                temp_status.innerHTML = '<i class="fa-solid fa-cloud-rain" style="color:#a4b0be;"></i>';
            }
            else if(tempMood == "Drizzle"){
                temp_status.innerHTML = '<i class="fa-solid fa-cloud-drizzle style="color:#a4b0be;""></i>';
            }
            else{
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color:#f1f2f6;'></i>";
            }

            dataHide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText = 'Please Write the name before search'; 
            dataHide.classList.add('data_hide');  
                }
        
    }
    
}

submitBtn.addEventListener('click', getInfo)