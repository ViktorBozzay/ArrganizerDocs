<script lang="ts">
  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "filterByKey", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "key", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof", type: "keyword" },
    { text: "Data[0]", type: "object" },
    { text: ", ", type: "punctuation" },
    { text: "value", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "string | number", type: "keyword" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "key", desc: "The key to filter by.", type: "variable"},
    { arg: "value", desc: "The value to filter for.", type: "variable"},
  ];

  const code = `organizer.filterByKey("age", "25");`;
</script>

<MethodCall {call} id="filterbykey" />
<p>
  Filters the data by a specified key and value.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>