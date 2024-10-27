<template>
    <div class="bg-[#F2F6FC]">
        <div class="relative">
            <img src="../assets/image/image4.png" class="object-cover h-96" alt="">
            <!-- <div class="absolute top-12 left-60 sm:top-3 sm:left-6 ">
             <p class="text-2xl">
                景语信息
             </p>
             <p class="w-[500px]">
                我们是南通海安优质的企业信息服务提供商，拥有专业的技术和实施团队，主要向客户提供数字运营服务、软件开发、云计算、软件定制等各类信息化产品和服务。
             </p>
            </div> -->
        </div>
        <div class="lg:mt-16 my-2 sm:mt-4">
            <div class="flex h-[21px] max-w-screen-lg mx-auto justify-center mb-3 item">
                <img src="../assets/image/image5.png" alt="">
                <span class="h-[24px] inline-block text-base lg:px-11 sm:px-5"> 选择景语的四大理由</span>
                <img src="../assets/image/image6.png" alt="">
            </div>
        </div>
        <div class="flex flex-row  justify-center flex-wrap gap-2">
            <div v-for="(item, index) in list" :key="index"
                class="w-[280px] h-72 p-6  bg-white mb-2 hover:bg-blue-500 hover:text-white">
                <div class="h-[33px]  text-2xl text-center">
                    {{ item.title }}
                </div>
                <div class="w-[198px] h-[130px] text-base mt-5 text-center mx-auto">
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