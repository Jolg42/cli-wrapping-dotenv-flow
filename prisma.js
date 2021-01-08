require('dotenv-flow').config()
// using execa here
// example with cross-spawn here https://github.com/entropitor/dotenv-cli/blob/master/cli.js
const execa = require('execa')

async function main() {
  await execa('./node_modules/.bin/prisma', [...process.argv.slice(2)], {
    shell: true,
    stdio: 'inherit',
  })
}

main()
