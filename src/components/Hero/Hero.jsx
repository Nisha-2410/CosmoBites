import React from 'react'
/* import Vector from "../../../assets/Back.jpg";  */
import Vector from "../../assets/gr.jpeg";
import Burger from "../../assets/Cupcake.png";

const bgImg={
  backgroundImage:`url(${Vector})`,
  backgroundPosition:"center",
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat",
  width:"100vw",
  height:"100vh",

}

const Hero = () => {
  const [imageId, setImageId] = React.useState(Burger);
  return (
    <>
          <div style={bgImg} className="min-h-[550px] sm-min-h-[600px] bg-gray-100   duration-200 flex justify-center items-center">
        <div className='container pb-8 sm:pb-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
               {/*  text content section */}
               <div className=' flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm-text-left order-2 sm:order-1'> 
                <div>
                <h1 className=' py-30 px-10 relative right-7 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] rounded-3xl text-5xl bg-black text-amber-50 text-left sm:text-6xl lg:text-7xl font-bold'> 
                  {/* header section */}

                </h1>
                <p className=' bg-black text-sm text-left'> 
                  {/* para section */}
                </p>

                </div>

               </div>
               {/* image section */}
               <div className='order-1 sm:order-2 mih-h-[450px] sm:min-h-[450px] flex justify-center items-center relative'>
                {/*  main image section */}
                <div className='flex justify-center  items-center h-[300px] sm:h-[450px] overflow-hidden'>
                  <img
                  src={Burger} alt='' className='w-[300px] sm:w-[450px] mx-auto spin'
                  />
                </div>
                <div>
                  {/* image list section */}
                </div>
               </div>
            </div>

        </div>

      </div>
      
       
       
    </>
  )
}

export default Hero