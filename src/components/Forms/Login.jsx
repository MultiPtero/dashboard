import React from 'react';

const Login = () => {
  return (
    <section>
      <div className="flex relative justify-center lg:px-0 items-center lg:h-screen md:px-12 overflow-hidden">
        <div className="bg-white px-4 relative flex flex-1 flex-col lg:py-24 md:flex-none md:px-28 py-10 sm:justify-center xl:py-36 z-10">
          <div className="w-full lg:h-full max-w-md md:max-w-sm md:px-0 md:w-96 mx-auto sm:px-4">
            <div className="flex flex-col">
              <div>
                <h2 className="font-medium leading-tight text-black text-xl font-display">
                  Log in to MultiPtero
                </h2>
                <div className="py-3">
                  <span className="w-full inline-flex relative mt-3 z-0">
                    <button
                      className="font-medium text-sm bg-white h-12 border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:z-10 hover:bg-gray-50 inline-flex items-center justify-center px-4 py-3 relative rounded-xl text-gray-700 w-full"
                      type="button">
                      <span>Register with</span>
                      <span className="ml-3">
                        <svg
                          fill="none"
                          height="24"
                          viewBox="0 0 32 32"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
                            fill="#4285F4"></path>
                          <path
                            d="M16.2862 30C20.1433 30 23.3814 28.7555 25.7465 26.6089L21.2386 23.1865C20.0322 24.011 18.4132 24.5866 16.2862 24.5866C12.5085 24.5866 9.30219 22.1444 8.15923 18.7688L7.9917 18.7827L3.58202 22.1272L3.52435 22.2843C5.87353 26.8577 10.6989 30 16.2862 30Z"
                            fill="#34A853"></path>
                          <path
                            d="M8.16007 18.7688C7.85848 17.8977 7.68395 16.9643 7.68395 15.9999C7.68395 15.0354 7.85849 14.1021 8.1442 13.231L8.13621 13.0455L3.67126 9.64734L3.52518 9.71544C2.55696 11.6132 2.0014 13.7444 2.0014 15.9999C2.0014 18.2555 2.55696 20.3865 3.52518 22.2843L8.16007 18.7688Z"
                            fill="#FBBC05"></path>
                          <path
                            d="M16.2863 7.4133C18.9688 7.4133 20.7783 8.54885 21.8101 9.4978L25.8418 5.64C23.3657 3.38445 20.1434 2 16.2863 2C10.699 2 5.87354 5.1422 3.52435 9.71549L8.14339 13.2311C9.30223 9.85555 12.5086 7.4133 16.2863 7.4133Z"
                            fill="#EB4335"></path>
                        </svg>
                      </span>
                    </button>
                  </span>
                  <div className="py-3 relative">
                    <div
                      className="flex items-center absolute inset-0"
                      aria-hidden="true">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="flex relative justify-center">
                      <span className="text-sm bg-white px-2 text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    User name or email Adress
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="w-full focus:outline-none border py-3 appearance-none h-12 bg-gray-50 block border-gray-200 focus:bg-white focus:border-accent-500 focus:ring-accent-500 placeholder-gray-400 px-3 rounded-xl sm:text-sm text-accent-500"
                    placeholder="Type here..."
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    className="w-full focus:outline-none border py-3 appearance-none h-12 bg-gray-50 block border-gray-200 focus:bg-white focus:border-accent-500 focus:ring-accent-500 placeholder-gray-400 px-3 rounded-xl sm:text-sm text-accent-500"
                    placeholder="Type password here..."
                    type="password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      className="text-accent-500 focus:ring-accent-500 border-accent-500 h-4 rounded w-4"
                      type="checkbox"
                      id="remember-me"
                      name="remember-me"
                    />
                    <label
                      className="font-medium text-sm block leading-tight ml-2 text-black"
                      htmlFor="remember-me">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a
                      className="font-medium hover:text-accent-500 text-accent-500"
                      href="#_">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div className="col-span-full">
                  <button
                    className="items-center h-12 justify-center rounded-xl focus-visible:outline-black focus:outline-none inline-flex bg-black border-2 border-black duration-200 focus-visible:ring-black hover:bg-transparent hover:border-black hover:text-black px-6 py-3 text-center text-white w-full"
                    type="submit">
                    Submit your request
                  </button>
                </div>
                <div>
                  <p className="font-medium text-sm leading-tight text-black">
                    Not a member?{' '}
                    <a
                      className="text-accent-500 hover:text-accent-400 ml-3"
                      href="/signup">
                      Sign up now
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;