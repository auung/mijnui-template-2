import Container from "@/app/ui/utils/Container";
import { Button } from "@mijn-ui/components/button";
import Image from "next/image";

import { IconType } from "react-icons";
import { BsNewspaper, BsSuitcaseLg } from "react-icons/bs";

type RecommendationCardProps = {
	Icon: IconType;
	title: string;
	subtitle: string;
	description: string;
	btnLabel: string;
};

const RecommendationCard = ({
	Icon,
	title,
	subtitle,
	description,
	btnLabel,
}: RecommendationCardProps) => {
	return (
		<div className="w-full rounded-xl bg-surface p-4 shadow-lg">
			<p className="text-xs font-semibold uppercase tracking-wide text-neutral-text">{subtitle}</p>
			<div className="mt-2 flex items-center gap-4">
				<Button radius="full" color="accent" className="pointer-events-none px-2" asChild>
					<div>
						<Icon size={24} />
					</div>
				</Button>
				<div>
					<p className="text-lg font-semibold">{title}</p>
					<p>{description}</p>
				</div>
				<Button
					radius="lg"
					size="lg"
					variant="outline"
					className="text-md ml-auto border-2 text-main-text"
					color="neutral"
				>
					{btnLabel}
				</Button>
			</div>
		</div>
	);
};

const Hero = () => {
	return (
		<div className="relative my-2">
			<Image
				src="/assets/img/hero.jpg"
				alt="hero-image"
				className="absolute left-0 top-0 -z-10 h-48 w-full object-cover"
				width={100}
				height={100}
			/>
			<div className="mx-auto flex w-11/12 justify-between pb-12 pt-8 text-main">
				<h2 className="text-3xl font-semibold">Welcome to Freelancers, tony</h2>
				<p className="text-lg font-semibold">Made on Freelancers by Katarzyna</p>
			</div>
			<Container className="flex gap-6">
				<RecommendationCard
					Icon={BsNewspaper}
					title="Post a project brief"
					subtitle="Recommended for you"
					description="Get tailored offers for your needs"
					btnLabel="Get Started"
				/>
				<RecommendationCard
					Icon={BsSuitcaseLg}
					title="Tailor Freelancers to your needs"
					subtitle="Business Recommendations"
					description="Tell us a bit about your business"
					btnLabel="Add your info"
				/>
			</Container>
		</div>
	);
};

export default Hero;
