import type {lessonListItem} from './types'
const lessonList: lessonListItem[] = [
    {
        id: 1,
        title: 'Display property',
        description:
            'Quickly and responsively toggle the display value of components and more with our display utilities.',
        image: require('../../../../assets/img/scene1.png'), // real image will be here
        tags: [
            {
                text: 'NPM',
                color: 'success',
            },
            {
                text: 'Bootstrap',
                color: 'primary',
            }
        ],
        color: 'info', // not sure about this, may be just photo?
        content:
            'Duis posuere risus in enim sagittis, et condimentum ligula eleifend. Phasellus elementum lectus nulla. Curabitur quis vulputate ex. Nunc quis mi nibh. Vivamus sed dictum sem. Suspendisse laoreet nisl sed diam scelerisque, at gravida dui fringilla. Maecenas vel pulvinar mi. Suspendisse suscipit rhoncus dignissim. Phasellus iaculis mattis lacus, id fermentum tortor consectetur nec. Morbi bibendum neque velit, in tincidunt magna molestie vitae. Sed ultrices orci non metus pellentesque consequat. Fusce ut eleifend neque. Nunc bibendum dapibus tortor. Mauris tincidunt auctor eros sed vehicula. Maecenas a lacinia nibh. Nulla in egestas enim.',
    },
    {
        id: 2,
        title: 'Flex',
        description:
            'Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.',
        image: require('../../../../assets/img/scene2.png'),
        tags: [
            {
                text: 'NPM',
                color: 'success',
            },
            {
                text: 'Bootstrap',
                color: 'primary',
            }
        ],
        color: 'warning',
        content:
            'Maecenas id mollis turpis, non tincidunt tellus. Maecenas facilisis leo at mi accumsan tempor. Integer auctor tellus ut mi euismod, id tempus ex tempus. Curabitur feugiat arcu sem, et ultricies ligula feugiat at. Nullam nec condimentum elit, quis varius nisl. Sed venenatis at justo quis ornare. Ut sed suscipit ipsum. Aenean tempus neque eu ligula cursus convallis. Morbi ornare justo a ipsum blandit, quis varius massa euismod. Nam in orci enim. Vestibulum facilisis egestas lacus commodo vestibulum. Maecenas laoreet tincidunt dui, vel aliquam neque vestibulum vel. Pellentesque condimentum ullamcorper eros. Pellentesque bibendum convallis sem sit amet porta.',
    },
    {
        id: 3,
        title: 'Float',
        description:
            'Toggle floats on any element, across any breakpoint, using our responsive float utilities.',
        image: require('../../../../assets/img/scene3.png'),
        tags: [
            {
                text: 'NPM',
                color: 'success',
            },
            {
                text: 'Bootstrap',
                color: 'primary',
            }
        ],
        color: 'dark',
        content:
            'Donec in augue nisl. Maecenas quis lacus ut erat venenatis vehicula nec id tortor. Cras magna diam, porttitor eu tortor et, egestas consectetur elit. Donec non elementum ex, sit amet efficitur elit. Nullam dictum ante vitae ante ullamcorper, eu vehicula quam pellentesque. Suspendisse consequat lectus eget convallis ornare. Phasellus faucibus arcu libero, sed interdum metus consequat sit amet. Nam quis elementum urna, egestas malesuada dolor. Morbi suscipit nulla non ante finibus luctus. Mauris ullamcorper, sem sed faucibus dictum, nisl tortor aliquam eros, et aliquet libero libero in nulla. Aliquam feugiat nisi nisi, quis luctus mi fringilla vel. Suspendisse vitae condimentum felis. Morbi eleifend nibh sem, id rutrum tortor gravida quis.',
    },
    {
        id: 4,
        title: 'Interactions',
        description: 'Utility classes that change how users interact with contents of a website.',
        image: require('../../../../assets/img/scene4.png'),
        tags: [
            {
                text: 'NPM',
                color: 'success',
            },
            {
                text: 'Bootstrap',
                color: 'primary',
            }
        ],
        color: 'info',
        content:
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi rhoncus, turpis mollis tincidunt feugiat, augue enim dapibus ipsum, et placerat neque nibh sit amet justo. Praesent venenatis ex eu massa aliquam congue eu sed diam. Vestibulum suscipit lacus et justo ornare, at rutrum erat malesuada. Fusce ut rutrum dui. Donec posuere fringilla urna, ut efficitur mi feugiat et. In ut elit at turpis dapibus pretium quis vel turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam rhoncus vel erat a finibus. Nulla facilisi. Suspendisse ornare rhoncus sollicitudin. Curabitur mollis, erat id tincidunt efficitur, arcu sem elementum enim, ac lacinia tortor purus vel ante. Nullam non feugiat magna.',
    },
];

export default lessonList;
