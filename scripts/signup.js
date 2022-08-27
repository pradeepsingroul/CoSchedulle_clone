  




  let userarr = JSON.parse(localStorage.getItem("signuPData"))||[]
  class User{
     
      constructor(){

      }
      validateUsername(username){
      let value = username.includes("@") ? false: true
       return value        
  
      }
  
      validatePassword(password){
          let pvalue = password.includes("123") ? false : true
         
          return pvalue
     
      }
      signUp(username,email,password){
        if(username==""||email==""||password==""){
          alert ("fill this form")
        }else{
           let ans = false
           for(let i = 0; i<userarr.length&&ans==false; i++){
           if(userarr[i].email==email){
            ans=true
           } 
          }
          if(ans==false){
            let Isvalidated = false;
            Isvalidated =  this. validatePassword(password) && this.validateUsername(username)
            if(Isvalidated){
                this.username = username,
                this.password= password,
                this.email = email
                
                userarr.push(this)
                localStorage.setItem("signuPData",JSON.stringify(userarr))
              alert ("user register successfully")
              window.location.href = "signin.html"
            }else{
                alert ("please enter correct details")
            }
          }else{
            alert ("user already signup")
            window.location.href = "signin.html"
          }
        }
      }
  }

  
  function func(){
  
  console.log(userarr)
   let name = document.querySelector("#name").value
   let email = document.querySelector("#email").value
   let password = document.querySelector("#password").value
    let user1 = new User()
    user1.signUp(name,email,password)
    
 }
    