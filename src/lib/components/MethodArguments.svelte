<script lang="ts">
  import Argumentum from "./Argumentum.svelte";
  import type { ArgumentumDetailsType } from "../types/ArgumentumDetailsType";

  export let details: ArgumentumDetailsType[];
</script>

<ul>
  {#each details as detail}
  <li>
    <Argumentum {...detail} />
  </li>
    {#if detail?.children}
      <svelte:self details={detail.children} />
    {/if}
  {/each}
</ul>


<style>
  h1,
  h2,
  h3,
  h4 {
    margin: 20px 0 10px;
    color: #6fa1d4;
  }

  h1 {
    font-size: 2.5em;
    border-bottom: 2px solid #ddd;
    padding-bottom: 10px;
  }

  h2 {
    font-size: 2em;
    border-bottom: 1px solid #ddd;
    padding-bottom: 8px;
  }

  h3 {
    font-size: 1.5em;
    color: #4a90e2;
  }

  h4 {
    font-size: 1.25em;
    color: #4a90e2;
  }

  p {
    margin: 10px 0;
  }

  .codeBlock {
    background-color: #2c3e50;
  }

  code,
  pre {

    color: #ecf0f1;
    padding: 5px;
    border-radius: 3px;
    font-family: 'Courier New', Courier, monospace;
  }

  pre {
    overflow-x: auto;
    padding: 15px;
    border: 1px solid #34495e;
    margin: 15px 0;
  }

  .comment {
    color: #27ae60;
    /* Dark Green */
  }

  .variable {
    color: #3498db;
    /* Blue */
  }

  .function {
    color: #e67e22;
    /* Dark Orange */
  }

  .object,
  .type {
    color: #2ecc71;
    /* Dark Green */
  }

  .keyword {
    color: #8e44ad;
    /* Dark Purple */
  }

  .string {
    color: #d35400;
    /* Brown */
  }

  .number {
    color: #2ecc71;
    /* Yellow-Green */
  }

  .operator {
    color: #000;
    /* Black */
  }

  .punctuation {
    color: #2980b9;
    /* Another Blue */
  }

  a {
    color: #4a90e2;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  ul,
  ol {
    margin: 10px 0;
    padding-left: 20px;
  }

  li {
    margin: 5px 0;
  }

  strong {
    font-weight: bold;
    color: #333;
  }
</style>

