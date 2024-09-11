<script lang="ts">
  import {Arrganizer} from "arrganizer";

  import JsonBlock from "../components/JSONBlock.svelte";
  import CodeBlock from "../components/CodeBlock.svelte"
  import MethodArguments from "../components/MethodArguments.svelte";
  import MethodCall from "../components/MethodCall.svelte";
  import ResultView from "../components/ResultView.svelte";

  import { data } from "../mock/data";

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
          desc: "An optional dictionary for translating header keys. Object, where the key is the original key and the value is the translated text.",
          type: "variable",
          children: [
            {
              arg: "[key]: string",
              desc: "A key of the original data",
              type: "variable",
            },
            {
              arg: "translated text",
              desc: "The text that replaces the key of the data.",
              type: "variable",
            },
          ]
        },
        {
          arg: "historySize",
          desc: "The maximum size of the history stack (default: 10).",
          type: "variable",
        },
        {
          arg: "cellFormats",
          desc: "An optional mapping of keys to cell formatters. Object that describes which columns should be formatted. Object, where the key is the original key and the value is the formatter name or a custom formatter function.",
          type: "variable",
          children: [
            {
              arg: "[key]: string",
              desc: "A key of the original data",
              type: "variable",
            },
            {
              arg: "formatter name | custom formatter function",
              desc: "The name of the built-in formatter or a custom formatter function.",
              type: "variable",
            },
          ]
        },
        {
          arg: "locale",
          desc: 'Locale used for formatting (default: "en").',
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
  // console.log(original);

    const code1 = `const arrganizer = new Arrganizer(data);
const original = arrganizer.getTables();
console.log(original);`

  const headerDictionary = {
      "dateOfBirth": "Date of Birth",
      "age": "Age",
      "salary": "Salary",
      "job": "Job Title",
      "name": "Worker",
  };

  const cellFormats = {
    "salary": "usd",
    "name": (name: string) => {
      const [first, last] = name.split(" ");
      return last.toUpperCase() + ", " + first;
    },
  };

  const arrganizer2 = new Arrganizer(data, {
    headerDictionary, cellFormats})
  const translated = arrganizer2.getTables();
  // console.log(translated);

  const code2 = `const headerDictionary = {
  "dateOfBirth": "Date of Birth",
  "age": "Age",
  "salary": "Salary",
  "job": "Job Title",
  "name": "Worker",
};

const cellFormats = {
  "salary": "usd",
  "name": (name: string) => {
    const [first, last] = name.split(" ");
    return last.toUpperCase() + ", " + first;
  },
};

const arrganizer2 = new Arrganizer(data, {
  headerDictionary, cellFormats})
const translated = arrganizer2.getTables();
console.log(translated);`
</script>

<h2 id="constructor">Constructor</h2>
<MethodCall {call} id="constructor-sub"/>

<h4>Parameters:</h4>
<MethodArguments details={argumentum} />

<h4>During the documentation used data</h4>
<JsonBlock {data} />

<h4>Example #1:</h4>

<p>Creating a new Arrganizer class:</p>
<CodeBlock code={code1}/>

<h4>Results:</h4>
<ResultView result={original} />

<h4>Example #2:</h4>
<CodeBlock code={code2}/>

<h4>Results:</h4>
<ResultView result={translated} />