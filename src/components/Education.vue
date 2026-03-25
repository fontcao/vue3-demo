<template>
  <div class="education" @click="$emit('click')">
    <div class="section-header">
      <h2 class="section-title">教育背景</h2>
    </div>
    <div class="education-list">
      <div v-for="(edu, index) in parsedData" :key="index" class="education-item">
        <div class="education-header">
          <span class="period">{{ edu.intakeDate }} ~ {{ edu.graduationDate }}</span>
          <span class="college">{{ edu.collegeName }}</span>
          <span class="specialty">{{ edu.specialtyName }}</span>
          <span class="degree">{{ getDegree(edu.credentialType) }}</span>
        </div>
        <div class="education-details">
          <div class="gpa" v-if="edu.GPA">
            <span class="label">绩点或排名：</span>
            <span class="value">{{ edu.GPA }}</span>
          </div>
          <div class="courses" v-if="edu.majorCourses && edu.majorCourses.length > 0">
            <span class="label">主修课程：</span>
            <span class="value">
              <span v-for="(course, courseIndex) in edu.majorCourses" :key="courseIndex">
                {{ course.courseName }}({{ course.score }}){{ courseIndex < edu.majorCourses.length - 1 ? '，' : '' }}
              </span>
            </span>
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
    required: true,
    default: () => []
  }
})

const emit = defineEmits(['click'])

const parsedData = computed(() => {
  return Array.isArray(props.data) ? props.data.filter(item => item) : []
})

const getDegree = (type) => {
  const degreeMap = {
    1: '小学',
    2: '初中',
    3: '高中',
    4: '专科',
    5: '本科',
    6: '硕士',
    7: '博士'
  }
  return degreeMap[type] || '其他'
}
</script>

<style scoped>
.education {
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

.education-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.education-item {
  padding: 15px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.education-header {
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

.education-details {
  margin-top: 10px;
  font-size: 14px;
  color: #666;
}

.gpa {
  margin-bottom: 5px;
}

.courses {
  margin-top: 5px;
}

.label {
  font-weight: bold;
  margin-right: 5px;
}

.value {
  color: #333;
}
</style>