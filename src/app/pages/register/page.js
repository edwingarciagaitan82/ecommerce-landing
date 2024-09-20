"use client";
import { useRouter } from "next//navigation";
export default function Home(){
    const Router = useRouter()
    const onSubmit = (data) => { data.preventDefault(); console.log("data",data)
        console.log("email", data.target[0].value, "pass", data.target[1].value)
        const email = data.target[0].value
        const pass = data.target[1].value
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: email,
                password: pass,
                expiresInMins: 30, // optional, defaults to 60
                })
            })
            .then(res => res.json())
            .then(resData  =>{ console.log(resData)
                if(resData.id){
                    console.log("nos redirijimos")
                    Router.push("/")
                } else{
                    console.log(resData.message)
                    alert("Datos de sesion incorrectos")
                }
            });
     }
    return(
        <>
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-white" style={{borderRadius: 10}}>
                    <div className="card-body p-5 text-center">

                        <div className="mb-md-5 mt-md-4 pb-5">

                        <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                        <p className="text-white-50 mb-5">Please enter your login and password!</p>
                        <form onSubmit={ onSubmit } >
                        <div data-mdb-input-init className="form-outline form-white mb-4">
                            <input type="test" id="typeEmailX" className="form-control form-control-lg" />
                            <label className="form-label" for="typeEmailX">Email</label>
                        </div>

                        <div data-mdb-input-init className="form-outline form-white mb-4">
                            <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                            <label className="form-label" for="typePasswordX">Password</label>
                        </div>

                        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                        <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                        </form>
                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                            <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                        </div>

                        </div>

                        <div>
                        <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                        </p>
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}