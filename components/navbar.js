import Link from "next/link";

const Navbar = () => {

        const navigation = [
            { title: "Services", path: "javascript:void(0)" },
            { title: "Plans", path: "javascript:void(0)" },
            { title: "Contact", path: "javascript:void(0)" },
        ]
        
          return (
              <div className="bg-[#161b3c]">
                  <header>
                      <nav className="items-center pt-5 px-4 mx-auto sm:px-8 sm:flex sm:space-x-6">
                          <Link href="/">
                          <a >
                              <img
                                  src="/logo-2.png" 
                                  width={50} 
                                  height={50}
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
                              <li>
                              <a href="javascript:void(0)" className="px-7 py-3 w-full bg-white text-gray-800 hover:bg-[#7af4fc] text-center rounded-md shadow-md block sm:w-auto">
                                  Book Appointment
                              </a>
                              </li>
                          </ul>
                      </nav>
                  </header>
                  <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                      <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                          <h1 className="text-white font-semibold text-2xl xl:text-2xl">
                            Quality repairing at your Affordability at <br></br>
                               <span className="text-[#7af4fc] text-4xl xl:text-4xl"> A1 Technologist</span>
                          </h1>
                          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                              If you are looking for computer repair services, then choosing is an ideal solution for you.
                           </p>
                      </div>
                      <div className="flex-1 text-center lg:mt-0 lg:ml-3">
                          <img src="/img-2.png" className="w-full h-full"/>
                      </div>
                  </section>
              </div>
     );
}
 
export default Navbar;