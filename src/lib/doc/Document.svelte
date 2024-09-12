<script lang="ts">
  import Installation from "./Installation.svelte";
  import Introduction from "./Introduction.svelte";
  import TableOfContent from "./TableOfContent.svelte";
  import Constructor from "./Constructor.svelte";
  import GetTables from "./GetTables.svelte";
  import GetHistory from "./GetHistory.svelte";
  import GetData from "./GetData.svelte";
  import GetOriginalData from "./GetOriginalData.svelte";
  import Reset from "./Reset.svelte";
  import Undo from "./Undo.svelte";
  import RemoveKey from "./RemoveKey.svelte";
  import RemoveKeys from "./RemoveKeys.svelte";
  import GroupByKey from "./GroupByKey.svelte";
  import GroupByKeys from "./GroupByKeys.svelte";
  import FilterByKey from "./FilterByKey.svelte";
  import Contains from "./Contains.svelte";
  import ModifyValue from "./ModifyValue.svelte";
  import SortByKey from "./SortByKey.svelte";
  import GroupByDate from "./GroupByDate.svelte";
  import FrequencyByKeysValue from "./FrequencyByKeysValue.svelte";
  import ReorderColumns from "./ReorderColumns.svelte";
  import Redo from "./Redo.svelte";
  import MergeColumns from "./MergeColumns.svelte";
  import KeepKeys from "./KeepKeys.svelte";
</script>

<div class="content">
  <div class="left">
    <TableOfContent />
  </div>
  <div class="right">
    <div class="doc">
      <div class="header">
        <div class="decor">
          <img src="./decor1.webp" alt="decor" />
        </div>
        <div class="intro">
          <Introduction />
        </div>
      </div>
      <Installation />
      <Constructor />

      <h2 id="methods">Methods</h2>
      <GetTables />
      <GetHistory />
      <GetData />
      <GetOriginalData />
      <RemoveKey />
      <RemoveKeys />
      <KeepKeys />
      <GroupByDate />
      <GroupByKey />
      <GroupByKeys />
      <FilterByKey />
      <Contains />
      <ModifyValue />
      <SortByKey />
      <FrequencyByKeysValue />
      <MergeColumns />
      <ReorderColumns />
      <Reset />
      <Undo />
      <Redo />
    </div>
  </div>
</div>

<style>
  .content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }

  .left {
    width: 20%;
    min-width: 240px;
    max-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 10px;
    box-sizing: border-box;
  }

  .right {
    flex-grow: 1;
    overflow-y: auto;
    padding: 20px;
    box-sizing: border-box;
    max-height: 100vh;
  }

  .doc {
    margin: auto 1rem;
    min-width: 500px;
    width: 80%;
  }

  .header {
    display: flex;
    gap: 5%;
  }
  .title {
    width: 65%;
  }
  .decor {
    width: 30%;
    min-width: 232px;
    height: 232px;
    border-radius: 1rem;
    overflow: hidden;
    aspect-ratio: 1/1;
    box-shadow: 1px 2px 5px darkolivegreen;
  }

  .decor:hover img {
    transform: scale(1.05);
  }
  .decor img {
    transform: scale(1);
    transform-origin: center center;
    width: 100%;
    aspect-ratio: 1/1;
    transition: all 0.5s ease;
  }
</style>
