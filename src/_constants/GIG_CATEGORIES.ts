import { IconType } from "react-icons";
import { CiGlobe, CiMoneyBill, CiVideoOn } from "react-icons/ci";
import { FaReact } from "react-icons/fa";

type GIG_CATEGORIES_TYPE = {
	id: string;
	label: string;
	icon: IconType;
};

export const GIG_CATEGORIES: GIG_CATEGORIES_TYPE[] = [
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
