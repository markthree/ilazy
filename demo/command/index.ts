import { createCommand } from '../../src'

const command = createCommand({
	version: '1.0.0'
})

command
	.option('-d, --debug', 'output extra debugging')
	.option('-s, --small', 'small pizza size')
	.option('-p, --pizza-type <type>', 'flavour of pizza')

command.parse(process.argv)

const options = command.opts()
if (options.debug) console.log(options)
if (options.small) console.log('- small pizza size')
if (options.pizzaType) console.log(`- ${options.pizzaType}`)
