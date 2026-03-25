<template>
  <div class="personal-info" @click="$emit('click')">
    <div class="section-header">
      <h2 class="section-title">个人信息</h2>
    </div>
    <div class="info-content">
      <div class="avatar">
        <img :src="data.bareheadedphoto || placeholderAvatar" alt="头像" />
      </div>
      <div class="info-details">
        <h3 class="name">{{ data.name }}</h3>
        <div class="info-item">
          <span class="label">性别：</span>
          <span class="value">{{ data.sex === '1' ? '男' : '女' }}</span>
        </div>
        <div class="info-item">
          <span class="label">联系方式：</span>
          <span class="value">{{ data.contract }}</span>
        </div>
        <div class="info-item">
          <span class="label">邮箱：</span>
          <span class="value">{{ data.email }}</span>
        </div>
        <div class="info-item">
          <span class="label">政治面貌：</span>
          <span class="value">{{ data.politicaloutlook === '1' ? '中共党员' : '群众' }}</span>
        </div>
        <div class="info-item">
          <span class="label">住址：</span>
          <span class="value">{{ data.address }}</span>
        </div>
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

const placeholderAvatar = 'https://via.placeholder.com/100'
</script>

<style scoped>
.personal-info {
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

.info-content {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #409eff;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-details {
  flex: 1;
}

.name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.info-item {
  margin-bottom: 8px;
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