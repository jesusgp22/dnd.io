import { useEffect } from 'react'

import io from 'socket.io-client'

// TODO: convert this into context at some point
const socket = io()

const initSocket = () => {

}

const destroySocket = () => {

}

export const useSocket = () => {
    useEffect(() => {
        initSocket()

        return () => {
            destroySocket()
        }
    }, [])
}