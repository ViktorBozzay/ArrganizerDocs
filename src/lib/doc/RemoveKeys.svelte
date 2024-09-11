<script lang="ts">
  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "removeKeys", type: "function",},
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
    { arg: "keys", desc: "The keys to remove.", type: "variable"},
  ];

  const code = `organizer.removeKeys(["id", "age"]);`;
</script>

<MethodCall {call} id="removekeys" />
<p>
  Removes a specified keys from the data.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>