import { useTodos } from "contexts/todo"
import React, { useState } from "react"
import { onTextChange } from "utils/onTextChange"

const NewTodoComponent = () => {
	const { addTodo } = useTodos()
	const [newText, setNewText] = useState("")

	const createTodo = () => {
		if (!newText) return
		addTodo(newText)
		setNewText("")
	}
	const onSubmit = (evt: React.FormEvent) => {
		evt.preventDefault()
		createTodo()
	}

	return (
		<form onSubmit={onSubmit}>
			<label>New todo text</label>
			<input type="text" value={newText} onChange={onTextChange(setNewText)} />
			<button onClick={createTodo}>Add</button>
		</form>
	)
}

export const NewTodo = React.memo(NewTodoComponent)
