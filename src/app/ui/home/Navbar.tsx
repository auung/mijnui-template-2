import { Avatar, AvatarFallback, AvatarImage } from "@mijn-ui/components/avatar";
import { Button } from "@mijn-ui/components/button";
import Container from "@/app/ui/utils/Container";
import { Input } from "@mijn-ui/components/input";
import { FaSearch } from "react-icons/fa";
import { CiBellOn, CiHeart, CiMail } from "react-icons/ci";
import { IconType } from "react-icons";

const NavLinkIcon = ({ Icon, url }: { Icon: IconType; url: string }) => {
	return (
		<a href={url}>
			<Button
				size={"sm"}
				radius={"full"}
				variant={"text"}
				className=""
			>
				<Icon size={28} />
			</Button>
		</a>
	);
};

const Navbar = () => {
	return (
		<nav>
			<Container>
				<div className="items-center justify-between py-4 gap-8 flex">
					<h1 className="text-4xl font-bold">
						<a href="#">Freelancers</a>
					</h1>
					<form action="#" className="flex gap-2 items-center grow">
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
					<div>
						<a href="#">Fiverr Pro</a>
					</div>
					<div className="flex gap-1 items-center">
						<NavLinkIcon Icon={CiBellOn} url="#" />
						<NavLinkIcon Icon={CiMail} url="#" />
						<NavLinkIcon Icon={CiHeart} url="#" />
					</div>
					<div className="flex gap-4 items-center">
						<a href="#">Orders</a>
						<Avatar size="md">
							<AvatarImage src="/assets/img/profile.png" />
							<AvatarFallback>A</AvatarFallback>
						</Avatar>
					</div>
				</div>
				<ul className="flex gap-6 text-lg">
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
