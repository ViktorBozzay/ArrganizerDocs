<script lang="ts">
  import {Arrganizer} from "data-arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import ResultView from "../components/ResultView.svelte";

  import {data} from "../mock/data";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "fromJSON", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "json", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "ReturnType&lt;Arrganizer[&quot;toJSON&quot;]&gt;", type: "object" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "json", desc: "The serialized state object created by toJSON().", type: "object"},
  ];

  const arrganizer1 = new Arrganizer(data);
  arrganizer1.sortByKey("age");
  const json = arrganizer1.toJSON();

  const arrganizer2 = new Arrganizer([{ id: 0 }]);
  arrganizer2.fromJSON(json);
  const result = arrganizer2.getTables();

  const code = `const arrganizer1 = new Arrganizer(data);
arrganizer1.sortByKey("age");
const json = arrganizer1.toJSON();

// Restore in a new instance
const arrganizer2 = new Arrganizer([{ id: 0 }]);
arrganizer2.fromJSON(json);
const result = arrganizer2.getTables();
console.log(result);`
</script>

<MethodCall {call} id="fromjson" title="fromJSON" />
<p>
  Restores state from a JSON object created by <code class="function">toJSON</code>.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<ResultView result={result} />
