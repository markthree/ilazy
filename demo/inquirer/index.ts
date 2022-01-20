import { useInquirerCheckbox } from '../../src'

const run = async () => {
	const R = await useInquirerCheckbox('Select toppings?', {
		choices: [{ name: '张三' }, { name: '李四' }]
	})
	console.log(R)
}

run()
