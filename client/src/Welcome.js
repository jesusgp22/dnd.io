import React, { Fragment, useState } from 'react'
import { Redirect } from 'react-router-dom'

const JOIN_MODE = 'JOIN'
const CREATE_MODE = 'CREATE'

const INITIAL_FORM_STATE = {
    username: '',
    roomName: '',
}

const WelcomeScreen = ({ setMode }) => (
    <Fragment>
        <h4 className='card-title'>Welcome!</h4>
        <button className='margin' onClick={() => setMode(JOIN_MODE)}>Join Room</button> 
        <button className='margin' onClick={() => setMode(CREATE_MODE)}>Create Room</button>
    </Fragment>
)

const WelcomeForm = ({ mode, setMode }) => {
    const [redirectTo, setRedirectTo] = useState(null)
    const [formState, setFormState] = useState(INITIAL_FORM_STATE)
    
    const { username, roomName } = formState

    const handleChange = ({ target: { value, name }}) => {
        setFormState((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const uri = encodeURI(roomName)
        // create or join room and redirect to room's URI
        setRedirectTo(`/room/${uri}`)
    } 

    if(redirectTo !== null){
        return <Redirect to={redirectTo} />
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='section'>
                <h4 className='card-title'>Welcome!</h4>
                <div className='form-group'>
                    <label for="roomName-input">Room Name</label>
                    <input
                        type='text'
                        className='input-block'
                        name='roomName'
                        id='roomName-input'
                        onChange={handleChange}
                        value={roomName}
                    />
                </div>
                <div className='form-group'>
                    <label for="username-input">Character Name</label>
                    <input
                        type='text'
                        name='username'
                        className='input-block'
                        id='username-input'
                        onChange={handleChange}
                        value={username}
                    />
                </div>
                <button type='submit' className='btn-block'>{mode} ROOM</button>
            </div>
            <a className="card-link" href="#" onClick={() => setMode(null)}>&larr; Go back</a>
        </form>
    )
}

export const Welcome = () => {
    const [mode, setMode] = useState(null)
    
    return (
        <div className='welcome-wrapper'>
            <div className='welcome-content '>
                <h1 className='welcome-title'>DnD.io</h1>
                <div className='card join-card'>
                    <div className='card-body'>
                        { mode === null && <WelcomeScreen setMode={setMode}/> }
                        { mode !== null && <WelcomeForm mode={mode} setMode={setMode}/> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome