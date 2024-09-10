<script lang="ts">
  import type { CodeWordType } from "../types/CodeWordType";

  export let call: { type: CodeWordType, text: string}[]
</script>

<h3 id="constuctor-code" class="codeBlock">
  {#each call as part}
    <code class={part.type}>{part.text}</code>
  {/each}
</h3>