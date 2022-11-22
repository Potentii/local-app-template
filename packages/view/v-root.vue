<template>
	<div class="v-root">

		<router-view class="-route"></router-view>

	</div>
</template>



<script>
export default {
   name: 'v-root',
}
</script>



<style>
html, body, #app{
	width: 100%;
	height: 100%;
}
.v-root{

   /**
    * Material colors
    */
   --m-red-800: #C62828;
	--m-red-a700: #D50000;

   --m-pink-a200: #FF4081;
   --m-pink-a400: #F50057;

   --m-purple-700: #7B1FA2;

   --m-deep-purple-a400: #651FFF;

   --m-blue-600: #1E88E5;
   --m-blue-700: #1976D2;

	--m-light-blue-a400: #00B0FF;

   --m-cyan-a200: #18FFFF;
   --m-cyan-a700: #00B8D4;

   --m-yellow-700: #FBC02D;

	--m-amber-a400: #FFC400;

	--m-green-a400: #00E676;
	--m-green-a700: #00C853;

   --m-light-green-a400: #76FF03;

   --m-grey-50: #FAFAFA;
   --m-grey-100: #F5F5F5;
   --m-grey-200: #EEEEEE;
   --m-grey-300: #E0E0E0;
   --m-grey-400: #BDBDBD;
   --m-grey-500: #9E9E9E;
   --m-grey-600: #757575;
   --m-grey-700: #616161;
   --m-grey-800: #424242;
   --m-grey-900: #212121;


	--transparent-black: rgba(0,0,0,0.06);


   /**
    * Theme colors
    */
   /* Blank */
   --blank-bg--base: var(--m-grey-900);
   --blank-bg--1: var(--blank-bg--base);
   --blank-bg--2: var(--m-grey-900);
   --blank-fg--base: var(--m-grey-100);
   --blank-ic--base: var(--m-grey-600);

   /* Accent */
   --accent-bg--base: var(--m-blue-600);
   --accent-bg--1: var(--m-blue-600);
   --accent-bg--2: var(--m-blue-600);
   --accent-fg--base: var(--m-grey-50);
   --accent-ic--base: var(--m-grey-200);

   /* Links */
   --link-fg: var(--m-blue-600);
   --link-fg--visited: var(--m-blue-600);

   /* Text selection */
   --selection-bg: var(--accent-bg--base);
   --selection-fg: var(--accent-fg--base);

	--sep-border-color: var(--m-grey-800);



	display: flex;
	flex-direction: column;

   width: 100%;
   height: 100%;

   background-color: var(--blank-bg--base);
	color: var(--blank-fg--base);

	font-family: 'Roboto', sans-serif;
   font-size: 16px;
	letter-spacing: 0.07em;
   -webkit-font-smoothing: antialiased;

	overflow: hidden;
	scroll-behavior: smooth;
}



/**
 * Material icons
 */
.v-root .material-icons{
	color: var(--blank-ic--base);
   font-display: swap;
}



/**
 * Links
 */
.v-root a:link{
   color: var(--link-fg);
} .v-root a:visited{
   color: var(--link-fg--visited);
}



/**
 * Text selection
 */
.v-root ::selection{
   background-color: var(--selection-bg);
   color: var(--selection-fg);
   text-shadow: inherit;
}



.v-root .--thin-scroll{
	scrollbar-width: thin;
}
.v-root .--thin-scroll::-webkit-scrollbar-track{
	border-radius: 7px;
	background-color: rgba(0,0,0,0.1);
}
.v-root .--thin-scroll::-webkit-scrollbar{
	width: 7px;
	height: 7px;
}
.v-root .--thin-scroll::-webkit-scrollbar-thumb{
	border-radius: 7px;
	background-color: rgba(0,0,0,0.2);
}

.v-root > .-route{
	transition: opacity 0.3s ease;
}
.v-root > .-route.--page-transition-enter-active{
	opacity: 0;
}
.v-root > .-route.--page-transition-leave-active{
	opacity: 0;
}

.v-root .v-button{
	--v-button--bg--hover: rgba(255,255,255,0.1);
	--v-button--bg--active: rgba(255,255,255,0.3);
	--v-button--border-size: 2px;
}
.v-root .v-text-field{
	--v-text-field--bg--hover: rgba(255,255,255,0.1);
	--v-text-field--fg: var(--m-grey-100);
}

</style>
