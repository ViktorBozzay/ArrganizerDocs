<script lang="ts">
  export let tableData: { header: string[]; body: string[][] };
  const { header, body } = tableData;
</script>

<table>
  <thead>
  <tr>
    {#each header as title}
      <th>{title}</th>
    {/each}
  </tr>
  </thead>
  <tbody>
    {#each body as row}
      <tr>
        {#each row as cell}
          <td>{cell}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }

  table th,
  table td {
    padding: 10px 15px;
  }

  table tbody tr {
    border-bottom: 1px solid #222;
  }

  table tbody tr:nth-of-type(even) {
    background-color: #333;
  }

  table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
</style>