import { prompt } from '@markthree/node-shared'

type PromptType =
	| 'checkbox'
	| 'input'
	| 'number'
	| 'confirm'
	| 'list'
	| 'rawlist'
	| 'expand'
	| 'password'
	| 'editor'

interface IExpandChoice {
	key: string
	name: string
	value: string
}

interface ICommonPromptPayload {
	key?: string
	choices?: (string | IExpandChoice | CheckboxChoice)[]
	default?: string | string[]
}

type CheckboxChoice = {
	name: string
	disabled?: string
	checked?: boolean
}

type CommonPromptPayload = ICommonPromptPayload | string

/**
 * 创建一个通用的交互
 */
const createPrompt = (type: PromptType) => {
	return async (
		msg: string,
		payload: CommonPromptPayload = ''
	) => {
		const payloadIsObj = typeof payload === 'object'
		const { output } = await prompt({
			type,
			name: 'output',
			message: msg,
			choices: payloadIsObj ? payload.choices : [],
			default: payloadIsObj ? payload.default : payload
		})
		return output as string
	}
}

/**
 * 问题
 */
export const useInquirerQuestion = createPrompt('input')

/**
 * 确认
 */
export const useInquirerConfirm = createPrompt('confirm')

/**
 * 数字
 */
export const useInquirerNumber = createPrompt('number')

/**
 * 密码
 */
export const useInquirerPassword = createPrompt('password')

/**
 * 编辑器
 */
export const useInquirerEditor = createPrompt('editor')

/**
 * 提示
 */
export const useInquirerExpand = createPrompt('expand')

/**
 * 列表
 */
export const useInquirerList = createPrompt('list')

/**
 * 原生列表
 */
export const useInquirerRawList = createPrompt('rawlist')

/**
 * 多选框
 */
export const useInquirerCheckbox = createPrompt('checkbox')

export { prompt }
