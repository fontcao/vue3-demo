<template>
  <div class="self-evaluation" @click="$emit('click')">
    <div class="section-header">
      <h2 class="section-title">自我评价</h2>
    </div>
    <div class="evaluation-content">
      {{ data.selfevaluation }}
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
.self-evaluation {
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

.evaluation-content {
  padding: 15px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  line-height: 1.6;
  text-align: justify;
}
</style>