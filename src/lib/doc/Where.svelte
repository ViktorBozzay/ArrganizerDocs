<script lang="ts">
  import {Arrganizer} from "data-arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import ResultView from "../components/ResultView.svelte";

  import {data} from "../mock/data";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "where", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "key", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof ", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: ", ", type: "punctuation" },
    { text: "op", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: '"|" | "<" | ">=" | "<=" | "===" | "!==" | "contains"', type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "value", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "unknown", type: "keyword" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "key", desc: "The column to filter on.", type: "variable"},
    { arg: "op", desc: 'The comparison operator: ">" | "<" | ">=" | "<=" | "===" | "!==" | "contains".', type: "string"},
    { arg: "value", desc: "The value to compare against.", type: "variable"},
  ];

  const arrganizer = new Arrganizer(data);
  arrganizer.where("age", ">=", 28);
  const result = arrganizer.getTables();

  const code = `const arrganizer = new Arrganizer(data);
arrganizer.where("age", ">=", 28);
const result = arrganizer.getTables();
console.log(result);`
</script>

<MethodCall {call} id="where" title="Where" />
<p>
  Filters rows where a key satisfies a condition using comparison operators.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<ResultView result={result} />
