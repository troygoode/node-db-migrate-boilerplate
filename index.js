const fs = require('fs')

module.exports = function ({ upPath, downPath, version }) {
  let Promise
  // let dbm
  // let type
  // let seed

  return {
    setup: function (options, seedLink) {
      Promise = options.Promise
      // dbm = options.dbmigrate
      // type = dbm.dataType
      // seed = seedLink
    },

    up: function (db) {
      const filePath = upPath
      return new Promise(function (resolve, reject) {
        fs.readFile(filePath, {encoding: 'utf-8'}, function (err, data) {
          if (err) {
            return reject(err)
          }

          console.log('received data: ' + data)
          resolve(data)
        })
      })
      .then(function (data) {
        return db.runSql(data)
      })
    },

    down: function (db) {
      const filePath = downPath
      return new Promise(function (resolve, reject) {
        fs.readFile(filePath, {encoding: 'utf-8'}, function (err, data) {
          if (err) {
            return reject(err)
          }

          console.log('received data: ' + data)
          resolve(data)
        })
      })
      .then(function (data) {
        return db.runSql(data)
      })
    },

    _meta: {
      version: version || 1
    }
  }
}
