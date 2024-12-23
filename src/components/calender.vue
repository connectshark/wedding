<template>
  <table class="table-fixed w-full">
    <caption class="text-2xl font-semibold mb-4">2025 年 11 月</caption>
    <thead>
      <tr class="text-xl font-medium">
        <th v-for="week in weeks">{{ week }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in days" :key="row[0]">
        <td class="" v-for="item in row" :class="{ 'bg-primary rounded-2xl': item === props.date }">{{ item }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps({
  date: Number
})
const weeks = ['日', '一', '二', '三', '四', '五', '六']
const days = [
  [null, null, null, null, null, null, 1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
  [30]
]
</script>

<style scoped>
</style>