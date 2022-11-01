<script setup lang="ts">
import FolderTabObject from './FolderTabObject.vue';
import FolderDivider from './FolderDivider.vue';

// const props = withDefaults(defineProps<{
//
// }>(), {
//
// })


</script>

<template>
  <article
    class="overflow-x-auto px-4 py-3 border h-2rem 
      text-clip whitespace-nowrap rounded-xl flex items-center
      space-x-2
    "
  >
    <FolderTabObject
      title="root title"
      isOpen
    ></FolderTabObject>
    <FolderDivider></FolderDivider>
    <FolderTabObject
      title="new title 2"
    ></FolderTabObject>
  </article>
</template>
