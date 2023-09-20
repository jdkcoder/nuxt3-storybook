<script setup lang='ts'>
import { Icon as Iconify } from '@iconify/vue'

const props = defineProps<{
    icon?: string
}>()
</script>

<template>
    <Iconify :icon="String(props?.icon)" v-if="props.icon" />
</template>