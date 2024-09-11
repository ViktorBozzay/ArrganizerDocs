<script lang="ts">
  import JsonBlock from "./JSONBlock.svelte";
  import MultiTable from "./MultiTable.svelte";

  export let result;

  let view: "table" | "json" = "table"
  const viewChange = () => {
    console.log('view', view);
    view = view === "table" ? "json" : "table";
    console.log('view', view);
  };
</script>

<button type="button" on:click={viewChange}>
  {view === "table" ? "JSON View" : "Table View"}
</button>
{#if view==="table"}
  <MultiTable tables={result} />
{:else}
  <JsonBlock data={result} />
{/if}
