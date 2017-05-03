# Account Insecure

## Install
```
meteor add literalsands:accounts-insecure
```

## Usage
Pass in a selector to login as an existing user.
Pass in a document to create a user when the selector doesn't find a user.
Passing in no options will return the first user found.
```
Accounts.loginWithInsecure({
  selector: {},
  document: {}
})
```

