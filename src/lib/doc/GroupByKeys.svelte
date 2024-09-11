<script lang="ts">
  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "groupByKeys", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "key", type: "variable" },
    { text: ": (", type: "punctuation" },
    { text: "keyof", type: "keyword" },
    { text: "Data[0]", type: "object" },
    { text: ")[]", type: "punctuation" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "keys", desc: "The keys to group by.", type: "variable"},
  ];

  const code = `organizer.groupByKey(["id", "job"]);`;
</script>

<MethodCall {call} id="groupbykeys" />
<p>
  Removes a specified key from the data.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>