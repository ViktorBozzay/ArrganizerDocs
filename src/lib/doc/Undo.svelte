<script lang="ts">
  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "undo", type: "function",},
    { text: "(): ", type: "punctuation" },
    { text: "void", type: "keyword", },
  ]

  const code = `organizer.undo();`
</script>

<MethodCall {call} id="undo" />
<p>
  Resets the data to its original state.
</p>
<h4>Example:</h4>
<CodeBlock {code}/>