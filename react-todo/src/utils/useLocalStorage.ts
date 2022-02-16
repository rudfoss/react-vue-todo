import { useCallback, useState } from "react"

export const useLocalStorage = <TData>(key: string, initialData?: TData) => {
	const [value, setStateValue] = useState<TData>(() => {
		const rawData = window.localStorage.getItem(key)
		return rawData ? JSON.parse(rawData) : initialData
	})
	const setValue = useCallback(
		(newValue: TData) => {
			setStateValue(newValue)
			window.localStorage.setItem(key, JSON.stringify(newValue))
		},
		[setStateValue]
	)

	return [value, setValue] as const
}
