
let count = 0
let create_my_calender  = document.getElementById("create_my_calender")
 let GetStartedFree = document.getElementById("GetStartedFree")
let changes = document.querySelector("#changes>span")
let id = setInterval(() => {
    if(count===5){
        changes.innerText = "Get Started Free"
        GetStartedFree.innerText = "Request Your Demo Now"

        GetStartedFree.style.width = "300px"
        create_my_calender.innerText = "Get A Demo"
        clearInterval(id)
    }
    console.log("sdfg")
    count++
   
     }, 1000);

