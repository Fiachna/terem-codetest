import { ShortenedUrl } from "@/types/shortened-url";
import { createContext, FC, PropsWithChildren, useState } from "react";

type UrlAction = (urlToShorten: string) => Promise<void>
type ShortenUrlResponse = { result_url: string }

export const shortenedUrlsContext = createContext<ShortenedUrl[]>([])
export const shortenUrlActionContext = createContext<UrlAction>(async () => {})


const ShortenedUrlsContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const shortenedUrlStorageKey = "shortenedUrls"

	const loadUrlsFromLocalStorage = () => {
		return JSON.parse(localStorage.getItem(shortenedUrlStorageKey) ?? "[]")
	}

	// I usually prefer to define state at the top of the component
	// but we need the earlier defs. We could use hoisting but then
	// the shortenedUrlStorageKey falls out of scope and is undefined
	// and I don't want to maintain 2 instances of the same string
	const [shortenedUrls, setShortenedUrls] = useState<ShortenedUrl[]>(loadUrlsFromLocalStorage)

	const shortenUrl = async (urlToShorten: string) => {
		const response = await fetch("https://cleanuri.com/api/v1/shorten", { method: "POST", body: new URLSearchParams({ url: urlToShorten}), headers: { "Content-Type": "application//x-www-form-urlencoded" } })
		const responseData: ShortenUrlResponse = await response.json()
		const shortenedUrl: ShortenedUrl = { original: urlToShorten, shortened: responseData.result_url }

		setShortenedUrls((oldUrls: ShortenedUrl[]) => {
			const result = oldUrls.concat(shortenedUrl)
			localStorage.setItem(shortenedUrlStorageKey, JSON.stringify(result))

			return result
		})
	}

	return (
		<shortenedUrlsContext.Provider value={shortenedUrls}>
			<shortenUrlActionContext.Provider value={shortenUrl}>
				{children}
			</shortenUrlActionContext.Provider>
		</shortenedUrlsContext.Provider>
	)
}

export default ShortenedUrlsContextProvider