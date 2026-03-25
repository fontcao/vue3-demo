<template>
  <div class="social-practice" @click="$emit('click')">
    <div class="section-header">
      <h2 class="section-title">社会实践</h2>
    </div>
    <div class="social-list">
      <div v-for="(social, index) in parsedData" :key="index" class="social-item">
        <div class="social-header">
          <span class="period">{{ social.socialStartDate }} ~ {{ social.socialEndDate }}</span>
          <span class="social-name">{{ social.socialName }}</span>
          <span class="position">{{ social.position }}</span>
        </div>
        <div class="social-body">
          <div class="description">{{ social.socialDescription }}</div>
          <div class="harvest" v-if="social.harvest">
            <div class="harvest-title">收获：</div>
            <div class="harvest-content">{{ social.harvest }}</div>
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
.social-practice {
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

.social-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.social-item {
  padding: 15px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.social-header {
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

.social-description {
  margin-bottom: 10px;
  color: #666;
  line-height: 1.5;
}

.social-harvest {
  margin-top: 10px;
  font-size: 14px;
}

.label {
  font-weight: bold;
  margin-right: 5px;
  color: #666;
}

.value {
  color: #333;
}
</style>