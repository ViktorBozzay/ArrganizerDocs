<script lang="ts">
  import {Arrganizer} from "arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import JsonBlock from "../components/JSONBlock.svelte";

  import {data} from "../mock/data";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "getData", type: "function",},
    { text: "(): ", type: "punctuation" },
    { text: "Data", type: "object", },
  ]

  const returns = [
    {
      arg: "DataSet",
      desc: "The current data set.",
      type: "object"
    },
  ];

  const organizer = new Arrganizer(data);
  const dataSet = organizer.getData();

  const code = `const organizer = new Arrganizer(data);
  const dataSet = organizer.getData();`
</script>

<MethodCall {call} id="getdata"/>
<p>
  Returns the current data set.
</p>
<h4>Returns:</h4>
<MethodArguments details={returns} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<JsonBlock data={dataSet} />