<script lang="ts">
  import Installation from "./Installation.svelte";
  import Introduction from "./Introduction.svelte";
  import TableOfContent from "./TableOfContent.svelte";
  import Constructor from "./Constructor.svelte"
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
</script>

<Introduction />
<TableOfContent />
<Installation />
<Constructor />

<h2 id="methods">Methods</h2>
<GetTables />
<GetHistory />
<GetData />
<GetOriginalData />
<Reset />
<Undo />
<RemoveKey />
<RemoveKeys />
<GroupByDate />
<GroupByKey />
<GroupByKeys />
<FilterByKey />
<Contains />
<ModifyValue />
<SortByKey />
<FrequencyByKeysValue />
<ReorderColumns />