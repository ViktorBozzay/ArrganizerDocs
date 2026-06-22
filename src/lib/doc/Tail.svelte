<script lang="ts">
  import {Arrganizer} from "data-arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import ResultView from "../components/ResultView.svelte";

  import {data} from "../mock/data";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "tail", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "n", type: "variable" },
    { text: " = ", type: "punctuation" },
    { text: "1", type: "number" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "n", desc: "Number of rows to return from the end. Defaults to 1.", type: "variable"},
  ];

  const arrganizer = new Arrganizer(data);
  arrganizer.tail(3);
  const result = arrganizer.getTables();

  const code = `const arrganizer = new Arrganizer(data);
arrganizer.tail(3);
const result = arrganizer.getTables();
console.log(result);`
</script>

<MethodCall {call} id="tail" title="Tail" />
<p>
  Returns the last n rows from each data set. Defaults to 1 row.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<ResultView result={result} />
