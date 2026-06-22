<script lang="ts">
  import {Arrganizer} from "data-arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import ResultView from "../components/ResultView.svelte";

  import {data} from "../mock/data";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "addKey", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "key", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "string", type: "keyword" },
    { text: ", ", type: "punctuation" },
    { text: "callback", type: "variable" },
    { text: ": (", type: "punctuation" },
    { text: "row", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "DataRow", type: "object" },
    { text: ") => ", type: "punctuation" },
    { text: "unknown", type: "keyword" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "key", desc: "The name of the new column.", type: "variable"},
    { arg: "callback", desc: "A function that receives each row and returns the value for the new column.", type: "function"},
  ];

  const arrganizer = new Arrganizer(data);
  arrganizer.addKey("salaryWithTax", (row) => Math.ceil((row.salary as number) * 1.27));
  const result = arrganizer.getTables();

  const code = `const arrganizer = new Arrganizer(data);
arrganizer.addKey("salaryWithTax", (row) => Math.ceil((row.salary as number) * 1.27));
const result = arrganizer.getTables();
console.log(result);`
</script>

<MethodCall {call} id="addkey" title="Add Key" />
<p>
  Adds a new computed column to all data sets.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<ResultView result={result} />
