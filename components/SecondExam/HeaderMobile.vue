<template>
  <div
    class="w-full z-20 h-[55px] flex items-center lg:hidden top-0 block stick sticky-position relative bg-white shadow-sm px-6"
  >
    <img
      src="https://careers.go.team/img/goteam-logo-dark.svg"
      class="w-[100px] mr-9 cursor-pointer"
    />
    <img
      src="https://www.pngitem.com/pimgs/m/55-550604_john-doe-hd-png-download.png"
      class="ml-auto border h-9 w-9 rounded-full"
    />
    <div>
      <span class="material-symbols-rounded ml-3"> menu </span>
    </div>
  </div>
</template>
<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0",
    },
  ],
});
</script>
