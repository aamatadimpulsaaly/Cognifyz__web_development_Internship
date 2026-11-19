let currentTime=new Date();
// get current date and time
let hour = currentTime.getHours();
// converts to 24hrs format
let greeting=document.getElementById("greet");
if (hour < 12) {
    greeting.innerHTML = "Good Morning,User!";
}
else if(hour < 15) {
    greeting.innerHTML = "Good Afternoon,User!";
}
else if(hour < 19) {
    greeting.innerHTML = "Good Evening,User!";
}
else{
    greeting.innerHTML = "Good Night,User!";
}