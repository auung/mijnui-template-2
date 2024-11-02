enum LevelEnum {
	one = 1,
	two,
	three,
}

export enum GigCategoryEnum {
	ugc = "User Generated Content (UGC)",
	logo = "Logo Design",
	web = "Website Development",
	social = "Social Media Marketing",
}

export type CardType = {
	name: string,
	level: LevelEnum,
	isPro: boolean,
	coverImg: {
		src: string,
		alt: string
	},
	avatarImg: {
		src: string,
		alt: string
	},
	gigDescription: string,
	gigCategory: GigCategoryEnum,
	rating: number,
	reviewCount: number,
	price: number,
}