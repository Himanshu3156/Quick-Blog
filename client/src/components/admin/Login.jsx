import { useState } from "react"
import { useAppContext } from "../../context/AppContext"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"

const Login = () => {

  const { axios, setToken } = useAppContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/user/login', { email, password })

      if (data.success) {
        setToken(data.token)
        localStorage.setItem('token', data.token)
        axios.defaults.headers.common['Authorization'] = data.token;
        navigate('/admin')
      }
      else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)

    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-sm p-8 bg-white border border-gray-200 shadow-2xl rounded-2xl">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-2 text-center">
            <h1 className="text-3xl font-extrabold text-gray-900"><span className="text-primary">Blog</span> Login</h1>
            <p className="text-gray-500 mt-2 font-light">Login to manage your blogs and comments</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 w-full text-gray-700">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Email</label>
              <input onChange={e => setEmail(e.target.value)} value={email} type="email" required placeholder="example@email.com" className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all mb-4" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Password</label>
              <input onChange={e => setPassword(e.target.value)} value={password} type="password" required placeholder="********" className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all mb-6" />
            </div>
            <button type='submit' className="w-full py-3.5 font-bold bg-primary text-white rounded-lg cursor-pointer hover:bg-primary/95 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">Login</button>
            <p className="mt-6 text-center text-sm text-gray-600">Don't have an account? <span onClick={() => navigate('/register')} className="text-primary font-semibold cursor-pointer hover:underline">Register now</span></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
