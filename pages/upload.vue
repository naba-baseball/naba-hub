<script lang="ts" setup>
import autoAnimate from '@formkit/auto-animate'
const file = ref()
const el = ref()
const dateFormatter = Intl.DateTimeFormat()
onMounted(() => {
  autoAnimate(el.value)
})
function handleFileSelect(event: Event) {
  const selectedFile = (event.target as HTMLInputElement).files?.[0]
  if (!selectedFile)
    return
  file.value = selectedFile
}
</script>

<template>
  <form action="/api/upload" method="post">
    <label for="file-upload" class="text-sm uppercase font-medium tracking-wide text-primary">Report Upload</label>
    <div class="mt-2 flex justify-center rounded-lg bg-surface border-color-primary/20 border-1  border-dashed px-6 py-10">
      <div ref="el" class="flow-layout flow-sm">
        <p class="font-semibold">
          Upload OOTP Online League Report
        </p>
        <div class="mt-4 flex items-baseline text-sm">
          <label class="flex flex-col items-start">
            <input id="file-upload" accept="application/gzip" name="file-upload" type="file" class="border-primary rounded px-3 py-1" @input="handleFileSelect">
          </label>
        </div>
        <div v-if="file" class="flex flex-col gap flow-xs">
          <div class="flex items-center gap-1 font-semibold">
            <span class="i-tabler-file-zip -ml-5 block text-primary/70 w-4 h-4" />
            {{ file.name }}
          </div>
          <div class="text-primary/70">
            File size: {{ Number(file.size / 1000 / 1000).toFixed(2) }} MB
          </div>
          <div class="text-primary/70">
            Last modified: {{ dateFormatter.format(file.lastModified) }}
          </div>
          <button class="btn btn-primary">
            <div class="flex mx-auto gap">
              <span class="i-tabler-file-upload w-5 h-5 inline-block" />
              Upload
            </div>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
