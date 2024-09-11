<script lang="ts">
  import Table from './Table.svelte';

  export let tables;
</script>

{#each tables as {table, title, summary}}
  <h4>{title}</h4>
  <Table tableData={table} />
{/each}
