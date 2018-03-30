const giphyAPIKey = process.env.GIPHY_KEY
const _ = require('lodash')
const fetchGif = require('./utils/giphy.js')

module.exports = robot => {
  robot.on('issue_comment.created', async context => {
    // return if you ain't suppose be here
    if (context.payload.comment.body.includes('gipht')) {
      const searchTerm = _.sample([
        'wat',
        'pug',
        'puppy',
      ])

      const url = `http://api.giphy.com/v1/gifs/translate?api_key=${giphyAPIKey}&s=${searchTerm}`
      const gifURL = await fetchGif(url)

      const params = context.issue({body: `![](${gifURL})` })

      return context.github.issues.createComment(params)

    }
  })
}
