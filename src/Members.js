import { useEffect, useState } from "react"

const Members = () => {
    let [username, setUsername] = useState()
    let [password, setpassword] = useState()
    let [email, setEmail] =useState()
    useEffect( ()=> {
        if ( parseInt(localStorage.getItem("loggedIn"))) {
            let currentUserName = localStorage.getItem("loggeduser")
            let allusers = JSON.parse(localStorage.getItem("users"))
            for (let i = 0; i < allusers.length; i++) {
                if (currentUserName == allusers[i].username) {
                    setUsername(allusers[i].username)
                    setpassword(allusers[i].password)
                    setEmail(allusers[i].email)
    
                }
                else{
                    console.log("Wats wrong")
                }
            }
        }
        else{
            // alert("Not Logged In")
        }
    }, [] )
    
    if(parseInt(localStorage.getItem("loggedIn"))){
        return (
            <div className="myFont">
            <h3>Current Login Details</h3>
            <h5>Username : {username}</h5>
            <h5>Pasword: {password}</h5>
            <h5>Email : {email}</h5>
            </div>
        )
    }
    else{
        return(
            <div>
                <h3>Please Login</h3>
            </div>
        )
    }
   
}
export default Members