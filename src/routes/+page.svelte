<script lang="ts">
    import CreateTodoForm from '$lib/components/CreateTodoForm.svelte';
    import type { PageProps } from './$types';

    let { form, data }: PageProps = $props();
</script>

<svelte:head>
    <title>Ma to-do list</title>
</svelte:head>


<h1 class="text-3xl mb-4">Ma to-do list</h1>
{#if data.todos.length}
    <ul class="list-disc mb-6">
        {#each data.todos as { content }}
            <li>
                <p>{content}</p>
            </li>
        {/each}
    </ul>
{:else}
    <p>Aucune tâche à accomplir.</p>
{/if}

<h2 class="text-xl mb-4">Ajouter une tâche</h2>
<CreateTodoForm {form} />

