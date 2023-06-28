<template>
    <main>    
        <div class="container">            
             
            <div class="table-responsive-sm">
              <table class="table">
                  <thead>
                      <tr>
                          <th>DESCRIPTION</th>
                          <th>AMOUNT</th>
                      </tr>
                  </thead>
                  <tbody>  
                        <tr>
                            <td>{{this.planTitle}} - Payment</td>
                            <td>${{this.planPrice}}</td>
                        </tr>
                         <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>${{this.planPrice}}</strong></td>                        
                        </tr>
                  </tbody>
              </table>
            </div> 
            <div class="row">
                <p>Pay with your Credit Card via Stripe Stripe Checkout</p>
            </div>
            <div class="row">
                <stripe-checkout
                        ref="checkoutSubRef"
                        mode="subscription"
                        :pk="publishableKey"
                        :line-items="lineItems"
                        :session-id="sessionId"
                        :customerEmail="customer_email"
                        :success-url="successURL"
                        :cancel-url="cancelURL"
                        @loading="v = loading = v"
                    />
                <stripe-checkout
                    ref="checkoutRef"
                    mode="payment"
                    :pk="publishableKey"
                    :line-items="lineItems"
                    :session-id="sessionId"
                    :customerEmail="customer_email"
                    :success-url="successURL"
                    :cancel-url="cancelURL"
                    @loading="v = loading = v"
                />
                <button v-if="this.planProduct_period === 'lifetime'" class="btn btn-warning mb-4" @click="oneTimePaymnet">Pay Now</button>            
                <button v-else-if="this.planProduct_period === 'years'" class="btn btn-warning mb-4" @click="submit">Pay Now</button>
                <button v-else-if="this.planProduct_period === 'months'" class="btn btn-warning mb-4" @click="submit">Pay Now</button>
                <button v-else></button>
            </div>     
        </div>    
    </main>
    </template>
    
    <script>
        import { StripeCheckout } from '@vue-stripe/vue-stripe';  
        export default { 
            components :{
                StripeCheckout,
            },   
             props:{
                planID:Number,
                planPrice:Number,
                planPriceID:String,
                planTitle:String,
                planProduct_period:String,
                userEmail:String,
                userIDs:Number
            }, 
            methods: {             
                submit(){
                    this.$refs.checkoutSubRef.redirectToCheckout();
                } ,
                oneTimePaymnet(){
                    this.$refs.checkoutRef.redirectToCheckout();
                }            
            },
            data(){
                    //this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
                    this.publishableKey = 'pk_test_51LSEpOHHk9pJpDON0T9ZRXy2Jg1OfhDBkFQa8vDVszyHDBoIWKMpzJAOHj4WF9yffEq04HbX7dbtcK9AikDHJNil00JAULc5Tt';
                return {                                         
                    loading: false,                        
                    lineItems: [
                        {
                            price: this.planPriceID,
                            //price: 'price_1LUQXuHHk9pJpDONEIzBwkVX',
                            quantity: 1,                         
                        }                    
                    ],                 
                    customer_email:this.userEmail,                      
                    successURL: `http://127.0.0.1:8000/success`,
                    cancelURL: `http://127.0.0.1:8000/cancel`
                }
            } ,        
            mounted() {          
            },
            created() { 
                window.scrollTo(0,0); 
            }        
        }
    </script>
    