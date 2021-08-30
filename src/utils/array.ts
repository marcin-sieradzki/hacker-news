export function getRandomItemsfromArray<T>(
	array: Array<T>,
	amount: number,
): Array<T> {
	if (!array.length) {
		return [];
	}
	if (amount >= array.length) {
		return [...array];
	}
	const shuffeledArray = shuffle(array);
	return shuffeledArray.slice(0, amount);
}
export function shuffle<T>(array: Array<T>): Array<T> {
	let arrayCopy = [...array];
	for (let i = arrayCopy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
	}
	return arrayCopy;
}

export function sortObjectArrayBy(
	array: Array<any>,
	identifier: string,
): Array<any> {
	if (!array?.length) {
		return [];
	}
	return [...array].sort((a, b) => a[identifier] - b[identifier]);
}
