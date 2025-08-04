<template>
  <div class="contact-section">
    <SimpleTitle :title="$t('titles.contact')" color="primary" />
    
    <v-row>
      <v-col :cols="12">
        <div class="contact-info">
          <h3 class="contact-subtitle mb-4">{{ $t('contact.subtitle') }}</h3>
          <p class=" mb-6">{{ $t('contact.description') }}</p>
          
          <v-row justify="center">
            <v-col v-for="method in contactMethods" :key="method.id" :cols="mobile ? 6 : 4" class="contact-method" :class="{ 'contact-method--animated': method.isVisible }" @click="handleContact(method)">
              <div class="contact-method-icon">
                <v-icon :icon="method.icon" size="32" :color="method.color" />
              </div>
              <div class="contact-method-content">
                <h4 class="contact-method-title">{{ method.title }}</h4>
                <p>{{ method.value }}</p>
              </div>
              <div class="contact-method-arrow">
                <v-icon icon="mdi-arrow-right" size="20" />
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import SimpleTitle from '@/components/utils/SimpleTitle.vue'

const { mobile } = useDisplay()

const isSubmitting = ref(false)

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const contactMethods = ref([
  {
    id: 1,
    title: 'Email',
    value: 'sell3.1998@hotmail.com',
    icon: 'mdi-email',
    color: 'primary',
    action: 'mailto:sell3.1998@hotmail.com',
    isVisible: false
  },
  {
    id: 2,
    title: 'WhatsApp',
    value: '+57 300 275 0183',
    icon: 'mdi-whatsapp',
    color: 'success',
    action: 'https://wa.me/573002750183',
    isVisible: false
  },
  {
    id: 3,
    title: 'LinkedIn',
    value: 'Mi perfil de LinkedIn',
    icon: 'mdi-linkedin',
    color: 'info',
    action: 'https://www.linkedin.com/in/santiago-lopez-06812410a/',
    isVisible: false
  },
  {
    id: 4,
    title: 'GitHub',
    value: 'github.com/10075016-22',
    icon: 'mdi-github',
    color: 'dark',
    action: 'https://github.com/10075016-22',
    isVisible: false
  }
])

const handleContact = (method) => {
  if (method.action.startsWith('mailto:')) {
    window.location.href = method.action
  } else {
    window.open(method.action, '_blank')
  }
}

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simular envío del formulario
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Aquí iría la lógica real de envío
  console.log('Formulario enviado:', form.value)
  
  // Limpiar formulario
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  
  isSubmitting.value = false
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const methodId = parseInt(entry.target.dataset.methodId)
        const method = contactMethods.value.find(m => m.id === methodId)
        if (method) {
          method.isVisible = true
        }
      }
    })
  }, { threshold: 0.3 })

  // Observar cada método de contacto
  document.querySelectorAll('.contact-method').forEach((method, index) => {
    method.dataset.methodId = contactMethods.value[index].id
    observer.observe(method)
  })
})
</script>

<style scoped>
.contact-section {
  margin: 3rem 0;
}

.contact-subtitle {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
}

.contact-description {
  font-size: 1rem;
  color: rgb(var(--v-theme-on-surface-variant));
  line-height: 1.6;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-method {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: rgba(var(--v-theme-surface), 0.5);
  border: 1px solid rgba(var(--v-theme-outline), 0.1);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(-30px);
}

.contact-method--animated {
  opacity: 1;
  transform: translateX(0);
}

.contact-method:hover {
  background: rgba(var(--v-theme-surface), 0.8);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.contact-method-icon {
  margin-right: 1rem;
  padding: 0.5rem;
  background: rgba(var(--v-theme-primary), 0.1);
  border-radius: 8px;
}

.contact-method-content {
  flex: 1;
}

.contact-method-title {
  font-size: 1rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  margin: 0;
}

.contact-method-value {
  font-size: 0.9rem;
  color: rgb(var(--v-theme-on-surface-variant));
  margin: 0.25rem 0 0 0;
}

.contact-method-arrow {
  opacity: 0;
  transition: all 0.3s ease;
}

.contact-method:hover .contact-method-arrow {
  opacity: 1;
  transform: translateX(4px);
}

.contact-form-container {
  height: 100%;
  display: flex;
  align-items: center;
}

.contact-form {
  width: 100%;
  background: rgba(var(--v-theme-surface), 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(var(--v-theme-outline), 0.1);
}

/* Responsive */
@media (max-width: 768px) {
  .contact-form-container {
    margin-top: 2rem;
  }
}
</style> 