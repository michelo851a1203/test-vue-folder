<script setup lang="ts">
import Folder from './components/Folder.vue';
import { ref, Ref } from 'vue';
import { FolderHiddenType, FolderType } from './datatype/folder';

const currentInput: Ref<FolderType> = ref({
  id: 'id1',
  title: 'root title',
  folderList: [
    {
      id: 'id1',
      title: 'new title 1',
    },
    {
      id: 'id2',
      title: 'new title 2',
      folderList: [
        {
          id: 'cool1',
          title: 'content new title 1',
        },
        {
          id: 'cool2',
          title: 'content new title 2',
        },
        {
          id: 'cool3',
          title: 'content new title 3',
        },
      ]
    },
    {
      id: 'id3',
      title: 'new title 3',
    },
  ]
});

const testClick = (input: FolderHiddenType) => {
  for (let index = input.layerCount;index > 0; index--) {
    currentInput.value
  }
  console.log(input);
}
</script>

<template>
  <Folder
    @update:changeRootHidden="testClick"
    :folderInput="currentInput"
  ></Folder>
</template>
