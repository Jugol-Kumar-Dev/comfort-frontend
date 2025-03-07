<template>
    <section class="customer-section">
        <div class="container">
            <h3 class="text-capitalize fw-semibold fs-3">Select Your Payment Method</h3>
            <div class="method row flex-wrap mt-5">
                <div class="col-lg-6">
                    <div class="row flex-wrap">
                        <div class="col-6">
                            <input type="radio" v-model="order.paymentMethod" name="payment" id="cash_on_delivery"
                                value="cod" class="method-radio">
                            <label for="cash_on_delivery" class="method-item" role="button">
                                <i class="bi bi-cash-coin"></i>
                                <p>Cash On Delivery</p>
                            </label>
                        </div>
                        <div class="col-6">
                            <input type="radio" v-model="order.paymentMethod" name="payment" id="credit_card" value="stripe"
                                class="method-radio">
                            <label for="credit_card" class="method-item" role="button">
                                <i class="bi bi-credit-card"></i>
                                <p>Stripe</p>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="method-item align-items-start">
                        <h3 class="text-start fw-semibold">Order Summary</h3>
                        <ul class="w-100 mb-4">
                            <li class="d-flex align-items-center justify-content-between mb-3">
                                <p class="fs-5">Subtotal ({{ cartStore.getCartLength }} Items Total Of Qty And Prices)</p>
                                <p>$ {{ cartStore.getCartTotalPrice }}</p>
                            </li>
                            <li class="d-flex align-items-center justify-content-between mb-3">
                                <p class="fs-5">Included Delivery Charge </p>
                                <p v-if="loading">...</p>
                                <p v-else>$ {{ deliveryDeails?.order_area?.delivery_charge }} </p>
                            </li>
                            <li class="d-flex align-items-center justify-content-between">
                                <p class="fs-3">Total Amount</p>
                                <p v-if="loading">...</p>
                                <p class="fs-3 text-info" v-else>$ {{ (parseInt(cartStore.getCartTotalPrice) + parseInt(deliveryDeails?.order_area?.delivery_charge)) ?? '...' }}</p>
                            </li>
                        </ul>


                        <button v-if="loading" class="primary-button w-50" :disabled="authStore.loading">
                          <div class="spinner-border fs-3" role="status">
                            <span class="visually-hidden ">Loading...</span>
                          </div>
                        </button>

                        <button v-else @click="makePayment" class="primary-button">Confirm Order</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import useAxios from '@/composables/useAxios';
import { useAuthStore } from '@/stores/useAuthStore';
import { useCartStore } from '@/stores/useCartStore';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const cartStore = useCartStore();
const route = useRoute();
const router = useRouter()
const authStore = useAuthStore();

const { loading, sendRequest } = useAxios();

const deliveryDeails = ref(null)

const order = ref({
    addressId: route.query.addressId,
    orders: cartStore.getCartItems,
    paymentMethod: null,
    orderTotal: cartStore.getCartTotalPrice,
})


const makePayment = async () => {

    const token = await authStore.getToken();
    if (!order.value.paymentMethod) {
        $toast.error("Please Select Your Payment Method...")
    } else {
        const savedOrder =  await sendRequest({
            url:"/api/save-order",
            method:"POST",
            data:order.value,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

      cartStore.clearCart()
      if(savedOrder?.data && savedOrder.data?.type === "stripe_payment"){
        window.open(savedOrder.data?.data);
      }else{
        return router.push({name: "ordercomplate"});
      }

    }
}

onMounted(async () => {
    const token = await authStore.getToken();
    if (route.query.addressId) {
        const data = await sendRequest({
            method: 'get',
            url: `/api/address/${route.query.addressId}`,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        deliveryDeails.value = data?.data
    }else{
        router.push({name:'checkout', query:{invalidAddressId:true}})
    }

})

</script>


<style lang="scss" scoped>
.method {
    &-item {

        background: #fff;
        display: flex;
        flex-direction: column;
        gap: 18px;
        align-items: center;
        padding: 30px;

        i {
            font-size: 28px;
        }

        p {
            font-weight: 500;
        }
    }
}

.method-radio {
    display: none;
}

.method-radio:checked+label {
    background: #0FA5E9;

    i,
    p {
        color: #fff;
    }
}</style>
