import React, { useRef, useEffect } from "react";
import io from "socket.io-client";
import SocketContext from "./SocketContext";

export const SocketProvider = ({ url, options, children }) => {
  const socketRef = useRef(null);

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(url, options || {});
    }
    return () => {
      socketRef.current.disconnect();
      socketRef.current = null;
    };
  }, []);

  return (
    <SocketContext.Provider value={socketRef.current}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
