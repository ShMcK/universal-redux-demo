const SET_CONNECTION_STATUS = 'SET_CONNECTION_STATUS';

export function setConnectionStatus(connection) {
  return {
    type: SET_CONNECTION_STATUS,
    payload: {
      connection
    }
  };
}

export default function reducer(connection = 'disconnected', action) {
  // switch (action.type) {
  //   case SET_CONNECTION_STATUS:
  //     console.log('connection: ', action.payload.connection);
  //     return action.payload.connection;
  //   default:
  //     return connection;
  // }
  return connection;
}
