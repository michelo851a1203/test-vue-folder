<script setup lang="ts">
import type { FolderHiddenType, FolderType } from '../datatype/folder';

const props = withDefaults(defineProps<{
  folderInput: FolderType;
}>(), {
})

const emit = defineEmits<{
  (e: 'update:changeRootHidden', isHiddenObject: FolderHiddenType): void;
}>();


const testConnection = (input: FolderHiddenType) => {
  emit('update:changeRootHidden', {
    id: input.id,
    layerCount: ++input.layerCount,
    hiddenStatus: input.hiddenStatus,
  })
}

</script>

<template>
  <div
    class="border rounded-xl px-3 py-2 w-full box-border"
  >
    <div
      @click="testConnection({
        id: folderInput.id,
        layerCount: 0,
        hiddenStatus: !folderInput.isHidden,
      })"
      class="select-none cursor-pointer"
    >
      {{ folderInput.title }}
    </div>
    <div
      class="mt-2 space-y-2"
      v-if="folderInput.folderList && folderInput.folderList.length > 0"
    >
      <Folder
        @update:changeRootHidden="testConnection"
        v-for="subItem in folderInput.folderList"
        :key="subItem.id"
        :folderInput="subItem"
      ></Folder>
    </div>
  </div>
</template>
