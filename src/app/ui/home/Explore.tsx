"use client";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Button } from "@mijn-ui/components/button";
import Container from "@/app/ui/utils/Container";
import { Input } from "@mijn-ui/components/input";
import { Label } from "@mijn-ui/components/label";
import { IconType } from "react-icons";
import { FaReact, FaRegHeart, FaStar } from "react-icons/fa";
import { ScrollArea, ScrollBar } from "@mijn-ui/components/scroll-area";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@mijn-ui/components/avatar";
import { CiGlobe, CiMoneyBill, CiVideoOn } from "react-icons/ci";
import { cn } from "@mijn-ui/utils";
import { Dispatch, useState } from "react";
import { CardType, GigCategoryEnum } from "@/app/lib/definitions";
import data from "public/data.json";
import { formatName, formatRating, formatReviewCount, range } from "@/app/lib/utils";
import { PiDiamond, PiDiamondFill } from "react-icons/pi";
import { FaCircleCheck } from "react-icons/fa6";
import { Badge } from "@mijn-ui/components/badge";

type RadioProps = {
	Icon: IconType;
	label: string;
	id: GigCategoryEnum;
	selectedCategory: GigCategoryEnum;
	setSeletedCategory: Dispatch<GigCategoryEnum>;
};

const Radio = ({
	Icon,
	label,
	id,
	selectedCategory,
	setSeletedCategory,
}: RadioProps) => {
	function handleRadioChange() {
		setSeletedCategory(id);
		console.log(id);
	}

	return (
		<Label
			htmlFor={id}
			className={cn([
				"flex gap-2 p-4 outline outline-0 outline-muted-text rounded-lg cursor-pointer",
				selectedCategory == id ? "outline-2 bg-muted" : "",
			])}
		>
			<Input
				type="radio"
				id={id}
				name="ugc"
				className="hidden"
				onChange={handleRadioChange}
			/>
			<div className="flex items-center">
				<div className="min-w-12">
					<Icon size={28} />
				</div>
				<div className="text-lg font-semibold w-4/5">{label}</div>
			</div>
		</Label>
	);
};

const Card = (props: CardType) => {
	return (
		<div className="min-w-64 flex flex-col">
			<div className="relative">
				<img
					src={props.coverImg.src}
					alt={props.coverImg.alt}
					className="w-full h-32 object-cover object-center rounded-lg"
				/>
				<Button
					size="sm"
					className="absolute top-2 right-2 bg-transparent hover:bg-transparent"
				>
					<FaRegHeart size={24} />
				</Button>
			</div>
			<div className="gap-2 items-center font-semibold my-2 flex">
				<Avatar size="sm">
					<AvatarImage src={props.avatarImg.src} />
					<AvatarFallback>{props.avatarImg.alt}</AvatarFallback>
				</Avatar>
				<a href="#" className="hover:underline">
					{ formatName(props.name) }
				</a>
				<div className="ml-auto">
					<Level level={props.level} isPro={props.isPro} />
				</div>
			</div>
			<a href="#" className="text-lg hover:underline capitalize mb-2">
				{props.gigDescription}
			</a>
			<div className="flex gap-1 items-center my-3 mt-auto">
				<FaStar />
				<span className="font-semibold">{ formatRating(props.rating) }</span>
				<span>({ formatReviewCount(props.reviewCount) })</span>
			</div>
			<p className="font-semibold">From ${props.price}</p>
		</div>
	);
};

const Level = ({ level, isPro }: { level: number, isPro: boolean }) => {
	const maxLevel: number = 3;
	if (isPro) {
		return (
			<Badge radius={"md"} className="bg-info gap-1 text-sm pointer-events-none">
				<FaCircleCheck size={14} />
				Pro
			</Badge>
		);
	} else {
		return (
			<Badge radius={"md"} variant={level === 3 ? "filled" : "text"} color="secondary" className="pointer-events-none text-accent-text gap-1.5 px-2">
				<p className="text-sm">
					{ level < 3 ? `Level ${level}` : "Top Rated" }
				</p>
				<div className="flex gap-0.5">
					{ range(level).map(i => <PiDiamondFill key={i} size={12} />) }
					{ range(maxLevel - level).map(i => <PiDiamond key={i} size={12} />) }
				</div>
			</Badge>
		);
	}
	
};

const Explore = () => {
	const cards = data.gigs.map((gig) => {
		return {
			...gig,
			gigCategory: gig.gigCategory as GigCategoryEnum,
		};
	});
	const [selectedCategory, setSeletedCategory] = useState(GigCategoryEnum.ugc);

	return (
		<Container className="mb-8">
			<div className="flex justify-between items-center mt-10">
				<h2 className="text-2xl font-semibold">
					Explore popular categories on Freelancers
				</h2>
				<div className="flex items-center gap-2">
					<a href="#" className="underline mr-3">
						Show All
					</a>
					<Button disabled variant="outline" radius="full" color="secondary">
						<SlArrowLeft />
					</Button>
					<Button variant="filled" radius="full">
						<SlArrowRight />
					</Button>
				</div>
			</div>
			<div className="py-4 flex gap-4">
				<div className="flex flex-col w-1/4">
					<Radio
						Icon={CiVideoOn}
						label="User Generated Content (UGC)"
						id={GigCategoryEnum.ugc}
						selectedCategory={selectedCategory}
						setSeletedCategory={setSeletedCategory}
					/>
					<Radio
						Icon={FaReact}
						label="Logo Design"
						id={GigCategoryEnum.logo}
						selectedCategory={selectedCategory}
						setSeletedCategory={setSeletedCategory}
					/>
					<Radio
						Icon={CiGlobe}
						label="Website Development"
						id={GigCategoryEnum.web}
						selectedCategory={selectedCategory}
						setSeletedCategory={setSeletedCategory}
					/>
					<Radio
						Icon={CiMoneyBill}
						label="Social Media Marketing"
						id={GigCategoryEnum.social}
						selectedCategory={selectedCategory}
						setSeletedCategory={setSeletedCategory}
					/>
				</div>
				<ScrollArea className="w-3/4 pb-4">
					<div className="gap-4 flex">
						{cards.map((card, index) => {
							if (card.gigCategory === selectedCategory) {
								return <Card key={index} {...card} />;
							}
						})}
					</div>
					<ScrollBar orientation="horizontal" />
				</ScrollArea>
			</div>
		</Container>
	);
};

export default Explore;
