export interface Todo {
	id: string
	text: string
	done: boolean
	/**
	 * The last time done was true in ISODate format.
	 */
	doneTime?: string
}
