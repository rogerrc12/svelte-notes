import { writable } from 'svelte/store';

export const FeedbackStore = writable([
	{
		id: 1,
		rating: 3,
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse orci sapien, blandit sit amet tincidunt sed, laoreet sit amet mi.'
	},
	{
		id: 2,
		rating: 5,
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse orci sapien, blandit sit amet tincidunt sed, laoreet sit amet mi.'
	},
	{
		id: 3,
		rating: 4,
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse orci sapien, blandit sit amet tincidunt sed, laoreet sit amet mi.'
	},
	{
		id: 4,
		rating: 5,
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse orci sapien, blandit sit amet tincidunt sed, laoreet sit amet mi.'
	}
]);
