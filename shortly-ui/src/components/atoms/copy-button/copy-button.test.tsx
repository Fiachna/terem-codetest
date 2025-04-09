const writeText = jest.fn()

Object.assign(navigator, {
	clipboard: {
		writeText
	}
})

describe('CopyButton', () => {
	describe('when the button is clicked', () => {
		it('copies the url value to the clipboard', () => {
			
		})
	})
})