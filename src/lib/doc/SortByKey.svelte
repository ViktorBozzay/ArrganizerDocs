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

  const arrganizer = new Arrganizer(data);
  arrganizer.sortByKey("age");
  const sortedAge = arrganizer.getTables();
  console.log(sortedAge);

  const code = `  const arrganizer = new Arrganizer(data);
  arrganizer.sortByKey("age");
  const sortedAge = arrganizer.getTables();
  console.log(sortedAge);`;
</script>

<MethodCall {call} id="sortbykey" />
<p>
  Sorts the data by a specified key.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<ResultView result={sortedAge} />