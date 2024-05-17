<template>
  <div class="justify-center items-center flex flex-col mt-32">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://go.team/wp-content/uploads/2022/05/GoTeam-AI-Powered-People-Logo-Dark-1.png"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="register()" method="POST">
        <div>
          <label
            for="name"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Name</label
          >
          <div class="mt-2">
            <Input
              placeholder="John Doe"
              v-model:input="form.name"
              inputType="text"
              :error="errors && errors.name && errors.name[0]"
            />
          </div>
        </div>
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <Input
              placeholder="johndoe@example.com"
              v-model:input="form.email"
              inputType="email"
              :error="errors && errors.email && errors.email[0]"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <Input
              placeholder="Password"
              v-model:input="form.password"
              inputType="password"
              :error="errors && errors.password && errors.password[0]"
            />
          </div>
        </div>
        <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Confirm Password</label
              >
            </div>
            <div class="mt-2">
              <Input
                placeholder="Confirm Password"
                v-model:input="form.password_confirmation"
                inputType="password"
                :error="errors && errors.password && errors.password[0]"
              />
            </div>
          </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        <LazyNuxtLink
          to="/login"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Login Now</LazyNuxtLink
        >
      </p>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
const userStore = useUserStore();
const router = useRouter();
definePageMeta({
  middleware: "authenticated",
});
const initialForm = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

const form = reactive({...initialForm})
const errors = ref(null)

const register = async () => {
  errors.value = null;
  try {
    await userStore.register(form);
    const token = window.localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + userStore.token;
    }
    router.push("/user/task");
  } catch (error) {
    errors.value = error.response.data.errors
  }
};
</script>
<style lang=""></style>
