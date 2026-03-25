<template>
  <div class="achievements" @click="$emit('click')">
    <div class="section-header">
      <h2 class="section-title">成果</h2>
    </div>
    <div class="achievement-list">
      <div v-for="(achievement, index) in parsedData" :key="index" class="achievement-item">
        <div class="achievement-header">
          <span class="achievement-name">{{ achievement.achievementName }}</span>
        </div>
        <div class="achievement-body">
          <div class="achievement-description">{{ achievement.achievementDescription }}</div>
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
.achievements {
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

.achievement-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.achievement-item {
  padding: 15px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.achievement-header {
  margin-bottom: 10px;
}

.achievement-name {
  font-weight: bold;
  color: #333;
  font-size: 16px;
}

.achievement-description {
  color: #666;
  line-height: 1.5;
}
</style>