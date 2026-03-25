<template>
  <el-drawer 
    :model-value="modelValue" 
    @update:model-value="emit('update:modelValue', $event)" 
    :title="title" 
    direction="rtl" 
    size="500px"
  >
    <div class="edit-form">
      <!-- 数组类型数据编辑 -->
      <template v-if="isArrayData">
        <div v-for="(item, index) in formData" :key="index" class="array-item">
          <div class="array-item-header">
            <span>{{ getFieldLabel(props.section) }} {{ index + 1 }}</span>
            <el-button type="danger" size="small" @click="removeItem(index)">删除</el-button>
          </div>
          <el-form :model="item" label-width="100px">
            <el-form-item 
              v-for="(value, key) in item" 
              :key="key"
              :label="getFieldLabel(key)"
            >
              <!-- 日期类型 -->
              <template v-if="isDateField(key)">
                <el-date-picker 
                  v-model="item[key]" 
                  type="month" 
                  placeholder="选择日期" 
                />
              </template>
              <!-- 性别选择 -->
              <template v-else-if="key === 'sex'">
                <el-select v-model="item[key]">
                  <el-option label="男" value="1" />
                  <el-option label="女" value="2" />
                </el-select>
              </template>
              <!-- 学历选择 -->
              <template v-else-if="key === 'credentialType'">
                <el-select v-model="item[key]">
                  <el-option label="小学" value="1" />
                  <el-option label="初中" value="2" />
                  <el-option label="高中" value="3" />
                  <el-option label="专科" value="4" />
                  <el-option label="本科" value="5" />
                  <el-option label="硕士" value="6" />
                  <el-option label="博士" value="7" />
                </el-select>
              </template>
              <!-- 其他类型 -->
              <template v-else>
                <el-input v-model="item[key]" />
              </template>
            </el-form-item>
          </el-form>
        </div>
        <el-button type="primary" @click="addItem">添加{{ getFieldLabel(props.section) }}</el-button>
      </template>
      <!-- 非数组类型数据编辑 -->
      <template v-else>
        <el-form :model="formData" label-width="100px">
          <el-form-item 
            v-for="(value, key) in formData" 
            :key="key"
            :label="getFieldLabel(key)"
          >
            <!-- 日期类型 -->
            <template v-if="isDateField(key)">
              <el-date-picker 
                v-model="value[key]" 
                type="month" 
                placeholder="选择日期" 
              />
            </template>
            <!-- 性别选择 -->
            <template v-else-if="key === 'sex'">
              <el-select v-model="value[key]">
                <el-option label="男" value="1" />
                <el-option label="女" value="2" />
              </el-select>
            </template>
            <!-- 学历选择 -->
            <template v-else-if="key === 'credentialType'">
              <el-select v-model="value[key]">
                <el-option label="小学" value="1" />
                <el-option label="初中" value="2" />
                <el-option label="高中" value="3" />
                <el-option label="专科" value="4" />
                <el-option label="本科" value="5" />
                <el-option label="硕士" value="6" />
                <el-option label="博士" value="7" />
              </el-select>
            </template>
            <!-- 其他类型 -->
            <template v-else>
              <el-input v-model="value[key]" />
            </template>
          </el-form-item>
        </el-form>
      </template>
      <div class="form-actions">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="save">保存</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script setup>
import { ref, reactive, defineProps, defineEmits, watch, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  section: {
    type: String,
    default: ''
  },
  initialData: {
    type: [Object, Array],
  }
})

const emit = defineEmits(['update:modelValue', 'save'])

// 初始化表单数据
const formData = ref(props.initialData)

const title = ref('')

// 判断是否为数组数据
const isArrayData = computed(() => {
  return Array.isArray(props.initialData)
})

// 字段名称映射
const fieldLabels = {
  bareheadedphoto: '免冠照',
  name: '姓名',
  birthday: '出生年月',
  politicaloutlook: '政治面貌',
  sex: '性别',
  contract: '联系方式',
  email: '邮箱',
  address: '住址',
  resumeName: '简历名称',
  jobIntention: '应聘岗位',
  exceptionSalary: '期望薪资',
  exceptionWorkspace: '期望工作地',
  dutyTime: '到岗时间',
  language: '语种',
  intendionJobRequitement: '应聘岗位要求',
  intakeDate: '入学时间',
  graduationDate: '毕业时间',
  collegeName: '学校名称',
  specialtyName: '专业名称',
  credentialType: '学历',
  GPA: '平均学分绩点或排名',
  entryDate: '入职时间',
  leaveDate: '离职时间',
  companyName: '公司名称',
  departName: '部门名称',
  jobName: '岗位名称',
  jobDescription: '岗位描述',
  internshipStartDate: '实习开始时间',
  internshipEndDate: '实习结束时间',
  socialStartDate: '社会实践开始时间',
  socialEndDate: '社会实践结束时间',
  socialName: '社会实践名称',
  socialDescription: '社会实践内容',
  socialImages: '社会实践图片',
  projectStartDate: '项目开始时间',
  projectEndDate: '项目结束时间',
  projectName: '项目名称',
  projectDescription: '项目描述',
  certificateType: '证书级别',
  certificateName: '证书/奖励名称',
  certificateTime: '证书获取时间',
  rewardsType: '奖励级别',
  rewardsName: '奖励名称',
  rewardsTime: '奖励获取时间',
  skillName: '技能名称',
  skillDescription: '技能说明',
  achievementName: '成果名称',
  achievementDescription: '成果说明',
  talentDescription: '才艺展示说明',
  talentProves: '才艺展示证明文件',
  selfevaluation: '自我评价',
  isHide: '是否隐藏',
  // section名称映射
  personal: '个人信息',
  job: '求职信息',
  education: '教育背景',
  work: '工作经验',
  internship: '实习经历',
  social: '社会实践',
  project: '项目经历',
  certificate: '证书',
  reward: '奖励',
  skill: '技能',
  achievement: '成果',
  talent: '才艺展示',
  self: '自我评价'
}

// 获取字段标签
const getFieldLabel = (key) => {
  return fieldLabels[key] || key
}

// 判断是否为日期字段
const isDateField = (key) => {
  return key.includes('Date') || key.includes('date')
}

// 添加数组项
const addItem = () => {
  if (isArrayData.value && formData.value.length > 0) {
    // 基于数组中第一个元素的结构创建新项
    const newItem = { ...formData.value[0] }
    // 清空值
    Object.keys(newItem).forEach(key => {
      if (key !== 'isHide') {
        newItem[key] = ''
      }
    })
    // 设置默认值
    newItem.isHide = false
    formData.value.push(newItem)
  } else if (isArrayData.value) {
    // 如果数组为空，创建一个基本结构
    formData.value.push({ isHide: false })
  }
}

// 删除数组项
const removeItem = (index) => {
  if (isArrayData.value) {
    formData.value.splice(index, 1)
  }
}

// 根据section设置标题
watch(() => props.section, (newSection) => {
  const titles = {
    personal: '个人信息编辑',
    job: '求职信息编辑',
    education: '教育背景编辑',
    work: '工作经验编辑',
    internship: '实习经历编辑',
    social: '社会实践编辑',
    project: '项目经历编辑',
    certificate: '证书编辑',
    reward: '奖励编辑',
    skill: '技能编辑',
    achievement: '成果编辑',
    talent: '才艺展示编辑',
    self: '自我评价编辑'
  }
  title.value = titles[newSection] || '编辑'
}, { immediate: true })

const close = () => {
  emit('update:modelValue', false)
}

const save = () => {
  emit('save', props.section, isArrayData.value ? [...formData.value] : { ...formData.value })
  close()
}
</script>

<style scoped>
.edit-form {
  padding: 20px;
}

.form-actions {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.array-item {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
}

.array-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e4e7ed;
}

.array-item-header span {
  font-weight: bold;
  font-size: 16px;
}
</style>