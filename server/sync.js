module.exports = store => next => action => {
  // socket.send(
  //   JSON.stringify(`{ type: 'SET_STATE', payload: { store: ${store} }`)
  // );
  console.log('store changed');
  return next(action);
}
