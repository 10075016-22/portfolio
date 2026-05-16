<template>
  <div>
    <SimpleTitle :title="$t('titles.habilities')" />
    <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
    >
      <ProgressInfo
        v-for="(item, index) in aSkill"
        :key="`${index}__`"
        :color="item.color"
        :icon="item.icon"
        :image="item.image"
        :label="item.experience + ' ' + $t('others.years')"
        :text="item.skill"
        :progress="item.value"
        :max="item.max"
        :delay="index * 200"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ProgressInfo from '@/components/utils/ProgressInfo.vue'
import SimpleTitle from '@/components/utils/SimpleTitle.vue'

const aSkill = ref([
  {
    skill: 'Javascript',
    icon: 'mdi-language-javascript',
    color: 'warning',
    value: 0,
    experience: '4',
  },
  {
    skill: 'Aws',
    icon: 'mdi-aws',
    image: '',
    color: '',
    value: 0,
    experience: '2',
  },
  {
    skill: 'Vue js',
    icon: 'mdi-vuejs',
    color: 'success',
    value: 0,
    experience: '4',
  },
  {
    skill: 'PHP',
    icon: 'mdi-language-php',
    color: '#777BB3',
    value: 0,
    experience: '4',
  },
  {
    skill: 'MySQL',
    icon: 'mdi-database',
    color: 'blue',
    value: 0,
    experience: '4',
  },
  {
    skill: 'Java',
    icon: 'mdi-language-java',
    color: '#634533',
    value: 0,
    experience: '4',
  },
  {
    skill: 'MongoDB',
    icon: 'mdi-database-outline',
    color: 'success',
    value: 0,
    experience: '2',
  },
  {
    skill: 'Docker',
    icon: 'mdi-docker',
    color: 'blue',
    value: 0,
    experience: '2',
  },
  {
    skill: 'Python',
    icon: 'mdi-language-python',
    color: 'teal',
    value: 0,
    experience: '2',
  },
  {
    skill: 'Laravel',
    icon: 'mdi-laravel',
    color: '#F05340',
    value: 0,
    experience: '3',
    max: 5,
  },
  {
    skill: 'Angular',
    icon: 'mdi-angular',
    color: '#DD0031',
    value: 0,
    experience: '3',
    max: 5,
  },
])

onMounted(() => {
  setTimeout(() => getItems(), 2000)
})

function getItems() {
  aSkill.value = [
    {
      skill: 'Javascript',
      icon: 'mdi-language-javascript',
      color: 'warning',
      value: 5,
      experience: '5',
      max: 5,
    },
    {
      skill: 'Aws',
      icon: '',
      image: '/icons/skill/aws.svg',
      color: '',
      value: 2,
      experience: '2',
      max: 5,
    },
    {
      skill: 'Vue js',
      icon: 'mdi-vuejs',
      color: 'success',
      value: 5,
      experience: '5',
      max: 5,
    },
    {
      skill: 'PHP',
      icon: 'mdi-language-php',
      color: '#777BB3',
      value: 5,
      experience: '5',
      max: 5,
    },
    {
      skill: 'MySQL',
      icon: 'mdi-database',
      color: 'blue',
      value: 4,
      experience: '4',
      max: 5,
    },
    {
      skill: 'Java',
      icon: 'mdi-language-java',
      color: '#634533',
      value: 2,
      experience: '2',
      max: 5,
    },
    {
      skill: 'MongoDB',
      image: '/icons/skill/mongodb.svg',
      icon: '',
      color: 'success',
      value: 2,
      experience: '2',
      max: 5,
    },
    {
      skill: 'Docker',
      icon: 'mdi-docker',
      color: 'blue',
      value: 2,
      experience: '2',
      max: 5,
    },
    {
      skill: 'Python',
      icon: 'mdi-language-python',
      color: 'teal',
      value: 2,
      experience: '2',
      max: 5,
    },
    {
      skill: 'Laravel',
      icon: 'mdi-laravel',
      color: '#F05340',
      value: 3,
      experience: '3',
      max: 5,
    },
    {
      skill: 'Angular',
      icon: 'mdi-angular',
      color: '#DD0031',
      value: 3,
      experience: '3',
      max: 5,
    },
  ]
}
</script>
