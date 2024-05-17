import { defineStore } from "pinia";
import axios from "~/plugins/axios";

const $axios = axios().provide.axios;

export const useTaskStore = defineStore('tasks', {
    state: () => ({
        tasks: [],
        isLoading: false
    }),
    actions: {
        async getTasks() {
            this.$state.isLoading = true
            let res = await $axios.get('/tasks')
            this.$state.tasks = res.data.data
            this.$state.isLoading = false
        },
        async addTask({title, description, due_date, status_id}) {
            this.$state.isLoading = true
            await $axios.post('/tasks', {
                title,
                description,
                due_date,
                status_id
            })
            this.$state.isLoading = false
        },
        async updateTask({id, title, description, due_date, status_id}) {
            this.$state.isLoading = true
            await $axios.put('/tasks/'+ id, {
                id,
                title,
                description,
                due_date,
                status_id
            })
            this.$state.isLoading = false
        },
        async removeTask(id) {
            this.$state.isLoading = true
            await $axios.delete('/tasks/'+id)
            this.$state.isLoading = false
        },
    },
    persist: true
})