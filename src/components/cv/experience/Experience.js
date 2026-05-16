import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import colors from '@/utils/colors'

/**
 * Lista única de experiencias (Timeline + vista alternativa Experience.vue).
 * @param {(key: string) => string} t
 */
export function createExperienceList(t) {
  return [
    {
      id: 1,
      fecha: `Nov 2025 - ${t('others.actualidad')}`,
      cargo: `${t('cargos.frontend')} ${t('cargos.semisenior')}`,
      empresa: 'Homepower SAS',
      descripcion: t('experience.descripcion.homepower'),
      color: 'info',
      backgroundIcon: '#2196F3',
      isVisible: true,
      sKill: [
        { color: colors.ANGULAR, icon: 'mdi-angular', text: 'Angular' },
        { color: colors.TYPESCRIPT, icon: 'mdi-nx', text: 'Nx' },
        { color: colors.VITE, icon: 'mdi-stencil', text: 'StencilJs' },
      ],
    },
    {
      id: 2,
      fecha: 'Sep 2022 - Ago 2025',
      cargo: t('cargos.fullstacks'),
      empresa: 'Techboss SAS',
      descripcion: t('experience.descripcion.techboss'),
      color: 'info',
      backgroundIcon: '#2196F3',
      isVisible: true,
      sKill: [
        { color: colors.PHP, icon: 'mdi-language-php', text: 'PHP' },
        { color: colors.VUE, icon: 'mdi-vuejs', text: 'VUE JS' },
        { color: 'grey', icon: '', text: 'WebRTSP', image: '/icons/skill/webrtc.svg' },
        { color: 'info', icon: '', text: 'Mysql', image: '/icons/skill/mysql.svg' },
        { color: 'success', icon: '', text: 'MongoDB', image: '/icons/skill/mongodb.svg' },
        { color: '', icon: '', text: 'AWS', image: '/icons/skill/aws.svg' },
      ],
    },
    {
      id: 3,
      fecha: 'Sep 2021 - Oct 2023',
      cargo: t('cargos.ingenieroSoftware'),
      empresa: 'Sipremcol',
      descripcion: t('experience.descripcion.sipremcol'),
      color: 'info',
      backgroundIcon: '#2196F3',
      isVisible: true,
      sKill: [
        { color: colors.PHP, icon: 'mdi-language-php', text: 'PHP' },
        { color: colors.VUE, icon: 'mdi-vuejs', text: 'VUE JS' },
        { color: '', icon: '', text: 'Mysql', image: '/icons/skill/mysql.svg' },
        { color: colors.DOCKER, icon: 'mdi-docker', text: 'Docker' },
      ],
    },
    {
      id: 4,
      fecha: 'Ago 2021 - Oct 2021',
      cargo: t('cargos.backend'),
      empresa: 'Graphic Market Company',
      descripcion: t('experience.descripcion.gmp'),
      color: 'info',
      backgroundIcon: '#2196F3',
      isVisible: true,
      sKill: [
        { color: colors.NODE, icon: 'mdi-nodejs', text: 'Node JS' },
        { color: colors.VUE, icon: 'mdi-vuejs', text: 'VUE JS' },
      ],
    },
    {
      id: 5,
      fecha: 'Dic 2020 - Jun 2021',
      cargo: `${t('cargos.backend')} Jr`,
      empresa: 'Inxait Corp',
      descripcion: t('experience.descripcion.inxait'),
      color: 'info',
      backgroundIcon: '#2196F3',
      isVisible: true,
      sKill: [
        { color: colors.LARAVEL, icon: 'mdi-laravel', text: 'Laravel' },
        { color: colors.VUE, icon: 'mdi-vuejs', text: 'VUE JS' },
        { color: colors.LARAVEL, icon: 'mdi-language-html5', text: 'HTML 5' },
      ],
    },
    {
      id: 6,
      fecha: 'Abr. 2020 - Mar. 2021',
      cargo: t('cargos.desarrolladorSoftware'),
      empresa: 'Intelligent Electronic Solutions (IES)',
      descripcion: t('experience.descripcion.ies'),
      color: 'info',
      backgroundIcon: '#2196F3',
      isVisible: true,
      sKill: [
        { color: colors.LARAVEL, icon: 'mdi-angularjs', text: 'Angular' },
        { color: colors.JAVA, icon: 'mdi-language-java', text: 'Java' },
      ],
    },
    {
      id: 7,
      fecha: 'Ene. 2020 - Mar. 2020',
      cargo: t('cargos.desarrolladorSoftware'),
      empresa: 'SSTEC',
      descripcion: t('experience.descripcion.sstec'),
      color: 'info',
      backgroundIcon: '#2196F3',
      isVisible: true,
      sKill: [
        { color: colors.JAVASCRIPT, icon: 'mdi-language-javascript', text: 'Javascript' },
      ],
    },
    {
      id: 8,
      fecha: 'Jul. 2019 - Dic. 2019',
      cargo: t('cargos.desarrolladorWeb'),
      empresa: 'Inversiones GERA SAS',
      descripcion: t('experience.descripcion.gera'),
      color: 'info',
      backgroundIcon: '#2196F3',
      isVisible: true,
      sKill: [
        { color: colors.PHP, icon: 'mdi-language-php', text: 'PHP' },
        { color: colors.JAVA, icon: 'mdi-language-java', text: 'Java' },
        { color: colors.JAVASCRIPT, icon: 'mdi-language-javascript', text: 'Javascript' },
        { color: '', icon: '', text: 'Mysql', image: '/icons/skill/mysql.svg' },
      ],
    },
  ]
}

export function Experience() {
  const { t } = useI18n()
  const Listado = computed(() => createExperienceList(t))
  return {
    Listado,
  }
}
