const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': './src/components',
    '@assets' : './src/assets',
    '@objects': './src/objects',
    '@views': './src/views',
    '@img': './src/assets/img'
  })(config)

  return config
}