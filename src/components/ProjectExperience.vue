<template>
  <div class="project-experience" @click="$emit('click')">
    <div class="section-header">
      <h2 class="section-title">项目经历</h2>
    </div>
    <div class="project-list">
      <div v-for="(project, index) in parsedData" :key="index" class="project-item">
        <div class="project-header">
          <span class="period">{{ project.projectStartDate }} ~ {{ project.projectEndDate }}</span>
          <span class="project-name">{{ project.projectName }}</span>
        </div>
        <div class="project-body">
          <div class="description">{{ project.projectDescription }}</div>
          <div class="performance" v-if="project.workItems && project.workItems.length > 0">
            <div class="performance-title">项目成果：</div>
            <ul class="performance-list">
              <li v-for="(item, itemIndex) in project.workItems" :key="itemIndex">
                {{ item.actionOrMethod }} - {{ item.workOutcome }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, defineEmits } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['click'])

const parsedData = computed(() => {
  return Array.isArray(props.data) ? props.data.filter(item => item) : []
})
</script>

<style scoped>
.project-experience {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 8px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 2px solid #409eff;
  padding-bottom: 5px;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.project-item {
  padding: 15px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project-header {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #333;
}

.period {
  color: #409eff;
}

.project-description {
  margin-bottom: 10px;
  color: #666;
  line-height: 1.5;
}

.project-achievements {
  margin-top: 10px;
}

.project-achievements ul {
  padding-left: 20px;
  color: #333;
}

.project-achievements li {
  margin-bottom: 5px;
  line-height: 1.4;
}
</style>