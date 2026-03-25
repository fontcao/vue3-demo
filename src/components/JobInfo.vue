<template>
  <div class="job-info" @click="$emit('click')">
    <div class="section-header">
      <h2 class="section-title">求职信息</h2>
    </div>
    <div class="job-content">
      <div class="job-item">
        <span class="label">应聘岗位：</span>
        <span class="value">{{ data.intendedPosition || 'Java后端开发工程师' }}</span>
      </div>
      <div class="job-item">
        <span class="label">期望薪资：</span>
        <span class="value">{{ data.careerGoal || '面议' }}</span>
      </div>
      <div class="job-item">
        <span class="label">到岗时间：</span>
        <span class="value">随时可到岗</span>
      </div>
      <div class="job-item">
        <span class="label">期望工作地：</span>
        <span class="value">{{ data.workArea || '北京市' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['click'])
</script>

<style scoped>
.job-info {
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

.job-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}

.job-item {
  font-size: 14px;
}

.label {
  font-weight: bold;
  margin-right: 10px;
  color: #666;
}

.value {
  color: #333;
}
</style>