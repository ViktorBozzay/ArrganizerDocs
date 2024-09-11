<script lang="ts">
  import {Arrganizer} from "arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import ResultView from "../components/ResultView.svelte";
  import JsonBlock from "../components/JSONBlock.svelte";

  import {data} from "../mock/data";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "getHistory", type: "function",},
    { text: "(): ", type: "punctuation" },
    { text: "DataSet", type: "object", },
    { text: "[][]", type: "punctuation" },
  ]

  const returns = [
    {
      arg: "DataSet[][]",
      desc: "An array of history records.",
      type: "object"
    },
  ]

  const arrganizer = new Arrganizer(data);
  arrganizer.sortByKey("age", "asc");
  const history = arrganizer.getHistory();
  // console.log(history);

  const code = `const arrganizer = new Arrganizer(data);
arrganizer.sortByKey("age", "asc");
const history = arrganizer.getHistory();
console.log(history);`
</script>

<MethodCall {call} id="gethistory" />
<p>
  Returns the history of operations performed on the data.
</p>
<h4>Returns:</h4>
<MethodArguments details={returns} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<JsonBlock data={history} />