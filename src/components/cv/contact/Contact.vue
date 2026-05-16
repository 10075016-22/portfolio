<template>
  <div class="my-12">
    <SimpleTitle :title="$t('titles.contact')" color="primary" />

    <div class="grid grid-cols-1">
      <div>
        <h3 class="mb-4 text-2xl font-bold text-[rgb(var(--v-theme-primary))]">
          {{ $t('contact.subtitle') }}
        </h3>
        <p class="mb-6 text-[rgb(var(--v-theme-on-surface-variant))]">{{ $t('contact.description') }}</p>

        <div class="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
          <div
            v-for="(method, index) in contactMethods"
            :key="index"
            class="group flex min-h-[72px] w-full cursor-pointer items-center gap-3 rounded-xl border border-[rgb(var(--v-theme-outline))]/20 bg-[rgb(var(--v-theme-surface))]/50 p-4 transition-all duration-300 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 hover:bg-[rgb(var(--v-theme-surface))]/85 hover:-translate-y-0.5 hover:shadow-lg sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.67rem)]"
            :class="method.isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'"
            :data-method-id="method.id"
            @click="handleContact(method)"
          >
            <div class="shrink-0 rounded-lg bg-[rgb(var(--v-theme-primary))]/10 p-2">
              <Icon :icon="mdiToIconify(method.icon)" class="size-8" :class="methodIconClass(method.color)" />
            </div>
            <div class="min-w-0 flex-1 text-[rgb(var(--v-theme-on-surface))]">
              <h4 class="m-0 text-base font-semibold">{{ method.title }}</h4>
              <p class="m-0 mt-1 text-sm text-[rgb(var(--v-theme-on-surface-variant))]">{{ method.value }}</p>
            </div>
            <div
              class="shrink-0 text-[rgb(var(--v-theme-on-surface-variant))] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
            >
              <Icon icon="mdi:arrow-right" class="size-5" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import SimpleTitle from '@/components/utils/SimpleTitle.vue'
import { mdiToIconify } from '@/utils/mdiToIconify.js'

const { t } = useI18n()

const contactMethods = computed(() => [
  {
    id: 1,
    title: 'Email',
    value: 'sell3.1998@hotmail.com',
    icon: 'mdi-email',
    color: 'primary',
    action: 'mailto:sell3.1998@hotmail.com',
    isVisible: true,
  },
  {
    id: 2,
    title: 'WhatsApp',
    value: '+57 300 275 0183',
    icon: 'mdi-whatsapp',
    color: 'success',
    action: 'https://wa.me/+573002750183',
    isVisible: true,
  },
  {
    id: 3,
    title: 'LinkedIn',
    value: t('contact.mylinkedIn'),
    icon: 'mdi-linkedin',
    color: 'info',
    action: 'https://www.linkedin.com/in/santiago-lopez-06812410a/',
    isVisible: true,
  },
  {
    id: 4,
    title: 'GitHub',
    value: 'github.com/10075016-22',
    icon: 'mdi-github',
    color: 'dark',
    action: 'https://github.com/10075016-22',
    isVisible: true,
  },
])

function methodIconClass(color) {
  const m = {
    primary: 'text-blue-600 dark:text-blue-400',
    success: 'text-emerald-600 dark:text-emerald-400',
    info: 'text-sky-600 dark:text-sky-400',
    dark: 'text-slate-800 dark:text-slate-200',
  }
  return m[color] || m.primary
}

function handleContact(method) {
  if (method.action.startsWith('mailto:')) {
    window.location.href = method.action
  } else {
    window.open(method.action, '_blank')
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const methodId = parseInt(entry.target.dataset.methodId, 10)
          const method = contactMethods.value.find((m) => m.id === methodId)
          if (method) {
            method.isVisible = true
          }
        }
      })
    },
    { threshold: 0.3 },
  )

  document.querySelectorAll('[data-method-id]').forEach((el) => {
    observer.observe(el)
  })
})
</script>
