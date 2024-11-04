import { GigType } from "@/app/lib/definitions";
import { formatName, formatRating, formatReviewCount } from "@/app/lib/utils";
import { Button } from "@mijn-ui/components/button";
import { Avatar, AvatarImage, AvatarFallback } from "@mijn-ui/components/avatar";
import Image from "next/image";
import { FaRegHeart, FaStar } from "react-icons/fa";
import LevelBadge from "./LevelBadge";

const Gig = (props: GigType) => {
	return (
		<div className="flex min-w-64 flex-col">
			<div className="relative">
				<Image
					alt={props.coverImg.alt}
					className="h-32 w-full rounded-lg object-cover object-center"
					src={props.coverImg.src}
					width={100}
					height={100}
				/>
				<Button className="absolute right-2 top-2 bg-transparent hover:bg-transparent" size="sm">
					<FaRegHeart size={24} />
				</Button>
			</div>
			<div className="my-2 flex items-center gap-2 font-semibold">
				<Avatar size="sm">
					<AvatarImage src={props.avatarImg.src} />
					<AvatarFallback>{props.avatarImg.alt}</AvatarFallback>
				</Avatar>
				<a className="hover:underline" href="#">
					{formatName(props.name)}
				</a>
				<div className="ml-auto">
					<LevelBadge isPro={props.isPro} level={props.level} />
				</div>
			</div>
			<a className="mb-2 text-lg capitalize hover:underline" href="#">
				{props.gigDescription}
			</a>
			<div className="my-3 mt-auto flex items-center gap-1">
				<FaStar />
				<span className="font-semibold">{formatRating(props.rating)}</span>
				<span>({formatReviewCount(props.reviewCount)})</span>
			</div>
			<p className="font-semibold">From ${props.price}</p>
		</div>
	);
};

export default Gig;
