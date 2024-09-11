<script lang="ts">
  import CodeBlock from "../components/CodeBlock.svelte";
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";

  import type { CodeWordType } from "../types/CodeWordType";

  const call: { type: CodeWordType, text: string}[] = [
    { text: "reorderColumns", type: "function",},
    { text: "(", type: "punctuation" },
    { text: "columnOrder", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "keyof", type: "keyword" },
    { text: "DataRow", type: "object" },
    { text: ", ", type: "punctuation" },
    { text: "addMissing", type: "variable" },
    { text: ": ", type: "punctuation" },
    { text: "boolean", type: "keyword" },
    { text: " = ", type: "punctuation" },
    { text: "true", type: "keyword" },
    { text: "): ", type: "punctuation" },
    { text: "this", type: "keyword", },
  ]

  const argumentum = [
    { arg: "columnOrder", desc: "The desired order of columns.", type: "variable"},
    { arg: "addMissing", desc: "Whether to add missing columns at the end of each row (default is true).", type: "variable"},
  ];

  const code = `organizer.reorderColumns(["age", "salary", "id"], true);`;
</script>

<MethodCall {call} id="reordercolumns" />
<p>
  Reorders the columns of the data rows according to the specified column order. If `addMissing` is true, missing columns will be added to the end of each row in their original order.
</p>
<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<CodeBlock {code}/>