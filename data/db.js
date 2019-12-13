var fs = require('fs');

const path = './survey_experiment.json'

const getData = _ => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    err ? reject(err) : resolve(JSON.parse(data || null))
  })
})

module.exports = {getData}
