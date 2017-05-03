Package.describe({
  summary: "Insecure login method useful for testing and development. (Development Only)",
  version: "0.1.0",
  name: "literalsands:accounts-insecure",
  git: "https://github.com/literalsands/meteor-accounts-insecure.git",
  debugOnly: true
})
Package.onUse(function (api) {
  api.use('accounts-base@1.3.0')
  api.imply('accounts-base')
  api.use('accounts-ui@1.1.8', ['client', 'server'], {weak: true})
  api.mainModule('client.js', 'client')
  api.mainModule('server.js', 'server')
})
Package.onTest(function (api) {
})
