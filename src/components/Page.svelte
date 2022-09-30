<script lang="ts">
	import { storyblokEditable, StoryblokComponent, type SbBlokData } from '@storyblok/svelte';

	export let blok: SbBlokData;
</script>

{#key blok}
	<div use:storyblokEditable={blok} class="px-6">
		{#each blok.body as blok}
			<StoryblokComponent {blok} />
		{/each}
	</div>
{/key}
