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
    { text: "reset", type: "function",},
    { text: "(): ", type: "punctuation" },
    { text: "void", type: "keyword", },
  ]

  const arrganizer = new Arrganizer(data);
  arrganizer.filterByKey("age", [25, 22]);
  const tables = arrganizer.getTables();
  console.log(tables);
  arrganizer.reset();
  const resetTables = arrganizer.getTables();
  console.log(resetTables);

  const code = `  const arrganizer = new Arrganizer(data);
  arrganizer.filterByKey("age", [25, 22]);
  const tables = arrganizer.getTables();
  console.log(tables);
  arrganizer.reset();
  const resetTables = arrganizer.getTables();
  console.log(resetTables);`
</script>

<MethodCall {call} id="reset" />
<p>
  Resets the data to its original state.
</p>
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<h5>console.log(tables)</h5>
<ResultView result={tables} />
<h5>console.log(resetTables)</h5>
<ResultView result={resetTables} />