import React from "react"

export const onTextChange =
	(onChange: (newText: string) => unknown) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		onChange(evt.target.value)
	}
