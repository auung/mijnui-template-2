import { CiGlobe, CiMoneyBill, CiVideoOn } from "react-icons/ci";
import { FaReact } from "react-icons/fa";

enum LevelEnum {
	one = 1,
	two,
	three,
}

export const gigCategories = [
	{
		id: "ugc",
		label: "User Generated Content (UGC)",
		icon: CiVideoOn,
	},
	{
		id: "logo",
		label: "Logo Design",
		icon: FaReact,
	},
	{
		id: "web",
		label: "Website Development",
		icon: CiGlobe,
	},
	{
		id: "social",
		label: "Social Media Marketing",
		icon: CiMoneyBill,
	},
];

export type GigType = {
	name: string;
	level: LevelEnum;
	isPro: boolean;
	coverImg: {
		src: string;
		alt: string;
	};
	avatarImg: {
		src: string;
		alt: string;
	};
	gigDescription: string;
	gigCategory: string;
	rating: number;
	reviewCount: number;
	price: number;
};

export const profileList = [
	{
		label: "Profile",
		type: "link",
		url: "#",
	},
	{
		label: "Post a project brief",
		type: "link",
		url: "#",
		badge: "Beta",
	},
	{
		label: "Your briefs",
		type: "link",
		url: "#",
	},
	{
		label: "Refer a Friend",
		type: "link",
		url: "#",
	},
	{
		type: "separator",
	},
	{
		label: "Become a Seller",
		type: "link",
		url: "#",
	},
	{
		label: "Settings",
		type: "link",
		url: "#",
	},
	{
		label: "Billings and payments",
		type: "link",
		url: "#",
	},
	{
		type: "separator",
	},
	{
		label: "Exclusive features",
		type: "heading",
		badge: "Pro",
	},
	{
		label: "Invite your team",
		type: "link",
		url: "#",
	},
	{
		label: "Hire on an hourly basis",
		type: "link",
		url: "#",
	},
	{
		label: "Earn Freelancers credits",
		type: "link",
		url: "#",
	},
	{
		type: "separator",
	},
	{
		label: "English",
		type: "link",
		url: "#",
		Icon: CiGlobe,
	},
	{
		label: "$ USD",
		type: "link",
		url: "#",
	},
	{
		label: "Help & Support",
		type: "link",
		url: "#",
	},
	{
		type: "separator",
	},
	{
		label: "Logout",
		type: "link",
		url: "#",
	},
];

export const subNavList = [
	{
		label: "Graphics & Design",
		url: "#",
	},
	{
		label: "Programming & Tech",
		url: "#",
	},
	{
		label: "Digital Marketing",
		url: "#",
	},
	{
		label: "Video & Animation",
		url: "#",
	},
	{
		label: "Writing & Translation",
		url: "#",
	},
	{
		label: "Music & Audio",
		url: "#",
	},
	{
		label: "Business",
		url: "#",
	},
	{
		label: "Finance",
		url: "#",
	},
	{
		label: "AI Services",
		url: "#",
	},
];
