<template>
    <div class="main-container">
        <div class="header-container">
            <div>{{ props.title }}</div>
        </div>
        <div class="inner-container">
            <slot></slot>
        </div>
    </div>
</template>

<script async setup>
import { defineProps } from 'vue';

const props = defineProps(['title'])

</script>

<style>
.main-container {
    width: 100%;
}

.header-container {
    padding: 5px;
}

.inner-container {
    padding: 5px;
}
</style>