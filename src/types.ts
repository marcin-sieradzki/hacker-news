export interface Story {
	by: string;
	descendants: number;
	id: number;
	kids: number[];
	score: number;
	time: number;
	title: string;
	type: string;
	url: string;
}

export interface StoryDto {
	by: string;
	descendants: number;
	id: number;
	kids: number[];
	score: number;
	time: string;
	title: string;
	type: string;
	url: string;
	user: User;
}

export interface User {
	about: string;
	created: number;
	delay: number;
	id: string;
	karma: number;
	submitted: number[];
}

export interface TopStories extends Array<number> {}
