import Link from "next/link";

const Footer = () => {
    return ( 
        <footer className="text-gray-600 body-font bg-[#161b3c]">
            <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
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
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 20222 A1 Technologist —
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
               <a className="ml-3 text-gray-500">
                   Contact: 1(868)389-2499
                </a>
               <Link href="https://www.facebook.com/A1-Technologist-107538695260080">
                <a className="ml-3 text-gray-500 cursor-pointer">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </a>
               </Link>
               <Link href="https://www.instagram.com/a1_technologist/" >
               <a className="ml-3 text-gray-500 cursor-pointer">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                </a>
               </Link>
                </span>
            </div>
        </footer>
     );
}
 
export default Footer;