// var PouchDB = require('pouchdb-browser');
// import PouchDB from 'pouchdb-browser';
// var db_tasks = new PouchDB('dbtasks');
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', () => {
    const tasks_list = ref([])
    async function add_task(task, group) {
        for (const gr of tasks_list.value) {
            if (gr.name == group) {
                gr.tasks.push(task)
                break
            }
        }
    }
    async function delete_task(task) {}
    async function update_task(task) {}
    async function add_group(group) {
        tasks_list.value.push({name: group, tasks: []})
    }
    async function delete_group(group) {}
    async function update_group(group) {}
    return {tasks_list, add_group, add_task}
})
