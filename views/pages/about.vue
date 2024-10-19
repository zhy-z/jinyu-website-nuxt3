<template>
    <div class="home-page">
        <div class="relative">
            <img src="../assets/image/image4.png" class="object-cover" alt="">
        </div>
        <div class="text-center">
            选择景语的四大理由
        </div>
        <div class="flex flex-row ">
            <div v-for="(item, index) in list" :key="index" class="w-[280px] h-72">
            <div class="h-[33px] ">
                {{ item.title }}
            </div>
            <div class="w-[198px] h-[130px]">
                {{ item.info }}
            </div>
        </div>
        </div>
       
    </div>
</template>

<script setup>
// 你可以在这里导入和设置页面相关的状态或方法
import { ref } from 'vue'
let list = ref([
    {
        title: "高效稳定",
        info: "深厚的基础架构,自研的操作系统，多年技术锤炼和海量服务经验，为客户提供高性能、易运维、智能化、弹性化的云服务。"
    },
    {
        title: "开放生态",
        info: "完整的合作伙伴生态体系，与产业链上下游通力合作，提供优质的服务和丰富的产品满足您全方位的业务需求。"
    },
    {
        title: "丰富场景",
        info: "从基础设施到行业应用领域，提供完善的产品体系，为各种业务场景提供全栈解决方案，助力业务腾飞。"
    },
    {
        title: "服务保障",
        info: "7*24小时高效服务保障，多元化的服务支持，提供专业的上云前、中、后全流程技术服务，让您的云上之旅更安心。"
    }
])
</script>


<style scoped></style>