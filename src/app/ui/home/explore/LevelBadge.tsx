import { range } from "@/app/lib/utils";
import { Badge } from "@mijn-ui/components/badge";
import { FaCircleCheck } from "react-icons/fa6";
import { PiDiamondFill, PiDiamond } from "react-icons/pi";

const LevelBadge = ({ level, isPro }: { level: number; isPro: boolean }) => {
	const maxLevel: number = 3;

	if (isPro) {
		return (
			<Badge className="pointer-events-none gap-1 bg-info text-sm" radius={"md"}>
				<FaCircleCheck size={14} />
				Pro
			</Badge>
		);
	} else {
		return (
			<Badge
				className="pointer-events-none gap-1.5 px-2 text-accent-text"
				color="secondary"
				radius={"md"}
				variant={level === 3 ? "filled" : "text"}
			>
				<p className="text-sm">{level < 3 ? `Level ${level}` : "Top Rated"}</p>
				<div className="flex gap-0.5">
					{range(level).map((i) => (
						<PiDiamondFill key={i} size={12} />
					))}
					{range(maxLevel - level).map((i) => (
						<PiDiamond key={i} size={12} />
					))}
				</div>
			</Badge>
		);
	}
};

export default LevelBadge;
