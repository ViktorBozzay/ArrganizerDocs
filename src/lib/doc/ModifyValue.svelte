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
    { text: "modifyValue", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "key", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof ", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: ", ", type: "punctuation" },
    { text: "callback", type: "function" },
    { text: ": (", type: "punctuation" },
    { text: "value", type: "keyword" },
    { text: ": ", type: "punctuation" },
    { text: "unknown", type: "keyword" },
    { text: ") => ", type: "punctuation" },
    { text: "unknown", type: "keyword" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "key", desc: "The key to modify.", type: "variable"},
    { arg: "callback", desc: "The function that makes the modification on the value.", type: "function"},
  ];

  const arrganizer = new Arrganizer(data);
  arrganizer.modifyValue("salary", (salary: number) => Math.ceil(salary * 1.1));
  const raisedSalary = arrganizer.getTables();
  // console.log(raisedSalary);

  const code = `const arrganizer = new Arrganizer(data);
arrganizer.modifyValue("salary", (salary: number) => Math.ceil(salary * 1.1));
const raisedSalary = arrganizer.getTables();
console.log(raisedSalary);`;
</script>

<MethodCall {call} id="modifyvalue" title="Modify Value" />
<p>
  Modifies the value for a specific key in the data.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<ResultView result={raisedSalary} />