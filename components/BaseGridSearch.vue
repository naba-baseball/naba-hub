<script lang="ts" setup>
const props = defineProps<{
    modelValue?: string
}>()
const model = useVModel(props, 'modelValue')

</script>
<template>
  <div>
    <div class="form-control inline-block">
      <label class="label" for="search">
        <span class="label-text">Search</span>
      </label>
      <input
        class="input input-bordered w-80"
        id="search"
        name="search"
        type="text"
        placeholder="Search player name, team, etc"
        v-bind="$attrs"
        v-model="model"
      />
    </div>
    <span class="md:ml">
        <slot>
            <StatsDateUploaded class="inline" />
        </slot>
    </span>
  </div>
</template>
