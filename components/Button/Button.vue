<script setup lang="ts">
const props = defineProps<{
    siteId?: number | string
    label?: string
    primary?: boolean
    size?: 'small' | 'medium' | 'large'
    icon?: string
}>()

const emit = defineEmits<{
    click: [e: MouseEvent]
}>()
const classes = computed(() => ({
    'storybook-button--primary': props.primary,
    'storybook-button--secondary': !props.primary,
    [`storybook-button--${props.size || 'medium'}`]: true,
}))
const onClick = (e: MouseEvent) => emit('click', e);
</script>
<template>
    <button @click="onClick($event)" class="flex items-center gap-2 bg-transparent text-red-500">
        <Icon :icon="String(props.icon)" />
        {{ label }}
    </button>
</template>