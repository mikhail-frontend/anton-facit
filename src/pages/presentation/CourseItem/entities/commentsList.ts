import { fullData } from '../../../../store/modules/user/entities';

export type CommentType = {
	id: number;
	text: string;
	created_at: string;
	author: any;
};
const commentsList: CommentType[] = [
	{
		id: 1,
		text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, amet consequatur consequuntur
 cumque debitis dolorum ea enim et excepturi fugit impedit, magni molestiae nisi non perspiciatis quis reprehenderit similique tempore!`,
		created_at: new Date().toISOString(),
		author: { ...fullData, id: 1 },
	},
	{
		id: 2,
		text: `Just comment here`,
		created_at: new Date().toISOString(),
		author: { ...fullData, id: 1 },
	},
	{
		id: 3,
		text: `
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto distinctio eaque unde? Aliquid animi asperiores assumenda cupiditate delectus distinctio dolorum ex impedit modi molestias placeat quidem ullam vel voluptas, voluptates?Architecto autem commodi culpa, dolor dolore eveniet harum hic illum in iure minus nemo, nulla numquam possimus totam? Alias aspernatur beatae cum ducimus et eveniet excepturi harum laboriosam nostrum porro.Autem consequatur itaque sapiente, sunt tempora voluptatum. Assumenda excepturi illo quibusdam vitae voluptatibus. Earum ex laudantium magnam nulla porro provident, soluta! Aperiam atque doloremque dolores nostrum quia sapiente, sint temporibus!
       `,
		created_at: new Date().toISOString(),
		author: { ...fullData, id: 1 },
	},
];
export default commentsList;
