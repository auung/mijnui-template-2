"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@mijn-ui/components/avatar";
import { Button } from "@mijn-ui/components/button";
import Container from "@/app/ui/utils/Container";
import { Input } from "@mijn-ui/components/input";
import { FaSearch } from "react-icons/fa";
import { CiBellOn, CiHeart, CiMail } from "react-icons/ci";
import { IconType } from "react-icons";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Separator } from "@mijn-ui/components/separator";
import { Popover, PopoverArrow, PopoverContent, PopoverTrigger } from "@mijn-ui/components/popover";
import { useState } from "react";
import { cn } from "@mijn-ui/utils";
import { GiBinoculars, GiHand } from "react-icons/gi";
import { Badge } from "@mijn-ui/components/badge";
import Link from "next/link";
import { PROFILE_LINKS, SUB_NAV_LINKS } from "@/_constants/NAVBAR_DATA";

type ProLinkProps = {
	Icon: IconType;
	title: string;
	subtitle: string;
	url: string;
};

const ProLink = ({ Icon, title, subtitle, url }: ProLinkProps) => {
	return (
		<Button
			variant={"outline"}
			color="neutral"
			size={"lg"}
			className="h-min w-full gap-4 py-3 pl-4"
			asChild
		>
			<Link href={url}>
				<Icon size={72} />
				<div className="text-left">
					<h3 className="text-lg font-semibold">{title}</h3>
					<p className="text-neutral-text">{subtitle}</p>
				</div>
			</Link>
		</Button>
	);
};

const NavLinkIcon = ({ Icon, url }: { Icon: IconType; url: string }) => {
	return (
		<Button radius={"full"} variant={"text"} color={"accent"} className="px-1.5" asChild>
			<Link href={url}>
				<Icon size={28} />
			</Link>
		</Button>
	);
};

const Navbar = () => {
	const [popupPro, setPopupPro] = useState(false);

	return (
		<nav>
			<Container className="flex items-center justify-between gap-8 py-4">
				<h1 className="text-4xl font-bold">
					<a href="#">Freelancers</a>
				</h1>
				<form action="#" className="flex grow items-center gap-1">
					<Input
						type="text"
						className="w-full"
						placeholder="What services are you looking for today?"
						name="search"
					/>
					<Button>
						<FaSearch size={16} />
					</Button>
				</form>
				<Popover unstyled={false} open={popupPro} onOpenChange={(open) => setPopupPro(open)}>
					<PopoverTrigger className="bg-transparent text-accent-text hover:bg-accent">
						<p className="pl-2">Fiverr Pro</p>
						<MdKeyboardArrowDown
							size={24}
							className={cn(
								"ease-in-out fill-mode-forwards",
								popupPro ? "animate-out spin-out-180" : "animate-in spin-in-180",
							)}
						/>
					</PopoverTrigger>
					<PopoverContent className="preview relative w-96" align="start">
						<div className="flex flex-col gap-4">
							<ProLink
								Icon={GiBinoculars}
								title="I'm looking to hire"
								subtitle="My team needs vetted freelance talent and a premium business solution."
								url="#"
							/>
							<ProLink
								Icon={GiHand}
								title="I want to offer Pro services"
								subtitle="I'd like to work on business projects as a Pro freelancer or agency."
								url="#"
							/>
						</div>
					</PopoverContent>
				</Popover>
				<div className="flex items-center gap-2">
					<NavLinkIcon Icon={CiBellOn} url="#" />
					<NavLinkIcon Icon={CiMail} url="#" />
					<NavLinkIcon Icon={CiHeart} url="#" />
				</div>
				<a href="#">Orders</a>
				<Popover unstyled={false}>
					<PopoverTrigger className="bg-transparent p-0 hover:bg-transparent">
						<Avatar size="md">
							<AvatarImage src="/assets/img/profile.png" />
							<AvatarFallback>A</AvatarFallback>
						</Avatar>
					</PopoverTrigger>
					<PopoverContent className="preview relative w-72" align="end">
						<ul className="flex flex-col text-neutral-text">
							{PROFILE_LINKS.map(({ type, label, Icon, url, badge }, i) => {
								if (type === "link" && url) {
									return (
										<li key={i}>
											<Link
												href={url}
												className="flex items-center py-1.5 transition-colors hover:text-primary"
											>
												{label}
												{Icon && <Icon className="ml-1" />}
												{badge && (
													<Badge radius={"md"} className="ml-4 bg-info hover:bg-info">
														Beta
													</Badge>
												)}
											</Link>
										</li>
									);
								} else if (type === "heading") {
									return (
										<h5 className="flex pb-1.5 pt-2 font-semibold" key={i}>
											{label}
											{badge && (
												<Badge radius={"md"} className="ml-4 bg-info hover:bg-info">
													Pro
												</Badge>
											)}
										</h5>
									);
								} else if (type === "separator") {
									return <Separator className="my-1" key={i} />;
								}
							})}
						</ul>
						<PopoverArrow className="fill-neutral-text" />
					</PopoverContent>
				</Popover>
			</Container>
			<Separator className="my-2" />
			<Container>
				<ul className="text-md flex gap-6">
					{SUB_NAV_LINKS.map(({ label, url }, i) => (
						<li key={i}>
							<Link href={url}>{label}</Link>
						</li>
					))}
				</ul>
			</Container>
		</nav>
	);
};

export default Navbar;
