import React from 'react'

export const Welcome = () => {
    return (
        <div className='welcome-wrapper'>
            <div className='welcome-content '>
                <h1 className='welcome-title'>DnD.io</h1>
                <div className='card join-card'>
                    <div className='card-body'>
                        <h4 className='card-title'>Welcome!</h4>
                        <button className='margin'>Join Room</button> 
                        <button className='margin'>Create Room</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome