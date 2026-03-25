<template>
    <div class="template1">
        <div class="resume-container" :class="layout">
            <div v-if="layout === 'horizontal'" class="left-section">
                <PersonalInfo :data="resumeData" @click="openEditDrawer('personal')" />
                <JobInfo :data="resumeData" @click="openEditDrawer('job')" />
                <Education :data="resumeData.educational" @click="openEditDrawer('education')" />
                <Skills :data="resumeData.skills" @click="openEditDrawer('skill')" />
                <SelfEvaluation :data="resumeData" @click="openEditDrawer('selfevaluation')" />
            </div>
            <div :class="layout === 'horizontal' ? 'right-section' : 'resume-main'">
                <PersonalInfo v-if="layout === 'vertical'" :data="resumeData" @click="openEditDrawer('personal')" />
                <JobInfo v-if="layout === 'vertical'" :data="resumeData" @click="openEditDrawer('job')" />
                <Education v-if="layout === 'vertical'" :data="resumeData.educational"
                    @click="openEditDrawer('education')" />
                <WorkExperience :data="resumeData.workexperience" @click="openEditDrawer('work')" />
                <ProjectExperience :data="resumeData.projectexperience" @click="openEditDrawer('project')" />
                <SocialPractice :data="resumeData.socialpractice" @click="openEditDrawer('social')" />
                <Certificates :data="resumeData.certificaterewards" @click="openEditDrawer('certificate')" />
                <Rewards :data="resumeData.archiveRewards" @click="openEditDrawer('reward')" />
                <Skills v-if="layout === 'vertical'" :data="resumeData.skills" @click="openEditDrawer('skill')" />
                <Achievements :data="resumeData.archievementdisplay" @click="openEditDrawer('achievement')" />
                <SelfEvaluation v-if="layout === 'vertical'" :data="resumeData"
                    @click="openEditDrawer('selfevaluation')" />
            </div>
        </div>

        <!-- 编辑抽屉组件 -->
        <EditDrawer v-model="isEditDrawerVisible" :initialData="editFormData" @save="saveEdit" />
    </div>
</template>

<script setup>
import { ref, reactive, defineProps, computed } from 'vue'
import PersonalInfo from '../components/PersonalInfo.vue'
import JobInfo from '../components/JobInfo.vue'
import Education from '../components/Education.vue'
import WorkExperience from '../components/WorkExperience.vue'
import ProjectExperience from '../components/ProjectExperience.vue'
import SocialPractice from '../components/SocialPractice.vue'
import Certificates from '../components/Certificates.vue'
import Rewards from '../components/Rewards.vue'
import Skills from '../components/Skills.vue'
import Achievements from '../components/Achievements.vue'
import SelfEvaluation from '../components/SelfEvaluation.vue'
import EditDrawer from '../components/edit/EditDrawer.vue'
import resumeData from '../data/index.js'

const props = defineProps({
    layout: {
        type: String,
        default: 'vertical'
    }
})

// 编辑抽屉状态
const isEditDrawerVisible = ref(false)
const editFormData = ref([] || {})

// 打开编辑抽屉
const openEditDrawer = (section) => {

    // 初始化编辑表单数据
    if (section === 'personal') {
        Object.assign(editFormData, {
            name: resumeData.name,
            sex: resumeData.sex,
            contract: resumeData.contract,
            email: resumeData.email,
            address: resumeData.address,
            birthday: resumeData.birthday,
            politicaloutlook: resumeData.politicaloutlook
        })
    } else if (section === 'job') {
        Object.assign(editFormData, {
            resumeName: '',
            jobIntention: resumeData.intendedPosition,
            exceptionSalary: '',
            exceptionWorkspace: resumeData.workArea,
            dutyTime: '',
            language: '',
            intendionJobRequitement: ''
        })
    } else if (section === 'education') {
        // 教育背景是数组
        // Object.assign(editFormData, resumeData.educational)
        editFormData.value = resumeData.educational
    } else if (section === 'work') {
        // 工作经验是数组
        editFormData.value = resumeData.workexperience
    } else if (section === 'project') {
        // 项目经历是数组
        editFormData.value = resumeData.projectexperience
    } else if (section === 'social') {
        // 社会实践是数组
        editFormData.value = resumeData.socialpractice
    } else if (section === 'certificate') {
        // 证书是数组
        Object.assign(editFormData, resumeData.certificaterewards)
    } else if (section === 'reward') {
        // 奖励是数组
        editFormData.value = resumeData.archiveRewards
    } else if (section === 'skill') {
        // 技能是数组
        editFormData.value = resumeData.skills
    } else if (section === 'achievement') {
        // 成果是数组
        editFormData.value = resumeData.archievementdisplay
    } else if (section === 'self') {
        // 自我评价是对象
        editFormData.value = resumeData.selfevaluation
    }

    isEditDrawerVisible.value = true
}

// 保存编辑
const saveEdit = (section, data) => {
    // 根据当前编辑的 section 更新数据
    if (section === 'personal') {
        resumeData.name = data.name
        resumeData.sex = data.sex
        resumeData.contract = data.contract
        resumeData.email = data.email
        resumeData.address = data.address
        resumeData.birthday = data.birthday
        resumeData.politicaloutlook = data.politicaloutlook
    } else if (section === 'job') {
        resumeData.intendedPosition = data.jobIntention
        resumeData.workArea = data.exceptionWorkspace
    } else if (section === 'education') {
        resumeData.educational = data
    } else if (section === 'work') {
        resumeData.workexperience = data
    } else if (section === 'project') {
        resumeData.projectexperience = data
    } else if (section === 'social') {
        resumeData.socialpractice = data
    } else if (section === 'certificate') {
        resumeData.certificaterewards = data
    } else if (section === 'reward') {
        resumeData.archiveRewards = data
    } else if (section === 'skill') {
        resumeData.skills = data
    } else if (section === 'achievement') {
        resumeData.archievementdisplay = data
    } else if (section === 'self') {
        resumeData.selfevaluation = data.selfevaluation
    }
}
</script>

<style scoped>
.template1 {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.resume-container {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 30px;
}

.resume-container.vertical {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.resume-container.horizontal {
    display: flex;
    gap: 40px;
}

.left-section {
    flex: 1;
    min-width: 300px;
}

.right-section {
    flex: 2;
    min-width: 600px;
}

.resume-main {
    flex: 1;
}

.edit-form {
    padding: 20px;
}

.form-actions {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}
</style>
