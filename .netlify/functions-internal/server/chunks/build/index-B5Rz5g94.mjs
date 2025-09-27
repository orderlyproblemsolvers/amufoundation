import __nuxt_component_1 from './index-IBbNTAQQ.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BVklhgCu.mjs';
import { ref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = ref({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const isSubmitting = ref(false);
    useHead({
      title: "Contact Us - AMU Foundation",
      meta: [
        {
          name: "description",
          content: "Get in touch with AMU Foundation. Contact us for inquiries about our programs, volunteer opportunities, partnerships, and more. We're here to help create opportunities for children."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))}><section class="relative bg-gray-50 py-16"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center py-12"><h1 class="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl"> Get In Touch With <br><span class="text-rose-700">AMU Foundation</span></h1><p class="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"> We&#39;re here to help and answer any questions you might have. Whether you want to learn more about our programs, volunteer, or partner with us, we&#39;d love to hear from you. </p></div></div></section><section class="relative bg-gray-50 py-16"><div class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12"><div class="space-y-8"><div><h2 class="text-3xl font-bold text-gray-900 mb-8"> Contact Information </h2><p class="text-lg text-gray-600 mb-8"> Reach out to us through any of the following channels. We&#39;re committed to responding promptly to all inquiries. </p></div><div class="space-y-6"><div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"><div class="flex items-start space-x-4"><div class="flex-shrink-0">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-lucide-map-pin",
        class: "w-8 h-8 text-rose-700"
      }, null, _parent));
      _push(`</div><div><h3 class="text-xl font-semibold text-gray-900 mb-2"> Our Location </h3><p class="text-gray-600"> The Kings Opposite NAF Conference Centre <br> Ahmadu Bello Way <br>Abuja, Nigeria </p></div></div></div><div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"><div class="flex items-start space-x-4"><div class="flex-shrink-0">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-lucide-phone",
        class: "w-8 h-8 text-rose-700"
      }, null, _parent));
      _push(`</div><div><h3 class="text-xl font-semibold text-gray-900 mb-2"> Phone Number </h3><p class="text-gray-600"> +234 (0)91 347 91980 </p></div></div></div><div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"><div class="flex items-start space-x-4"><div class="flex-shrink-0">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-lucide-mail",
        class: "w-8 h-8 text-rose-700"
      }, null, _parent));
      _push(`</div><div><h3 class="text-xl font-semibold text-gray-900 mb-2"> Email Address </h3><p class="text-gray-600"> info.go@amufoundation.org </p></div></div></div><div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"><div class="flex items-start space-x-4"><div class="flex-shrink-0">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-lucide-clock",
        class: "w-8 h-8 text-rose-700"
      }, null, _parent));
      _push(`</div><div><h3 class="text-xl font-semibold text-gray-900 mb-2"> Office Hours </h3><p class="text-gray-600"> Monday - Friday: 8:00 AM - 5:00 PM<br> Saturday: 9:00 AM - 2:00 PM<br> Sunday: Closed </p></div></div></div></div></div><div class="bg-white rounded-lg shadow-lg p-8 border border-gray-100"><h2 class="text-3xl font-bold text-gray-900 mb-8"> Send Us a Message </h2><form class="space-y-6"><div><label for="name" class="block text-sm font-medium text-gray-700 mb-2"> Full Name * </label><input type="text" id="name"${ssrRenderAttr("value", formData.value.name)} required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-colors duration-200" placeholder="Enter your full name"></div><div><label for="email" class="block text-sm font-medium text-gray-700 mb-2"> Email Address * </label><input type="email" id="email"${ssrRenderAttr("value", formData.value.email)} required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-colors duration-200" placeholder="Enter your email address"></div><div><label for="subject" class="block text-sm font-medium text-gray-700 mb-2"> Subject * </label><select id="subject" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-colors duration-200"><option value=""${ssrIncludeBooleanAttr(Array.isArray(formData.value.subject) ? ssrLooseContain(formData.value.subject, "") : ssrLooseEqual(formData.value.subject, "")) ? " selected" : ""}>Select a subject</option><option value="general-inquiry"${ssrIncludeBooleanAttr(Array.isArray(formData.value.subject) ? ssrLooseContain(formData.value.subject, "general-inquiry") : ssrLooseEqual(formData.value.subject, "general-inquiry")) ? " selected" : ""}>General Inquiry</option><option value="program-information"${ssrIncludeBooleanAttr(Array.isArray(formData.value.subject) ? ssrLooseContain(formData.value.subject, "program-information") : ssrLooseEqual(formData.value.subject, "program-information")) ? " selected" : ""}> Program Information </option><option value="volunteer-opportunity"${ssrIncludeBooleanAttr(Array.isArray(formData.value.subject) ? ssrLooseContain(formData.value.subject, "volunteer-opportunity") : ssrLooseEqual(formData.value.subject, "volunteer-opportunity")) ? " selected" : ""}> Volunteer Opportunity </option><option value="partnership"${ssrIncludeBooleanAttr(Array.isArray(formData.value.subject) ? ssrLooseContain(formData.value.subject, "partnership") : ssrLooseEqual(formData.value.subject, "partnership")) ? " selected" : ""}>Partnership</option><option value="donation"${ssrIncludeBooleanAttr(Array.isArray(formData.value.subject) ? ssrLooseContain(formData.value.subject, "donation") : ssrLooseEqual(formData.value.subject, "donation")) ? " selected" : ""}>Donation</option><option value="media-inquiry"${ssrIncludeBooleanAttr(Array.isArray(formData.value.subject) ? ssrLooseContain(formData.value.subject, "media-inquiry") : ssrLooseEqual(formData.value.subject, "media-inquiry")) ? " selected" : ""}>Media Inquiry</option><option value="technical-support"${ssrIncludeBooleanAttr(Array.isArray(formData.value.subject) ? ssrLooseContain(formData.value.subject, "technical-support") : ssrLooseEqual(formData.value.subject, "technical-support")) ? " selected" : ""}>Technical Support</option><option value="other"${ssrIncludeBooleanAttr(Array.isArray(formData.value.subject) ? ssrLooseContain(formData.value.subject, "other") : ssrLooseEqual(formData.value.subject, "other")) ? " selected" : ""}>Other</option></select></div><div><label for="message" class="block text-sm font-medium text-gray-700 mb-2"> Message * </label><textarea id="message" required rows="6" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-colors duration-200 resize-vertical" placeholder="Tell us more about your inquiry...">${ssrInterpolate(formData.value.message)}</textarea></div><div class="pt-4"><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="w-full bg-rose-700 text-white font-semibold py-4 px-6 rounded-lg hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">`);
      if (!isSubmitting.value) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "i-lucide-send",
          class: "w-5 h-5"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isSubmitting.value) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "i-lucide-loader-2",
          class: "w-5 h-5 animate-spin"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(isSubmitting.value ? "Sending..." : "Send Message")}</span></button></div><p class="text-sm text-gray-500 text-center"> * Required fields. We typically respond within 24-48 hours. </p></form></div></div></div></section><section class="relative bg-gray-50 py-16"><div class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12 text-center"><div class="bg-white rounded-lg shadow-lg p-12 border border-gray-100"><h2 class="text-3xl font-bold text-gray-900 mb-6"> Ready to Make a Difference? </h2><p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"> Join us in creating opportunities for children through education, sports, and music. Together, we can ensure that talent opens doors — not privilege. </p><div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/events",
        class: "inline-flex items-center justify-center px-8 py-4 bg-rose-700 text-white font-semibold rounded-lg hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2 transition-colors duration-200 space-x-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-lucide-calendar",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>View Events</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "i-lucide-calendar",
                class: "w-5 h-5"
              }),
              createVNode("span", null, "View Events")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/donate",
        class: "inline-flex items-center justify-center px-8 py-4 bg-white text-rose-700 font-semibold rounded-lg border-2 border-rose-700 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2 transition-colors duration-200 space-x-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-lucide-heart",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Support Us</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "i-lucide-heart",
                class: "w-5 h-5"
              }),
              createVNode("span", null, "Support Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B5Rz5g94.mjs.map
