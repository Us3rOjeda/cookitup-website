import { CormorantGaramond } from "../../../public/fonts/fonts";

function FooterContent () {
  return (
    <footer className="flex items-center justify-center">
      <div className={`text-[#f9f4e9] 
      ${CormorantGaramond.className} flex flex-col gap-10
      text-4xl items-center
      `}>
        <a href="https://github.com/Us3rOjeda" 
        className="relative inline-block text-[#f9f4e9] 
        no-underline pb-1 group hover:text-white">
          GitHub
          <span className="absolute rounded-4xl bottom-0 left-0 
          w-full h-[2px] hover:bg-white bg-[#f9f4e9]
          transtion-all ease-in-out duration-500"></span>
        </a>
        <a href="https://www.linkedin.com/in/us3r0jeda6161/" 
        className="relative inline-block text-[#f9f4e9] 
        no-underline pb-1 group hover:text-white">
          LinkedIn
          <span className="absolute rounded-4xl bottom-0 left-0 
          w-full h-[2px] hover:bg-white bg-[#f9f4e9]
          transtion-all ease-in-out duration-500"></span>
        </a>
        <a href="https://portfolio-website-o3xw.onrender.com" 
        className="relative inline-block text-[#f9f4e9] 
        no-underline pb-1 group hover:text-white">
          Portfolio
          <span className="absolute rounded-4xl bottom-0 left-0 
          w-full h-[2px] hover:bg-white bg-[#f9f4e9]
          transtion-all ease-in-out duration-500"></span>
        </a>
      </div>
    </footer>
  )
}

export default FooterContent;
