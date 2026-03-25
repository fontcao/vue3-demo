<template>
  <div class="work-experience" @click="$emit('click')">
    <div class="section-header">
      <h2 class="section-title">工作(实习)经历</h2>
    </div>
    <div class="work-list">
      <div v-for="(work, index) in parsedData" :key="index" class="work-item">
        <div class="work-header">
          <span class="period">{{ work.entryDate }} ~ {{ work.leaveDate }}</span>
          <span class="company">{{ work.companyName }}</span>
          <span class="department">{{ work.departName }}</span>
          <span class="position">{{ work.jobName }}</span>
        </div>
        <div class="work-description">
          {{ work.jobDescription }}
        </div>
        <div class="work-achievements" v-if="work.workItems && work.workItems.length > 0">
          <ul>
            <li v-for="(item, itemIndex) in work.workItems" :key="itemIndex">
              {{ item.actionOrMethod }}，{{ item.workOutcome }}
            </li>
          </ul>
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
.work-experience {
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

.work-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.work-item {
  padding: 15px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.work-header {
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

.work-description {
  margin-bottom: 10px;
  color: #666;
  line-height: 1.5;
}

.work-achievements {
  margin-top: 10px;
}

.work-achievements ul {
  padding-left: 20px;
  color: #333;
}

.work-achievements li {
  margin-bottom: 5px;
  line-height: 1.4;
}
</style>