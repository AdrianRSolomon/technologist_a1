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
                  <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="/img-2.png"s/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="text-white font-semibold text-2xl xl:text-2xl">
                        Quality repairing at your Affordability at <br></br>
                            <span className="text-[#7af4fc] text-4xl xl:text-4xl"> A1 Technologist</span>
                        </h1>
                        <p className="mb-8 leading-relaxed text-gray-50">If you are looking for computer repair services, then choosing is an ideal solution for you.</p>
                        <div className="flex justify-center">
                        <a href="javascript:void(0)" className="px-5 py-1 w-full bg-white text-gray-800 hover:bg-[#7af4fc] text-center rounded-md shadow-md block sm:w-auto">
                                  Book Appointment
                              </a>
      </div>
                        </div>
                        
                    </div>
                    </section>
              </div>
     );
}
 
export default Navbar;
