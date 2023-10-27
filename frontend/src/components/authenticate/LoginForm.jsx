import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useSnackbar } from 'notistack'
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const submitForm = async(e) => {
    e.preventDefault();
    if(!email || !password) {
      enqueueSnackbar('Please enter all fields', { variant: 'warning' });
    }

    const data = {
      email,
      password
    }
    try {
      await axios
              .post('http://localhost:5555/login', data)
              .then((res) => {
                if(res.data == 'exist') {
                  enqueueSnackbar('Login successfully ', {variant: 'success'});
                  navigate('/', {state: {info: email}})
                }
                else if(res.data == 'notexist'){
                  enqueueSnackbar('Email or Password not correct', {variant:'warning'})
                }
              })
              .catch((err) => {
                enqueueSnackbar('Error while Login', {variant: 'error'} );
                console.log(err)
              })

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-[100vh]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-center font-bold leading-tight tracking-tight text-gray-900 text-3xl dark:text-white">
              Login
            </h1>
            <form className="space-y-4 md:space-y-6" action="POST">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a href="#" className="text-sky-500 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full dark:text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:text-sky-500 transition-colors"
                onClick={submitForm }
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{' '}
                <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-sky-400">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
