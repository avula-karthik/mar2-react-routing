import { useState } from "react";
import { useFormik } from "formik";
const Login = () => {
    let [loggedVar, setLoggedVar] = useState("Please Login")
    const formik = useFormik({
        initialValues : {
            username : '',
            password : ''
        },
        validate(){
            const errors = {}
            if(formik.values.username.length < 4){
                errors.username = "Username cant be less than 4 chars"
            }
            if(formik.values.password.length <4){
                errors.password = "Password cant be les than 4 chars"
            }
            return errors
        },
        onSubmit(values){
            if(localStorage.getItem("users")){
                let allUsers = JSON.parse(localStorage.getItem("users"))
                for(let i=0; i<allUsers.length; i++){
                    // console.log(allUsers[i].username)
                    // console.log(allUsers[i].password)
                    if(allUsers[i].username == formik.values.username ){
                        if(allUsers[i].password == formik.values.password){
                            localStorage.setItem("loggedIn",parseInt(1))
                            alert("Loggedin")
                            setLoggedVar("LoggedIn")
                            localStorage.setItem("loggeduser", allUsers[i].username)
                        }
                        else{
                            alert("Please recheck your password/email")
                        }
                    }
                }
            }
            else{
                alert("No Users Found")
            }
        }

    })
    return(
        <div>
            <h3 className="myFont" >{loggedVar}</h3>
            <form onSubmit={formik.handleSubmit} noValidate >
                <input 
                type="text"
                value={formik.values.username}
                name="username"
                onChange={formik.handleChange}
                placeholder="Username"
                />
                <div className="text-danger">
                {formik.errors.username ? formik.errors.username : null}
                </div>

                <input 
                type="password"
                value={formik.values.password}
                name="password"
                onChange={formik.handleChange}
                placeholder="Password"
                />
                <div className="text-danger">
                    {formik.errors.password ? formik.errors.password : null}
                </div>
                <button className="btn btn-lg btn-primary m-4" >Login</button>
            </form>
        </div>
    )
}
export default Login