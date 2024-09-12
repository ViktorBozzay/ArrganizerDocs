<script lang="ts">
  import {Arrganizer} from "arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import JsonBlock from "../components/JSONBlock.svelte";
  import ResultView from "../components/ResultView.svelte";

  import {data} from "../mock/data";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "filterByKey", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "key", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof ", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: ", ", type: "punctuation" },
    { text: "values", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "DataRow", type: "object" },
    { text: "[", type: "keyword" },
    { text: "T", type: "object" },
    { text: "][]", type: "keyword" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "key", desc: "The key to filter by.", type: "variable"},
    { arg: "value", desc: "The value to filter for.", type: "variable"},
  ];

  const arrganizer = new Arrganizer(data);
  arrganizer.filterByKey("age", [25, 22]);
  const filteredAge = arrganizer.getTables();
  // console.log(filteredAge);

  const code = `const arrganizer = new Arrganizer(data);
arrganizer.filterByKey("age", [25, 22]);
arrganizer.filterByKey("age", [25]);
const filteredAge = arrganizer.getTables();
console.log(filteredAge);`;
</script>

<MethodCall {call} id="filterbykey" title="Filter By Key"/>
<p>
  Filters the data by a specified key and value.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<ResultView result={filteredAge} />