import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { screen } from '@testing-library/dom'
import CopyButton from "."

const writeText = jest.fn()

Object.assign(navigator, {
	clipboard: {
		writeText
	}
})

describe('CopyButton', () => {
	describe('when the button is clicked', () => {
		it('copies the url value to the clipboard', () => {
			const testString = "test"

			render(<CopyButton toCopy={testString} />)
			const subject = screen.getByTestId("copy-button")

			subject.click();

			expect(writeText).toHaveBeenCalledWith(testString);
		})
	})
})