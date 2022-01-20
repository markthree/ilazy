import { useExeca } from '@markthree/node-shared'

export const gitClone: any = async (
	src: string,
	dest: string
) => {
	const res = useExeca('git', ['clone', src, dest])
	return res
}

export { useExeca }
