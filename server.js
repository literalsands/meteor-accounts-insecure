Accounts.registerLoginHandler(function(options) {
  // Attempt to find a user when appropriate.
  var user = (! options instanceof Object)
    ? Accounts.users.findOne()
    : (options.selector instanceof Object)
      ? Accounts.users.findOne(options.selector)
      : undefined
  // Get the _id from the found or created user.
  var userId = (user instanceof Object)
    ?  userId = user._id
    : (options.document)
      ? Accounts.insertUserDoc({}, options.document)
      : null
  if (typeof userId === "string") {
    return {userId: userId}
  }
  throw Error("Failed to find or create user.")
})
