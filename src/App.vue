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

.name {
  .el-input__wrapper {
    background-color: transparent;
  }

  .el-input__inner {
    color: white;
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
