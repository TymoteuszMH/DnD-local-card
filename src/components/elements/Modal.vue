<script setup lang="ts">
    type ISaveButton = {text: string, func: () => any, disabled?: boolean, type?: string}
    defineProps<{
        show: boolean
        title: string
        saveButton: ISaveButton
        hide: () => void
        onClose: () => any
    }>();
</script>

<template>
  <el-dialog
    :model-value="show"
    @update:model-value="hide"
    @before-close="onClose"
    :title="title"
    center
    class="w-full! max-w-[500px] border border-white bg-gray-900! absolute! top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0!"
    header-class="text-white!"
  >
    <slot></slot>
    <template #footer>
        <div class="dialog-footer">
            <el-button @click="hide">Cancel</el-button>
            <el-button :type="saveButton.type ?? 'primary'" @click="saveButton.func" :disabled="saveButton.disabled">{{ saveButton.text }}</el-button>
        </div>
    </template>
  </el-dialog>
</template>