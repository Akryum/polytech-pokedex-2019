import sqlite from 'sqlite'
import os from 'os'
import path from 'path'

const filePath = path.resolve(os.homedir(), './Pokedex.db')
// path.resolve(process.cwd(), './db/Pokedex.db')

console.log('SQLite:', filePath)

const db = sqlite.open(filePath, {
  cached: true
})

export {
  db
}
