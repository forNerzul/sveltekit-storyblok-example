<script lang="ts">
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent, type StoryData } from '@storyblok/svelte';

	export let data: StoryData;

	onMount(() => {
		useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
	});
</script>

<div>
	{#if data.story}
		<StoryblokComponent blok={data.story.content} />
	{/if}
</div>
