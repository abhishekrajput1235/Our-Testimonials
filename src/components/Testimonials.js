import { useState } from "react";
import Card from "./Card";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Testimonials( props){
    let reviews = props.reviews;
    const [index,setIndex] =useState(0);

    function leftShiftHandler(){
        if(index-1 < 0)
            setIndex(reviews.length -1);
        else
            setIndex(index - 1);
    }
    function rightShiftHandler(){
        if(index+1 >= reviews.length)
            setIndex(0);
        else
            setIndex(index + 1);

    }

    function surpriseHandler(){
       let rendomIndex = Math.floor((Math.random() * reviews.length));
       setIndex(rendomIndex);

    }

    return (
        <div>    
                <div className="flex flex-col justify-center items-center top-[3rem] relative">
                    <h1 className="text-[3rem] font-bold">Our Testimonials</h1>
                    <div className="h-1 w-[12rem] bg-violet-600"></div>
                </div>

                <Card  review ={reviews[index]}/>

                <div className='flex  justify-center gap-10 relative bottom-[6.5rem] text-violet-600 my-[0.5rem]'>
                    <button onClick={leftShiftHandler}>
                        <FaChevronLeft />
                    </button>
                    <button onClick={rightShiftHandler}>
                        <FaChevronRight />
                    </button>
                </div>

                <button className='px-[3rem] py-[0.5rem] mt-[1rem] rounded-md bg-violet-600 text-white font-bold relative bottom-[7rem]' 
                onClick={surpriseHandler}
                >Surprise Me</button>
        </div>
    )
}

export default Testimonials;