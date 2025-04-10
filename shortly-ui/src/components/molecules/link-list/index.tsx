import LinkCard from "@/components/atoms/link-card";
import { ShortenedUrlsContext } from "@/components/context/shortened-urls";
import { FC, useContext } from "react";

const LinkList: FC = () => {
	const shortenedUrls = useContext(ShortenedUrlsContext)

	return shortenedUrls.map((url, index) => (
		<LinkCard key={index} originalUrl={url.original} shortenedUrl={url.shortened} />
	))
}

export default LinkList