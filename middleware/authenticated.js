import { useUserStore } from "~/stores/user";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();
  const { isAuthenticated } = storeToRefs(userStore)
  try {
    await userStore.getUser()
  } catch (error) {
    
  }
  if (to.fullPath === "/login" && isAuthenticated.value) {
    return navigateTo("/");
  } 
  if (to.fullPath === "/register" && isAuthenticated.value) {
    return navigateTo("/");
  }
});
