<script setup lang="ts">
import Folder from './components/Folder.vue';
import { ref, Ref } from 'vue';
import { FolderHiddenType, FolderType } from './datatype/folder';

const currentInput: Ref<FolderType> = ref({
  id: 'root1',
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
  const inputRef = currentInput.value;
  console.log(input);

  if (input.ids.length === 1) {
    inputRef.isSubFolderHidden = input.hiddenStatus;
    return
  }

  const newIds = [...input.ids];
  newIds.shift();

  let currentRef: FolderType | null = null;

  newIds.forEach((item, index) => {
    if (currentRef !== null && inputRef.folderList) {
      const result = inputRef.folderList.find((inputRefItem) => {
        return inputRefItem.id === item;
      });
      if (!result) return;
      currentRef = result;
      return;
    }

    if (currentRef === null) return;
    if (!currentRef.folderList) return;
    const getContent = currentRef.folderList.find((findItem) => {
      return findItem.id === item;
    });
    if (!getContent) return;
    currentRef = getContent;

    if ((newIds.length - 1) === index) {
      currentRef.isSubFolderHidden = input.hiddenStatus;
    }
  })

}
</script>

<template>
  <Folder
    @update:changeRootHidden="testClick"
    :folderInput="currentInput"
  ></Folder>
</template>
