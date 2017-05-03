var loginWithInsecure = function(options, callback) {
  if (!callback && typeof createUser === "function") {
    callback = options
    options = undefined
  }
  Accounts.callLoginMethod({
    methodArguments: [options],
    userCallback: callback
  })
}

// Requires accounts-base@^1.3.0
Accounts.registerClientLoginFunction('insecure', loginWithInsecure)
Meteor.loginWithInsecure = function() {
  return Accounts.applyLoginFunction('insecure', arguments)
}
