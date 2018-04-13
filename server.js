const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.text({ type: 'text/html' }))

const htmlPdf = require('html-pdf-chrome');

let html = '';
const options = {
  port: 9222, // port Chrome is listening on
  printOptions: {
    printBackground: true,
    marginTop: 0,
    marginBottom: 0,
    paperHeight: 12.03,
  },
};

app.post('/', (req, res) => {
    htmlPdf
        .create(req.body, options)
        .then((pdf) => {
            res.type('pdf').send(pdf.toBuffer())
        })
        .catch((err) => {
            res.status(500).send(err)
        })
})

app.listen(80, () => console.log('App listening on port 80!'))