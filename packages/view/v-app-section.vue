<template>
	<div class="v-app-section">

		<!-- * Main section * -->
		<main class="-main">
			<router-view class="-route"/>
		</main>

	</div>
</template>



<script>



export default {

   name: 'v-app-section',

}
</script>



<style>
.v-app-section{
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-items: center;

	min-width: 100%;
	width: 100%;
	max-width: 100%;

	background-color: var(--blank-bg--base);

	overflow: auto;
}

.v-app-section > .-main{
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
	align-items: center;

	min-width: 100%;
	width: 100%;
	max-width: 100%;
	max-height: 100%;
}
.v-app-section > .-main > .-route{
	min-width: 100%;
	width: 100%;
	max-width: 100%;
	max-height: 100%;
}
</style>
