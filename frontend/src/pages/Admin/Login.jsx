import { useState } from "react"
import authServices from "../../services/authServices"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/authContext"


const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', password: '' })

  const {setUser} = useAuth()

  const handleSignIn = async (e) => {
    e.preventDefault()
    authServices.loginUser(form)
      .then((res) => {
        setForm({username:'',password:''})
        sessionStorage.setItem('token', res.token)
        navigate('/admin/console')
        setUser(res)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 mb-16 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Admin Access
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                User Name
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  required
                  value={form.username}
                  onChange={(e) => { setForm({ ...form, username: e.target.value }) }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-primaryBrown hover:text-lightBrown">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={(e) => { setForm({ ...form, password: e.target.value }) }}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primaryBrown px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lightBrown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSignIn}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}


export default Login