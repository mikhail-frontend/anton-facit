import Img1 from '../../../../assets/img/scene1.png';
import Img2 from '../../../../assets/img/scene2.png';
import Img3 from '../../../../assets/img/scene3.png';
import Img4 from '../../../../assets/img/scene4.png';
import Img5 from '../../../../assets/img/scene5.png';
import Img6 from '../../../../assets/img/scene6.png';
import COLORS from '../../../../common/data/enumColors';
import { TColor } from '../../../../type/color-type';

export type TTags = { text: string; color: TColor };
const TAGS: { [key: string]: TTags } = {
	NPM: {
		text: 'NPM',
		color: COLORS.SUCCESS.name,
	},
	YARN: {
		text: 'Yarn',
		color: COLORS.DANGER.name,
	},
	BOOTSTRAP: {
		text: 'Bootstrap',
		color: COLORS.PRIMARY.name,
	},
	DEPENDENCIES: {
		text: 'Dependencies',
		color: COLORS.INFO.name,
	},
};

type TCategories = { value: string; text: string };
export const CATEGORIES: { [key: string]: TCategories } = {

	SETTINGS: {
		value: 'settings',
		text: 'Settings',
	},
	COLORS: {
		value: 'colors',
		text: 'Colors',
	},
};

const data: {
	id: number;
	title: string;
	description: string;
	image: string;
	tags: TTags[];
	color: TColor;
	categories: TCategories[];
	content: string;
}[] = [


	{
		id: 5,
		title: 'Display property',
		description:
			'Quickly and responsively toggle the display value of components and more with our display utilities.',
		image: Img5,
		tags: [TAGS.NPM, TAGS.YARN],
		color: COLORS.INFO.name,
		categories: [CATEGORIES.SETTINGS],
		content:
			'Duis posuere risus in enim sagittis, et condimentum ligula eleifend. Phasellus elementum lectus nulla. Curabitur quis vulputate ex. Nunc quis mi nibh. Vivamus sed dictum sem. Suspendisse laoreet nisl sed diam scelerisque, at gravida dui fringilla. Maecenas vel pulvinar mi. Suspendisse suscipit rhoncus dignissim. Phasellus iaculis mattis lacus, id fermentum tortor consectetur nec. Morbi bibendum neque velit, in tincidunt magna molestie vitae. Sed ultrices orci non metus pellentesque consequat. Fusce ut eleifend neque. Nunc bibendum dapibus tortor. Mauris tincidunt auctor eros sed vehicula. Maecenas a lacinia nibh. Nulla in egestas enim.',
	},
	{
		id: 6,
		title: 'Flex',
		description:
			'Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.',
		image: Img6,
		tags: [TAGS.NPM, TAGS.YARN],
		color: COLORS.WARNING.name,
		categories: [CATEGORIES.SETTINGS],
		content:
			'Maecenas id mollis turpis, non tincidunt tellus. Maecenas facilisis leo at mi accumsan tempor. Integer auctor tellus ut mi euismod, id tempus ex tempus. Curabitur feugiat arcu sem, et ultricies ligula feugiat at. Nullam nec condimentum elit, quis varius nisl. Sed venenatis at justo quis ornare. Ut sed suscipit ipsum. Aenean tempus neque eu ligula cursus convallis. Morbi ornare justo a ipsum blandit, quis varius massa euismod. Nam in orci enim. Vestibulum facilisis egestas lacus commodo vestibulum. Maecenas laoreet tincidunt dui, vel aliquam neque vestibulum vel. Pellentesque condimentum ullamcorper eros. Pellentesque bibendum convallis sem sit amet porta.',
	},
	{
		id: 7,
		title: 'Float',
		description:
			'Toggle floats on any element, across any breakpoint, using our responsive float utilities.',
		image: Img4,
		tags: [TAGS.NPM, TAGS.YARN],
		color: COLORS.DARK.name,
		categories: [CATEGORIES.SETTINGS],
		content:
			'Donec in augue nisl. Maecenas quis lacus ut erat venenatis vehicula nec id tortor. Cras magna diam, porttitor eu tortor et, egestas consectetur elit. Donec non elementum ex, sit amet efficitur elit. Nullam dictum ante vitae ante ullamcorper, eu vehicula quam pellentesque. Suspendisse consequat lectus eget convallis ornare. Phasellus faucibus arcu libero, sed interdum metus consequat sit amet. Nam quis elementum urna, egestas malesuada dolor. Morbi suscipit nulla non ante finibus luctus. Mauris ullamcorper, sem sed faucibus dictum, nisl tortor aliquam eros, et aliquet libero libero in nulla. Aliquam feugiat nisi nisi, quis luctus mi fringilla vel. Suspendisse vitae condimentum felis. Morbi eleifend nibh sem, id rutrum tortor gravida quis.',
	},
	{
		id: 8,
		title: 'Interactions',
		description: 'Utility classes that change how users interact with contents of a website.',
		image: Img2,
		tags: [TAGS.NPM, TAGS.YARN],
		color: COLORS.INFO.name,
		categories: [CATEGORIES.COLORS],
		content:
			'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi rhoncus, turpis mollis tincidunt feugiat, augue enim dapibus ipsum, et placerat neque nibh sit amet justo. Praesent venenatis ex eu massa aliquam congue eu sed diam. Vestibulum suscipit lacus et justo ornare, at rutrum erat malesuada. Fusce ut rutrum dui. Donec posuere fringilla urna, ut efficitur mi feugiat et. In ut elit at turpis dapibus pretium quis vel turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam rhoncus vel erat a finibus. Nulla facilisi. Suspendisse ornare rhoncus sollicitudin. Curabitur mollis, erat id tincidunt efficitur, arcu sem elementum enim, ac lacinia tortor purus vel ante. Nullam non feugiat magna.',
	},
];

export default data;
