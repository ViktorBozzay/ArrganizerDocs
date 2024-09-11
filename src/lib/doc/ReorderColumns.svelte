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
    { text: "reorderColumns", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "columnOrder", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: ", ", type: "punctuation" },
    { text: "addMissing", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "boolean", type: "keyword" },
    { text: " = ", type: "punctuation" },
    { text: "true", type: "keyword" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "columnOrder", desc: "The desired order of columns.", type: "variable"},
    { arg: "addMissing", desc: "Whether to add missing columns at the end of each row (default is true).", type: "variable"},
  ];

  const arrganizer2 = new Arrganizer(data);
  arrganizer2.reorderColumns(["age", "id"]);
  const reordered = arrganizer2.getTables();
  console.log(reordered);

  const arrganizer = new Arrganizer(data);
  arrganizer.reorderColumns(["age", "id"], false);
  const reorderedOnlyGiven = arrganizer.getTables();
  console.log(reorderedOnlyGiven);

  const code1 = `  const arrganizer2 = new Arrganizer(data);
  arrganizer2.reorderColumns(["age", "id"]);
  const reordered = arrganizer2.getTables();
  console.log(reordered);`;

  const code2 = `  const arrganizer = new Arrganizer(data);
  arrganizer.reorderColumns(["age", "id"], false);
  const reorderedOnlyGiven = arrganizer.getTables();
  console.log(reorderedOnlyGiven);`;
</script>

<MethodCall {call} id="reordercolumns" />
<p>
  Reorders the columns of the data rows according to the specified column order. If `addMissing` is true, missing columns will be added to the end of each row in their original order.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />

<h4>Example #1:</h4>
<CodeBlock code={code1}/>

<h4>Results:</h4>
<h5>console.log(reordered);</h5>
<ResultView result={reordered} />

<h4>Example #2:</h4>
<CodeBlock code={code2}/>

<h5>console.log(reorderedOnlyGiven);</h5>
<ResultView result={reorderedOnlyGiven} />