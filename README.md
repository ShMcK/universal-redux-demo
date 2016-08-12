# Redux Client & Server Demo

Allowing for optimistic updates between two synched Redux stores. See below:

```
|---------| -> action
|         |      v
| client  |    store
|         |      v
|_________| <- sync middleware
  ^               |
  | SET_STATE     |
  |               |
|---------|  <-----
|         |
| server  | -> action
|         |      v
|_________|    store
    ^            v
    |-----sync middleware
```

## Features

- 2 Synched Redux stores
- Optimistic UI updates
- Web Sockets

### Setup

`npm install`

### Development

`npm start`
