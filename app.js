const clock=document.getElementsByClassName('clock');
console.log(clock)
setInterval(()=>{displayTime()},1000);

function displayTime(){
    const temp=new Date();

    let hours=temp.getHours();
    let minutes=temp.getMinutes();
    let seconds=temp.getSeconds();

    let period=hours>12 ? "PM" : "AM";
    hours=hours<10 ? "0"+hours:hours;
    minutes=minutes<10 ? "0"+minutes:minutes;
    seconds=seconds<10 ? "0"+seconds :seconds;

    clock[0].innerHTML=hours + ":" + minutes + ":" + seconds + " " + period;

}
displayTime();



