

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font font-sans bg-white">
        <div className="max-w-xl  md:mx-auto sm:text-center lg:max-w-2xl pt-8">
            <h2 className="max-w-lg  text-3xl font-bold leading-none tracking-tight text-[#161b3c] sm:text-4xl md:mx-auto">
                <span className="relative">About us</span>
            </h2>
          </div>
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative">
            <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
              <div className="grid gap-12 row-gap-5 md:grid-cols-1">
                <div className="relative">
                  <div className="relative bg-gray-100 p-6 rounded-lg">
                    <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full ">
                        <img
                      src="/img-7.png"
                      alt=""
                    />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">
                      Guarantees
                    </h6>
                    <p className="text-sm text-gray-900">
                      No Fix, No Fees - If we are unable to resolve the issue or provide you with an answer, you will not be charged.
                    </p>
                  </div>
                </div>
              
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full">
                  <img
                  src="/img-8.png"
                  alt=""
                />
                  </div>
                  <h6 className="mb-2 font-semibold leading-5">
                    Same Day Service
                  </h6>
                  <p className="text-sm text-gray-900">
                    When you seek assistance, we ensure that an expert technician will be at your door at the earliest possible moment
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full">
                  <img
                  src="/img-9.png"
                  alt=""
                />
                  </div>
                  <h6 className="mb-2 font-semibold leading-5">
                    No payment requirement
                  </h6>
                  <p className="text-sm text-gray-900">
                    We do not ask for a credit card or any other kind of payment until the job is completed and you are satisfied with the results.
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="object-cover w-full h-full"
                  src="/img-3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="text-gray-600 body-font font-sans bg-[#161b3c]" id="services">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-400 uppercase">
                what we do
              </p>
            </div>
            <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-50 sm:text-4xl md:mx-auto">
                <span className="relative">Our Services</span>
            </h2>
          </div>
          <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-teal-500/10 hover:border-teal-500/10">
              <div>
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50">
                <img
                  src="/img-10.png"
                  className="w-14 h-14"
                  alt=""
                />
                </div>
                <h5 className="mb-2 font-semibold text-lg text-gray-100 leading-5">Hardware Repair and Upgrades</h5>
                <p className="mb-3 text-sm text-gray-50 ">
                  Our experts can assist you in getting your computer up and running again. If required, we can replace 
                  your internal components as well as give assistance for the replacement or upgrade.
                </p>
              </div>
      
            </div>
            <div className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-teal-500/10 hover:border-teal-500/10">
              <div>
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50">
                <img
                  src="/img-11.png"
                  className="w-14 h-14"
                  alt=""
                />
                </div>
                <h5 className="mb-2 font-semibold leading-5 text-lg text-gray-100 ">Software Repair, Installation and Upgrade</h5>
                <p className="mb-3 text-sm text-gray-50">
                {`We fix your computers. From simple software updates to complex data recovery, we’ve seen it all. We’ll fix it. We make complex problems simple.`}
                </p>
              </div>      
            </div>
            <div className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-teal-500/10 hover:border-teal-500/10">
              <div>
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50">
                <img
                  src="/img-13.png"
                  className="w-14 h-14"
                  alt=""
                />
                </div>
                <h5 className="mb-2 font-semibold leading-5 text-lg text-gray-100">Virus Removal</h5>
                <p className="mb-3 text-sm text-gray-50">
                  We can assist you in recovering from viruses, malware, spyware, ransomware, and other 
                  dangerous programs. We can also provide you advice on how to keep your papers protected from these dangers.
                </p>
              </div>
      
            </div>
            <div className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-teal-500/10 hover:border-teal-500/10">
              <div>
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50">
                <img
                  src="/img-12.png"
                  className="w-14 h-14"
                  alt=""
                />
                </div>
                <h5 className="mb-2 font-semibold leading-5 text-lg text-gray-100">Data Recovery</h5>
                <p className="mb-3 text-sm text-gray-50">
                Concerned that all of your files and data will not be restored from your devices? 
                Our experts will do everything possible to recover files that have been deleted from any device.
                </p>
              </div>
      
            </div>
            <div className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-teal-500/10 hover:border-teal-500/10">
              <div>
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50">
                <img
                  src="/img-14.png"
                  className="w-14 h-14"
                  alt=""
                />
                </div>
                <h5 className="mb-2 font-semibold leading-5 text-lg text-gray-100">System Tune-up</h5>
                <p className="mb-3 text-sm  text-gray-50">
                Improve the speed and performance of your computer clean up and defragment your PC. Remove any unnecessary programs, if virus eradication is required there will be extra costs.
                </p>
              </div>
      
            </div>
            <div className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-teal-500/10 hover:border-teal-500/10">
              <div>
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50">
                <img
                  src="/img-15.png"
                  className="w-14 h-14"
                  alt=""
                />
                </div>
                <h5 className="mb-2 font-semibold leading-5 text-lg text-gray-100">Computer Repair</h5>
                <p className="mb-3 text-sm text-gray-50">
                {`It makes no difference if your computer is a Dell, HP, Lenovo, Apple, or any other brand. We'll visit to your house or office and repair the problems.`}
                </p>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section className="pt-24 bg-[url('/bg-3.svg')] bg-no-repeat bg-center bg-cover " id="plans">
        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-400 uppercase">
                what we do
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#161b3c] sm:text-4xl md:mx-auto">
                <span className="relative">Our Plans</span>
            </h2>
            <p className="mb-3 text-lg text-center text-gray-900">
            {` Service at your door, doesn't cost more.
               Personal in-home services at 1/2 the price and without the wait.`}
            </p>
          </div>
          </div>
          <div className="container mx-auto flex flex-col items-center gap-8 justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
          <div className="flex flex-col  justify-center flex-1 p-4 pb-8 text-left rounded-md sm:p-8 lg:p-16 bg-gray-100 bg-opacity-70">
              <span className="text-2xl text-center text-[#161b3c] mb-5">AT HOME OR OFFICE</span>
              <p className="text-md text-[#161b3c] font-semibold "><i className="fa-solid fa-circle-check px-3 text-[#161b3c]"></i>We come to your Home or Office</p>
              <p className="text-md text-[#161b3c] font-semibold "><i className="fa-solid fa-circle-check px-3 text-[#161b3c]"></i>Same day Service</p>
              <p className="text-md text-[#161b3c] font-semibold "><i className="fa-solid fa-circle-check px-3 text-[#161b3c]"></i>No fix No fee guarantee</p>
              <p className="text-md text-[#161b3c] font-semibold "><i className="fa-solid fa-circle-check px-3 text-[#161b3c]"></i>Free Estimates</p>
              <p className="text-md text-[#161b3c] font-semibold "><i className="fa-solid fa-circle-check px-3 text-[#161b3c]"></i>Zero pre-payment required</p>
              <p className="text-md text-[#161b3c] font-semibold "><i className="fa-solid fa-circle-check px-3 text-[#161b3c]"></i>Payment after Completion</p>
              <div className="flex md:mt-4 mt-12">
                <a className="text-gray-700  inline-flex font-semibold items-center">Starts at <span className="ml-2 font-bold text-3xl">$275</span></a>
              </div>
            </div>
            <div className="flex flex-col  justify-center flex-1 p-4 pb-8 text-left rounded-md sm:p-8 lg:p-16 bg-gray-100 bg-opacity-70">
              <span className="text-2xl text-center text-[#161b3c] mb-5">REMOTE SUPPORT</span>
              <p className="text-md text-[#161b3c] font-semibold "><i className="fa-solid fa-circle-check px-3 text-[#161b3c] "></i>Repairs via the Internet</p>
              <p className="text-md text-[#161b3c] font-semibold "><i className="fa-solid fa-circle-check px-3 text-[#161b3c]"></i>100% Private &Secure Connection</p>
              <p className="text-md text-[#161b3c] font-semibold "> <i className="fa-solid fa-circle-check px-3 text-[#161b3c]"></i>No fix No fee guarantee</p>
              <p className="text-md text-[#161b3c] font-semibold "><i className="fa-solid fa-circle-check px-3 text-[#161b3c]"></i>Immediate Service when requested</p>
              <p className="text-md text-[#161b3c] font-semibold "><i className="fa-solid fa-circle-check px-3 text-[#161b3c]"></i>Zero pre-payment required</p>
              <p className="text-md text-[#161b3c] font-semibold "><i className="fa-solid fa-circle-check px-3 text-[#161b3c]"></i>Payment after Completion</p>
              <div className="flex md:mt-4 mt-12">
                <a className="text-gray-700 inline-flex font-semibold items-center">Starts at <span className="ml-2 font-bold text-3xl">$150</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="dark:bg-coolGray-800 dark:text-coolGray-100 py-16" id="faq">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#161b3c] sm:text-4xl md:mx-auto">Frequently Asked Questions</h2>
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-coolGray-700 font-sans">
              <details>
                <summary className="py-2 outline-none text-md text-[#161b3c] font-semibold cursor-pointer focus:underline">Do you service Home and Residential customers?</summary>
                <div className="px-4 pb-4">
                  <p>Yes, we provide computer solutions for consumers at home and in the business. We can assist you with everything from simple computer problems to massive complicated business solutions.</p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none text-md text-[#161b3c] font-semibold cursor-pointer focus:underline">Do you service Business customers?</summary>
                <div className="px-4 pb-4">
                  <p>Yes, we offer information technology assistance and technical solutions to small and medium-sized organizations. We can assist you with backup systems, new office setups, wireless networking, and routine computer maintenance, among other things.</p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none text-md text-[#161b3c] font-semibold cursor-pointer focus:underline">What forms of payment does accept?</summary>
                <div className="px-4 pb-4 space-y-2">
                  <p>We accept the following payment methods: online or cash. We immediately prepare a tax receipt and email it to you.</p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none text-md text-[#161b3c] font-semibold cursor-pointer focus:underline">Do you sell computers and parts ?</summary>
                <div className="px-4 pb-4 space-y-2 ">
                  <p>{`No. We've discovered that stores that offer deals tend to find more wrong with your computer than there is. If your computer repair requires the purchase of a part, we will do so on your behalf. Simply repay us for our expenses.`}</p>
                </div>
              </details>
            </div>
          </div>
        </section>
        
    </>
  )
}
