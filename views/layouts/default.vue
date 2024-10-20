<script setup lang="ts">
</script>
<template>
	<div class="overflow-hidden">
		<div class="w-full h-14 bg-[#fff]  z-[999] ">
			<div class="w-[1180px] m-auto  flex ">
				<div>
					<img src="../assets/image/logo.png" alt="" class="w-14 m-auto">
				</div>
				<ul>
					<li>
						<NuxtLink to="/">
							<div class="">
								<svg>
									<text x="40%" y="50%" dy=".35em" text-anchor="middle">
										南通景语网络科技有限公司
									</text>

								</svg>

							</div>
						</NuxtLink>
					</li>
				</ul>
			</div>
			<div>
			</div>
		</div>

		<div>
			<main>
				<slot />
			</main>
		</div>
		<div class="w-full h-[200px] bg-[#262c50]">
			<div class=" m-auto flex justify-around items-center">
				<div class="">
					<img src="../assets/image/logo.png" alt="">
				</div>
				<div class="text-white">
					<div class="leading-6">
						<span>
							联系电话:
						</span>
						<span>
							18962834596
						</span>
					</div>
					<div class="leading-6">
						<span>公司地址:</span>
						<span>
							南通市海安市晶茂国际1幢
						</span>
					</div>
				</div>

			</div>

		</div>
	</div>

</template>
<style>
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
		stroke-width: 2;
	}

	100% {
		fill: rgba(72, 138, 204, 1);
		stroke: rgba(54, 95, 160, 0);
		stroke-dashoffset: -25%;
		stroke-dasharray: 50% 0;
		stroke-width: 0;
	}
}
</style>