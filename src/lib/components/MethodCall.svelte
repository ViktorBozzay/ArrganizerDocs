<script lang="ts">
  import type { CodeWordType } from "../types/CodeWordType";

  export let call: { type: CodeWordType, text: string}[]
  export let id: string;
</script>

<h3 {id} class="codeBlock">
  {#each call as part}
    <code class={part.type}>{part.text}</code>
  {/each}
</h3>