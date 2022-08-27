let image_arr = [
    "https://accounts.coschedule.com/img/login-illustrations/14-bbd1fa4ef061b911e1b6a3107a65b8ee.png",
    "https://accounts.coschedule.com/img/login-illustrations/10-23e468c3d19df9a47bbc54566803015c.png",
    "https://accounts.coschedule.com/img/login-illustrations/15-f436115801298b76eda92726d537c521.png",
    "https://accounts.coschedule.com/img/login-illustrations/3-158e1aeca1e39398f40b49cbf73adccc.png",
    "https://accounts.coschedule.com/img/login-illustrations/1-ebb26134c87b3b3f3932214e399ada6d.png",
    "https://accounts.coschedule.com/img/login-illustrations/2-8b079ebe84db0d96dad5afa2b6a466a6.png",
    "https://accounts.coschedule.com/img/login-illustrations/15-f436115801298b76eda92726d537c521.png",
    "https://accounts.coschedule.com/img/login-illustrations/13-aef3629ae0f3dab88cf2cacb33d52fad.png",
    "https://accounts.coschedule.com/img/login-illustrations/9-f8d7d2bb5f01716f9483c69c945f008a.png",
    "https://accounts.coschedule.com/img/login-illustrations/5-e702600f1bd081bc76340d375ce6aa3f.png"
]
let div = document.getElementById("image_animation_div")
div.innerHTML = null

let count = localStorage.getItem("count")||-1


if(count==image_arr.length-1){
    count=0
}
console.log(count)
count++
localStorage.setItem("count",count)




 let img = document.createElement("img")
 img.src = image_arr[count]

div.append(img)




let userarr = JSON.parse(localStorage.getItem("signuPData"))||[]

function func(){

let email = document.querySelector("#email").value
let password = document.querySelector("#password").value
let em = false
let ps = false
userarr.forEach(function(el){
if(el.email==email){
  em= true
  if(el.password==password){
    ps=true
    return
  }
}
})
if(em&&ps){
alert ("login successful!")
window.location.href = "index.html"
}else if(ps==false&&em==false){
alert ("user doesn't exist!")
}else if(ps==false){
alert ("password is incorrect!")
}
}