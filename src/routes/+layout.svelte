<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="m-8">
	{@render children()}
</main>
