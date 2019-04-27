import io from 'socket.io-client'

const QQ = {
  socket: null,
  init: (obj) => {
    let url = "http://localhost:3000";
    this.socket = io.connect(url);
    this.socket.on("connect", () => {
      console.log("success");
      this.socket.emit("open");
      this.socket.emit("user",obj);
    })
  },   
  who: () => {
    this.socket.on("who", daee => {
      localStorage.setItem('who', daee.who);
    })
  },
  message: (info) => { //响应发送的消息
    this.socket.on("message", data => {
      let a = localStorage.getItem('who');
      let b = localStorage.getItem('loginName');
      if (data.to === b && data.from === a) {
        info.push(data);
        console.log(data)
        console.log(info);
      } else {
        return
      }
    });
  },
  send: (obj) => {
    this.socket.emit("sendTo", obj);
  },
  open: (obj) => {
    this.socket.emit("setRoom", obj);
  }
}

export default QQ
