
// ! This gives us the power to customize our port with heroku
const port = process.env.PORT || 8000

// ! This allows us to run our code in different environments
const env = process.env.NODE_ENV || 'production'

// ! This will allow us to use a different url for heroku (which will point to mongo atlas)
const dbURI = env === 'production'
  ? process.env.MONGODB_URI
  : `mongodb://localhost/pubsdb-${env}`

const secret = 'This is our secret to be moved to another folder'

// ! Export everything
module.exports = {
  secret, port, dbURI
}
