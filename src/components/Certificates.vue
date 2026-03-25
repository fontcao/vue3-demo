<template>
  <div class="certificates" @click="$emit('click')">
    <div class="section-header">
      <h2 class="section-title">证书</h2>
    </div>
    <div class="certificate-list">
      <div v-for="(cert, index) in parsedData" :key="index" class="certificate-item">
        <div class="certificate-content">
          <span class="certificate-name">{{ cert.certificateName }}</span>
          <span class="certificate-time" v-if="cert.certificateTime">{{ cert.certificateTime }}</span>
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
.certificates {
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

.certificate-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.certificate-item {
  padding: 10px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.certificate-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.certificate-name {
  font-weight: bold;
  color: #333;
}

.certificate-time {
  color: #666;
  font-size: 14px;
}
</style>