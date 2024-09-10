<script lang="ts">
  import Highlight, { LineNumbers } from "svelte-highlight";
  import json from "svelte-highlight/languages/json";
  import atomOneDark from "svelte-highlight/styles/atom-one-dark";
  import github from "svelte-highlight/styles/github";

  export let data: unknown;

  const code = JSON.stringify(data, null, 2);

</script>

<svelte:head>
  {@html atomOneDark}
</svelte:head>

<Highlight language={json} {code}>
</Highlight>


