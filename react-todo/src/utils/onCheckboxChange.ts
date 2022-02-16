import React from "react"

export const onCheckboxChange =
	(onChange: (checked: boolean) => unknown) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		onChange(evt.target.checked)
	}
