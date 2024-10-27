<template>
	<div class="overflow-hidden">
		<!-- 导航条 -->
		<nav class="w-full h-14 bg-white z-[999] fixed top-0 left-0 right-0">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
				<div class="flex items-center">
					<img src="../assets/image/logo.png" alt="" class="w-14 h-14 mr-2">
					<NuxtLink to="/" class="text-lg font-medium text-gray-800"><svg>
							<text x="40%" y="50%" dy=".35em" text-anchor="middle">
								南通景语网络科技有限公司
							</text>

						</svg>
					</NuxtLink>
				</div>
				<div class="hidden md:block">
					<ul class="flex space-x-4">
						<li>
							<NuxtLink to="/" class="text-gray-700 h-14  hover:text-blue-500">
								<span class="h-14 hover:border-y-blue-600 hover:border-b-4 inline-block leading-[56px]">
									首页
								</span>
							</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/about" class="text-gray-600  hover:text-blue-500">
								<span class="h-14 hover:border-y-blue-700 hover:border-b-4 inline-block leading-[56px]">
									关于景语
								</span>

							</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/join" class="text-gray-600  hover:text-blue-500">
								<span class="h-14 hover:border-y-blue-700 hover:border-b-4 inline-block leading-[56px]">
									加入我们
								</span>
							</NuxtLink>
						</li>
					</ul>
				</div>
				<div class="md:hidden">
					<button @click="toggleMenu"
						class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600">
						<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
							stroke="currentColor">
							<path :class="isOpen ? 'hidden' : 'block'" stroke-linecap="round" stroke-linejoin="round"
								stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
							<path :class="isOpen ? 'block' : 'hidden'" stroke-linecap="round" stroke-linejoin="round"
								stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
		</nav>

		<!-- 抽屉菜单 -->
		<transition name="slide">
			<div v-if="isOpen" class="fixed inset-0 flex z-50" role="dialog" aria-modal="true">
				<div class="fixed inset-0 bg-black opacity-30" @click="toggleMenu"></div>
				<div class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
					<div class="absolute top-0 right-0 pt-2 pr-2">
						<button @click="toggleMenu"
							class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500">
							<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
								stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div class="flex-1 pt-5 pb-4 overflow-y-auto">
						<div class="flex-shrink-0 px-4">
							<!-- <img src="../assets/image/logo.png" alt="" class="w-14 h-14"> -->
						</div>
						<nav class="mt-8 px-2 space-y-1">
							<NuxtLink to="/"
								class="block p-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-700"
								@click="toggleMenu">首页</NuxtLink>
							<NuxtLink to="/about"
								class="block p-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-700"
								@click="toggleMenu">关于景语</NuxtLink>
							<NuxtLink to="/join"
								class="block p-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100 hover:text-gray-700"
								@click="toggleMenu">加入我们</NuxtLink>
						</nav>
					</div>
				</div>
			</div>
		</transition>


		<main class="pt-14">
			<slot />
		</main>

		<footer class="w-full sm:h-[240px] lg:h-[200px] bg-[#262c50] relative">
			<div class="m-auto flex justify-around items-center">
				<div>
					<img src="../assets/image/logo.png" alt="">
				</div>
				<div class="text-white">
					<div class="leading-6">
						<span>联系电话:</span>
						<span>18962834596</span>
					</div>
					<div class="leading-6">
						<span>公司地址:</span>
						<span>南通市海安市晶茂国际1幢</span>
					</div>
				</div>
			</div>
			<div class="text-white absolute lg:top-40 left-2/4 -translate-x-2/4 text-sm text-center w-full">
				<div class="sm:m-auto">
					Copyright © 2024 南通景语网络科技有限公司
				</div>
				<a href="https://beian.miit.gov.cn/#/Integrated/index" class="block">
					<span>工信部备案号:</span>
					<span>苏ICP备18025843</span>
				</a>
			</div>
		</footer>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
	isOpen.value = !isOpen.value;
};
</script>
<style scoped>
svg {
	font-family: "Russo One", sans-serif;
	height: 56px;
}

svg text {
	animation: stroke 5s infinite alternate;
	stroke-width: 2;
	stroke: #365FA0;
	font-size: 20px;
}

@keyframes stroke {
	0% {
		fill: rgba(72, 138, 204, 0);
		stroke: rgba(54, 95, 160, 1);
		stroke-dashoffset: 25%;
		stroke-dasharray: 0 50%;
		stroke-width: 2;
	}

	70% {
		fill: rgba(72, 138, 204, 0);
		stroke: rgba(54, 95, 160, 1);
	}

	80% {
		fill: rgba(72, 138, 204, 0);
		stroke: rgba(54, 95, 160, 1);
		stroke-width: 1;
	}

	100% {
		fill: rgba(72, 138, 204, 1);
		stroke: rgba(54, 95, 160, 0.5);
		stroke-dashoffset: -25%;
		stroke-dasharray: 50% 0;
		stroke-width: 0;
	}
}
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.slide-enter, .slide-leave-to /* .slide-leave-active in <2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0;
}

</style>