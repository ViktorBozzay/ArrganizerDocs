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
    { text: "removeKey", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "key", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "key", desc: "The key to remove.", type: "variable"},
  ];

  const arrganizer = new Arrganizer(data);
  arrganizer.removeKey("age");
  const removedAge = arrganizer.getTables();
  // console.log(removedAge);

  const code = `const arrganizer = new Arrganizer(data);
arrganizer.removeKey("age");
const remove`
</script>

<MethodCall {call} id="removekey" />
<p>
  Removes a specified key from the data.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Result:</h4>
<ResultView result={removedAge} />
