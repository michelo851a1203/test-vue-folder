<script setup lang="ts">
  const props = withDefaults(defineProps<{
    title: string;
    isOpen?: boolean;
  }>(), {
    title: '',
    isOpen: false,
  })

</script>

<template>
  <section
    class="flex items-center space-x-1 cursor-pointer"
  >
    <div
      v-if="isOpen"
      class="i-ant-design-folder-open-twotone text-xl text-gray-800"
    ></div>
    <div
      v-if="!isOpen"
      class="i-ant-design-folder-twotone text-xl text-gray-800"
    ></div>

    <div>
      {{ title }}
    </div>
  </section>
</template>
