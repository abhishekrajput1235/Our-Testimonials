

import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


function Card(props){
    let review =props.review;
    return (
        <div className="flex flex-col justify-center items-center ">
            {/* <div className="flex flex-col justify-center items-center ">
                <h1 className="text-[3rem] font-bold">Our Testimonials</h1>
                <div className="h-1 w-[12rem] bg-violet-600"></div>
            </div> */}

            <div className="flex flex-col right-[13.5rem] top-[2.5rem] relative">
                <div className="w-[100px] h-[100px] bg-violet-600 rounded-full absolute"></div>
                <div
                    // className="w-[100px] h-[100px] bg-violet-100 rounded-full relative right-2 top-1"
                >
                    <img src={review.image} alt="Profile"
                    className="w-[100px] h-[100px]  rounded-full relative right-2 top-1"
                    />
                </div>
            </div>


            <div className="w-[600px] h-[380px] border-2  rounded-md shadow-md bg-slate-100">
                <div>
                    <div className='mt-[2.5rem] '>
                        <h1 className='text-[2rem] font-semibold'>{review.name}</h1>
                        <p className='text-violet-400'>{review.designation}</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center my-[1rem]'>
                    <div className='flex justify-center text-violet-700'><FaQuoteLeft/></div>
                    <div className='flex justify-center'><p className='my-[1rem] w-1/2'>{review.testimonial}</p></div>
                    <div className='flex justify-center text-violet-700'><FaQuoteRight/></div>
                </div>

             
            </div>


        </div>
    )
}

export default Card;