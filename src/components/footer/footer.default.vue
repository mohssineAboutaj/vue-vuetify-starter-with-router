<template>
	<v-footer :fixed="fixed" app>
		<div class="text-center mx-auto">
			<v-icon primary class="mr-2">far fa-copyright</v-icon>{{ new Date().getFullYear() }} - {{ title }}
		</div>
	</v-footer>
</template>

<script>
import { general } from '@/mixins/footer'

export default {
	mixins: [
		general,
	],
}
</script>
