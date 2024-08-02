import React from 'react'
import java from "../../public/java.png"
import python from "../../public/python.webp"
import mongoDB from "../../public/mongodb.jpg"
import express from "../../public/express.png"
import reactjs from "../../public/reactjs.png"
import nodejs from "../../public/node.png"


const Protfilo = () => {
    const cardItem=[
        {
            id:1,
            logo:mongoDB,
            name:"MongoDb"
        },
        {
            id:2,
            logo:express,
            name:"Express"
        },
        {
            id:3,
            logo:reactjs,
            name:"ReactJs"
        },
        {
            id:4,
            logo:nodejs,
            name:"NodeJs"
        },
        {
            id:5,
            logo:java,
            name:"Java"
        }
    ]
  return (
    <>
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto md:px-20 mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
            <span className='underline font-semibold'>Feautured Project</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                {
                    cardItem.map(({id,logo,name})=>(
                        <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg cursor-pointer p-1 hover:scale-110 duration-300' key={id}>
                            <img className='w-[120px] h-[120px] rounded-full border-[2px]' src={logo} alt="" />
                            <div>
                                <div className='px-2 font-bold text-lg mb-2'>{name}</div>
                                <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                            </div>
                            <div className='px-6 py-4 justify-around space-x-5'>
                                <button className='bg-blue-500 hover:bg-blue-900 text-white font-bold px-4 py-2 rounded '>Video</button>
                                <button className='bg-green-500 hover:bg-green-900 text-white font-bold px-4 py-2 rounded '>Source Code</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    </>
  );
}

export default Protfilo