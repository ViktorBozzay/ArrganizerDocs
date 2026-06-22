<script lang="ts">
  import {Arrganizer} from "data-arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import ResultView from "../components/ResultView.svelte";

  import {data} from "../mock/data";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "renameKey", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "oldKey", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof ", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: ", ", type: "punctuation" },
    { text: "newKey", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "string", type: "keyword" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "oldKey", desc: "The current column name.", type: "variable"},
    { arg: "newKey", desc: "The new column name.", type: "variable"},
  ];

  const arrganizer = new Arrganizer(data);
  arrganizer.renameKey("name", "fullName");
  const result = arrganizer.getTables();

  const code = `const arrganizer = new Arrganizer(data);
arrganizer.renameKey("name", "fullName");
const result = arrganizer.getTables();
console.log(result);`
</script>

<MethodCall {call} id="renamekey" title="Rename Key" />
<p>
  Renames a column in all data sets.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<ResultView result={result} />
