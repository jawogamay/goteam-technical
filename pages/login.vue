<template>
  <div class="justify-center items-center flex flex-col mt-32">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm ">
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
      <form class="space-y-6" @submit.prevent="login()" method="POST">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <Input
              placeholder="johndoe@example.com"
              v-model:input="email"
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
              v-model:input="password"
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
           Login
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <LazyNuxtLink
          to="/register"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Register Now</LazyNuxtLink
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
  middleware: 'authenticated',
});
let email = ref(null);
let password = ref(null);
let errors = ref(null);

// onMounted(() => {
//   if(isAuthenticated) {
//     router.push('/user/task')
//   } 
// })
const login = async () => {
  errors.value = null;
  try {
    await userStore.login(email.value, password.value);
    const token = window.localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + userStore.token;
    }
    router.push("/user/task");
  } catch (error) {
    console.log(error)
  }
};
</script>
<style lang=""></style>
