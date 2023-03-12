<script lang="ts" setup>
const props = defineProps<{
  modelValue?: string
}>()
const model = useVModel(props, 'modelValue')
const isCompact = isTableCompact()
const isFullWidth = isTableFullWidth()
</script>

<template>
  <ClientOnly>
    <div class="flex flex-col gap lg:items-end lg:flex-row">
      <FormKit
        id="search"
        v-model="model"
        outer-class="lg:w-80 flex flow-xs"
        wrapper-class="w-full"
        inner-class="flex items-center pl rounded border-primary bg-surface"
        input-class="border-none focus:border-none flex-grow bg-transparent"
        label-class="text-xs uppercase font-medium tracking-wide text-secondary"
        label="Search"
        type="search"
        name="search"
        placeholder="Search by name, team, etc"
      >
        <template #prefixIcon>
          <div class="i-tabler-search" />
        </template>
      </FormKit>
      <div class="lg:flex-grow" />
      <div class="flex justify-between gap flow-xs items-center">
        <span>
          <StatsDateUploaded class="inline" />
        </span>
        <button :class="isCompact ? 'btn-primary' : 'btn-secondary'" class="btn text-xs" type="button" @click="isCompact = !isCompact">
          <div class="i-tabler-resize" />
          compact
        </button>
        <button :class="isFullWidth ? 'btn-primary' : 'btn-secondary'" class="btn text-xs hidden lg:inline-flex" type="button" @click="isFullWidth = !isFullWidth">
          <div class="i-tabler-arrows-maximize" />
          full width
        </button>
      </div>
    </div>
  </ClientOnly>
</template>
