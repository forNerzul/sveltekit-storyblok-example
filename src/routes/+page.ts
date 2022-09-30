import { storyblokInit, apiPlugin, useStoryblokApi } from '@storyblok/svelte';
import Feature from '../components/Feature.svelte';
import Grid from '../components/Grid.svelte';
import Page from '../components/Page.svelte';
import Teaser from '../components/Teaser.svelte';

storyblokInit({
	accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
	apiOptions: {
		region: 'us'
	},
	use: [apiPlugin],
	components: {
		feature: Feature,
		grid: Grid,
		page: Page,
		teaser: Teaser
	}
});

export async function load() {
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories/home', {
		version: 'draft'
	});
	return {
		story: data.story
	};
}
