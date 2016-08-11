# Redux Client & Server Demo

Allowing for optimistic updates between two synched Redux stores. See below

```
|---------| -> action
|         |      v
| client  |    store
|         |      v
|_________| <- sync middleware
  ^               |
  | SYNC          |
  |               |
|---------|  <-----
|         |
| server  | -> action
|         |      v
|_________|    store
    ^            v
    |-----sync middleware
```

### Setup

`npm install`

### Development

`npm start`
