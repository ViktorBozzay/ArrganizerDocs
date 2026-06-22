<script lang="ts">
  import {Arrganizer} from "data-arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import JsonBlock from "../components/JSONBlock.svelte";

  import {data} from "../mock/data";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "toJSON", type: "function",},
    { text: "(): ", type: "punctuation" },
    { text: "{ originalData, dataSets, historySize, locale, decimals }", type: "object" },
  ]

  const arrganizer = new Arrganizer(data);
  arrganizer.sortByKey("age");
  const json = arrganizer.toJSON();

  const code = `const arrganizer = new Arrganizer(data);
arrganizer.sortByKey("age");
const json = arrganizer.toJSON();
console.log(json);`
</script>

<MethodCall {call} id="tojson" title="toJSON" />
<p>
  Serializes the current state to a JSON-safe object. Can be used with <code class="function">fromJSON</code> to restore state.
</p>
<h4>Returns:</h4>
<p>An object containing originalData, dataSets, historySize, locale, and decimals.</p>
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<JsonBlock data={json} />
