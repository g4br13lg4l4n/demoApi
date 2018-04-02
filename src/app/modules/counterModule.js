
const counterModule = {
  state: {
    connect: false,
    message: null
  },
  //estas mutaciones serán ejecutadas por Node.js, deben comenzar por SOCKET_
  mutations: {
      SOCKET_CONNECT: (state,  status ) => {
        state.connect = true
    },
    SOCKET_RESPONSER (state, message) {
      state.message = message
    },
  },
}

export default counterModule