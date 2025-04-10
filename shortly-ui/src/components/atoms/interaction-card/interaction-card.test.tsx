import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import userEvent from "@testing-library/user-event";
import { act, render } from "@testing-library/react"
import { screen, waitFor } from '@testing-library/dom'
import { ShortenUrlActionContext } from '@/components/context/shortened-urls'
import { FC, PropsWithChildren } from 'react'
import InteractionCard from '.'

interface DummyContextProviderProps extends PropsWithChildren {
	shortenUrlAction: (urlToShorten: string) => Promise<void>
}

const DummyContextProvider: FC<DummyContextProviderProps> = ({ shortenUrlAction, children }) => {
	return (
		<ShortenUrlActionContext.Provider value={shortenUrlAction}>
			{children}
		</ShortenUrlActionContext.Provider>
	)
} 

describe("InteractionCard", () => {
	describe("when the card is submitted", () => {
		describe("when a valid url has been entered", () => {
			it("adds the shortened url to the context", async () => {
				const urlToShorten = "https://example.com"
				const shortenAction = vi.fn()

				render(
					<DummyContextProvider shortenUrlAction={shortenAction}>
						<InteractionCard />
					</DummyContextProvider>
				)

				const textInput: HTMLInputElement = screen.getByTestId("linkInput-text-input")
				const submitButton: HTMLButtonElement = screen.getByTestId("interaction-card-submit")

				await userEvent.type(textInput, urlToShorten)
				await userEvent.click(submitButton)

				expect(shortenAction).toHaveBeenCalled()
			})
		})

		describe("when no url has been entered", () => {
			it("displays an error message asking for a link", async () => {
				const shortenAction = vi.fn()

				render(
					<DummyContextProvider shortenUrlAction={shortenAction}>
						<InteractionCard />
					</DummyContextProvider>
				)

				const submitButton: HTMLButtonElement = screen.getByTestId("interaction-card-submit")
				await userEvent.click(submitButton)

				const subject = await screen.findByTestId("linkInput-validation-message")

				expect(subject.textContent).toBe("Please add a link")
			})
		})

		describe("when an invalid url has been entered", () => {
			it("displays an error message asking for a valid link", async () => {
				const urlToShorten = "this is an invalid link"
				const shortenAction = vi.fn()

				render(
					<DummyContextProvider shortenUrlAction={shortenAction}>
						<InteractionCard />
					</DummyContextProvider>
				)

				const textInput: HTMLInputElement = screen.getByTestId("linkInput-text-input")
				const submitButton: HTMLButtonElement = screen.getByTestId("interaction-card-submit")

				await userEvent.type(textInput, urlToShorten)
				await userEvent.click(submitButton)

				const subject = await screen.findByTestId("linkInput-validation-message")

				expect(subject.textContent).toBe("Please enter a valid link")
			})
		})
	})

	describe("when the textbox value changes", () => {
		it("clears any error state", async () => {
			const initialValue = "this is an invalid link"
			const laterValue = "https://valid.com"
			const shortenAction = vi.fn()

			render(
				<DummyContextProvider shortenUrlAction={shortenAction}>
					<InteractionCard />
				</DummyContextProvider>
			)

			const textInput: HTMLInputElement = screen.getByTestId("linkInput-text-input")
			const submitButton: HTMLButtonElement = screen.getByTestId("interaction-card-submit")

			textInput.value = initialValue
			await userEvent.click(submitButton)
			await userEvent.type(textInput, laterValue)

			const subject = screen.queryByTestId("linkInput-validation-message")

			expect(subject).not.toBeInTheDocument()
		})
	})
})