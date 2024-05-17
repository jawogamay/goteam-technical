<template>
  <Modal
    :open="open"
    @modal:close="handleCloseModal"
    @modal:submit="handleSubmit"
    title="Add Tasks"
  >
    <form>
      <div>
        <label
          for="title"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Title</label
        >
        <Input
          v-model:input="form.title"
          inputType="text"
          placeholder="Enter task title"
          :customClass="v$.title.$errors.length ? 'ring-red-500' : ''"
        />
        <div
          class="input-errors text-red-500"
          v-for="error of v$.title.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="mt-3">
        <label
          for="Description"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Description</label
        >
        <textarea
          v-model="form.description"
          class="h-20 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          :class="v$.description.$errors.length ? 'ring-red-500' : ''"
        />
        <div
          class="input-errors text-red-500"
          v-for="error of v$.description.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="mt-4">
        <label
          for="due_date"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Due Date</label
        >
        <Input
          v-model:input="form.due_date"
          inputType="date"
          placeholder="Enter due date"
          :customClass="v$.due_date.$errors.length ? 'ring-red-500' : ''"
        />
        <div
          class="input-errors text-red-500"
          v-for="error of v$.due_date.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
    </form>
  </Modal>
</template>
<script setup>
import { useTaskStore } from "~/stores/task";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const open = ref(false);
const isEditing = ref(false);
const taskStore = useTaskStore();

const initialForm = {
  id: null,
  title: "",
  description: "",
  due_date: "",
  status_id: 1,
};
const form = reactive({ ...initialForm });

const rules = {
  title: { required },
  description: { required },
  due_date: { required },
};

const v$ = useVuelidate(rules, form);

const editTasks = (task) => {
  isEditing.value = true;
  open.value = true;
  Object.assign(form, task);
};

defineExpose({
  open,
  editTasks,
});

const handleSubmit = async () => {
  try {
    const result = await v$.value.$validate();
    if (!result) {
      // notify user form is invalid
      return;
    }
    if (!isEditing.value) {
      await taskStore.addTask(form);
    } else {
      await taskStore.updateTask(form);
    }
    taskStore.getTasks();
    Object.assign(form, initialForm);
    open.value = false;
  } catch (error) {
    console.log(error);
  }
};

const handleOpenModal = () => {
  open.value = true;
};

const handleCloseModal = () => {
  isEditing.value = false;
  open.value = false;
  v$.value.$reset();
};

watch(
  () => open.value,
  (val) => {
    if (!val) {
      isEditing.value = false;
      Object.assign(form, initialForm);
    }
  }
);
</script>
<style lang=""></style>
