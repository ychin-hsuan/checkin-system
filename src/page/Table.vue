<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const gotoHome = () => {
  router.push("/");
};
</script>
<template>
  <div class="h-screen p-2 bg-white">
    <div class="pt-20 px-20">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <!-- row 2 -->
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <!-- row 3 -->
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- footer -->
    <footer>
      <div class="flex justify-center items-center">
        <div class="absolute bottom-28 w-11/12 border"></div>
      </div>
      <div class="">
        <span class="text-lg absolute left-20 bottom-10 font-thin"
          >復興高中 資訊團隊</span
        >
        <label class="absolute bottom-9 right-40" for="my_modal_7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
          >
            <path
              d="M19.5 35.75C28.4746 35.75 35.75 28.4746 35.75 19.5C35.75 10.5254 28.4746 3.25 19.5 3.25C10.5254 3.25 3.25 10.5254 3.25 19.5C3.25 28.4746 10.5254 35.75 19.5 35.75Z"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.5 13V19.5"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.5 26H19.5153"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </label>
        <input type="checkbox" id="my_modal_7" class="modal-toggle" />
        <div class="modal" role="dialog">
          <div class="modal-box bg-white text-black">
            <div
              class="flex flex-col justify-center items-center gap-4 text-lg"
            >
              <div class="flex">
                <span> 預計報到人數：</span><span>90</span>
              </div>
              <div class="flex">
                <span> 目前報到人數：</span
                ><span class="text-[#FF4D4D]">89</span>
              </div>
            </div>
          </div>
          <label class="modal-backdrop" for="my_modal_7">Close</label>
        </div>

        <button class="absolute bottom-10 right-24" @click="gotoHome">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="36"
            viewBox="0 0 37 36"
            fill="none"
          >
            <path
              d="M4.625 13.5L18.5 3L32.375 13.5V30C32.375 30.7956 32.0501 31.5587 31.4719 32.1213C30.8937 32.6839 30.1094 33 29.2917 33H7.70833C6.89058 33 6.10632 32.6839 5.52809 32.1213C4.94985 31.5587 4.625 30.7956 4.625 30V13.5Z"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.875 33V18H23.125V33"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </footer>
  </div>
</template>
