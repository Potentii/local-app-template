<template>
	<button
		class="v-button"
		:class="{
			'--capsule': !!capsule,
			'--round': !!round,
			'--outline': !!outline,
			'--outline-interaction': !!computed_outline_interaction,
			'--text-end': !!text_end,
			'--text-start': !!text_start,
			'--fullwidth': !!fullwidth,
			'--bold': !!bold,
			'--italic': !!italic,
			'--uppercase': !!uppercase,

			'--size-xxs': !!sizeXxs,
			'--size-xs': !!sizeXs,
			'--size-s': !!sizeS,
			'--size-m': !sizeXxs && !sizeXs && !sizeS && !sizeL && !sizeXl, // Default one
			'--size-l': !!sizeL,
			'--size-xl': !!sizeXl,

			'--unit-ratio': is_unit_ratio,
	 	}"
		@mousedown="_onMouseDown($event)"
		:type="type"
		:title="title"
		:disabled="disabled">
		<v-loading-spinner class="-loading" v-if="loading"></v-loading-spinner>
		<i class="-icon material-icons" v-else-if="icon && !loading">{{ icon }}</i>
		<span class="-text" v-if="text">{{ text }}</span>
	</button>
</template>



<script>
import VLoadingSpinner from './v-loading-spinner.vue';


export default {

	name: 'v-button',


	components: { VLoadingSpinner },


	props: {
		loading: {
			type: Boolean,
			required: false,
			default: false
		},



		icon: {
			type: String,
			required: false
		},

		// iconOnly: {
		// 	type: Boolean,
		// 	required: false,
		// 	default: false
		// },

		text: {
			type: String,
			required: false
		},



		type: {
			type: String,
			required: false,
			default: 'button'
		},

		title: {
			type: String,
			required: false
		},

		sizeXxs: {
			type: Boolean,
			required: false,
			default: false
		},
		sizeXs: {
			type: Boolean,
			required: false,
			default: false
		},
		sizeS: {
			type: Boolean,
			required: false,
			default: false
		},
		sizeM: {
			type: Boolean,
			required: false,
			default: false
		},
		sizeL: {
			type: Boolean,
			required: false,
			default: false
		},
		sizeXl: {
			type: Boolean,
			required: false,
			default: false
		},



		outline: {
			type: Boolean,
			required: false,
			default: false
		},
		outlineInteraction: {
			type: Boolean,
			required: false,
			default: false
		},

		round: {
			type: Boolean,
			required: false,
			default: false
		},

		capsule: {
			type: Boolean,
			required: false,
			default: false
		},



		/**
		 * @deprecated
		 */
		text_end: {
			type: Boolean,
			required: false,
			default: false
		},

		/**
		 * @deprecated
		 */
		text_start: {
			type: Boolean,
			required: false,
			default: false
		},

		fullwidth: {
			type: Boolean,
			required: false,
			default: false
		},



		bold: {
			type: Boolean,
			required: false,
			default: false
		},

		italic: {
			type: Boolean,
			required: false,
			default: false
		},

		uppercase: {
			type: Boolean,
			required: false,
			default: false
		},



		autofocus: {
			type: Boolean,
			required: false
		},

		disabled: {
			type: Boolean,
			required: false,
			default: false
		},

		dontFocusOnClick: {
			type: Boolean,
			required: false
		},

	},


	computed: {
		is_unit_ratio(){
			return !this.text;
		},

		computed_outline_interaction(){
			return this.outlineInteraction || this.outline;
		},
	},


	mounted(){
		if(this.autofocus)
			this.focus();
	},


	methods: {
		getButton(){
			return this.$el;
		},

		isFocus(){
			return document.activeElement === this.getButton();
		},

		focus(){
			this.getButton().focus();
		},

		blur(){
			this.getButton().blur();
		},

		_onMouseDown(e){
			if(this.dontFocusOnClick)
				e.preventDefault();
			this.$emit('mousedown', e);
		}

	}

}
</script>



<style>
.v-button{
	--var-fsize:         var(--v-button--fsize, 14px);
	--var-width:         var(--v-button--width, auto);
	--var-height:        var(--v-button--height, auto);
	--var-padding-v:     var(--v-button--padding-v, 0.6em);
	--var-padding-h:     var(--v-button--padding-h, 1.3em);
	--var-bg:            var(--v-button--bg, transparent);
	--var-bg--hover:     var(--v-button--bg--hover, rgba(0,0,0,0.04));
	--var-bg--active:    var(--v-button--bg--active, rgba(0,0,0,0.08));
	--var-fg:            var(--v-button--fg, var(--blank-fg--base));
	--var-fg--hover:     var(--v-button--fg--hover, var(--var-fg));
	--var-elems-margin:  var(--v-button--elems-margin, 1em);
	--var-border-radius: var(--v-button--border-radius, 0);
	--var-border-size:   var(--v-button--border-size, 1px);
	--var-border-color:  var(--v-button--border-color, var(--m-grey-400));
	--var-loading-size:  var(--v-button--loading-size, 48px);
	--var-loading-stroke: var(--v-button--loading-stroke, 5px);
	--var-loading-color: var(--v-button--loading-color, var(--var-fg));

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	min-width: var(--var-width);
	width: var(--var-width);
	max-width: var(--var-width);

	min-height: var(--var-height);
	height: var(--var-height);
	max-height: var(--var-height);

	background: var(--var-bg);

	padding: var(--var-padding-v) var(--var-padding-h);

	font-size: var(--var-fsize);

	border-radius: var(--var-border-radius);
}
.v-button:focus{
	outline: 1px solid transparent;
}

.v-button.--size-xxs{
	--v-button--height: 1.3rem;
	--v-button--fsize: 10px;
	--v-button--padding-v: 0.05rem;
	--v-button--loading-size: 0.7rem;
	--v-button--loading-stroke: 2px;
}
.v-button.--size-xs{
	--v-button--height: 2rem;
	--v-button--fsize: 10px;
	--v-button--padding-v: 0.4rem;
	--v-button--loading-size: 1rem;
	--v-button--loading-stroke: 4px;
}
.v-button.--size-s{
	--v-button--height: 2.5rem;
	--v-button--fsize: 12px;
	--v-button--padding-v: 0.6rem;
	--v-button--loading-size: 1.3rem;
	--v-button--loading-stroke: 6px;
}
.v-button.--size-m{
	--v-button--height: 3rem;
	--v-button--fsize: 14px;
	--v-button--padding-v: 0.8rem;
	--v-button--loading-size: 1.7rem;
	--v-button--loading-stroke: 8px;
}
.v-button.--size-l{
	--v-button--height: 3.5rem;
	--v-button--fsize: 16px;
	--v-button--padding-v: 1rem;
	--v-button--loading-size: 1.9rem;
	--v-button--loading-stroke: 8px;
}
.v-button.--size-xl{
	--v-button--height: 4rem;
	--v-button--fsize: 18px;
	--v-button--padding-v: 1.2rem;
	--v-button--loading-size: 2.4rem;
	--v-button--loading-stroke: 8px;
}

.v-button.--unit-ratio{
	--var-height:    var(--v-button--height, auto);
	--var-width:     var(--v-button--width, var(--var-height, auto));
	--var-padding-v: var(--v-button--padding-v, 0.8em);
	--var-padding-h: var(--v-button--padding-h, var(--var-padding-v));
}


.v-button::after{
	pointer-events: none;
	content: '';
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	border-radius: var(--var-border-radius);

	box-shadow: inset 0 0 0 calc(var(--var-border-size) * 0.5) transparent;

	transition: opacity, background-color, box-shadow, 0.15s ease;
}
.v-button:not(:disabled):hover::after,
.v-button:not(:disabled):focus::after{
	opacity: 1;
	background-color: var(--var-bg--hover);
}
.v-button:not(:disabled):active::after{
	opacity: 1;
	background-color: var(--var-bg--active);
}
.v-button.--outline-interaction:not(:disabled):focus::after{
	box-shadow: inset 0 0 0 var(--var-border-size) var(--var-border-color);
}
.v-button:disabled{
	cursor: default;
	opacity: 0.5;
}
.v-button:disabled > .-icon.material-icons,
.v-button:disabled > .-loading,
.v-button:disabled > .-text{
	opacity: 0.7;
}

.v-button.--fullwidth{
	width: 100%;
}


.v-button.--text-start{
	padding: 0 1em;
	justify-content: flex-start;
}
.v-button.--text-end{
	padding: 0 1em;
	justify-content: flex-end;
}


.v-button.--capsule{
	--var-border-radius: 30em;
	padding: var(--var-padding-v) calc(var(--var-padding-h) * 1.2);
}

.v-button.--round{
	--var-border-radius: 50%;
}

.v-button.--outline::after{
	opacity: 1;
	box-shadow: 0 0 0 1pt var(--var-border-color);
}


.v-button > .-loading{
	--v-loading-spinner--size: var(--var-loading-size);
	--v-loading-spinner--stroke-width: var(--var-loading-stroke);
	--v-loading-spinner--color: var(--var-loading-color);
}


.v-button > .-icon.material-icons{
	font-size: 1.4em;
	color: var(--var-fg);
	transition: color 0.15s ease;
	text-shadow: 1px 1px 0 rgba(0,0,0,0.6);
	/*z-index: 2;*/
}
.v-button:not(:disabled):hover > .-icon.material-icons{
	color: var(--var-fg--hover);
}
.v-button.--italic > .-icon.material-icons{
	font-style: italic;
}

.v-button > .-text{
	color: var(--var-fg);
	font-family: 'Roboto', sans-serif;
	font-size: 1em;

	text-shadow: 1px 1px 0 rgba(0,0,0,0.6);
	letter-spacing: 0.05em;

	transition: color 0.15s ease;
	/*z-index: 2;*/
}
.v-button.--bold > .-text{
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
}
.v-button.--uppercase > .-text{
	text-transform: uppercase;
}
.v-button.--italic > .-text{
	font-style: italic;
}
.v-button > .-loading + .-text,
.v-button > .-icon + .-text{
	margin-left: var(--var-elems-margin);
}

.v-button:not(:disabled):focus > .-text,
.v-button:not(:disabled):hover > .-text{
	color: var(--var-fg--hover);
}
</style>
