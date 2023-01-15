<template>
    <div class="dashboard-container">
        <router-link to="tasks">
            <div class="dashboard-section">Tareas</div>
        </router-link>
        <router-link to="credentials">
            <div class="dashboard-section">Credenciales</div>
        </router-link>
        <router-link to="accounts">
            <div class="dashboard-section">Cuentas</div>
        </router-link>
    </div>
</template>

<script async setup>
import { RouterLink } from 'vue-router'
</script>

<style>
.dashboard-container {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-bottom: 30px;
    padding: 20px;
}

.dashboard-section {
    margin: 5px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
}
</style>