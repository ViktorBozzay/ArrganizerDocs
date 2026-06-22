<script lang="ts">
  import Installation from "./Installation.svelte";
  import Introduction from "./Introduction.svelte";
  import TableOfContent from "./TableOfContent.svelte";
  import Constructor from "./Constructor.svelte";

  import GetTables from "./GetTables.svelte";
  import GetData from "./GetData.svelte";
  import GetOriginalData from "./GetOriginalData.svelte";
  import GetHistory from "./GetHistory.svelte";

  import AddKey from "./AddKey.svelte";
  import RenameKey from "./RenameKey.svelte";
  import RemoveKey from "./RemoveKey.svelte";
  import RemoveKeys from "./RemoveKeys.svelte";
  import KeepKeys from "./KeepKeys.svelte";
  import MergeColumns from "./MergeColumns.svelte";
  import ReorderColumns from "./ReorderColumns.svelte";

  import GroupByKey from "./GroupByKey.svelte";
  import GroupByKeys from "./GroupByKeys.svelte";
  import GroupByDate from "./GroupByDate.svelte";
  import FilterByKey from "./FilterByKey.svelte";
  import Contains from "./Contains.svelte";
  import Where from "./Where.svelte";
  import Distinct from "./Distinct.svelte";

  import ModifyValue from "./ModifyValue.svelte";
  import MapRows from "./MapRows.svelte";
  import SortByKey from "./SortByKey.svelte";

  import Count from "./Count.svelte";
  import Sum from "./Sum.svelte";
  import Mean from "./Mean.svelte";
  import FrequencyByKeysValue from "./FrequencyByKeysValue.svelte";

  import Take from "./Take.svelte";
  import Skip from "./Skip.svelte";
  import Head from "./Head.svelte";
  import Tail from "./Tail.svelte";
  import Sample from "./Sample.svelte";

  import Pivot from "./Pivot.svelte";
  import Join from "./Join.svelte";
  import Pipe from "./Pipe.svelte";
  import Diff from "./Diff.svelte";

  import Clone from "./Clone.svelte";
  import Snapshot from "./Snapshot.svelte";
  import ToJSON from "./ToJSON.svelte";
  import FromJSON from "./FromJSON.svelte";
  import Reset from "./Reset.svelte";
  import Undo from "./Undo.svelte";
  import Redo from "./Redo.svelte";
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

      <h2 id="data-operations">Data Operations</h2>
      <GetTables />
      <GetData />
      <GetOriginalData />
      <GetHistory />

      <h2 id="column-operations">Column Operations</h2>
      <AddKey />
      <RenameKey />
      <RemoveKey />
      <RemoveKeys />
      <KeepKeys />
      <MergeColumns />
      <ReorderColumns />

      <h2 id="grouping-filtering">Grouping & Filtering</h2>
      <GroupByKey />
      <GroupByKeys />
      <GroupByDate />
      <FilterByKey />
      <Contains />
      <Where />
      <Distinct />

      <h2 id="transformation">Transformation</h2>
      <ModifyValue />
      <MapRows />
      <SortByKey />

      <h2 id="aggregation">Aggregation</h2>
      <Count />
      <Sum />
      <Mean />
      <FrequencyByKeysValue />

      <h2 id="pagination">Pagination</h2>
      <Take />
      <Skip />
      <Head />
      <Tail />
      <Sample />

      <h2 id="advanced-operations">Advanced Operations</h2>
      <Pivot />
      <Join />
      <Pipe />
      <Diff />

      <h2 id="state-management">State Management</h2>
      <Clone />
      <Snapshot />
      <ToJSON />
      <FromJSON />
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
