import uuid from 'uuid';

const SET_CLIENT_ID = 'SET_CLIENT_ID';

export function getClientId() {
  let id = localStorage.getItem('clientId');
  if (!id) {
    id = uuid.v4();
    localStorage.setItem('clientId', id);
  }
  return id;
}

export function setClientId(clientId) {
  return {
    type: SET_CLIENT_ID,
    payload: { clientId },
    meta: { remote: true },
  };
}

export default function reducer(clientId = null, action) {
  switch(action.type) {
    case SET_CLIENT_ID:
      return action.payload.clientId;
    default:
      return clientId;
  }
}
