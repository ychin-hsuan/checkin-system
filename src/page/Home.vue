<script setup>
import { onMounted } from "vue";
import { googleOneTap } from "vue3-google-login";
import { decodeCredential } from "vue3-google-login";

const callback = (response) => {
  const userData = decodeCredential(response.credential);
  console.log("Handle the userData", userData);
};
onMounted(() => {
  googleOneTap({ autoLogin: true })
    .then((response) => {
      console.log("Handle the response", response);
    })
    .catch((error) => {
      console.log("Handle the error", error);
    });
});
</script>

<template>
  <div class="h-screen p-2 bg-white">
    <!-- vue3-google-login -->
    <div class="p-10 absolute right-5 top-5">
      <GoogleLogin :callback="callback" prompt auto-login />
    </div>

    <div class="h-48"></div>

    <div class="flex gap-16 justify-center">
      <!-- 新生查詢 -->
      <div class="flex flex-col justify-center items-center">
        <span
          class="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r span-css px-12 pb-12 pt-10"
          >新生報到系統</span
        >
        <div>
          <div>
            <div class="gap-5 flex pb-5">
              <label>
                <input
                  type="search"
                  id="query"
                  class="border rounded-md border-[#E0E0E0] bg-white shadow-sm pr-48 pl-4 py-4 justify-end flex"
                  placeholder="Typing..."
                />
              </label>
              <button
                class="px-6 py-4 bg-[#2798FF] text-white rounded-md text-xl"
                onclick="my_modal_1.showModal()"
                type="submit"
              >
                Search
              </button>
              <!-- modal -->
              <dialog id="my_modal_1" class="modal">
                <div class="w-1/3">
                  <div
                    class="flex flex-col border-2 border-[#1D232A] shadow-md rounded-xl p-5 bg-white text-black"
                  >
                    <div class="flex justify-center pb-6 pt-3">
                      <span class="text-2xl font-semibold">新生資料確認</span>
                    </div>

                    <div class="flex gap-6 flex-col px-5 pb-8">
                      <span class="text-lg">新生姓名： </span>
                      <span class="text-lg">身分證字號：</span>
                      <span class="text-lg">報到編號：</span>
                    </div>

                    <div
                      class="flex justify-center items-center pb-4 modal-action"
                    >
                      <form method="dialog" class="gap-8 flex">
                        <button
                          class="border border-black rounded-md py-2 px-4 text-lg"
                        >
                          取消報到
                        </button>

                        <button
                          class="border border-black rounded-md py-2 px-4 bg-black text-white text-lg btn"
                        >
                          確認報到
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
    <footer>
      <div class="flex justify-center items-center">
        <div class="absolute bottom-28 w-11/12 border"></div>
      </div>

      <span class="text-lg absolute left-20 bottom-10 font-thin"
        >復興高中 資訊團隊</span
      >
    </footer>
  </div>
</template>

<style scoped>
.span-css {
  font-weight: bold;
  font-family: Microsoft JhengHei;
  margin: auto;
  text-align: center;
  background: linear-gradient(to top, #2798ff, #001895);
  background: -webkit-linear-gradient(to top, #2798ff, #001895);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
