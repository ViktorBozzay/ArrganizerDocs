<script lang="ts">
  import {Arrganizer} from "arrganizer";

  import JsonBlock from "../components/JSONBlock.svelte";
  import CodeBlock from "../components/CodeBlock.svelte"

  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";

  import { data } from "../mock";

  import type { CodeWordType } from "../types/CodeWordType";

  const argumentum = [
    {
      arg: "data",
      desc: "An array of data rows (each row is an object with key-value pairs).",
      type: "variable"
    },
    {
      arg: "options",
      desc: "Optional configuration object (ArrganizerOptions), which may include:",
      type: "variable",
      children: [
        {
          arg: "headerDictionary",
          desc: "An optional dictionary for translating header keys.",
          type: "variable",
        },
        {
          arg: "historySize",
          desc: "The maximum size of the history stack (default: 10).",
          type: "variable",
        },
        {
          arg: "cellFormats",
          desc: "An optional mapping of keys to cell formatters.",
          type: "variable",
        },
        {
          arg: "locale",
          desc: "Locale used for formatting (default: &quot;en&quot;).",
          type: "variable",
        },
      ]
    }
  ]

  const call: { type: CodeWordType, text: string}[] = [
    {
      text: "new",
      type: "keyword",
    },
    {
      text: "Arrganizer",
      type: "object",
    },
    {
      text: "Arrganizer",
      type: "object",
    },
    {
      text: "(",
      type: "punctuation"
    },
    {
      text: "data",
      type: "variable"
    },
    {
      text: ": ",
      type: "punctuation"
    },
    {
      text: "Data",
      type: "object"
    },
    {
      text: ", ",
      type: "punctuation"
    },
    {
      text: "options",
      type: "variable"
    },
    {
      text: "?: ",
      type: "punctuation"
    },
    {
      text: "ArrganizerOptions",
      type: "object"
    },
    {
      text: ")",
      type: "punctuation"
    },
  ]

  const arrganizer = new Arrganizer(data);
  const original = arrganizer.getTables();

    const code = `const arrganizer = new Arrganizer(data, options);
const original = arrganizer.getTables();
console.log(original);`
</script>

<h2 id="constructor">Constructor</h2>
<MethodCall {call} />

<h4>Parameters:</h4>
<MethodArguments details={argumentum} />
<h4>Example:</h4>
<p>This is an example data:</p>
<JsonBlock {data} />
<p>Creating a new Arrganizer class:</p>
<CodeBlock {code}/>
<p>And the result is:</p>
<JsonBlock data={original}/>
