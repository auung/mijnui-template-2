"use client";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Button } from "@mijn-ui/components/button";
import { ScrollArea, ScrollBar } from "@mijn-ui/components/scroll-area";
import { useState } from "react";
import data from "public/data.json";
import { GigType } from "@/app/lib/definitions";
import Container from "@/app/ui/utils/Container";
import Link from "next/link";
import Category from "./Category";
import Gig from "./Gig";
import { GIG_CATEGORIES } from "@/_constants/GIG_CATEGORIES";

const Explore = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>(GIG_CATEGORIES[0].id);
	const handleCategoryChange = (id: string) => {
		setSelectedCategory(id);
	};

	return (
		<Container className="mb-8">
			<div className="mt-10 flex items-center justify-between">
				<h2 className="text-2xl font-semibold">Explore popular categories on Freelancers</h2>
				<div className="flex items-center gap-2">
					<Link className="mr-3 underline" href="/">
						Show All
					</Link>
					<Button disabled color="secondary" radius="full" variant="outline">
						<SlArrowLeft />
					</Button>
					<Button radius="full" variant="filled">
						<SlArrowRight />
					</Button>
				</div>
			</div>
			<div className="flex gap-4 py-4">
				<div className="flex w-1/4 flex-col">
					{GIG_CATEGORIES.map((category) => {
						return (
							<Category
								key={category.id}
								Icon={category.icon}
								handleCategoryChange={() => handleCategoryChange(category.id)}
								id={category.id}
								label={category.label}
								selected={category.id === selectedCategory}
							/>
						);
					})}
				</div>
				<ScrollArea className="w-3/4 pb-4">
					<div className="flex gap-4">
						{data.gigs.map((gig: GigType, index: number) => {
							if (gig.gigCategory === selectedCategory) {
								return <Gig key={index} {...gig} />;
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
