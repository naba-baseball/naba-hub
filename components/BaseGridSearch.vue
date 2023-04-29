<script lang="ts" setup>
const props = defineProps<{
  modelValue?: string
}>()
const model = useVModel(props, 'modelValue')
const isCompact = isTableCompact()
const isFullWidth = isTableFullWidth()
</script>

<template>
  <div class="flex flex-col gap lg:items-end lg:flex-row">
    <ClientOnly>
      <FormKit
        id="search"
        v-model="model"
        wrapper-class="w-full"
        label="Search"
        type="search"
        name="search"
        placeholder="Search by name, team, etc"
      >
        <template #prefixIcon>
          <div class="m-2 w-4 h-4 i-tabler-search" />
        </template>
      </FormKit>
    </ClientOnly>
    <div class="lg:flex-grow" />
    <div class="flex justify-between gap flow-xs items-center">
      <span>
        <StatsDateUploaded class="inline" />
      </span>
      <ClientOnly>
        <button :class="isCompact ? 'btn-primary' : 'btn-secondary'" class="btn text-xs" type="button" @click="isCompact = !isCompact">
          <div class="i-tabler-resize w-5 h-5" />
          compact
        </button>
        <button :class="isFullWidth ? 'btn-primary' : 'btn-secondary'" class="btn text-xs hidden lg:inline-flex" type="button" @click="isFullWidth = !isFullWidth">
          <div class="i-tabler-arrows-maximize w-5 h-5" />
          full width
        </button>
      </ClientOnly>
    </div>
  </div>
</template>
