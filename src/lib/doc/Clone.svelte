<script lang="ts">
  import {Arrganizer} from "data-arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import ResultView from "../components/ResultView.svelte";

  import {data} from "../mock/data";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "clone", type: "function",},
    { text: "(): ", type: "punctuation" },
    { text: "Arrganizer", type: "object", },
  ]

  const arrganizer = new Arrganizer(data);
  arrganizer.filterByKey("age", [25, 22]);
  const backup = arrganizer.clone();
  arrganizer.filterByKey("age", [25]);

  const originalTables = backup.getTables();
  const modifiedTables = arrganizer.getTables();

  const code = `const arrganizer = new Arrganizer(data);
arrganizer.filterByKey("age", [25, 22]);
const backup = arrganizer.clone(); // Independent copy
arrganizer.filterByKey("age", [25]);

console.log(backup.getTables()); // Still has age 25 & 22
console.log(arrganizer.getTables()); // Only age 25`
</script>

<MethodCall {call} id="clone" title="Clone" />
<p>
  Creates a deep copy of the current Arrganizer state. The cloned instance is independent and can be modified without affecting the original.
</p>
<h4>Returns:</h4>
<p>A new Arrganizer instance with the same data and options.</p>
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<h5>Backup (clone):</h5>
<ResultView result={originalTables} />
<h5>Modified original:</h5>
<ResultView result={modifiedTables} />
