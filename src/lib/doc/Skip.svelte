<script lang="ts">
  import {Arrganizer} from "data-arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import ResultView from "../components/ResultView.svelte";

  import {data} from "../mock/data";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "skip", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "n", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "number", type: "keyword" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "n", desc: "Number of rows to skip from each data set.", type: "variable"},
  ];

  const arrganizer = new Arrganizer(data);
  arrganizer.skip(7);
  const result = arrganizer.getTables();

  const code = `const arrganizer = new Arrganizer(data);
arrganizer.skip(7);
const result = arrganizer.getTables();
console.log(result);`
</script>

<MethodCall {call} id="skip" title="Skip" />
<p>
  Skips the first n rows from each data set, returning the remaining rows.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<ResultView result={result} />
