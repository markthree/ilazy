import { Command } from '@markthree/node-shared'

interface ICommandOptions {
	version: string
	versionFlags?: string
	helpDescription?: string
	versionDescription?: string
}

export const createCommand = (options: ICommandOptions) => {
	const program = new Command()
	const {
		version,
		versionFlags = '-v --version',
		versionDescription = '版本号',
		helpDescription = '命令行帮助'
	} = options
	program.version(version, versionFlags, versionDescription)
	program.helpOption('-h --help', helpDescription)
	return program
}
