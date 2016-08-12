export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    const { clientId } = store.getState();
    delete action.meta;
    socket.emit('action', Object.assign({}, action, { clientId }));
  }
  return next(action);
}
