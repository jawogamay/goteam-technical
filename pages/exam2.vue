<template>
  <div>
    <SecondExamHeaderDesktop />
    <SecondExamHeaderMobile />

    <section class="profile relative lg:p-0 mx-auto">
      <div
        class="block relative mx-auto w-full gap-4 lg:py-6 lg:flex xl:w-11/12 3xl:w-10/12"
      >
        <SecondExamSidebar />
        <div class="w-full lg:w-11/12">
          <div class="bg-white rounded shadow mb-4">
            <div class="p-4 border-b">
              <div class="flex mb-1 items-center">
                <p class="text-lg font-semibold mr-auto">Welcome, Reyven!</p>
              </div>
              <p class="text-gray-500 text-sm">
                <span class="text-green-500">You are almost done</span>
                To further strengthen your profile, it is highly recommended for
                you to complete the 4 sections of your application.
              </p>
            </div>
            <div class="bg-white rounded-md shadow-sm xl:mx-0">
              <div class="flex flex-row flex-wrap lg:flex">
                <div
                  class="flex lg:items-center p-3 relative w-1/4 items-start"
                >
                  <div class="flex flex-col lg:flex-row items-center w-full lg:px-2">
                    <div
                      class="mr-1 rounded-full md:block my-auto md:mr-4 bg-gray-200"
                    >
                      <div
                        class="h-8 w-8 flex items-center justify-center sm:w-10 sm:h-10"
                      >
                        <span class="material-symbols-rounded"> person </span>
                      </div>
                    </div>
                    <div class="w-full flex-col lg:flex-row flex items-center md:block">
                      <p class="font-semi-bold text-gray-700 text-center lg:text-left">
                        Application Profile
                      </p>
                      <div class="flex items-center">
                        <div
                          class="overflow-hidden hidden text-xs lg:flex rounded-full bg-gray-200 w-full h-[8px]"
                        >
                          <div
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white bg-orange-500 w-3/4"
                          ></div>
                        </div>
                        <p class="pl-2 font-semibold text-orange-500 w-1/12">
                          75%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex items-center p-3 relative w-1/4">
                  <div class="flex flex-col lg:flex-row items-center w-full lg:px-2">
                    <div
                      class="mr-1 rounded-full md:block my-auto md:mr-4 bg-gray-200"
                    >
                      <div
                        class="h-8 w-8 flex items-center justify-center sm:w-10 sm:h-10"
                      >
                        <span class="material-symbols-rounded">
                          description
                        </span>
                      </div>
                    </div>
                    <div class="w-full flex-col lg:flex-row flex items-center md:block">
                      <p class="font-semi-bold text-gray-700">Resume/CV</p>
                      <div class="flex items-center">
                        <div
                          class="overflow-hidden hidden lg:flex text-xs flex rounded-full bg-gray-200 w-full h-[8px]"
                        >
                          <div
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white bg-red-500 w-1/2"
                          ></div>
                        </div>
                        <p class="pl-2 font-semibold text-red-500 w-1/12">
                          50%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex items-center p-3 relative w-1/4">
                  <div class="flex-col lg:flex-row flex items-center w-full lg:px-2">
                    <div
                      class="mr-1 rounded-full md:block my-auto md:mr-4 bg-gray-200"
                    >
                      <div
                        class="h-8 w-8 flex items-center justify-center sm:w-10 sm:h-10"
                      >
                        <span class="material-symbols-rounded">
                          monitoring
                        </span>
                      </div>
                    </div>

                    <div class="w-full flex-col lg:flex-row flex items-center md:block">
                      <p class="font-semi-bold text-gray-700  text-center lg:text-left">
                        Assessment Score
                      </p>
                      <div class="flex items-center">
                        <div
                          class="overflow-hidden hidden lg:flex text-xs flex rounded-full bg-gray-200 w-10/12 h-[8px]"
                        >
                          <div
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white bg-red-500"
                          ></div>
                        </div>
                        <p class="pl-2 font-semibold text-red-500 w-1/12">0%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex items-center p-3 relative w-1/4">
                  <div class="flex-col lg:flex-row flex items-center w-full lg:px-2">
                    <div
                      class="mr-1 rounded-full md:block my-auto md:mr-4 bg-gray-200"
                    >
                      <div
                        class="h-8 w-8 flex items-center justify-center sm:w-10 sm:h-10"
                      >
                        <span class="material-symbols-rounded">
                          play_arrow
                        </span>
                      </div>
                    </div>
                    <div class="w-full flex flex-col lg:flex-row items-center md:block">
                      <p class="font-semi-bold text-gray-700 text-center lg:text-left">
                        Video Introduction
                      </p>
                      <div class="flex items-center">
                        <div
                          class="overflow-hidden hidden lg:flex text-xs flex rounded-full bg-gray-200 w-10/12 h-[8px]"
                        >
                          <div
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white bg-red-500"
                          ></div>
                        </div>
                        <p class="pl-2 font-semibold text-red-500 w-1/12">0%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-x-4 lg:flex-row">
            <div class="bg-white rounded shadow w-full h-min w-11/12">
              <div class="border-b relative flex flex-col lg:flex-row">
                <img
                  src="https://www.pngitem.com/pimgs/m/55-550604_john-doe-hd-png-download.png"
                  class="w-[120px] mx-auto mt-4 object-contain lg:m-6 rounded-full"
                />
                <div
                  class="flex flex-col justify-between relative w-full px-6 pt-4 pb-6 gap-y-3 lg:border lg:gap-y-0 lg:p-6"
                >
                  <div class="flex flex-col items-center lg:block">
                    <p class="text-md font-semibold text-left">
                      Reyven S. Biloy
                    </p>
                    <p class="text-md text-left text-gray-700">
                      UI/UX Designer
                    </p>
                  </div>
                  <div class="flex items-center text-gray-600">
                    <span class="material-symbols-rounded mr-2">school</span>
                    <p class="text-gray-600">
                      Bachelor of Science in Computer Science
                    </p>
                  </div>
                  <div
                    class="flex flex-col gap-3 lg:flex-row lg:items-center text-gray-600"
                  >
                    <div class="flex items-center">
                      <span class="material-symbols-rounded mr-2">school</span>
                      <p class="text-gray-600">12 years</p>
                    </div>
                    <div class="flex items-center">
                      <span class="material-symbols-rounded mr-2"
                        >calendar_month</span
                      >
                      <p class="text-gray-600">Immediately</p>
                    </div>
                    <div class="flex items-center">
                      <span class="material-symbols-rounded mr-2 text-green-500"
                        >monetization_on</span
                      >
                      <p class="text-green-500">Php 35,000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="p-6">
                    <div class="flex items-center">
                      <p class="mr-auto title text-lg font-bold">
                        General Details
                      </p>
                      <div class="block">
                        <span class="material-symbols-rounded text-gray-500">
                          edit
                        </span>
                      </div>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Date of Birth
                      </p>
                      <p>07 July 1986</p>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Gender
                      </p>
                      <p>Male</p>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Civil Status
                      </p>
                      <p>Married</p>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Nationality
                      </p>
                      <p>Filipino</p>
                    </div>
                  </div>
                  <div class="p-6 border-t">
                    <div class="flex items-center">
                      <p class="mr-auto title text-lg font-bold">
                        Professional Status
                      </p>
                      <div class="block">
                        <span class="material-symbols-rounded text-gray-500">
                          edit
                        </span>
                      </div>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Recent Job Title
                      </p>
                      <p>Web Designer and Developer</p>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Interview Availability
                      </p>
                      <p>-</p>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Currently Monthly Salary (Gross)
                      </p>
                      <p class="text-green-500">Php 30,000.00</p>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Allowance (Non-Taxable)
                      </p>
                      <p>-</p>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Pre Employment Leaves
                      </p>
                      <p>07 July - Birthday</p>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Where can you work ?
                      </p>
                      <p>0ffice and Home</p>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Estimate Travel Time to Office
                      </p>
                      <p>15mins</p>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Connection Type
                      </p>
                      <p>Globe Broadband</p>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Website Portfolio
                      </p>
                      <p>-</p>
                    </div>
                  </div>
                  <div class="p-6 border-t">
                    <div class="flex items-center">
                      <p class="mr-auto title text-lg font-bold">Preferences</p>
                      <div class="block">
                        <span class="material-symbols-rounded text-gray-500">
                          edit
                        </span>
                      </div>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Day Shift
                      </p>
                      <p>-</p>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Mid Shift
                      </p>
                      <p>-</p>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Night Shift
                      </p>
                      <p>-</p>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        English Only Policy (EOP)
                      </p>
                      <p>-</p>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Where did you hear us?
                      </p>
                      <p>-</p>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Marketing Permission
                      </p>
                      <p>-</p>
                    </div>
                    <div class="flex flex-wrap pt-5">
                      <p class="detail text-gray-500 w-6/12 lg:w-5/12">
                        Referral
                      </p>
                      <p>-</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-y-4 w-full lg:w-4/12">
              <div class="bg-white rounded shadow mt-6 md:mt-0">
                <div class="px-5 py-4">
                  <p class="font-semibold text-gray-500">Profile Completion</p>
                  <div class="flex items-center">
                    <div
                      class="overflow-hidden text-xs flex rounded-full bg-gray-200 w-10/12 h-[8px]"
                    >
                      <div
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white bg-orange-500 w-1/2"
                      ></div>
                    </div>
                    <p class="pl-2 font-semibold text-orange-500 w-1/12">50%</p>
                  </div>
                </div>
                <div class="border-t relative px-5 py-4">
                  <div class="flex items-center w-full text-gray-500">
                    <p class="mr-auto font-semibold">Hide Recommendations</p>
                    <span class="material-symbols-rounded">
                      keyboard_arrow_down
                    </span>
                  </div>
                  <div class="mt-3">
                    <p class="text-gray-500">
                      Fill-up the following items to strengthen your profile.
                      This can help us in matching your profile and increase
                      your chances of landing into your desired role.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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

<style></style>
