const fs = require('fs')
const path = require('path')
const { expect } = require('chai')
const md5 = require('md5')

const MODULE_1_PATH = path.join(__dirname,  '../solutions/module-1')

async function getFileContents(fileName) {
  const filePath = path.join(MODULE_1_PATH, './' + fileName)

  const content = await fs.promises.readFile(filePath, { encoding: 'UTF-8' })

  return content.trim()
}


describe('#Module-1', () => {
  describe('#1.1.txt', () => {
    it('has the correct uuid', async () => {
      const fileName = '1.1.txt'
      const fileContent = await getFileContents(fileName)

      const expected = '66eb5fcb9828e8ae4345d9cf1022f8ce'

      expect(md5(fileContent)).to.eql(expected)
    })
  })

  describe('#1.2.txt', () => {
    it('has the correct uuid', async () => {
      const fileName = '1.2.txt'
      const fileContent = await getFileContents(fileName)

      const expected = '026129ba5509377507b26618277b6642'

      expect(md5(fileContent)).to.eql(expected)
    })
  })

  describe('#1.3.txt', () => {
    it('has the correct uuid', async () => {
      const fileName = '1.3.txt'
      const fileContent = await getFileContents(fileName)

      const expected = '84d21d15a0936db18757f0c1ba57c4ac'

      expect(md5(fileContent)).to.eql(expected)
    })
  })

  describe('#1.4.txt', () => {
    it('has the correct uuid', async () => {
      const fileName = '1.4.txt'
      const fileContent = await getFileContents(fileName)

      const expected = '94dd06c7879aecf5f5be0160288f5b15'

      expect(md5(fileContent)).to.eql(expected)
    })
  })

  describe('#1.5.txt', () => {
    it('has the correct uuid', async () => {
      const fileName = '1.5.txt'
      const fileContent = await getFileContents(fileName)

      const expected = 'c81e728d9d4c2f636f067f89cc14862c'

      expect(md5(fileContent)).to.eql(expected)
    })
  })
})
