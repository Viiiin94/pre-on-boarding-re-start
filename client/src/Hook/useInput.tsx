import { useState, ChangeEvent } from "react"

const useInput = (initailValue: string) => {
	const [value, setValue] = useState(initailValue)

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {
			currentTarget: { value },
		} = event
		setValue(value)
	}
	// console.log(value)

	const reset = () => setValue("")

	return { value, setValue, onChange, reset }
}

export default useInput
