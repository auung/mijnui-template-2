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
