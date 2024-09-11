<script lang="ts">
  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "getHistory", type: "function",},
    { text: "(): ", type: "punctuation" },
    { text: "DataSet", type: "object", },
    { text: "[][]", type: "punctuation" },
  ]

  const returns = [
    {
      arg: "DataSet[][]",
      desc: "An array of history records.",
      type: "object"
    },
  ]

  const code = `const history = organizer.getHistory();`
</script>

<MethodCall {call} id="gethistory" />
<p>
  Returns the history of operations performed on the data.
</p>
<h4>Returns:</h4>
<MethodArguments details={returns} />
<h4>Example:</h4>
<CodeBlock {code}/>