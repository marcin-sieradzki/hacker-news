export function convertTimestampToDate(seconds: number) {
	const dtFormat = new Intl.DateTimeFormat("en-GB", {
		timeStyle: "long",
		timeZone: "UTC",
	});

	return dtFormat.format(new Date(seconds * 1000));
}
