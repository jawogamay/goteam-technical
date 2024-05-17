<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between">
      <Breadcrumbs parent="User" child="Tasks"/>
      <div class="flex items-center justify-center">
        <button
          class="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="handleOpenModal"
        >
          Add Task
        </button>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center mt-8">
      <div
        class="!z-5 relative flex flex-col rounded-[20px] max-w-[900px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined"
      >
        <div class="relative flex flex-row justify-between">
          <div class="flex items-center">
            <h4 class="ml-4 text-xl font-bold text-navy-700">Tasks</h4>
          </div>
        </div>
        <div class="h-full w-full gap-4">
          <div class="mx-auto flex justify-center items-center" v-show="isLoading">
            <Loader />
          </div>
          <div
            class="mt-2 flex items-center justify-between p-2 gap-4"
            v-for="(task, index) in tasks"
            v-show="!isLoading"
            :key="index"
          >
            <div class="flex items-center justify-center gap-4">
              <input
                type="checkbox"
                @change="handleChangeStatus(task)"
                class="flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s] checked:border-none checked:text-white hover:cursor-pointer checked:bg-sky-500"
                :class="task.status_id === 2 && 'bg-sky-500'"
                name="weekly"
              />
              <div class="md:min-w-[690px]">
                <div class="flex justify-between">
                  <div>
                    <p class="text-base font-bold text-navy-700" :class="task.status_id === 2 && 'line-through'">
                      {{ task.title }}
                    </p>
                  </div>
                  <div class="flex gap-2">
                    <div
                      class="flex h-8 py-2 gap-1 rounded-full bg-amber-300 items-center justify-center px-2 text-white font-semibold"
                      v-if="task.status_id === 1"
                    >
                      <span class="material-symbols-rounded w-6 text-white">
                        refresh
                      </span>
                      {{ task.status.name }}
                    </div>
                    <div
                      class="flex h-8 py-2 gap-1 rounded-full bg-green-500 items-center justify-center px-2 text-white font-semibold"
                      v-else
                    >
                      <span class="material-symbols-rounded w-6 text-white">
                        done_outline
                      </span>
                      {{ task.status.name }}
                    </div>
                    <div
                      class="flex h-8 py-2 gap-1 rounded-full bg-indigo-100 items-center justify-center px-2 text-zinc-700 font-semibold"
                    >
                      <span class="material-symbols-rounded w-6 text-blue-500">
                        calendar_month
                      </span>
                      {{ task.due_date }}
                    </div>
                  </div>
                </div>
                <p class="text-zinc-400" :class="task.status_id === 2 && 'line-through'">
                  {{ task.description }}
                </p>
              </div>
            </div>
            <div class="flex space-x-4">
              <button
                @click="editTasks(task)"
                class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-indigo-100"
              >
                <span class="material-symbols-rounded h-6 w-6 text-blue-500">
                  edit
                </span>
              </button>
              <button
                @click="handleDelete(task.id)"
                class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-indigo-100"
              >
                <span class="material-symbols-rounded h-6 w-6 text-red-500">
                  delete
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <UserTaskForm ref="modalForm"/>
  </div>
</template>
<script setup>
import { useTaskStore } from "~/stores/task";

const modalForm = ref();
const taskStore = useTaskStore();
const tasks = computed(() => taskStore.$state.tasks);
const isLoading = computed(() => taskStore.$state.isLoading);

onMounted(async () => {
  try {
    await taskStore.getTasks();
  } catch (error) {
    console.log(error);
  }
});

const handleChangeStatus = async (task) => {
  const status_id = task.status_id === 1 ? 2 : 1;
  const data = {...task, status_id}
  await taskStore.updateTask(data)
  taskStore.getTasks()
}

const editTasks =  (task) => {
  modalForm.value.editTasks(task)
}

const handleOpenModal = () => {
  modalForm.value.open = true;
};


const handleDelete = async (id) => {
  if (confirm("Do you really want to delete?")) {
    await taskStore.removeTask(id)
    taskStore.getTasks()
  }
};

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0",
    },
  ],
});

definePageMeta({
  layout: "users",
  middleware: "guest",
});

</script>
