import { Input } from "@mijn-ui/components/input";
import { cn } from "@mijn-ui/utils";
import { Label } from "@radix-ui/react-label";
import { ChangeEventHandler } from "react";
import { IconType } from "react-icons";

type CategoryProps = {
	Icon: IconType;
	label: string;
	id: string;
	selected: boolean;
	handleCategoryChange: ChangeEventHandler;
};

const Category = ({ Icon, label, id, selected, handleCategoryChange }: CategoryProps) => {
	return (
		<Label
			className={cn([
				"outline-muted-text flex cursor-pointer gap-2 rounded-lg p-4 outline outline-0",
				selected ? "bg-muted outline-2" : "",
			])}
			htmlFor={id}
		>
			<Input className="hidden" id={id} name="ugc" type="radio" onChange={handleCategoryChange} />
			<div className="flex items-center">
				<div className="min-w-12">
					<Icon size={28} />
				</div>
				<div className="w-4/5 text-lg font-semibold">{label}</div>
			</div>
		</Label>
	);
};

export default Category;
