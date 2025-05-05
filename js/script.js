// alert("JavaScript loaded!"); // or use:
// console.log("JavaScript file is linked correctly.");

displayStates();  //list all the US states when the page loads

//Event listeners
document.querySelector("#zip").addEventListener("change", displayCity);
document.querySelector("#state").addEventListener("change", displayCounties);



//Functions

//Displaying US States when the page loads
async function displayStates() {
    let url = "https://csumb.space/api/allStatesAPI.php";
    let response = await fetch(url);
    let data = await response.json();
    let stateList = document.querySelector("#state");
    for (let i of data) {
        stateList.innerHTML += `<option>${i.state}</option>`;
    }
}


//Displaying city from Web API after entering a zip code
async function displayCity() {
    //alert(document.querySelector("#zip").value);
    document.querySelector("#zipError").innerHTML = "";
    document.querySelector("#city").innerHTML = "";
    document.querySelector("#latitude").innerHTML = "";
    document.querySelector("#longitude").innerHTML = "";
    let zipCode = document.querySelector("#zip").value;
    let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCode}`;
    let response = await fetch(url);
    let data = await response.json();
    //console.log(data);
    if (!data) {
        document.querySelector("#zipError").innerHTML = " Zip code not found";
        document.querySelector("#zipError").style.color = "red";
    }
    else {
        document.querySelector("#city").innerHTML = data.city;
        document.querySelector("#latitude").innerHTML = data.latitude;
         document.querySelector("#longitude").innerHTML = data.longitude;
    }
}

//Displaying counties from Web API based on the two-letter abbreviation of a state
async function displayCounties() {
    let state = document.querySelector("#state").value;    //get the state from the dropdown menu
    let url = "https://csumb.space/api/allStatesAPI.php";    //find the state abbreviation ${i.usps}
    let response = await fetch(url);
    let data = await response.json();
    for (let i of data) {
        if (i.state == state) {
            url = `https://csumb.space/api/countyListAPI.php?state=${i.usps}`;  //use abbreviation to find counties
            response = await fetch(url);
            data = await response.json();
            //console.log(data)
            let countyList = document.querySelector("#county");
            countyList.innerHTML = "<option> Select County </option>";  //clear county list
            for (let i of data) {
            countyList.innerHTML += `<option>${i.county}</option>`;
            }
        }
    }
}
