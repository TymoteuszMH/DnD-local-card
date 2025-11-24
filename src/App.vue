<template>
  <main>
    <RouterView class="max-h-screen overflow-y-hidden" />
  </main>
</template>

<style>
.el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: black !important;
  border-color: black !important;
}

.el-input.is-disabled .el-input__inner {
  color: rgb(90, 90, 90);
  -webkit-text-fill-color: rgb(90, 90, 90);
}

.card-panel {
  padding: calc(var(--spacing) * 2);
  background-color: var(--el-color-primary);
  border-color: var(--el-color-primary);
  border-style: var(--tw-border-style);
  border-width: 1px;
  border-radius: var(--radius-md);
  gap: calc(var(--spacing) * 2);
}
.el-dialog__title{
  color: white !important;
}

.transparent-input {
  .el-input__wrapper, .el-textarea__inner, .el-select__wrapper, .el-select-dropdown__item {
    background-color: transparent !important;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner{
    background-color: var(--el-color-primary) !important;
    border-color: var(--el-color-primary) !important;
  }
  .el-checkbox__input.is-checked+.el-checkbox__label{
    color: var(--el-color-primary) !important;
  }

  .el-select-dropdown__item:hover{
    transition: all ease-in-out 0.1s;
    background: rgba(255, 255, 255, 0.1) !important;
  }

  .el-select-dropdown__item.is-selected{
    color: var(--el-color-primary) !important;
    background: rgba(255, 255, 255, 0.05) !important;
  }

  .el-input__inner, .el-textarea__inner, .el-select__placeholder, .el-select-dropdown__item, .el-checkbox__label {
    color: white !important;
  }
}

.sidebar-enter-active,
.sidebar-leave-active {
  transition: left 0.3s ease;
}

.sidebar-enter-from,
.sidebar-leave-to {
  left: -300px;
}

.bg-enter-active,
.bg-leave-active {
  transition: opacity 0.3s ease;
}

.bg-enter-from,
.bg-leave-to {
  opacity: 0;
}
</style>
