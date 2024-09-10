<script lang="ts">
  import Highlight from "svelte-highlight";
  import typescript from "svelte-highlight/languages/typescript";
  import atomOneDark from "svelte-highlight/styles/atom-one-dark";

  export let code = ""

</script>

<svelte:head>
  {@html atomOneDark}
</svelte:head>

<Highlight
  language={typescript}
  {code}
>
</Highlight>


