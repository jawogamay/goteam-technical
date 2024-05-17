<template>
  <div class="w-full z-10 stick stick-position hidden lg:block top-0">
    <div class="h-[55px] flex relative px-6 bg-white shadow-sm items-center">
      <img
        src="https://careers.go.team/img/goteam-logo-dark.svg"
        class="w-[110px] mr-9 cursor-pointer"
      />
      <div class="flex mr-auto items-center gap-x-9 h-full">
        <div
          class="flex items-center text-gray-600 h-full hover:text-primary cursor-pointer gap-x-4"
        >
          <p>Careers</p>
          <p>Find your Role</p>
        </div>
        <div class="absolute w-3/12" style="left: 36%">
          <form class="relative items-center flex">
            <input
              type="text"
              placeholder="Type a job title or role"
              class="pr-[115px] rounded-full border w-full pl-4 pr-24 py-2 text-base focus:outline lg:pr-24"
            />
            <div
              class="flex items-center text-red-500 absolute right-2 py-1 rounded-full"
            >
              <button
                class="rounded-full py-1 absolute text-white bg-sky-600 text-base right-[5px] flex px-4"
              >
                <span class="material-symbols-rounded"> search </span>
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="relative">
        <div class="flex items-center">
          <div class="mr-2 text-right">
            <p class="font-semibold text-gray-900">John Doe</p>
            <p class="text-sky-600">johndoe@gmail.com</p>
          </div>
          <img
            src="https://www.pngitem.com/pimgs/m/55-550604_john-doe-hd-png-download.png"
            class="mr-2 border h-9 w-9 rounded-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>
