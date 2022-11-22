<template>
	<div
		class="v-text-field"
		:class="{
			'--fullwidth': !!fullwidth,
			'--bold': !!bold,
			'--italic': !!italic,
			'--resizeable': !!resizeable,
			'--textarea': type=='textarea',
		}">

		<v-loading-spinner class="-loading" v-if="loading"></v-loading-spinner>

		<i class="-icon material-icons" v-else-if="icon && !loading">{{ icon }}</i>

		<template v-if="type != 'textarea'">
			<input
				class="-input"
				ref="input"
				:type="type"
				:title="title"
				:autocomplete="autocomplete"
				:spellcheck="spellcheck"
				:placeholder="placeholder"
				:disabled="disabled"
				:readonly="readonly"
				:required="required"
				v-model="value"
				@blur="$emit('blur', $event)"
				@focus="$emit('focus', $event)"
				@input="$emit('input', $event)"/>
		</template>
		<template v-else>
			<textarea
				class="-input"
				ref="input"
				:title="title"
				:autocomplete="autocomplete"
				:spellcheck="spellcheck"
				:placeholder="placeholder"
				:disabled="disabled"
				:readonly="readonly"
				:required="required"
				v-model="value"
				@blur="$emit('blur', $event)"
				@focus="$emit('focus', $event)"
				@input="$emit('input', $event)">
			</textarea>
		</template>

	</div>
</template>



<script>
import VLoadingSpinner from './v-loading-spinner.vue';


export default {

	name: 'v-text-field',


	components: { VLoadingSpinner },


	props: {

		'loading': {
			type: Boolean,
			required: false,
			default: false
		},

		'disabled': {
			type: Boolean,
			required: false,
			default: false
		},

		'readonly': {
			type: Boolean,
			required: false,
			default: false,
		},

		'type': {
			type: String,
			required: false,
			default: 'text'
		},

		'title': {
			type: String,
			required: false,
			default: null
		},

		'autocomplete': {
			type: String,
			required: false,
			default: 'off' // on, off
		},

		'spellcheck': {
			type: String,
			required: false,
			default: 'false' // true, false, default
		},

		'icon': {
			type: String,
			required: false
		},

		'placeholder': {
			type: String,
			required: false
		},

		'resizeable': {
			type: Boolean,
			required: false,
			default: false,
		},

		'autofocus': {
			type: Boolean,
			required: false
		},

		'autoclear': {
			type: Boolean,
			required: false
		},

		'required': {
			type: Boolean,
			required: false,
			default: false,
		},

		'modelValue': {
			type: [String, Number],
			required: false
		},

		'fullwidth': {
			type: Boolean,
			required: false,
			default: false
		},

		'bold': {
			type: Boolean,
			required: false,
			default: false
		},

		'italic': {
			type: Boolean,
			required: false,
			default: false
		},

	},


	computed: {
		value: {
			get() {
				return this.modelValue;
			},
			set(value) {
				this.$emit('update:modelValue', value);
			}
		}
	},


	emits: [
		'update:modelValue',
		'input',
		'blur',
		'focus',
	],


	mounted(){
		if(this.autofocus)
			this.focus();
		if(this.autoclear)
			this.clear();
	},


	methods: {
		getInput(){
			return this.$refs.input;
		},

		isFocus(){
			return document.activeElement === this.getInput();
		},

		focus(){
			this.getInput()?.focus();
		},

		blur(){
			this.getInput()?.blur();
		},

		clear(){
			if(this.getInput())
				this.value = '';
		},
	}

}
</script>



<style>
.v-text-field{
	--var-fsize:         var(--v-text-field--fsize, 14px);
	--var-width:         var(--v-text-field--width, auto);
	--var-height:        var(--v-text-field--height, auto);
	--var-padding-v:     var(--v-text-field--padding-v, 0.6em);
	--var-padding-h:     var(--v-text-field--padding-h, 0.8em);
	--var-bg:            var(--v-text-field--bg, transparent);
	--var-bg--hover:     var(--v-text-field--bg--hover, rgba(0,0,0,0.06));
	--var-fg:            var(--v-text-field--fg, var(--m-grey-200));
	--var-fg--hover:     var(--v-text-field--fg--hover, var(--var-fg));
	--var-elems-margin:  var(--v-text-field--elems-margin, 1em);
	--var-border-radius: var(--v-text-field--border-radius, 3px);
	--var-border-color:  var(--v-text-field--border-color, var(--m-grey-700));

	cursor: text;
	display: flex;
	flex-direction: row;
	align-items: center;

	min-width: var(--var-width);
	width: var(--var-width);
	max-width: var(--var-width);

	min-height: var(--var-height);
	height: var(--var-height);
	max-height: var(--var-height);

	background: var(--var-bg);

	font-size: var(--var-fsize);

	border-radius: var(--var-border-radius);
}
.v-text-field.--textarea{
	--var-padding-h: var(--v-text-field--padding-h, var(--var-padding-v));
}

.v-text-field:focus{
	outline: 1px solid transparent;
}

.v-text-field::after{
	pointer-events: none;
	content: '';
	opacity: 1;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	border-radius: var(--var-border-radius);

	box-shadow: 0 0 0 1px var(--var-border-color);

	transition: opacity, background-color, box-shadow, 0.2s ease;
}
.v-text-field:not(:disabled):hover::after,
.v-text-field:not(:disabled):focus-within::after{
	opacity: 1;
	background-color: var(--var-bg--hover);
}
.v-text-field:not(:disabled):focus-within::after{
	box-shadow: 0 0 0 1px var(--var-border-color);
}
.v-text-field:disabled{
	cursor: default;
	opacity: 0.5;
}
.v-text-field:disabled > .-icon.material-icons,
.v-text-field:disabled > .-loading{
	opacity: 0.7;
}

.v-text-field.--fullwidth{
	--var-width: 100%;
}


.v-text-field > .-loading{
	flex: 0 0 auto;
	width: 1.8em;
	height: 1.8em;
}


.v-text-field > .-icon.material-icons{
	flex: 0 0 auto;
	font-size: 1.4em;
	color: var(--var-fg);
	transition: color 0.2s ease;
}
.v-text-field:not(:disabled):hover > .-icon.material-icons{
	color: var(--var-fg--hover);
}
.v-text-field.--italic > .-icon.material-icons{
	font-style: italic;
}

.v-text-field > .-input{
	flex: 1 1 auto;
	color: var(--var-fg);
	font-family: 'Roboto', sans-serif;
	font-size: 1em;
	letter-spacing: 0.05em;

	width: var(--var-width);
	height: var(--var-height);

	padding: var(--var-padding-v) var(--var-padding-h);

	border-radius: var(--var-border-radius);

	transition: color 0.2s ease;
}
.v-text-field.--textarea:not(.--resizeable) > .-input{
	resize: none;
}
.v-text-field.--textarea.--resizeable > .-input{
	resize: vertical;
}

.v-text-field.--bold > .-input{
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
}
.v-text-field.--italic > .-input{
	font-style: italic;
}
.v-text-field > .-loading + .-input,
.v-text-field > .-icon + .-input{
	margin-left: var(--var-elems-margin);
}

.v-text-field:not(:disabled):focus-within > .-input,
.v-text-field:not(:disabled):hover > .-input{
	color: var(--var-fg--hover);
}

</style>
