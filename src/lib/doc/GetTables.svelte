<script lang="ts">
  import { Arrganizer } from "arrganizer";
  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";

  import type { CodeWordType } from "../types/CodeWordType";
  import {data} from "../mock/data"
  import ResultView from "../components/ResultView.svelte";

  const argumentum = [
    {
      arg: 'showSummary: Record<"total" | "min" | "max" | "average" | "length", boolean>',
      desc: "An optional object specifying which summary metrics to display.",
      type: "object",
      children: [
        { arg: "total", desc: "Adds the calculated total to every column, where is is possible.", type: "variable"},
        { arg: "min", desc: "Adds the calculated minimum value to every column, where is is possible.", type: "variable" },
        { arg: "max", desc: "Adds the calculated maximum value to every column, where is is possible.",  type: "variable"},
        { arg: "average", desc: "Adds the calculated average value to every column, where is is possible.",  type: "variable"},
        { arg: "length", desc: "Adds the number of elements to every column.",  type: "variable"}
      ]
    },
  ]

  const returns = [
    {
      arg: "TableData[]",
      desc: "An array of table data objects.",
      type: "object"
    },
  ]

  const call: { type: CodeWordType, text: string}[] = [
    { text: "getTables", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "showSummary", type: "object", },
    { text: "?: ", type: "keyword", },
    { text: "Partial&lt;Record&lt;keyof ", type:  "object" },
    { text: "Summary", type: "object" },
    { text: ", ", type: "punctuation" },
    { text: "boolean", type: "boolean" },
    { text: "): ", type: "punctuation" },
    { text: "TableData[]", type: "object" },
  ]

  const code = `const arrganizer = new Arrganizer(data);
    const tableWithSummary = arrganizer.getTables({
      showSummary: {
        totalRows: true,
        totalAmount: true,
      }
    })
    console.log(tableWithSummary);
  });`

  const arrganizer = new Arrganizer(data);
  const tableWithSummary = arrganizer.getTables({
    total: true,
    average: true,
  });

</script>

<MethodCall {call} id="gettables" />
<p>
  Returns the current data sets as tables, optionally including summary data.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Returns:</h4>
<MethodArguments details={returns} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<ResultView result={tableWithSummary} />