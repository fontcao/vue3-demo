<template>
  <div class="skills" @click="$emit('click')">
    <div class="section-header">
      <h2 class="section-title">技能特长</h2>
    </div>
    <div class="skills-list">
      <div v-for="(skill, index) in parsedData" :key="index" class="skill-item">
        <div class="skill-header">
          <span class="skill-name">{{ skill.skillName }}</span>
        </div>
        <div class="skill-body">
          <div class="skill-description">{{ skill.skillDescription }}</div>
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
.skills {
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

.skill-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.skill-item {
  padding: 10px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-weight: bold;
  color: #333;
}

.skill-description {
  color: #666;
  font-size: 14px;
}
</style>