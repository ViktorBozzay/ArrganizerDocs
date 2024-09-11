<script lang="ts">
  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "getData", type: "function",},
    { text: "(): ", type: "punctuation" },
    { text: "Data", type: "object", },
  ]

  const returns = [
    {
      arg: "DataSet",
      desc: "The current data set.",
      type: "object"
    },
  ]

  const code = `const data = organizer.getData();`
</script>

<MethodCall {call} id="getdata"/>
<p>
  Returns the current data set.
</p>
<h4>Returns:</h4>
<MethodArguments details={returns} />
<h4>Example:</h4>
<CodeBlock {code}/>