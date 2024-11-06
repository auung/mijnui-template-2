export type GigType = {
	name: string;
	level: number;
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
