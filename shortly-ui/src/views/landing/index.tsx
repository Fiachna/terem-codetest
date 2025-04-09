import { FC } from "react";

import HeroImage from "@/assets/illustration-working.svg?react"
import BrandRecognitionIcon from "@/assets/icon-brand-recognition.svg?react"
import DetailedRecordsIcon from "@/assets/icon-detailed-records.svg?react"
import FullyCustomizableIcon from "@/assets/icon-fully-customizable.svg?react"

import LinkCard from "@/components/atoms/link-card";
import IconCard from "@/components/atoms/icon-card";
import LinkButton from "@/components/atoms/link-button";

import styles from './landing.module.scss'
import InteractionCard from "@/components/atoms/interaction-card";

const LandingView: FC = () => {
  return (
    <>
      <section className={styles["lead-in"]}>
				<HeroImage />
				<div>
					<h1>More than just shorter links</h1>
					<div className={styles.blurb}>Build your brand's recognition and get detailed insights on how your links are performing.</div>
					<LinkButton url="#" label="Get Started" />
				</div>
			</section>
			<section className={styles["main-interaction"]}>
				<InteractionCard />
			</section>
      <section>
				<LinkCard originalUrl="https://example.com/test" shortenedUrl="https://example.com/test" />
			</section>
      <section className={styles["marketing-break"]}>
				<h2>Advanced Statistics</h2>
				<div>Track how your links are perfrming across the web with our advanced statistics dashboard.</div>
			</section>
			<section className={styles["marketing-points"]}>
				<div>
					<IconCard icon={<BrandRecognitionIcon />} title="Brand Recognition" content="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content." />
				</div>
				<div>
					<IconCard icon={<DetailedRecordsIcon />} title="Detailed Records" content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." />
				</div>
				<div>
					<IconCard icon={<FullyCustomizableIcon />} title="Fully Customizable" content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." />
				</div>
			</section>
      <section className={styles["closing-cta"]}>
				<h2>Boost your links today</h2>
				<LinkButton url="#" label="Get Started" />
			</section>
    </>
  );
};

export default LandingView;
