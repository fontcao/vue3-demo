<template>
  <div class="app">
    <el-card shadow="never" class="resume-card">
      <template #header>
        <div class="card-header">
          <div class="template-selector">
            <el-button :type="currentTemplate === 'template1' ? 'primary' : 'default'" @click="switchTemplate('template1')">模板1</el-button>
            <el-button :type="currentTemplate === 'template2' ? 'primary' : 'default'" @click="switchTemplate('template2')">模板2</el-button>
          </div>
          <div class="layout-selector">
            <el-button :type="layout === 'vertical' ? 'primary' : 'default'" @click="switchLayout('vertical')">上下布局</el-button>
            <el-button :type="layout === 'horizontal' ? 'primary' : 'default'" @click="switchLayout('horizontal')">左右布局</el-button>
          </div>
        </div>
      </template>
      
      <div class="resume-content" :class="layout">
        <component :is="currentTemplateComponent" :layout="layout" />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Template1 from './template/template1.vue'
import Template2 from './template/template2.vue'

const currentTemplate = ref('template1')
const layout = ref('vertical')

const currentTemplateComponent = computed(() => {
  return currentTemplate.value === 'template1' ? Template1 : Template2
})

const switchTemplate = (template) => {
  currentTemplate.value = template
}

const switchLayout = (layoutType) => {
  layout.value = layoutType
}
</script>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.resume-card {
  border-radius: 8px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.template-selector {
  display: flex;
  gap: 10px;
}

.resume-content {
  gap: 20px;
}

.resume-content.vertical {
  display: flex;
  flex-direction: column;
}

.resume-content.horizontal {
  display: flex;
  gap: 40px;
}

.left-section {
  flex: 1;
  min-width: 300px;
}

.right-section {
  flex: 2;
  min-width: 600px;
}
</style>