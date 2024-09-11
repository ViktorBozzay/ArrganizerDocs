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
    { text: "groupByKey", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "key", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "timeRange", desc: "The interval to group by.", type: "variable", children: [
      { arg: "YEAR", desc: "The data grouped yearly.", type: "string"},
      { arg: "MONTH", desc: "The data grouped monthly.", type: "string"},
      { arg: "DAY", desc: "The data grouped daily.", type: "string"},
      { arg: "HOUR", desc: "The data grouped hourly.", type: "string"},
      { arg: "MINUTE", desc: "The data grouped in minutes.", type: "string"},
      { arg: "SECOND", desc: "The data grouped in seconds.", type: "string"},
    ]},
    { arg: "key", desc: "The key to group by.", type: "variable"},
  ];

  const arrganizer = new Arrganizer(data);
  arrganizer.groupByDate("YEAR", "dateOfBirth");
  const groupedDateOfBirth = arrganizer.getTables();
  // console.log(groupedDateOfBirth);

  const code = `const arrganizer = new Arrganizer(data);
arrganizer.groupByDate("YEAR", "dateOfBirth");
const groupedDateOfBirth = arrganizer.getTables();
console.log(groupedDateOfBirth);`;
</script>

<MethodCall {call} id="groupbydate" />
<p>
  Groups the data by a specified date key in specified time interval.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<ResultView result={groupedDateOfBirth} />