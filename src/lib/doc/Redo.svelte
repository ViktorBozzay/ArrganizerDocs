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
    { text: "undo", type: "function",},
    { text: "(): ", type: "punctuation" },
    { text: "void", type: "keyword", },
  ]

  const arrganizer = new Arrganizer(data);
  arrganizer.filterByKey("age", [25, 22]);
  arrganizer.filterByKey("age", [25]);
  arrganizer.undo();
  const undoTables = arrganizer.getTables();
  arrganizer.redo();
  // console.log(undoTables);
  const redoTables = arrganizer.getTables();
  // console.log(redoTables);

  const code = `const arrganizer = new Arrganizer(data);
arrganizer.filterByKey("age", [25, 22]);
arrganizer.filterByKey("age", [25]);
arrganizer.undo();
const undoTables = arrganizer.getTables();
arrganizer.redo();
console.log(undoTables);
const redoTables = arrganizer.getTables();
console.log(redoTables);`
</script>

<MethodCall {call} id="redo" title="Redo"/>
<p>
  Redo steps forward in the history to the next state (if there is a next).
</p>
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<h5>console.log(undoTables)</h5>
<ResultView result={undoTables} />
<h5>console.log(redoTables)</h5>
<ResultView result={redoTables} />