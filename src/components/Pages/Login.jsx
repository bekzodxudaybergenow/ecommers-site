import { useRef } from "react";
import { apiClient } from "../../utils/Api";
import { useNavigate } from "react-router-dom";

function Login() {
    const userLogin = useRef();
    const userPass = useRef();
    const navigate = useNavigate();

    // emilys
    // emilyspass


    const getLogin = async (e) => {
        e.preventDefault()

        let res = await apiClient.post("user/login", {
            username: userLogin.current.value,
            password: userPass.current.value
        })
        .then((res) => {
            window.localStorage.setItem("token", res.data.accessToken);
            navigate("/");
        })
    }   


  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh]">
        <form onSubmit={getLogin} className="flex flex-col items-center justify-center gap-y-4 w-[400px] shadow-[0_0_4px_2px_rgba(0,0,0,.1)] rounded-lg min-h-[350px] px-5 py-10">
            <label className="flex flex-col">
                <span className="mb-2 font-medium">Login:</span>
                <input ref={userLogin} className="w-[300px] outline-none h-[38px] rounded shadow-[0_0_4px_2px_rgba(0,0,0,.1)] px-4" type="text" placeholder="" />
            </label>
            <label className="flex flex-col">
                <span className="mb-2 font-medium">Password:</span>
                <input ref={userPass} className="w-[300px] outline-none h-[38px] rounded shadow-[0_0_4px_2px_rgba(0,0,0,.1)] px-4" type="password" placeholder="" />
            </label>
            <button className="bg-[#873EFF] hover:bg-[#6e3ac9] active:bg-[#873EFF] duration-[.3s] cursor-pointer block w-[160px] rounded-[5px] text-white py-2 outline-none">Login</button>
        </form>
    </div>
  )
}

export default Login