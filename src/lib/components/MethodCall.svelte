<script lang="ts">
  import type { CodeWordType } from "../types/CodeWordType";

  export let call: { type: CodeWordType, text: string}[]
  export let id: string;
  export let title: string = "";
</script>

{#if title !== ""}
  <h3 {id}>{title}</h3>
{/if}
<p class="codeBlock">
  {#each call as part}
    <code class={part.type}>{part.text}</code>
  {/each}
</p>

<style>
  p {
    padding: 0 0.5rem;
    font-weight: 700;
    font-size: 1.25rem;
  }
  code {
    padding: 0px 3px;
  }
</style>