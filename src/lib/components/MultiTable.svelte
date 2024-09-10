<script lang="ts">
  import Table from './Table.svelte';

  export let tables;
</script>

{#each tables as {table, title, summary}}
  <h2>{title}</h2>
  <Table tableData={table} />
{/each}
