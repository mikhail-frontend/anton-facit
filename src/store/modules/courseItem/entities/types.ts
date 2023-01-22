import type { TColor } from '../../../../type/color-type';
export type LessonListItemTag = { text: string; color: TColor };

export type LessonListItem = {
	id: number;
	title: string;
	description: string;
	image: string;
	tags: LessonListItemTag[];
	color: TColor;
	content: string;
};
