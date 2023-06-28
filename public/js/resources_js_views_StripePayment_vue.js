"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_StripePayment_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/StripePayment.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/StripePayment.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_stripe_vue_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue-stripe/vue-stripe */ "./node_modules/@vue-stripe/vue-stripe/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    StripeCheckout: _vue_stripe_vue_stripe__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    planID: Number,
    planPrice: Number,
    planPriceID: String,
    planTitle: String,
    planProduct_period: String,
    userEmail: String,
    userIDs: Number,
    publishableKeys: String,
    sessionId: String,
    success_url: String
  },
  data: function data() {
    //this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;                   
    return {
      plan_id: this.planID,
      plan_title: this.planTitle,
      plan_price: this.planPrice,
      plan_price_id: this.planPriceID,
      plan_product_id: this.planProduct_period,
      user_email: this.userEmail,
      user_id: this.userIDs,
      publishableKey: this.publishableKeys,
      sessionId: this.sessionId,
      successURLs: this.success_url,
      loading: false,
      lineItems: [{
        price: this.plan_price_id,
        //price: 'price_1LUQXuHHk9pJpDONEIzBwkVX',
        quantity: 1
      }],
      customer_email: this.user_email,
      successURL: this.successURLs,
      cancelURL: "http://127.0.0.1:8000/cancel"
    };
  },
  methods: {
    submit: function submit() {
      this.$refs.checkoutSubRef.redirectToCheckout();
    },
    oneTimePaymnet: function oneTimePaymnet() {
      this.$refs.checkoutRef.redirectToCheckout();
    }
  },
  mounted: function mounted() {},
  created: function created() {
    window.scrollTo(0, 0);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/StripePayment.vue?vue&type=template&id=2d35fc2c":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/StripePayment.vue?vue&type=template&id=2d35fc2c ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "mt-2"
};
var _hoisted_3 = {
  "class": "table-responsive-sm"
};
var _hoisted_4 = {
  "class": "table"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "DESCRIPTION"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "AMOUNT")])], -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Total")], -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "row"
};
var _hoisted_8 = {
  key: 3
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_stripe_checkout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("stripe-checkout");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Terms:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.plan_price), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" per calendar year for premium access to our community. Membership includes FREE nanny contract or nanny share contract, discounted pricing on all background checks, and access to our CareCalendar, Last Minute Care Text Service, Verified Care Provider Service and personal support from our team. Membership renews automatically. To avoid charges for the next year, cancel before the renewal date. ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.plan_title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.plan_price), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.plan_price), 1 /* TEXT */)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_stripe_checkout, {
    ref: "checkoutSubRef",
    mode: "subscription",
    pk: this.publishableKey,
    "line-items": $data.lineItems,
    customerEmail: $data.customer_email,
    "success-url": $data.successURL,
    "cancel-url": $data.cancelURL,
    onLoading: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.v = $data.loading = _ctx.v;
    })
  }, null, 8 /* PROPS */, ["pk", "line-items", "customerEmail", "success-url", "cancel-url"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_stripe_checkout, {
    ref: "checkoutRef",
    mode: "payment",
    pk: this.publishableKey,
    "session-id": $data.sessionId,
    onLoading: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.v = $data.loading = _ctx.v;
    })
  }, null, 8 /* PROPS */, ["pk", "session-id"]), this.planProduct_period === 'lifetime' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    "class": "btn btn-warning mb-4",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.oneTimePaymnet && $options.oneTimePaymnet.apply($options, arguments);
    })
  }, "Pay Now")) : this.planProduct_period === 'years' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    "class": "btn btn-warning mb-4",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.submit && $options.submit.apply($options, arguments);
    })
  }, "Pay Now")) : this.planProduct_period === 'months' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 2,
    "class": "btn btn-warning mb-4",
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.submit && $options.submit.apply($options, arguments);
    })
  }, "Pay Now")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_8))])])]);
}

/***/ }),

/***/ "./resources/js/views/StripePayment.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/StripePayment.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StripePayment_vue_vue_type_template_id_2d35fc2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StripePayment.vue?vue&type=template&id=2d35fc2c */ "./resources/js/views/StripePayment.vue?vue&type=template&id=2d35fc2c");
/* harmony import */ var _StripePayment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StripePayment.vue?vue&type=script&lang=js */ "./resources/js/views/StripePayment.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_nanny_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_nanny_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_StripePayment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_StripePayment_vue_vue_type_template_id_2d35fc2c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/StripePayment.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/StripePayment.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/views/StripePayment.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StripePayment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StripePayment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StripePayment.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/StripePayment.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/StripePayment.vue?vue&type=template&id=2d35fc2c":
/*!****************************************************************************!*\
  !*** ./resources/js/views/StripePayment.vue?vue&type=template&id=2d35fc2c ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StripePayment_vue_vue_type_template_id_2d35fc2c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StripePayment_vue_vue_type_template_id_2d35fc2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StripePayment.vue?vue&type=template&id=2d35fc2c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/StripePayment.vue?vue&type=template&id=2d35fc2c");


/***/ })

}]);