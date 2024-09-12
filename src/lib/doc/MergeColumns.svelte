<script lang="ts">
  import {Arrganizer} from "arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import JsonBlock from "../components/JSONBlock.svelte";
  import ResultView from "../components/ResultView.svelte";

  import {data} from "../mock/data";

  import type { CodeWordType } from "../types/CodeWordType";

    // key1: keyof DataRow,
    // key2: keyof DataRow,
    // condition: (val1: unknown, val2: unknown) => unknown,

  const call: { type: CodeWordType, text: string}[] = [
    { text: "mergeColumns", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "key1", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof ", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: ", ", type: "punctuation" },
    { text: "key2", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof ", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: ", ", type: "punctuation" },
    { text: "condition", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "(", type: "punctuation" },
    { text: "val1", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "unknown", type: "keyword" },
    { text: ", ", type: "punctuation" },
    { text: "val2", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "unknown", type: "keyword" },
    { text: ")", type: "punctuation" },
    { text: " => unknown", type: "punctuation" },
    { text: ", ", type: "punctuation" },
    { text: "newKey", type: "variable" },
    { text: "?: ", type: "punctuation" },
    { text: "string", type: "keyword" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

const argumentum = [
  { arg: "key1", desc: "The key that will be kept after the merge and will contain the merged value.", type: "string" },
  { arg: "key2", desc: "The key that will be removed after the merge.", type: "string" },
  { arg: "condition", desc: "A function that defines how to merge the values of key1 and key2.", type: "function" },
  { arg: "newKey", desc: "The new key name (optional).", type: "string" },
];

  const arrganizer = new Arrganizer(data);
  arrganizer.mergeColumns(
    "age",
    "salary",
    (age: unknown, salary: unknown) => {
      return String(Math.floor((salary as number) / (age as number))) + " $/yr"
    },
    "salaryAgeRatio");
  const calculatedAgeGroups = arrganizer.getTables();
  // console.log(calculatedAgeGroups);

  const code = `const arrganizer = new Arrganizer(data);
arrganizer.mergeColumns(
  "age",
  "salary",
  (age: unknown, salary: unknown) => {
    return String(Math.floor((salary as number) / (age as number))) + " $/yr"
  },
  "salaryAgeRatio");
const calculatedAgeGroups = arrganizer.getTables();`
</script>

<MethodCall {call} id="mergecolumns" title="Merge Columns"/>
<p>
  Merges the values of two columns identified by key1 and key2. The merged value will be stored under a new column name provided by newKey, while the column associated with key2 will be removed from the dataset. The merging is performed based on a provided function (condition) that determines how the values from key1 and key2 should be combined. The newKey argument specifies the name of the column that will contain the merged result.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<ResultView result={calculatedAgeGroups} />