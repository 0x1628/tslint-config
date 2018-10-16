/* global describe, it */

const path = require('path')
const fs = require('fs')
const {exec} = require('child_process')

const tslint = require.resolve('tslint/bin/tslint')
const cmd = `cd ${__dirname} && node ${tslint} -p .`

describe('TSLint Config for fragment0', () => {
  it('files in passed should passed', (done) => {
    exec(`${cmd} passed/**/*`, (err, stdout, stderr) => {
      if (err) {
        done(new Error(stderr || stdout))
      } else if (stderr) {
        done(new Error(stderr))
      } else {
        done()
      }
    })
  })

  it('files in failed should throw error', (done) => {
    const failedFiles = fs.readdirSync(path.resolve(__dirname, 'failed'))
    Promise.all(failedFiles.map(fName => {
      return new Promise(resolve => {
        exec(`${cmd} ${path.join('failed', fName)}`, (err, stdout) => {
          if (err) {
            const f = fs.readFileSync(path.resolve(__dirname, 'failed', fName)).toString()
            let errorCount = null
            const errResult = f.split('\n').shift().match(/^\/\/.* count: *(\d+).*$/)
            if (errResult) {
              errorCount = Number(errResult[1])
            }
            if (errorCount && errorCount !== stdout.split('\n').filter(Boolean).length) {
              resolve({
                type: 2,
                target: fName,
              })
            } else {
              resolve(null)
            }
          } else {
            resolve({
              type: 1,
              target: fName,
            })
          }
        })
      })
    })).then(results => {
      const errs = results.filter(Boolean)
      if (errs.length) {
        const message = []
        const nothingHappend = errs.filter(i => i.type === 1).map(i => i.target)
        if (nothingHappend.length) {
          message.push(`Nothing happenned in ${nothingHappend.join(', ')}`)
        }
        const errorMismatch = errs.filter(i => i.type === 2).map(i => i.target)
        if (errorMismatch.length) {
          message.push(`Error mismatched in ${errorMismatch.join(', ')}`)
        }
        done(new Error(message.join('\n')))
      } else {
        done()
      }
    })
  })
})
