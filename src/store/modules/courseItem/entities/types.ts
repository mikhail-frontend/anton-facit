import type { TColor } from '../../../../type/color-type';
export type lessonListItemTag = { text: string; color: TColor };

export type lessonListItem = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: lessonListItemTag[];
    color: TColor;
    content: string;
}


