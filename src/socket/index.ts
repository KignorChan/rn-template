import socketIOClient, { Socket } from "socket.io-client";
import configs from "../configs";
import NotificationTypes from "../constants/NotificationTypes";
import NotificationUtils from "../utils/NotificationUtils";
import SocketEvents from "./SocketEvents";
import LinkingPaths from "../constants/LinkingPaths";
import { AppState } from "react-native";
import iStorage from "../utils/iStorage"

let socket: Socket | null = null;
const _handleAppStateChange = (nextAppState: any) => {
  if (nextAppState === "active") {
    socket?.connect();
  }
};
AppState.addEventListener("change", _handleAppStateChange);

export async function initialSocket() {
  if (socket == null) {
    /**
     * Need to design how to connect socket with backend (userAuthStr)
     */
    const userAuthStr = await iStorage.storage.getItem(iStorage.keys.USER_AUTH_INFO);
    if (userAuthStr != null) {
      const userAuth = JSON.parse(userAuthStr);
      console.log("user auth: " + JSON.stringify(userAuth));
      if (userAuth != null && userAuth.jwt_token != null) {
        socket = socketIOClient(configs.SOCKET_BASE_URL, {
          path: "/socket.io",
          forceNew: true,
          // reconnectionAttempts: 3,
          // timeout: 2000,
          reconnection: false,
          extraHeaders: userAuth,
          transports: ["websocket"],
          upgrade: false,
        });

        socket.on("connect", () => {
          console.log(`Socket connect, id: ${socket?.id}`);
        });

        socket.on("disconnect", () => {
          console.log(`Socket disconnect`);
          socket?.connect();
        });

        socket.on("connect_error", (error) => {
          console.log(`Socket connect_error: ${error}`);
          socket?.connect();
        });

        socket.io.on("ping", () => {
          console.log(`Socket io ping`);
          if (!socket?.connected) {
            socket?.connect();
          }
        });

        socket.io.on("reconnect_failed", () => {
          console.log(`Socket io reconnect_failed`);
        });

        socket.io.on("reconnect_error", (error) => {
          console.log(`Socket io reconnect_error: ${error}`);
        });

        socket.io.on("reconnect_attempt", (attempt) => {
          console.log(`Socket io reconnect_attempt: ${attempt}`);
        });

        socket.io.on("reconnect", (attempt) => {
          console.log(`Socket io reconnect: ${attempt}`);
        });

        socket.io.on("error", (error) => {
          console.log(`Socket io error: ${error}`);
          socket?.io.connect();
        });

        const events = Object.values(SocketEvents);
        events.map((item) => {
          socket?.on(item, (message) => {
            console.log(
              `Receive message from event ${item}, data: ${JSON.stringify(
                message
              )}`
            );
          });
        });
      }
    }
  }
}

export function destroySocket() {
  if (socket != null) {
    // socket?.disconnect();
    socket?.close();
    socket = null;
  }
}

export function getSocketIntanse() {
  return socket;
}

export default {
  initialSocket,
  destroySocket,
  getSocketIntanse,
};
