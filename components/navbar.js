import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";

const Navbar = () => {
    const navigation = [
        { title: "Services", path: "#services" },
        { title: "Plans", path: "#plans" },
        { title: "FAQ", path: "#faq" },
    ]

    const [state, handleSubmit] = useForm("xyylnnee");

    if (state.succeeded) {
      return         <div className="bg-[url('/bg-8.svg')] bg-no-repeat bg-center bg-cover">
      <header>
          <nav className="items-center px-4 mx-auto sm:px-8 sm:flex sm:space-x-6">
              <Link href="/">
              <a >
                  <img
                      src="/logo-2.png" 
                      width={40} 
                      height={40}
                      alt="a1 logo"
                  />
              </a>
              </Link>
              <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
                  {
                      navigation.map((item, idx) => (
                          <li className="text-gray-200" key={idx}>
                              <a href={item.path}>{item.title}</a>
                          </li>
                      ))
                  }
                  
              </ul>
          </nav>
      </header>
      <section className="text-gray-600 body-font relative " id="contact">
      <div className="overflow-hidden">
          <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 ">
              <div>
              <img
                  className="object-cover w-full h-full"
                  src="/img-1.png"
                  alt=""
              />
              </div>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="relative">
                  <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
                  >
                  <defs>
                      <pattern
                      id="766323e1-e594-4ffd-a688-e7275079d540"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                      >
                      <circle cx="1" cy="1" r=".7" />
                      </pattern>
                  </defs>
                  <rect
                      fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                      width="52"
                      height="24"
                  />
                  </svg>
                  <div className="relative rounded shadow-2xl p-7 sm:p-10">
                    <h2 h2 className="mb-6 font-sans text-3xl font-semibold  text-gray-50 sm:text-4xl sm:leading-none">
                    Thank you for booking with <span className="text-[#7af4fc]">A1 Technologist</span>
                    </h2>
                  </div>
              </div>
              </div>
          </div>
          </div>
      </div>
  </section>;
  </div>
    }
        
          return (
                <div className="bg-[url('/bg-8.svg')] bg-no-repeat bg-center bg-cover">
                    <header>
                        <nav className="items-center px-4 mx-auto sm:px-8 sm:flex sm:space-x-6">
                            <Link href="/">
                            <a >
                                <img
                                    src="/logo-2.png" 
                                    width={40} 
                                    height={40}
                                    alt="a1 logo"
                                />
                            </a>
                            </Link>
                            <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
                                {
                                    navigation.map((item, idx) => (
                                        <li className="text-gray-200" key={idx}>
                                            <a href={item.path}>{item.title}</a>
                                        </li>
                                    ))
                                }
                                
                            </ul>
                        </nav>
                    </header>
                    <section className="text-gray-600 body-font relative " id="contact">
                        <div className="overflow-hidden">
                            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                            <div className="flex flex-col items-center justify-between xl:flex-row">
                                <div className="w-full max-w-xl mb-12 ">
                                <h2 className="mb-6 font-sans text-3xl font-semibold  text-white sm:text-4xl sm:leading-none">
                                Book your next service Appointment with <span className="text-[#7af4fc]">A1 Technologist</span>
                                </h2>
                                <div>
                                <Image
                                    className="object-cover"
                                    src="/img-1.png"
                                    alt="header"
                                    width={400}
                                    height={400}
                                    quality={100}
                                />
                                </div>
                                </div>
                                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                <div className="relative">
                                    <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
                                    >
                                    <defs>
                                        <pattern
                                        id="766323e1-e594-4ffd-a688-e7275079d540"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                        >
                                        <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                                        width="52"
                                        height="24"
                                    />
                                    </svg>
                                    <div className="relative bg-gray-50 rounded shadow-2xl p-4">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="name"
                                            className="inline-block mb-1 font-medium text-slate-900"
                                        >
                                            Name
                                        </label>
                                        <input
                                            placeholder="John Doe"
                                            required
                                            type="name"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline"
                                            id="name"
                                            name="name"
                                        />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="contact"
                                            className="inline-block mb-1 font-medium text-slate-900"
                                        >
                                            Contact
                                        </label>
                                        <input
                                            placeholder="John Doe"
                                            required
                                            type="contact"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline"
                                            id="contact"
                                            name="contact"
                                        />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium text-slate-900"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            placeholder="john.doe@example.org"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors}/>
                                        </div>
                                        <div className="relative mb-4">
                                        <label htmlFor="message" className="leading-7 text-sm text-slate-900 font-medium">Message</label>
                                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300  focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                           type="submit" disabled={state.submitting}
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded shadow-md bg-gradient-to-r from-[#7af4fc] to-blue-500 ">
                                            book now
                                        </button>
                                        </div>
                                        <ValidationError errors={state.errors} />
                                    </form>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
            </div>
     );
}
 
export default Navbar;
