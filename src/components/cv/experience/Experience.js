import { computed } from "vue";
import { useI18n } from "vue-i18n";
import colors from "@/utils/colors";

export function Experience(props) {
  const { t, locale } = useI18n();
  const Listado = computed(() => [
    {
      fecha: `Sep 2022 - ${t("others.actualidad")}`,
      cargo: t("cargos.fullstacks"),
      empresa: "Techboss SAS",
      descripcion: t('experience.descripcion.techboss'),
      sKill: [
        {
          color: colors.PHP,
          icon: "mdi-language-php",
          text: "PHP",
        },
        {
          color: colors.VUE,
          icon: "mdi-vuejs",
          text: "VUE JS",
        },
        {
          color: '',
          icon: "",
          text: "WebRTSP",
          image: '/icons/skill/webrtc.svg'
        },
        {
          color: '',
          icon: "",
          text: "Mysql",
          image: '/icons/skill/mysql.svg'
        },
        {
          color: '',
          icon: "",
          text: "MongoDB",
          image: '/icons/skill/mongodb.svg'
        },
        {
          color: '',
          icon: "",
          text: "AWS",
          image: '/icons/skill/aws.svg'
        }
      ],
    },
    {
      fecha: `Sep 2021 - Oct 2023`,
      cargo: t("cargos.ingenieroSoftware"),
      empresa: "Sipremcol",
      descripcion: t('experience.descripcion.sipremcol'),
      sKill: [
        {
          color: colors.PHP,
          icon: "mdi-language-php",
          text: "PHP",
        },
        {
          color: colors.VUE,
          icon: "mdi-vuejs",
          text: "VUE JS",
        },
        {
          color: '',
          icon: "",
          text: "Mysql",
          image: '/icons/skill/mysql.svg'
        },
        {
          color: colors.DOCKER,
          icon: "mdi-docker",
          text: "Docker",
          image: ''
        }
      ],
    },
    {
      fecha: `Ago 2021 - Oct 2021`,
      cargo: t("cargos.backend"),
      empresa: "Graphic Market Company",
      descripcion: t('experience.descripcion.gmp'),
      sKill: [
        {
          color: colors.NODE,
          icon: "mdi-nodejs",
          text: "Node JS",
        },
        {
          color: colors.VUE,
          icon: "mdi-vuejs",
          text: "VUE JS",
        }
      ],
    },
    {
      fecha: `Dic 2020 - Jun 2021`,
      cargo: t("cargos.backend") + " Jr",
      empresa: "Inxait Corp",
      descripcion: t('experience.descripcion.inxait'),
      sKill: [
        {
          color: colors.LARAVEL,
          icon: "mdi-laravel",
          text: "Laravel",
        },
        {
          color: colors.VUE,
          icon: "mdi-vuejs",
          text: "VUE JS",
        },
        {
          color: colors.LARAVEL,
          icon: "mdi-language-html5",
          text: "HTML 5",
        }
      ],
    },
    {
      fecha: `Abr. 2020 - Mar. 2021`,
      cargo: t("cargos.desarrolladorSoftware"),
      empresa: "Intelligent Electronic Solutions (IES)",
      descripcion: t('experience.descripcion.ies'),
      sKill: [
        {
          color: colors.LARAVEL,
          icon: "mdi-angularjs",
          text: "Angular",
        },
        {
          color: colors.JAVA,
          icon: "mdi-language-java",
          text: "Java",
        }
      ],
    },
    {
      fecha: `Ene. 2020 - Mar. 2020`,
      cargo: t("cargos.desarrolladorSoftware"),
      empresa: "SSTEC",
      descripcion: t('experience.descripcion.sstec'),
      sKill: [
        {
          color: colors.JAVASCRIPT,
          icon: "mdi-language-javascript",
          text: "Javascript",
        }
      ],
    },
    {
      fecha: `Jul. 2019 - Dic. 2019`,
      cargo: t("cargos.desarrolladorWeb"),
      empresa: "Inversiones GERA SAS",
      descripcion: t('experience.descripcion.gera'),
      sKill: [
        {
          color: colors.PHP,
          icon: "mdi-language-php",
          text: "PHP",
        },
        {
          color: colors.JAVA,
          icon: "mdi-language-java",
          text: "Java",
        },
        {
          color: colors.JAVASCRIPT,
          icon: "mdi-language-javascript",
          text: "Javascript",
        },
        {
          color: '',
          icon: "",
          text: "Mysql",
          image: '/icons/skill/mysql.svg'
        }
      ],
    }
  ]);
  return {
    Listado,
  };
}
