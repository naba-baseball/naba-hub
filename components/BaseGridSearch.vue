<script lang="ts" setup>
const props = defineProps<{
  modelValue?: string;
}>();
const model = useVModel(props, "modelValue");
</script>
<template>
  <div class="flex flex-col px-flow flow-xs md:flow-base md:px-0 md:flex-row md:items-end gap-flow">
    <AInput
      id="search"
      label="Search"
      type="search"
      name="search"
      placeholder="Search player name, team, etc"
      v-model="model"
    />
    <span>
      <slot>
        <StatsDateUploaded />
      </slot>
    </span>
  </div>
</template>
