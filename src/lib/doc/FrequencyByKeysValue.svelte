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
    { text: "frequencyByKeysValue", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "keys", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "(", type: "punctuation" },
    { text: "keyof", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: ")[], ", type: "punctuation" },
    { text: "frequencyKey", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "string", type: "keyword" },
    { text: " = ", type: "punctuation" },
    { text: "frequency", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "aggregateKeys", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "(", type: "punctuation" },
    { text: "keyof", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: ")[]", type: "punctuation" },
    { text: " = []", type: "punctuation" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "keys", desc: "The keys they with same values counts as one.", type: "variable"},
    { arg: "frequencyKey", desc: "The key name of the new column that contains the frequency.", type: "variable"},
    { arg: "aggregateKeys", desc: "Another keys that will be aggregated.", type: "variable"},
  ];

  const arrganizer = new Arrganizer(data);
  arrganizer.frequencyByKeysValue(["age"]);
  const calculatedAgeGroups = arrganizer.getTables();
  // console.log(calculatedAgeGroups);

  const code = `const arrganizer = new Arrganizer(data);
arrganizer.frequencyByKeysValue(["age"]);
const calculatedAgeGroups = arrganizer.getTables();
console.log(calculatedAgeGroups);`
</script>

<MethodCall {call} id="frequencybykeysvalue" />
<p>
  Calculates the frequency of each value for the specified keys, using the frequencyKey. Optionally, it can also aggregate additional values provided as an array in the aggregatesKey.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<ResultView result={calculatedAgeGroups} />