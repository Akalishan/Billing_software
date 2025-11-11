import { useContext} from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { login } from "../../Service/AuthService";

const Login = () => {
  const {setAuthData}=useContext(AppContext);
 const navigate=  useNavigate(); 
  const [loading,setLoading] = useState("");
  const[data,setData] = useState(
    {email:"",
    password:""
    });
  const onChangeHandler=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setData((data)=>({...data,[name]:value}))
  }
  const onSubmitHandler= async(e)=>{
    e.preventDefault();
    setLoading(true);
    try {
      const response=await login(data)
      if(response.status===200){
        toast.success("Login successful");
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("role",response.data.role);
        setAuthData(response.data.token,response.data.role);
        navigate("/dashboard")
      }
    } catch (error) {
      console.error(error)
      toast.error("email or password is incorrect")
    }finally{
      setLoading(false);
    }
  }
  return (
    <div className="bg-gray-100  min-h-screen flex items-center justify-center bg-cover bg-center bg-[linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('../../assets/login-bg.jpg')]">
       <div className="bg-white w-full max-w-[480px] border-none shadow-[0_0_20px_rgba(0,0,0,0.2)]">
        <div className="p-8 ">
          <div className="text-center">
            <h1 className="text-xl font-semibold mb-2">Sign in</h1>
            <p className="text-base text-gray-500">Sign in below to access your account</p>
          </div>
          <div className="mt-4">
            <form onSubmit={onSubmitHandler}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-1">
                  Email address
                </label>
                <input type="text" name="email" id="email"  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="yourname@example.com"  onChange={onChangeHandler} value={data.email}/>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-500 mb-1">
                  Password
                </label>
                <input type="password" name="password" id="password"  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="*******" onChange={onChangeHandler} value={data.password}/>
              </div>
              <div className="grid">
                <button type="submit" className="bg-black text-white text-lg font-semibold py-3 rounded-md w-full hover:bg-gray-900 transition" disabled={loading}>
                   {loading?"Loading...":"Sign in"}
                </button>
              </div>
            </form>
          </div>
        </div>
       </div>
    </div>
  );
};

export default Login;
