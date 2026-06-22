<script lang="ts">
  import {Arrganizer} from "data-arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import JsonBlock from "../components/JSONBlock.svelte";

  import {data} from "../mock/data";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "distinct", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "key", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof ", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: "): ", type: "punctuation" },
    { text: "unknown[]", type: "object" },
  ]

  const argumentum = [
    { arg: "key", desc: "The column to get distinct values from.", type: "variable"},
  ];

  const arrganizer = new Arrganizer(data);
  const distinctAges = arrganizer.distinct("age");

  const code = `const arrganizer = new Arrganizer(data);
const distinctAges = arrganizer.distinct("age");
console.log(distinctAges);`
</script>

<MethodCall {call} id="distinct" title="Distinct" />
<p>
  Returns unique values for a given key across all data sets. This is a read-only operation that does not mutate the data.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Returns:</h4>
<p>An array of unique values.</p>
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<JsonBlock data={distinctAges} />
