<template>
  <span class="group relative inline-flex shrink-0 align-middle">
    <button
      type="button"
      class="cursor-pointer inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-sm transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
      :class="buttonClass"
      @click="$emit('click')"
    >
      <slot />
    </button>
    <span
      class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-800 px-2 py-1 text-xs text-white opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 dark:bg-slate-700"
    >
      {{ label }}
    </span>
  </span>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  buttonClass: {
    type: String,
    default: '',
  },
})

defineEmits(['click'])
</script>
