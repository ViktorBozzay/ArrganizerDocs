<script lang="ts">
  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "modifyValue", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "key", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: ", ", type: "punctuation" },
    { text: "callback", type: "function" },
    { text: ": (", type: "punctuation" },
    { text: "value", type: "keyword" },
    { text: ": ", type: "punctuation" },
    { text: "unknown", type: "keyword" },
    { text: ") => ", type: "punctuation" },
    { text: "unknown", type: "keyword" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "key", desc: "The key to modify.", type: "variable"},
    { arg: "callback", desc: "The function that makes the modification on the value.", type: "function"},
  ];

  const code = `organizer.modifyValue("salary", (salary) => salary * 2);`;
</script>

<MethodCall {call} id="modifyvalue" />
<p>
  Modifies the value for a specific key in the data.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>