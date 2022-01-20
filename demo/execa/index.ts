import { createPath } from '@markthree/node-shared'
import { gitClone } from '../../src'

const p = createPath(__dirname)

gitClone(
	'git@github.com:sindresorhus/execa.git',
	p('../src')
)
