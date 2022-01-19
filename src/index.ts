import {
	createEmptyFile,
	createPath
} from '@markthree/node-shared'

const usePath = createPath(__dirname)

createEmptyFile(usePath('../demo/index.vue'))
