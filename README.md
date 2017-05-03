# Account Insecure

## Install
```
meteor add literalsands:accounts-insecure
```

## Usage

Pass in options with a selector to find a user or a document to create a user.

```
let options = {
  selector: {},
  document: {}
}

Meteor.loginWithInsecure(options, callback)
```

* Create a user and login.
```
Meteor.loginWithInsecure({
  document: {
    profile: {
      name: "Insecure User"
    }
  }
})
```
* Pass in a selector to login as an existing user.
* Pass in a document to create a user when the selector doesn't find a user.
```
Meteor.loginWithInsecure({
  selector: {
    emails: {
      $elemMatch: {
        address: "insecure@example.com"
      }
    }
  },
  document: {
    profile: {
      name: "Insecure User"
    },
    emails: [{
      address: "insecure@example.com",
      verified: false
    }]
  }
})
```

* Passing in no options will return the first user found.
```
Meteor.loginWithInsecure()
```

