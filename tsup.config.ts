import { defineConfig } from 'tsup'
import { dependencies } from './package.json'

export default defineConfig({
	dts: true,
	clean: true,
	minify: true,
	outDir: 'dist',
	splitting: true,
	format: ['cjs', 'esm'],
	entry: ['src/index.ts'],
	external: Object.keys(dependencies)
})
