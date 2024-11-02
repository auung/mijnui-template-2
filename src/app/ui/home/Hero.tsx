import Container from "@/app/ui/utils/Container";
import { Button } from "@mijn-ui/components/button";

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
		<div className="bg-surface rounded-xl w-full p-4 shadow-lg">
			<p className="uppercase text-sm text-surface-text font-semibold">
				{subtitle}
			</p>
			<div className="flex items-center gap-4 mt-2">
				<div className="rounded-full bg-muted flex justify-center items-center w-12 h-12 overflow-hidden text-primary-text">
					<Button asChild>
						<Icon size={32} />
					</Button>
				</div>
				<div>
					<p className="text-lg font-semibold">{title}</p>
					<p>{description}</p>
				</div>
				<Button
					radius="lg"
					size="lg"
					variant="outline"
					className="ml-auto text-md"
				>
					{btnLabel}
				</Button>
			</div>
		</div>
	);
};

const Hero = () => {
	return (
		<div className="my-2 relative">
			<img
				src="/assets/img/hero.jpg"
				alt="hero-image"
				className="w-full h-48 object-cover absolute top-0 left-0 -z-10"
			/>
			<div className="w-11/12 mx-auto text-main flex justify-between pt-8 pb-12">
				<h2 className="text-3xl font-semibold">Welcome to Freelancers, tony</h2>
				<p className="text-lg font-semibold">
					Made on Freelancers by Katarzyna
				</p>
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
