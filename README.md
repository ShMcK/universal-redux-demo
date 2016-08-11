# Redux Client & Server Demo

Allowing for optimistic updates between two synched Redux stores. See below

```
|---------| -> action -> store
| client  |                |
|_________| <---   remote action middleware
  ^                         |
  | SET_STATE               |
  |                         |
|---------|  <---------------
| server  |
|_________| -> action -> store
    ^_______________________|
```

### Setup

`npm install`

### Development

`npm start`
