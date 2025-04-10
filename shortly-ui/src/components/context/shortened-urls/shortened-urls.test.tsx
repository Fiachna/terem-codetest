import { FC, useContext } from 'react'
import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { render } from "@testing-library/react"
import { screen, waitFor } from '@testing-library/dom'
import ShortenedUrlsContextProvider, { ShortenedUrlsContext, ShortenUrlActionContext } from '.'
import { ShortenedUrl } from '@/types/shortened-url'

interface DummyComponentProps {
	urlToShorten: string
}

const DummyComponent: FC<DummyComponentProps> = ({ urlToShorten }) => {
	const shortenedurls = useContext(ShortenedUrlsContext)
	const shortenUrlAction = useContext(ShortenUrlActionContext)

	const onClickAction = () => shortenUrlAction(urlToShorten)

	return (
		<>
			<button type="button" onClick={onClickAction} data-testid="action-button">Action</button>
			<ul data-testid="url-list">
				{shortenedurls.map((url, index) => (
					<li data-testid={`url-${index}`} key={index}>
						<div data-testid="original-url">{url.original}</div>
						<div data-testid="short-url">{url.shortened}</div>
					</li>
				))}
			</ul>
		</>
	)
}

class LocalStorageMock {
	constructor() {
		this.store = {}
	}
	
	store: { [key: string]: string }

	clear() {
		this.store = {}
	}

	getItem(key: string) {
		return this.store[key]
	}

	setItem(key: string, value: string) {
		this.store[key] = value
	}

	removeItem(key: string) {
		delete this.store[key]
	}

	get length() {
		return Object.keys(this.store).length
	}
}

Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock })

describe("ShortenedUrlsContextProvider", () => {
	beforeEach(() => {
		localStorage.clear();
	})

	describe("when there are previously saved urls", () => {
		const testShortenedUrl = "https://shortened.com/test"

		beforeEach(() => {
			const testData: ShortenedUrl = { original: "https://example.com", shortened: testShortenedUrl }
			localStorage.setItem("shortenedUrls", JSON.stringify([testData]))
		})

		it("loads the shortened urls from localstorage", () => {
			render(
				<ShortenedUrlsContextProvider>
					<DummyComponent urlToShorten='' />
				</ShortenedUrlsContextProvider>
			)

			const subject = screen.getByTestId("short-url")

			expect(subject.textContent).toBe(testShortenedUrl)
		})
	})

	describe("when creating a shortened url", () => {
		describe("when the provided url is valid", () => {
			beforeAll(() => {
				Object.defineProperty(window, 'fetch', { value: () => Promise.resolve({ json: () => Promise.resolve({ result_url: "https://shortened.com/test" })}) })
			})

			it("adds the shortened url result to the list", async () => {
				const urlToShorten = "https://example.com"
				const testShortenedUrl = "https://shortened.com/test"

				render(
					<ShortenedUrlsContextProvider>
						<DummyComponent urlToShorten={urlToShorten} />
					</ShortenedUrlsContextProvider>
				)

				const actionButton = screen.getByTestId('action-button')
				actionButton.click()

				const subject = await screen.findByTestId("short-url")

				expect(subject.textContent).toBe(testShortenedUrl)
			})

			it('updates local storage with the new list', async () => {
				const urlToShorten = "https://example.com"
				const shortenedUrl = "https://shortened.com/test"

				render(
					<ShortenedUrlsContextProvider>
						<DummyComponent urlToShorten={urlToShorten} />
					</ShortenedUrlsContextProvider>
				)

				const actionButton = screen.getByTestId('action-button')
				actionButton.click()

				await waitFor(() => {
					expect(JSON.parse(localStorage.getItem('shortenedUrls')!)).toContainEqual({ original: urlToShorten, shortened: shortenedUrl })
				})
			})
		})
	})
})