import React from 'react'
import photo from '../assets/images/photo.png';

const Presentation = () => {
    return (
        <>
            <div className='py-28 flex items-center'>
                <div className='text-white'>
                    <div className='bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 from w-fit rounded-full'>
                        <img src={photo} alt="" className='w-20 h-20 object-cover rounded-full' />
                    </div>
                    <h3 className='text-3xl flex'>Hola, soy <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-400  to-orange-500 font-semibold ml-2'>Leandro</h2>.</h3>
                    <h2 className='text-4xl font-bold'> &lt; Front-End Developer /&gt;</h2>
                    <div className='py-4'>
                        <button className='text-yellow-500 p-2 bg-transparent outline-none border border-yellow-400 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Presentation;
