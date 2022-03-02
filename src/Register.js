import {  useFormik} from "formik"
const Register = () => {
    let users = []
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: ''
        },
        onSubmit(values) {
            let newUser = {
                email: formik.values.email,
                username: formik.values.username,
                password: formik.values.password
            }
            if (localStorage.getItem("users")) {
                users = JSON.parse(localStorage.getItem("users"))
                users.push(newUser)
                users = JSON.stringify(users)
                localStorage.setItem("users", users)
            }
            else {
                users.push(newUser)
                users = JSON.stringify(users)
                localStorage.setItem("users", users)
            }

        },
        validate() {
            const errors = {}
            if (formik.values.email.length < 4) {
                errors.email = "Email must be more than 4 chars"
            }
            if (formik.values.username.length < 4) {
                errors.username = "Username must be more than 4 chars"
            }
            if (formik.values.password.length < 4) {
                errors.password = "Password must be more than 4 chars"
            }
            return errors;
        }
    });
    return (
        <div>
            <h2 className="myFont">Register</h2>
            <form className="formClass" onSubmit={formik.handleSubmit} noValidate >
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <div className="text-danger">
                    {formik.errors.email ? formik.errors.email : null}
                </div>


                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                />
                <div className="text-danger">
                    {formik.errors.username ? formik.errors.username : null}
                </div>




                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <div className="text-danger">
                    {formik.errors.password ? formik.errors.password : null}
                </div>


                <button className="btn btn-lg btn-primary m-4" >Register</button>
            </form>
        </div>
    )
}
export default Register