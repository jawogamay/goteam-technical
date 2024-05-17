<template>
  <div>
    <client-only>
      <input
        :id="placeholder"
        :placeholder="placeholder"
        :maxlength="String(max)"
        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
        @focus="isFocused = true"
        @blur="isFocused = false"
        :class="[isFocused ? 'border-gray-900' : '',  customClass]"
        :type="inputType"
        v-model="inputComputed"
        autocomplete="off"
      />
    </client-only>
    <span v-if="error" class="text-red-500 text-[14px] font-semibold">
      {{ error }}
  </span>
  </div>
</template>

<script setup>
const emit = defineEmits(["update:input"]);
const props = defineProps([
  "input",
  "placeholder",
  "max",
  "inputType",
  "error",
  "customClass"
]);
const { input, placeholder, max, inputType, error } = toRefs(props);

let isFocused = ref(false);

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit("update:input", val),
});
</script>
