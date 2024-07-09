import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";

function FooterComponent() {
  return (
    <div className="mt-20">
      <div className='container mx-auto border border-black bg-[#333333] text-white relative h-[200px]'>
        <div className="flex">
            <FiPhone size={40} className="ml-10 mt-10"/>
            <h3 className="text-2xl ml-10 mt-10 font-bold">065-064/185</h3>

            <div className="flex">
                <IoHomeOutline size={40} className=" ml-[350px] mt-10"/>
                <h3 className="text-2xl ml-10 mt-10 font-bold">Karadjordjeva 2, Doboj</h3>
            </div>
        </div>
        <div className="flex">
            <CiMail size={40} className="ml-10 mt-10"/>
            <h3 className="text-2xl ml-10 mt-10 font-bold">bbajovic7@gmail.com</h3>
            <h3 className='text-center ml-[800px] mt-10 font-bold'>Copyright &copy; 2023. All rights reserved.</h3>
        </div>

        
        

      </div>
    </div>
  )
}

export default FooterComponent
