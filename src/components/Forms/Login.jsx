import React from "react";
import { IoWarningOutline } from "react-icons/io5";

const Login = () => {
	const [isLoading, setIsLoading] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState("");

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
									<span className="w-full flex flex-col gap-3 relative mt-3 z-0">
										<button
											className="font-medium text-sm bg-white h-12 border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:z-10 hover:bg-gray-50 inline-flex items-center justify-center px-4 py-3 relative rounded-xl text-gray-700 w-full"
											type="button"
											onClick={() =>
												(window.location.href = "/api/auth/google")
											}
										>
											<span className="absolute left-4">
												<svg
													fill="none"
													height="24"
													viewBox="0 0 32 32"
													width="24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
														fill="#4285F4"
													></path>
													<path
														d="M16.2862 30C20.1433 30 23.3814 28.7555 25.7465 26.6089L21.2386 23.1865C20.0322 24.011 18.4132 24.5866 16.2862 24.5866C12.5085 24.5866 9.30219 22.1444 8.15923 18.7688L7.9917 18.7827L3.58202 22.1272L3.52435 22.2843C5.87353 26.8577 10.6989 30 16.2862 30Z"
														fill="#34A853"
													></path>
													<path
														d="M8.16007 18.7688C7.85848 17.8977 7.68395 16.9643 7.68395 15.9999C7.68395 15.0354 7.85849 14.1021 8.1442 13.231L8.13621 13.0455L3.67126 9.64734L3.52518 9.71544C2.55696 11.6132 2.0014 13.7444 2.0014 15.9999C2.0014 18.2555 2.55696 20.3865 3.52518 22.2843L8.16007 18.7688Z"
														fill="#FBBC05"
													></path>
													<path
														d="M16.2863 7.4133C18.9688 7.4133 20.7783 8.54885 21.8101 9.4978L25.8418 5.64C23.3657 3.38445 20.1434 2 16.2863 2C10.699 2 5.87354 5.1422 3.52435 9.71549L8.14339 13.2311C9.30223 9.85555 12.5086 7.4133 16.2863 7.4133Z"
														fill="#EB4335"
													></path>
												</svg>
											</span>
											<span>Iniciar sesión con Google</span>
										</button>
										<button
											className="font-medium text-sm bg-[#5865F2] h-12 border border-[#5865F2] focus:border-[#5865F2] focus:outline-none focus:ring-1 focus:ring-[#5865F2] focus:z-10 hover:bg-[#4752C4] inline-flex items-center justify-center px-4 py-3 relative rounded-xl text-white w-full"
											type="button"
											onClick={() =>
												(window.location.href = "/api/auth/discord")
											}
										>
											<span className="absolute left-4">
												<svg
													width="24"
													height="24"
													viewBox="0 0 71 55"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
														fill="white"
													/>
												</svg>
											</span>
											<span>Iniciar sesión con Discord</span>
										</button>
									</span>{" "}
									<div className="py-3 relative">
										<div
											className="flex items-center absolute inset-0"
											aria-hidden="true"
										>
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
						<form
							onSubmit={async (e) => {
								e.preventDefault();
								const formData = new FormData(e.target);
								const username = formData.get("name");
								const password = formData.get("password");
								const rememberMe = formData.get("remember-me");

								try {
									setIsLoading(true);
									setErrorMessage("");

									const response = await fetch(
										"https://backend.byalreves.workers.dev/api/login",
										{
											method: "POST",
											headers: {
												"Content-Type": "application/json",
											},
											body: JSON.stringify({
												username,
												password,
												rememberMe: !!rememberMe,
											}),
										},
									);

									if (response.ok) {
										const data = await response.json();
										// Store token or user data in localStorage/sessionStorage
										if (rememberMe) {
											localStorage.setItem("token", data.token);
										} else {
											sessionStorage.setItem("token", data.token);
										}
										// Redirect to dashboard or home page
										window.location.href = "/dashboard";
									} else {
										setErrorMessage(
											"An unexpected error occurred. Please try again.",
										);
										setIsLoading(false);
										// Handle login error
										const error = await response.json();
										alert(error.message);
									}
								} catch (error) {
									setErrorMessage(
										"An unexpected error occurred. Please try again.",
									);
									setIsLoading(false);
									console.error("Login error:", error);
								}
							}}
						>
							{errorMessage ? (
								<div className="flex items-center gap-1 text-white bg-red-500 px-3 py-2 rounded-lg">
									<IoWarningOutline />
									<span>{errorMessage}</span>
								</div>
							) : null}
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
										required
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
										required
										minLength="6"
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
											htmlFor="remember-me"
										>
											Remember me
										</label>
									</div>
									<div className="text-sm">
										<a
											className="font-medium hover:text-accent-500 text-accent-500"
											href="/forgot-password"
										>
											Forgot your password?
										</a>
									</div>
								</div>
								<div className="col-span-full">
									<button
										className="items-center h-12 justify-center rounded-xl focus-visible:outline-black focus:outline-none inline-flex bg-black border-2 border-black duration-200 focus-visible:ring-black hover:bg-transparent hover:border-black hover:text-black px-6 py-3 text-center text-white w-full"
										type="submit"
									>
										Sign In
									</button>
								</div>
								<div>
									<p className="font-medium text-sm leading-tight text-black">
										Not a member?{" "}
										<a
											className="text-accent-500 hover:text-accent-400 ml-3"
											href="/signup"
										>
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
