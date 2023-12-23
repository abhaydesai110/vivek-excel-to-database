import React from 'react'

const NavBar = () => {
    return (
        <main className='w-screen'>
            <div className='max-w-screen-2xl mx-auto' >
                <div className='  flex justify-between items-center '>
                    <h1 className='m-5'>Logo</h1>
                    <div className='flex items-center justify-center  space-x-5'>
                        <div className='flex items-center justify-center space-x-5'>
                            <h6>Link1</h6>
                            <h6>Link2</h6>
                            <h6>Link3</h6>
                            <h6>Link4</h6>
                            <h6>Link5</h6>
                        </div>
                        <div className=''>
                            <button>Register</button>
                            <button>Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NavBar