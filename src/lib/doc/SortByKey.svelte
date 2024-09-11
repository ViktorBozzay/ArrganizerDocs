<script lang="ts">
  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "sortByKey", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "key", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: ", ", type: "punctuation" },
    { text: "direction", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: '"asc"', type: "string" },
    { text: " | ", type: "punctuation" },
    { text: '"desc"', type: "string" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "key", desc: "The key to sort by.", type: "variable"},
    { arg: "ascending", desc: 'Optional boolean to specify sorting order (default: "asc" for ascending).', type: "variable"},
  ];

  const code = `organizer.sortByKey("age");`;
</script>

<MethodCall {call} id="sortbykey" />
<p>
  Sorts the data by a specified key.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>