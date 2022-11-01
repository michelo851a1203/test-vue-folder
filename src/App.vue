<script setup lang="ts">
import Folder from './components/Folder.vue';
import FolderTab from './components/FolderTab.vue';
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
          // folderList: [
          //   {
          //     id: 'wow1',
          //     title: 'wow test1',
          //   }
          // ]
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

  if (input.ids.length === 1) {
    inputRef.isSubFolderHidden = input.hiddenStatus;
    return
  }

  const newIds = [...input.ids];
  newIds.shift();

  let temp: FolderType  = {
    id: '',
    title: '',
  }
  newIds.forEach(item => {
    if (temp.id === '') {
      if (!inputRef.folderList) return;
      const findFolderItem = inputRef.folderList.find(inputItem => inputItem.id === item);
      if (!findFolderItem) return;
      temp = findFolderItem;
      return;
    }
    if (!temp.folderList) return;
    const findItem = temp.folderList.find(inputItem => inputItem.id === item);
    if (!findItem) return;
    temp = findItem;
  }) 
  if (temp.id !== '') {
    temp.isSubFolderHidden = input.hiddenStatus;
  }

}
</script>

<template>
  <FolderTab
    class="w-1/2 mb-4"
  ></FolderTab>
  <Folder
    class="w-1/2"
    @update:changeRootHidden="testClick"
    :folderInput="currentInput"
  ></Folder>
</template>
