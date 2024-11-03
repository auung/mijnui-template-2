'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@mijn-ui/components/avatar";
import { Button } from "@mijn-ui/components/button";
import Container from "@/app/ui/utils/Container";
import { Input } from "@mijn-ui/components/input";
import { FaBinoculars, FaSearch } from "react-icons/fa";
import { CiBellOn, CiGlobe, CiHeart, CiMail } from "react-icons/ci";
import { IconType } from "react-icons";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Separator } from "@mijn-ui/components/separator";
import {
  Popover,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@mijn-ui/components/popover"
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { cn } from "@mijn-ui/utils";
import { GiBinoculars, GiHand } from "react-icons/gi";
import { Badge } from "@mijn-ui/components/badge";

const NavLinkIcon = ({ Icon, url }: { Icon: IconType; url: string }) => {
	return (
		<a href={url}>
			<Button
				radius={"full"}
				variant={"text"}
				color={"accent"}
				className="px-1.5"
			>
				<Icon size={28} />
			</Button>
		</a>
	);
};

const ProLink = ({ Icon, title, subtitle, url } : { Icon: IconType, title: string, subtitle: string, url: string}) => {
	return (
		<Button variant={"outline"} color="neutral" size={"lg"} className="h-min w-full py-3 gap-4 pl-4" asChild>
			<a href={url}>
				<Icon size={72} />
				<div className="text-left">
					<h3 className="text-lg font-semibold">{ title }</h3>
					<p className="text-neutral-text">{ subtitle }</p>
				</div>
			</a>
		</Button>
	);
};

const ProfileLink = ({ url, text } : { url: string, text: string }) => {
	return (
		<a href={url}>{ text }</a>
	);
}

const Navbar = () => {
	const [popupPro, setPopupPro] = useState(false);

	return (
		<nav>
			<Container className="items-center justify-between py-4 gap-8 flex">
				<h1 className="text-4xl font-bold">
					<a href="#">Freelancers</a>
				</h1>
				<form action="#" className="flex gap-1 items-center grow">
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
				<Popover unstyled={false} onOpenChange={open => setPopupPro(open)}>
					<PopoverTrigger className="bg-transparent text-accent-text hover:bg-accent">
						<p className="pl-2">Fiverr Pro</p>
						<MdKeyboardArrowDown size={24} className={cn("fill-mode-forwards ease-in-out", popupPro ? "animate-out spin-out-180" : "animate-in spin-in-90")} />
					</PopoverTrigger>
					<PopoverContent className="relative w-96 preview" align="start">
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
				<div className="flex gap-2 items-center">
					<NavLinkIcon Icon={CiBellOn} url="#" />
					<NavLinkIcon Icon={CiMail} url="#" />
					<NavLinkIcon Icon={CiHeart} url="#" />
				</div>
				<a href="#">Orders</a>
				<Popover unstyled={false}>
					<PopoverTrigger className="bg-transparent hover:bg-transparent p-0">
						<Avatar size="md">
							<AvatarImage src="/assets/img/profile.png" />
							<AvatarFallback>A</AvatarFallback>
						</Avatar>
					</PopoverTrigger>
					<PopoverContent className="relative w-72 preview" align="end">
						<ul className="flex flex-col gap-3 text-neutral-text">
							<li>
								<a href="#">Profile</a>
							</li>
							<li>
								<a href="#" className="flex gap-4">Post a project brief <Badge radius={"md"} className="bg-info hover:bg-info">Beta</Badge></a>
							</li>
							<li>
								<a href="#">Your briefs</a>
							</li>
							<li>
								<a href="#">Refer a Friend</a>
							</li>
							<Separator />
							<li>
								<a href="#">Become a Seller</a>
							</li>
							<li>
								<a href="#">Settings</a>
							</li>
							<li>
								<a href="#">Billings and payments</a>
							</li>
							<Separator />
							<h5 className="font-semibold flex gap-4">Exclusive features <Badge radius={"md"} className="bg-info hover:bg-info">Pro</Badge></h5>
							<li>
								<a href="#">Invite your team</a>
							</li>
							<li>
								<a href="#">Hire on an hourly basis</a>
							</li>
							<li>
								<a href="#">Earn Freelancers credits</a>
							</li>
							<Separator />
							<li>
								<a href="#" className="flex gap-1 items-center">English <CiGlobe /></a>
							</li>
							<li>
								<a href="#">$ USD</a>
							</li>
							<li>
								<a href="#">Help & Support</a>
							</li>
							<Separator />
							<li>
								<a href="#">Logout</a>
							</li>
						</ul>
						<PopoverArrow className="fill-neutral-text" />
					</PopoverContent>
				</Popover>
					
			</Container>
			<Separator className="my-2" />
			<Container>
				<ul className="flex gap-6 text-md">
					<li>
						<a href="#">Graphic & Design</a>
					</li>
					<li>
						<a href="#">Programming & Tech</a>
					</li>
					<li>
						<a href="#">Digital Marketing</a>
					</li>
					<li>
						<a href="#">Video & Animation</a>
					</li>
					<li>
						<a href="#">Writing & Translation</a>
					</li>
					<li>
						<a href="#">Business</a>
					</li>
					<li>
						<a href="#">Finance</a>
					</li>
					<li>
						<a href="#">AI Services</a>
					</li>
				</ul>
			</Container>
		</nav>
	);
};

export default Navbar;
