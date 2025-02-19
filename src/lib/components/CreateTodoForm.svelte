<script lang="ts">
    let { form } = $props();
</script>

<form method="post" class="w-1/2 flex flex-col gap-6">
    <div class="flex flex-col gap-2">
        <label for="content">
            Tâche à accomplir
        </label>
        <textarea class="border-1" id="content" name="content" placeholder="Réviser pour le partiel"></textarea>    
    </div>
    <div class="flex flex-col gap-2">
        {#if form && !form.success}
            <p>{form.message}</p>
        {/if}
    <button class="border-1">Créer</button>
    </div>
</form>
