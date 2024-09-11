<script lang="ts">
  import type { CodeWordType } from "../types/CodeWordType";

  export let arg;
  export let desc;
  export let type: CodeWordType;
</script>

<span class="codeBlock">
  <code class={type}>{arg}</code>
</span>
<span>
  : {desc}
</span>

<style>
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
</style>