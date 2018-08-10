const mongoose = require('mongoose')

// korvaa url oman tietokantasi urlilla. ethän laita salasanaa Githubiin!
const url = 'mongodb://fullstack:fsfsfs33@ds113482.mlab.com:13482/full-stack-open-2018-development'

mongoose.connect(url)

const Note = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean
})

const note = new Note({
  content: 'TEST2',
  date: new Date(),
  important: true
})

/* note
  .save()
  .then(response => {
    console.log('note saved!', response )
    mongoose.connection.close()
  }) */

note
  .save()
  .then(response => {
    console.log('note saved!')
    mongoose.connection.close()
  })