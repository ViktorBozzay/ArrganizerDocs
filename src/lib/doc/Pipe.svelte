<script lang="ts">
  import {Arrganizer} from "data-arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import ResultView from "../components/ResultView.svelte";

  import {data} from "../mock/data";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "pipe", type: "function",},
    { text: "(...fns: ((", type: "punctuation" },
    { text: "a", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "Arrganizer", type: "object" },
    { text: ") => ", type: "punctuation" },
    { text: "Arrganizer", type: "object" },
    { text: ")[]): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "fns", desc: "An array of functions that take and return an Arrganizer.", type: "function"},
  ];

  const arrganizer = new Arrganizer(data);
  arrganizer.pipe(
    (a) => { a.groupByKey("age"); return a; },
    (a) => { a.sortByKey("salary", "desc"); return a; },
  );
  const result = arrganizer.getTables();

  const code = `const arrganizer = new Arrganizer(data);
arrganizer.pipe(
  (a) => { a.groupByKey("age"); return a; },
  (a) => { a.sortByKey("salary", "desc"); return a; },
);
const result = arrganizer.getTables();
console.log(result);`
</script>

<MethodCall {call} id="pipe" title="Pipe" />
<p>
  Composes operations through a pipeline of functions. Each function receives the Arrganizer instance and should return it after applying transformations.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<ResultView result={result} />
