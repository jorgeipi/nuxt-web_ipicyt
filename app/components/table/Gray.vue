<script setup lang="ts">
interface Props {
  thSize?: string;
  theadColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  thSize: '1.5rem',
  theadColor: '#848ba6'
});
</script>

<template>
  <div class="table-gray">
    <table>
      <!-- // slot para body encima de header -->
      <slot name="body-above" />
      <thead :style="{ backgroundColor: theadColor }">
        <slot name="thead" :th-size="thSize" />
      </thead>
      <tbody>
        <slot name="tbody" />
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
.table-gray {
  .intro-header {
    display: table-header-group;
  }
}

.table-gray {
  margin: 0rem 0;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0rem;
  }

  thead {
    background-color: var(--thead-color);
    color: var(--color-white);
  }

  th,
  td {
    padding: 1rem;
    font-size: 1.5rem;
    border: 1px solid #d8d8d8;
    text-align: left;
    vertical-align: top;
  }

  th {
    font-weight: 600;
    font-size: var(--th-size);
  }

  @media screen and (max-width: 768px) {

    table,
    thead,
    tbody:not(.intro-header),
    th,
    td,
    tr:not(.intro-header tr) {
      display: block;
      width: 100%;
    }

    b {
      display: contents;
    }

    u {
      display: contents;
    }

    thead {
      display: none;
    }

    tr:not(.intro-header tr) {
      margin-bottom: 4rem;
      border: 1px solid #ccc;
    }

    tbody:not(.intro-header) td {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      padding: 0;
      border-top: 1px solid #eee;
      word-break: break-word;
      hyphens: auto;
      -webkit-hyphens: auto;
      -moz-hyphens: auto;
      -ms-hyphens: auto;
    }

    tbody:not(.intro-header) td::before {
      content: attr(data-label);
      display: inline-block;
      width: 115px;
      min-width: 115px;
      padding: 1rem;
      background-color: #848ba6;
      color: white;
      font-weight: bold;
      box-sizing: border-box;
      margin-right: 1rem;
    }

    tbody:not(.intro-header) td {
      width: 100%;
      padding-left: 0;
    }

    tbody:not(.intro-header) td>* {
      padding: 1rem;
      width: 60%;
      box-sizing: border-box;
      background-color: white;
    }

    tbody:not(.intro-header) td:last-child {
      border-bottom: none;
    }
  }
}
</style>