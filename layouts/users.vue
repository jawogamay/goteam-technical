<template>
  <header class="text-blue-600">
    <div class="container mx-auto px-4 py-8 flex items-center">
      <div class="mr-auto md:w-48 flex-shrink-0 text-blue">
        <NuxtLink to="/">
          <img
            class="mx-auto h-10 w-auto"
            src="https://go.team/wp-content/uploads/2022/05/GoTeam-AI-Powered-People-Logo-Dark-1.png"
            alt="Your Company"
          />
        </NuxtLink>
      </div>
      <nav class="contents">
        <ul class="ml-4 xl:w-48 flex items-center justify-end">
          <li class="ml-2 lg:ml-4 relative inline-block">
            <LazyNuxtLink v-if="isAuthenticated" to="/user/task">
              <div class="flex">
                <p class="font-medium mx-4">Tasks</p>
                <button
                  @click="logout()"
                >
                <span class="material-symbols-rounded h-6 w-6">
                  logout
                </span>
                </button>
              </div>
            </LazyNuxtLink>
            <div v-else class="space-x-8">
              <LazyNuxtLink to="/login"> Login </LazyNuxtLink>
              <LazyNuxtLink to="/register"> Register </LazyNuxtLink>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="bg-zinc-300 px-2.5 w-full z-0 h-dvh">
    <slot />
  </div>
</template>

<script setup>
import { useUserStore } from "~~/stores/user";
import { storeToRefs } from "pinia";
const userStore = useUserStore();
const router = useRouter();
const { isAuthenticated } = storeToRefs(userStore);


onMounted(async () => {
  try {
    await userStore.getUser();
  } catch (error) {
    console.log(error);
  }
});


const logout = async () => {
  try {
    await userStore.logout()
    localStorage.removeItem('token');
    router.push('/')
    return
  } catch (error) {

    console.log(error)
  }
}

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0",
    },
  ],
});

</script>
