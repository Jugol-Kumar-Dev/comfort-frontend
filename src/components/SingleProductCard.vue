<template>
    <div class="col mb-3">
        <div class="card border position-relative">
            <RouterLink :to="{name:'productDetails', params:{id:info.id}}">
                <img :src="`${$API_URL}/storage/uploads/${info?.images?.[0]?.image}`" alt="" class="card-img-top" />
            </RouterLink>
            <div class="card-body p-2">
                <!-- <span class="border-0 py-1 px-3 text-white bg-danger fs-4 mb-2">Sale</span> -->
                <RouterLink  :to="{name:'productDetails', params:{id:info.id}}"
                 class="card-title text-dark fs-5 fw-semibold d-inline-block">
                 {{ info?.title?.slice(0, 40) }}...
                </RouterLink>

                <!-- <s class="card-text fs-4">$8,499.00</s> -->

              <p class="card-text text-danger fw-medium fs-3 d-none d-md-block" v-if=" info?.stocks?.length > 0">
                {{ showprice ?? '------'}}
              </p>
                <p class="card-text text-danger d-md-none" v-if=" info?.stocks?.length > 0">
                    {{ showprice ?? '------'}}
                </p>
                <!-- <p class="card-text fs-3">MSRP at 10.499.00</p> -->
                <div class="card-btns d-none d-md-flex align-item-center gap-3">
                    <!-- <button class="border-0  py-2 px-3 fs-5">QUICK VIEW</button> -->
                    <button class="border-0 bg-info text-white py-2 px-3 fs-5 w-100 h-100">CHOOSE OPTION</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue"

    const {info} = defineProps({
        info:{
            type:Object,
            default:{},
            required:false,
        }
    })


    const showprice = computed(()=>{
      const prices = info.stocks?.map(product => product.price);
      return Math.min(...prices)+' $'+' - '+Math.max(...prices)+'$';
    })


</script>

<style lang="scss" scoped>
    .card {
        &:hover {
            .card-btns {
                opacity: 1;
                transition: all ease-in-out 0.4s;
            }
        }
    }
    .card-btns {
        opacity: 0;
        transition: all ease-in-out 0.4s;
    }
</style>
