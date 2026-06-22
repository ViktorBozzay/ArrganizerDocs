<script lang="ts">
  import {Arrganizer} from "data-arrganizer";

  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import JsonBlock from "../components/JSONBlock.svelte";

  import type { CodeWordType } from "../types/CodeWordType";

  const dataA = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  const dataB = [
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "Diana" },
  ];

  const call: { type: CodeWordType, text: string}[] = [
    { text: "diff", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "other", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "Arrganizer", type: "object" },
    { text: "): ", type: "punctuation" },
    { text: "{ added, removed, unchanged }", type: "object" },
  ]

  const argumentum = [
    { arg: "other", desc: "The other Arrganizer to compare against.", type: "object"},
  ];

  const arrganizerA = new Arrganizer(dataA);
  const arrganizerB = new Arrganizer(dataB);
  const diffResult = arrganizerA.diff(arrganizerB);

  const code = `const dataA = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const dataB = [
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
];

const a = new Arrganizer(dataA);
const b = new Arrganizer(dataB);
const { added, removed, unchanged } = a.diff(b);
// added:    [{ id: 4, name: "Diana" }]
// removed:  [{ id: 1, name: "Alice" }]
// unchanged: [{ id: 2, name: "Bob" }, { id: 3, name: "Charlie" }]`
</script>

<MethodCall {call} id="diff" title="Diff" />
<p>
  Compares the current state with another Arrganizer and returns added, removed, and unchanged rows.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Returns:</h4>
<p>An object with <code class="variable">added</code>, <code class="variable">removed</code>, and <code class="variable">unchanged</code> DataRow arrays.</p>
<h4>Example:</h4>
<CodeBlock {code}/>

<h4>Results:</h4>
<JsonBlock data={diffResult} />
