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
  const ids = [...input.ids];
  ids.unshift(props.folderInput.id);
  emit('update:changeRootHidden', {
    ids,
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
        ids: [],
        hiddenStatus: !folderInput.isSubFolderHidden,
      })"
      class="select-none cursor-pointer"
    >
      <div
        class="flex items-center space-x-2"
      >
        <div
          v-if="folderInput.folderList && !folderInput.isSubFolderHidden"
          class="i-ant-design-folder-open-twotone"
        >
        </div>
        <div
          v-if="folderInput.folderList && folderInput.isSubFolderHidden"
          class="i-ant-design-folder-twotone"
        >
        </div>

        <div>
          {{ folderInput.title }}
        </div>
      </div>
    </div>
    <div
      class="mt-2 space-y-2"
      v-if="folderInput.folderList && 
        folderInput.folderList.length > 0 && 
        !folderInput.isSubFolderHidden
      "
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
