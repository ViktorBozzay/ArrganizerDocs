<script lang="ts">
  import {Arrganizer} from "data-arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import ResultView from "../components/ResultView.svelte";

  import {data} from "../mock/data";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "sample", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "n", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "number", type: "keyword" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "n", desc: "Number of random rows to sample from each data set.", type: "variable"},
  ];

  const arrganizer = new Arrganizer(data);
  arrganizer.sample(3);
  const result = arrganizer.getTables();

  const code = `const arrganizer = new Arrganizer(data);
arrganizer.sample(3);
const result = arrganizer.getTables();
console.log(result);`
</script>

<MethodCall {call} id="sample" title="Sample" />
<p>
  Returns a random sample of n rows from each data set.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<ResultView result={result} />
