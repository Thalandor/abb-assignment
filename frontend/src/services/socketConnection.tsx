import io from "socket.io-client";

const socket = io(process.env.REACT_APP_WEBSOCKET_API || "localhost:3000");

export default socket;