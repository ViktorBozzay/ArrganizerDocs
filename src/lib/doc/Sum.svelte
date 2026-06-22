<script lang="ts">
  import {Arrganizer} from "data-arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";

  import {data} from "../mock/data";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "sum", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "key", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof ", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: "): ", type: "punctuation" },
    { text: "number", type: "keyword", },
  ]

  const argumentum = [
    { arg: "key", desc: "The column to sum.", type: "variable"},
  ];

  const arrganizer = new Arrganizer(data);
  const totalSalary = arrganizer.sum("salary");

  const code = `const arrganizer = new Arrganizer(data);
const totalSalary = arrganizer.sum("salary");
console.log(totalSalary); // 12300`
</script>

<MethodCall {call} id="sum" title="Sum" />
<p>
  Returns the sum of numeric values for a given key across all data sets.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Returns:</h4>
<p>A number representing the sum, or 0 if no numeric values exist.</p>
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<h5>Sum of salary: {totalSalary}</h5>
