<script lang="ts">
  import {Arrganizer} from "data-arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import ResultView from "../components/ResultView.svelte";

  import type { CodeWordType } from "../types/CodeWordType";

  const dataA = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  const dataB = [
    { id: 1, score: 95 },
    { id: 2, score: 87 },
  ];

  const call: { type: CodeWordType, text: string}[] = [
    { text: "join", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "other", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "Arrganizer", type: "object" },
    { text: ", ", type: "punctuation" },
    { text: "onKey", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof ", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "other", desc: "The other Arrganizer instance to join with.", type: "object"},
    { arg: "onKey", desc: "The column name to join on (must exist in both).", type: "variable"},
  ];

  const arrganizerA = new Arrganizer(dataA);
  const arrganizerB = new Arrganizer(dataB);
  arrganizerA.join(arrganizerB, "id");
  const result = arrganizerA.getTables();

  const code = `const dataA = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const dataB = [
  { id: 1, score: 95 },
  { id: 2, score: 87 },
];

const arrganizerA = new Arrganizer(dataA);
const arrganizerB = new Arrganizer(dataB);
arrganizerA.join(arrganizerB, "id");
const result = arrganizerA.getTables();
// Result: [{ id: 1, name: "Alice", score: 95 },
//          { id: 2, name: "Bob", score: 87 },
//          { id: 3, name: "Charlie" }]`
</script>

<MethodCall {call} id="join" title="Join" />
<p>
  Left-joins this Arrganizer's data with another Arrganizer's data on a shared key. All rows from this instance are kept; unmatched rows from the other instance will have undefined values.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<ResultView result={result} />
