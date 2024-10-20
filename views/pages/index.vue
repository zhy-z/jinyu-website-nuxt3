<template>
    <div class="w-full">
        <swiper :items="imglist" :interval="3000"></swiper>

        <div class="lg">
            <div class="lg:mt-16 my-2 sm:mt-4">
                <div class="flex h-[21px] max-w-screen-lg mx-auto justify-center mb-3 item">
                    <img src="../assets/image/image5.png" alt="">
                    <span class="h-[24px] inline-block text-base px-11"> 服务范围</span>
                    <img src="../assets/image/image6.png" alt="">
                </div>
            </div>
            <div class="text-center px-9">
                提供数字运营服务、软件开发、游戏开发等各类信息化产品和服务
            </div>
            <div class=" m-auto">
                <div class="flex flex-wrap wap-4 justify-center">
                    <div v-for="(item, index) in infolist" :key="index"
                        class="rounded-lg border border-gray-200 bg-cover bg-center bg-no-repeat w-[350px] m-4 bg-[url('/assets/image/image1.png')]">
                        <div class="p-4 h-[220px]">
                            <div class="title text-xl font-bold pt-4">
                                {{ item.title }}
                            </div>
                            <div class="w-full text-gray-600 leading-5 color-[#808c9f] pt-10">
                                {{ item.describe }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="flex h-[21px] max-w-screen-lg mx-auto justify-center mb-3 items-center">

                <img src="../assets/image/image5.png" alt="">
                <span class="h-[24px] inline-block text-base px-11"> 业务领域</span>
                <img src="../assets/image/image6.png" alt="">


            </div>

            <div class="text-center px-9">
                提供数字运营服务、软件开发、游戏开发等各类信息化产品和服务
            </div>
            <div class=" m-auto">
                <div class="flex flex-wrap wap-4  justify-center">
                    <div v-for="(item, index) in businessArea" :key="index"
                        class="rounded-lg border border-gray-200 bg-cover bg-center bg-no-repeat w-[350px] m-4 bg-[url('/assets/image/image1.png')]">
                        <div class="p-4 h-[220px]">
                            <div class="title text-xl font-bold pt-4">
                                {{ item.title }}
                            </div>
                            <div class="w-full text-gray-600 leading-5 color-[#808c9f] pt-10">
                                {{ item.describe }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-[url('/assets/image/image3.png')] w-full h-full bg-center bg-no-repeat ">

                <div class="w-full m-auto">
                    <div class="flex h-[21px]  justify-center mb-3 items-center sm:pt-5  lg:pt-12">

                        <img src="../assets/image/image5.png" alt="">
                        <span class="h-[24px] inline-block text-base px-11 text-white"> 企业服务诚信品牌</span>
                        <img src="../assets/image/image6.png" alt="">
                    </div>
                    <div
                        class="text-center font-normal flex justify-center sm:pt-2 sm:pb-2 sm:px-2 lg:pt-9  lg:pb-9 text-white lg:px-9">
                        我们始终秉承着 客户至上、人才为本、艰苦奋斗、团队合作、自我批判 的核心价值观，用创新的商业技术服务与客户一起改变世界！
                    </div>
                    <div class="flex justify-around items-center pb-8 flex-wrap">
                        <div class="text-white">
                            <span class="lg:w-28 h-16 inline-block sm:text-4xl lg:text-7xl">10</span>
                            <span class="text-4xl relative lg:top-[-40px] lg:left-[50px]">
                                +
                            </span>
                            <div class="text-center leading-[28px]">
                                权威认证
                            </div>
                        </div>


                        <div class="text-white">
                            <span class="h-16 inline-block lg:w-28 sm:text-4xl lg:text-7xl">100</span>
                            <span class="text-4xl relative lg:top-[-40px] lg:left-[50px]">
                                +
                            </span>
                            <div class="text-center leading-[28px]">
                                累计项目
                            </div>
                        </div>


                        <div class="text-white">
                            <span class="h-16 inline-block lg:w-28 sm:text-4xl lg:text-7xl">100</span>
                            <span class="text-4xl relative lg:top-[-40px] lg:left-[50px]">
                                +
                            </span>
                            <div class="text-center leading-[28px]">
                                累计客户
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import swiper from '~/components/swiper.vue';
import img2 from '../assets/image/image2.png'
import { ref } from 'vue';
let infolist = ref(
    [{
        title: "定制开发服务",
        describe: "为企业量身定制专属企业开发，个性化配置满足企业需求，功能强大支持多场景联动。"
    }, {
        title: '产品解决方案',
        describe: "挖掘业务痛点，剖析行业趋势，致力于打造符合业务需求的一体化产品解决方案。"

    }, {
        title: "平台研发服务",
        describe: "以大数据、云计算技术，提供专业的数字化服务，驱动商业模式创新，加速数字化转型。"
    }, {
        title: "运维服务",
        describe: "为企业提供基础的IT运维服务支持，让企业能够专注于其核心业务板块。"
    }, {
        title: "游戏开发定制",
        describe: "游戏棋牌(斗地主，麻将)定制化服务，个性化满足需求。"
    }, {
        title: "咨询服务",
        describe: "景语网络为企业提供专业化的咨询服务。"
    }]
)

let imglist = ref([
    {
        src: img2,
        alt: "景语网络科技，成就美好数字世界。"
    }
])

let businessArea = ref([
    {
        title: "游戏行业",
        describe: "定制化开发，海安斗地主，海安麻将。们为您带来原汁原味的海安本土玩法，让您在轻松愉悦的氛围中与好友对战。",

    },
    {
        title: "零售行业",
        describe: "提供数据驱动运营所需的所有工具，从洞察到收益，构建全渠道客户增长体系，精准化营销方案，以数据辅助企业决策。",
    },
    {
        title: "制作行业",
        describe: "景语网络科技为企业提供实时数据处理、实时业务、数据中台及AI建设能力，助力企业客户轻松构建智能化数据应用，完成数据智能化转型。"
    }
])
</script>

<style scoped></style>