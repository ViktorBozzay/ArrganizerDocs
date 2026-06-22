<script lang="ts">
  import {Arrganizer} from "data-arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import ResultView from "../components/ResultView.svelte";

  import {data} from "../mock/data";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "snapshot", type: "function",},
    { text: "(): ", type: "punctuation" },
    { text: "Arrganizer", type: "object", },
  ]

  const arrganizer = new Arrganizer(data);
  arrganizer.sortByKey("age");
  const snapshot = arrganizer.snapshot();
  arrganizer.filterByKey("age", [25]);

  const snapshotTables = snapshot.getTables();
  const currentTables = arrganizer.getTables();

  const code = `const arrganizer = new Arrganizer(data);
arrganizer.sortByKey("age");
const snapshot = arrganizer.snapshot(); // Alias for clone()
arrganizer.filterByKey("age", [25]);

console.log(snapshot.getTables()); // Still sorted, unfiltered
console.log(arrganizer.getTables()); // Filtered to age 25`
</script>

<MethodCall {call} id="snapshot" title="Snapshot" />
<p>
  Alias for <code class="function">clone</code>. Returns a deep copy of the current Arrganizer state.
</p>
<h4>Returns:</h4>
<p>A new Arrganizer instance.</p>
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<h5>Snapshot:</h5>
<ResultView result={snapshotTables} />
<h5>Current:</h5>
<ResultView result={currentTables} />
