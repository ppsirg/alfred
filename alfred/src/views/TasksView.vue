<template>
    <AppContainer title="Tareas">
        <div>
            <input v-model="new_group_name" type="text" placeholder="nuevo grupo de tareas...">
            <button @click="new_group">+</button>
        </div>
        <div v-for="gr, nm in store.tasks_list">
            <div>
                <h4>{{ gr.name }}</h4>
                <div>
                    <input v-model="new_task_name[gr.name]" type="text" placeholder="nueva tarea...">
                    <button @click="new_task(gr.name, nm)">+</button>
                </div>
                <div v-for="tk in gr.tasks">
                    {{ tk }}
                </div>
            </div>
        </div>
    </AppContainer>
</template>

<script async setup>
import { ref, reactive } from 'vue';
import AppContainer from '../components/AppContainer.vue'
import { useTaskStore } from '../stores/tasks';
import { openDB } from 'idb'

const store = useTaskStore()
const new_group_name = ref('')
const new_task_name = reactive({})

async function new_group() {
    await store.add_group(new_group_name.value)
    new_task_name[new_group_name.value] = ''
    new_group_name.value = ''
}

async function new_task(group, group_index) {
    const new_task = new_task_name[group]
    await store.add_task(new_task, group)
    new_task_name[group] = ''
}

</script>

<style>

</style>