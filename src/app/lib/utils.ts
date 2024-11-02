export function formatRating(rating: number) {
	return parseFloat(rating.toFixed(1));
}

export function formatReviewCount(reviewCount: number) {
  return reviewCount >= 1000 ? `${Math.floor(reviewCount / 1000)}k+` : reviewCount.toString();
}

export function range(num: number): number[] {
	return Array.from({ length: num }, (_, i) => i + 1);
}

export function formatName(name: string): string {
	const [firstName, lastName] = name.split(" ");
	if (!firstName || !lastName) return name;
	return `${firstName} ${lastName.charAt(0).toUpperCase()}.`;
}