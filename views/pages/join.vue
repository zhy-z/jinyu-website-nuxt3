<template>
    <div class="bg-[#F2F6FC]">
        <div class="flex flex-wrap gap-2 pt-2 justify-center pb-2">
            <div v-for="(item, index) in joinInfo" :key="index" class="p-8 border-solid  w-[700px] bg-white rounded-md">
                <div class=" pt-2 pb-2 flex items-center">
                    <span class="font-semibold text-2xl pr-2">{{ item.title }} </span>
                    <span class="border-solid border-2 border-indigo-600 rounded-xl p-1 text-sm"> 全职</span>
                </div>
                <div class="text-[#00052a9e] text-base">

                    {{ item.workLocation }}
                </div>
                <div class="mt-2 flex items-center">
                    <div class="w-1 h-4 rounded-lg bg-blue-600">

                    </div>
                    <div class="ml-2">
                        任职要求
                    </div>

                </div>
                <div class="pt-1">
                    <ul>
                        <li v-for="(desc, descIndex) in item.description.split('；')" :key="descIndex"
                            class="text-[#00052a9e] leading-7">

                            {{ desc.trim() }}
                        </li>
                    </ul>
                </div>
                <div class="mt-2 flex items-center" v-if="item.jobDescription">
                    <div class="w-1 h-4 rounded-lg bg-blue-600">

                    </div>
                    <div class="ml-2">
                        工作职责
                    </div>
                </div>
                <div class="leading-7 text-[#00052a9e] pt-1" v-if="item.jobDescription">

                    <span class="">{{ item.jobDescription }}</span>
                </div>
                <div class="mt-2 flex items-center">
                    <div class="w-1 h-4 rounded-lg bg-blue-600">

                    </div>
                    <div class="ml-2">
                        投递邮箱
                    </div>

                </div>
                <div class="pt-1 text-sky-800 font-extrabold">
                    sense_cf@163.com
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue';
let joinInfo = ref(
    [
        {
            title: "游戏后端开发",
            description: "1.本科及以上学历，计算机、通信工程相关专业毕业；2.精通c / c++语言编程或熟练掌握java netty框架，有5年以上大型项目开发经验；3.熟悉linux操作系统，掌握SHELL脚本和环境的部署，熟悉linux进程间通信原理；4.熟悉TCP / IP通信协议，了解游戏通信框架及protobuf的应用；5.熟悉mysql数据库，熟悉redis缓存数据库，掌握游戏数据缓存的实现原理",
            jobDescription: "完成游戏服务器端的开发，有高并发实时通信和游戏服务器端开发工作经验者更佳。",
            workLocation: "南通市海安市"

        },

        {
            title: "全栈工程师",
            description: "1.计算机相关专业本科及以上学历；2.具备 2 年以上软件开发经验，有项目部署经验；3.熟练掌握 Python / Golang / Java / C++ / Rust 等一种或多种编程语言, 有扎实的编程功底和良好的数据结构和算法基础；4.对MySQL Redis等存储系统有深入理解;5:需要有较强英文阅读能力，能直接阅读英文文档；5.热爱学习技术，工作积极踏实，执行力高，有自我驱动力，长期关注行业发展趋势Github 与 Stackoverflow 贡献者优先",
            jobDescription: "",
            workLocation: "南通市海安市"
        },
        {
            title: "前端开发工程师",
            description: "1.熟练掌握uni-app框架，能够独立开发Vue项目；2.熟悉各种前端技术,包括 HTML/CSS ,掌握DOM、Ajax、JSON等；3.对HTTP/HTTPS协议、TCP/IP、DNS 等熟练掌握，了解CDN、Nginx，能够利用相关知识解决实际问题；4.对页面性能优化、解决跨浏览器、移动设备兼容性问题有一定的经验；5.熟悉c#语言，能够使用其进行开发优先考虑；6.会设计图片，设计页面、切图优先考虑；7.有较强的责任心并具有一定的抗压能力，具备良好的团队合作精神，较强的沟通协调能力，逻辑性好，优秀的团队意识和执行力。",
            jobDescription: "",
            workLocation: "南通市海安市"
        },
        {
            title: "游戏策划",
            description: "1.本科及以上学历，一年以上游戏策划经验；2.拥有丰富的历史，地理，人文等相应知识，思维活跃，脑洞大；3.熟练使用excel，xmind，axure等工具；4.具备良好的逻辑思维能力，学习能力和沟通能力；5.有编程语言基础或美术基础更佳。",
            workLocation: "南通市海安市",
        },

        {
            title: "游戏美术",
            description: "1.本科及以上学历，美术设计类相关专业毕业；2.一年以上平面设计相关工作经验；3.熟练掌握PS、AI等各类图形处理软件；4.具备良好的审美能力，绘画和配色基本功扎实；5.了解帧动画、骨骼动画等相关动画概念",
            jobDescription: "负责游戏UI交互设计，界面配色，角色动画、特效设计",
            workLocation: "南通市海安市",
        },
        {
            title: "高级游戏美术",
            description: "1.本科及以上学历，拥有至少五年游戏美术设计的行业经验；2.扎实的绘画功底，具备角色、场景、道具的绘画能力；3.具备动画制作能力，能够制作生动的动画；4.熟练使用PS、AE、3dsmax等设计工具；5.有良好的沟通能力，具备团队合作精神，富有工作激情、创造力和责任感，有带队经验者优先。",
            jobDescription: "带领美术团队，配合策划和开发完成游戏美术设计工作",
            workLocation: "南通市海安市"
        }
    ]
)
</script>
<style></style>