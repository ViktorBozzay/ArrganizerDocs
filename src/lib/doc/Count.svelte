<script lang="ts">
  import {Arrganizer} from "data-arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodCall from "../components/MethodCall.svelte";

  import {data} from "../mock/data";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "count", type: "function",},
    { text: "(): ", type: "punctuation" },
    { text: "number", type: "keyword", },
  ]

  const arrganizer = new Arrganizer(data);
  const totalCount = arrganizer.count();

  const arrganizer2 = new Arrganizer(data);
  arrganizer2.filterByKey("age", [25, 22]);
  const filteredCount = arrganizer2.count();

  const code = `const arrganizer = new Arrganizer(data);
console.log(arrganizer.count()); // 10

arrganizer.filterByKey("age", [25, 22]);
console.log(arrganizer.count()); // 4`
</script>

<MethodCall {call} id="count" title="Count" />
<p>
  Returns the total number of rows across all data sets.
</p>
<h4>Returns:</h4>
<p>A number representing the total row count.</p>
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<h5>All data: {totalCount}</h5>
<h5>Filtered (age 25, 22): {filteredCount}</h5>
