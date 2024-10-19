<template>
    <div id="carouselExample" class="carousel slide" :data-bs-interval="interval" data-bs-ride="carousel">
        <div class="relative">
            <div v-for="(item, index) in items" :key="index" class="bg-right" :class="['carousel-item', { active: index === 0 }]">
                <img :src="item.src" class="d-block w-full f-full object-cover bg-left h-96" :alt="item.alt" />
            </div>
            <div class="absolute top-1/4 left-1/4 text-white">
                <div class="text-3xl">景语网络科技</div>
                <div class="mt-8 text-3xl">
                    成就美好数字世界
                </div>
            </div>
        </div>
        <!-- <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </a> -->
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
defineProps({
    // 轮播图项数组
    items: {
        type: Array,
        required: true,
        default: () => []
    },
    // 自动播放间隔时间（毫秒）
    interval: {
        type: [Number, String],
        default: 5000
    }
})

</script>