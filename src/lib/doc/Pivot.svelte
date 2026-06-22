<script lang="ts">
  import {Arrganizer} from "data-arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import ResultView from "../components/ResultView.svelte";

  import type { CodeWordType } from "../types/CodeWordType";

  const pivotData = [
    { id: 1, metric: "revenue", value: 100 },
    { id: 1, metric: "cost", value: 50 },
    { id: 2, metric: "revenue", value: 200 },
    { id: 2, metric: "cost", value: 80 },
  ];

  const call: { type: CodeWordType, text: string}[] = [
    { text: "pivot", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "rowKey", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof ", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: ", ", type: "punctuation" },
    { text: "colKey", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof ", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: ", ", type: "punctuation" },
    { text: "valueKey", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof ", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "rowKey", desc: "The column that identifies each row (e.g., 'id').", type: "variable"},
    { arg: "colKey", desc: "The column whose values become new column headers.", type: "variable"},
    { arg: "valueKey", desc: "The column whose values fill the pivoted cells.", type: "variable"},
  ];

  const arrganizer = new Arrganizer(pivotData);
  arrganizer.pivot("id", "metric", "value");
  const result = arrganizer.getTables();

  const code = `const data = [
  { id: 1, metric: "revenue", value: 100 },
  { id: 1, metric: "cost", value: 50 },
  { id: 2, metric: "revenue", value: 200 },
  { id: 2, metric: "cost", value: 80 },
];

const arrganizer = new Arrganizer(data);
arrganizer.pivot("id", "metric", "value");
const result = arrganizer.getTables();
// Result: [{ id: 1, revenue: 100, cost: 50 },
//          { id: 2, revenue: 200, cost: 80 }]`
</script>

<MethodCall {call} id="pivot" title="Pivot" />
<p>
  Transforms data from long format to wide format. Each unique value in <code class="variable">colKey</code> becomes a new column.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<ResultView result={result} />
