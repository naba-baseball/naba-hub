<script lang="ts" setup>
const props = defineProps<{
  modelValue?: string;
}>();
const model = useVModel(props, "modelValue");
</script>
<template>
  <div class="flex flex-col gap lg:items-end lg:flex-row">
    <FormKit
      v-model="model"
      outer-class="lg:w-80 flex flow-xs"
      wrapper-class="w-full"
      inner-class="flex items-center pl rounded border "
      input-class="border-none focus:border-none flex-grow bg-transparent"
      label-class="text-xs uppercase font-medium tracking-wide text-secondary"
      label="Search"
      type="search"
      name="search"
      id="search"
      placeholder="Search by name, team, etc"
    >
      <template #prefixIcon>
        <div class="i-tabler-search"></div>
      </template>
    </FormKit>
    <div class="lg:flex-grow">

    </div>
    <span>
      <slot>
        <StatsDateUploaded class="inline" />
      </slot>
    </span>
  </div>
</template>
