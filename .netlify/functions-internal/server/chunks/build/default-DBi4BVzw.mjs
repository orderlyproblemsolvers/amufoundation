import { _ as __nuxt_component_0$1 } from './nuxt-link-BVklhgCu.mjs';
import { mergeProps, ref, watch, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { _ as _export_sfc, d as useRoute } from './server.mjs';
import __nuxt_component_1$1 from './index-IBbNTAQQ.mjs';
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
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import '@iconify/utils/lib/css/icon';

const _imports_0 = publicAssetsURL("/img/amulogo.png");
const _sfc_main$2 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const mobileMenuOpen = ref(false);
    const aboutDropdownOpen = ref(false);
    const storiesDropdownOpen = ref(false);
    const isActiveRoute = (path) => {
      return route.path === path;
    };
    const isActiveAboutRoute = () => {
      return route.path.startsWith("/about/");
    };
    const isActiveStoriesRoute = () => {
      return route.path.startsWith("/stories/");
    };
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false;
      aboutDropdownOpen.value = false;
      storiesDropdownOpen.value = false;
    };
    watch(() => route.path, () => {
      closeMobileMenu();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><header class="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 w-full" data-v-85cac8f4><div class="container mx-auto px-4" data-v-85cac8f4><div class="flex items-center justify-between h-16 lg:h-20" data-v-85cac8f4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center space-x-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="AMU Logo" class="h-12 w-auto lg:h-16" data-v-85cac8f4${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "AMU Logo",
                class: "h-12 w-auto lg:h-16"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2" data-v-85cac8f4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: [
          "transition-colors duration-200 font-medium relative",
          isActiveRoute("/") ? "text-rose-700 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-rose-700" : "text-gray-700 hover:text-rose-700"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative group" data-v-85cac8f4><button class="${ssrRenderClass([
        "transition-colors duration-200 font-medium flex items-center relative",
        isActiveAboutRoute() ? "text-rose-700 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-rose-700" : "text-gray-700 hover:text-rose-700"
      ])}" data-v-85cac8f4> About AMU <svg class="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-85cac8f4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-85cac8f4></path></svg></button><div class="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" data-v-85cac8f4><div class="py-2" data-v-85cac8f4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about/history",
        class: [
          "block px-4 py-2 text-sm hover:bg-gray-50",
          isActiveRoute("/about/history") ? "text-rose-700 bg-rose-50" : "text-gray-700 hover:text-rose-700"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Brief History `);
          } else {
            return [
              createTextVNode(" Brief History ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-center" data-v-85cac8f4><div class="w-[80%] h-px bg-rose-400" data-v-85cac8f4></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about/vision-mission",
        class: [
          "block px-4 py-2 text-sm hover:bg-gray-50",
          isActiveRoute("/about/vision-mission") ? "text-rose-700 bg-rose-50" : "text-gray-700 hover:text-rose-700"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Vision &amp; Mission `);
          } else {
            return [
              createTextVNode(" Vision & Mission ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-center" data-v-85cac8f4><div class="w-[80%] h-px bg-rose-400" data-v-85cac8f4></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about/team",
        class: [
          "block px-4 py-2 text-sm hover:bg-gray-50",
          isActiveRoute("/about/team") ? "text-rose-700 bg-rose-50" : "text-gray-700 hover:text-rose-700"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Our Team `);
          } else {
            return [
              createTextVNode(" Our Team ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-center" data-v-85cac8f4><div class="w-[80%] h-px bg-rose-400" data-v-85cac8f4></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about/kacis",
        class: [
          "block px-4 py-2 text-sm hover:bg-gray-50",
          isActiveRoute("/about/kacis") ? "text-rose-700 bg-rose-50" : "text-gray-700 hover:text-rose-700"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` KACIS `);
          } else {
            return [
              createTextVNode(" KACIS ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-center" data-v-85cac8f4><div class="w-[80%] h-px bg-rose-400" data-v-85cac8f4></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about/safehaven",
        class: [
          "block px-4 py-2 text-sm hover:bg-gray-50",
          isActiveRoute("/about/safehaven") ? "text-rose-700 bg-rose-50" : "text-gray-700 hover:text-rose-700"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Safe Haven Project `);
          } else {
            return [
              createTextVNode(" Safe Haven Project ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="relative group" data-v-85cac8f4><button class="${ssrRenderClass([
        "transition-colors duration-200 font-medium flex items-center relative",
        isActiveStoriesRoute() ? "text-rose-700 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-rose-700" : "text-gray-700 hover:text-rose-700"
      ])}" data-v-85cac8f4> AMU Stories <svg class="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-85cac8f4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-85cac8f4></path></svg></button><div class="absolute top-full left-0 mt-2 w-36 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" data-v-85cac8f4><div class="py-2" data-v-85cac8f4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/stories/gallery",
        class: [
          "block px-4 py-2 text-sm hover:bg-gray-50",
          isActiveRoute("/stories/gallery") ? "text-rose-700 bg-rose-50" : "text-gray-700 hover:text-rose-700"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Gallery `);
          } else {
            return [
              createTextVNode(" Gallery ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-center" data-v-85cac8f4><div class="w-[80%] h-px bg-rose-400" data-v-85cac8f4></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/stories/events",
        class: [
          "block px-4 py-2 text-sm hover:bg-gray-50",
          isActiveRoute("/stories/events") ? "text-rose-700 bg-rose-50" : "text-gray-700 hover:text-rose-700"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Events `);
          } else {
            return [
              createTextVNode(" Events ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: [
          "transition-colors duration-200 font-medium relative",
          isActiveRoute("/contact") ? "text-rose-700 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-rose-700" : "text-gray-700 hover:text-rose-700"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact `);
          } else {
            return [
              createTextVNode(" Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="hidden lg:flex" data-v-85cac8f4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/donate",
        class: [
          "px-4 py-2 rounded-md transition-colors duration-200 font-medium",
          isActiveRoute("/donate") ? "bg-rose-800 text-white" : "bg-rose-700 text-white hover:bg-rose-800"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Donate `);
          } else {
            return [
              createTextVNode(" Donate ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="lg:hidden p-2 rounded-md text-gray-700 hover:text-rose-700 hover:bg-gray-50 transition-colors duration-200" data-v-85cac8f4>`);
      if (!mobileMenuOpen.value) {
        _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-85cac8f4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-85cac8f4></path></svg>`);
      } else {
        _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-85cac8f4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-85cac8f4></path></svg>`);
      }
      _push(`</button></div>`);
      if (mobileMenuOpen.value) {
        _push(`<div class="lg:hidden border-t border-gray-200 py-4 space-y-4" data-v-85cac8f4>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          onClick: ($event) => mobileMenuOpen.value = false,
          class: [
            "block transition-colors duration-200 font-medium py-2 border-l-4",
            isActiveRoute("/") ? "text-rose-700 border-rose-700 bg-rose-50 pl-4" : "text-gray-700 hover:text-rose-700 border-transparent pl-4"
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Home `);
            } else {
              return [
                createTextVNode(" Home ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div data-v-85cac8f4><button class="${ssrRenderClass([
          "flex items-center justify-between w-full transition-colors duration-200 font-medium py-2 border-l-4",
          isActiveAboutRoute() ? "text-rose-700 border-rose-700 bg-rose-50 pl-4" : "text-gray-700 hover:text-rose-700 border-transparent pl-4"
        ])}" data-v-85cac8f4> About AMU <svg class="${ssrRenderClass([{ "rotate-180": aboutDropdownOpen.value }, "w-4 h-4 transition-transform duration-200"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-85cac8f4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-85cac8f4></path></svg></button>`);
        if (aboutDropdownOpen.value) {
          _push(`<div class="pl-8 space-y-2 mt-2" data-v-85cac8f4>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/about/history",
            onClick: ($event) => mobileMenuOpen.value = false,
            class: [
              "block py-1 text-sm",
              isActiveRoute("/about/history") ? "text-rose-700 font-medium" : "text-gray-600 hover:text-rose-700"
            ]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Brief History `);
              } else {
                return [
                  createTextVNode(" Brief History ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/about/vision-mission",
            onClick: ($event) => mobileMenuOpen.value = false,
            class: [
              "block py-1 text-sm",
              isActiveRoute("/about/vision-mission") ? "text-rose-700 font-medium" : "text-gray-600 hover:text-rose-700"
            ]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Vision &amp; Mission `);
              } else {
                return [
                  createTextVNode(" Vision & Mission ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/about/team",
            onClick: ($event) => mobileMenuOpen.value = false,
            class: [
              "block py-1 text-sm",
              isActiveRoute("/about/team") ? "text-rose-700 font-medium" : "text-gray-600 hover:text-rose-700"
            ]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Our Team `);
              } else {
                return [
                  createTextVNode(" Our Team ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/about/kacis",
            onClick: ($event) => mobileMenuOpen.value = false,
            class: [
              "block py-1 text-sm",
              isActiveRoute("/about/kacis") ? "text-rose-700 font-medium" : "text-gray-600 hover:text-rose-700"
            ]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` KACIS `);
              } else {
                return [
                  createTextVNode(" KACIS ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/about/safehaven",
            onClick: ($event) => mobileMenuOpen.value = false,
            class: [
              "block py-1 text-sm",
              isActiveRoute("/about/safehaven") ? "text-rose-700 font-medium" : "text-gray-600 hover:text-rose-700"
            ]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Safe Haven Project `);
              } else {
                return [
                  createTextVNode(" Safe Haven Project ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-85cac8f4><button class="${ssrRenderClass([
          "flex items-center justify-between w-full transition-colors duration-200 font-medium py-2 border-l-4",
          isActiveStoriesRoute() ? "text-rose-700 border-rose-700 bg-rose-50 pl-4" : "text-gray-700 hover:text-rose-700 border-transparent pl-4"
        ])}" data-v-85cac8f4> AMU Stories <svg class="${ssrRenderClass([{ "rotate-180": storiesDropdownOpen.value }, "w-4 h-4 transition-transform duration-200"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-85cac8f4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-85cac8f4></path></svg></button>`);
        if (storiesDropdownOpen.value) {
          _push(`<div class="pl-8 space-y-2 mt-2" data-v-85cac8f4>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/stories/gallery",
            onClick: ($event) => mobileMenuOpen.value = false,
            class: [
              "block py-1 text-sm",
              isActiveRoute("/stories/gallery") ? "text-rose-700 font-medium" : "text-gray-600 hover:text-rose-700"
            ]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Gallery `);
              } else {
                return [
                  createTextVNode(" Gallery ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/stories/events",
            onClick: ($event) => mobileMenuOpen.value = false,
            class: [
              "block py-1 text-sm",
              isActiveRoute("/stories/events") ? "text-rose-700 font-medium" : "text-gray-600 hover:text-rose-700"
            ]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Events `);
              } else {
                return [
                  createTextVNode(" Events ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          onClick: ($event) => mobileMenuOpen.value = false,
          class: [
            "block transition-colors duration-200 font-medium py-2 border-l-4",
            isActiveRoute("/contact") ? "text-rose-700 border-rose-700 bg-rose-50 pl-4" : "text-gray-700 hover:text-rose-700 border-transparent pl-4"
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Contact `);
            } else {
              return [
                createTextVNode(" Contact ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/donate",
          onClick: ($event) => mobileMenuOpen.value = false,
          class: [
            "inline-block px-4 py-2 rounded-md transition-colors duration-200 font-medium mt-2",
            isActiveRoute("/donate") ? "bg-rose-800 text-white" : "bg-rose-700 text-white hover:bg-rose-800"
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Donate `);
            } else {
              return [
                createTextVNode(" Donate ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header><div class="h-16 lg:h-20" data-v-85cac8f4></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-85cac8f4"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_Icon = __nuxt_component_1$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-6829a143><div class="container" data-v-6829a143><div class="footer-grid" data-v-6829a143><div class="footer-column" data-v-6829a143><h3 data-v-6829a143>Explore</h3><ul data-v-6829a143><li data-v-6829a143>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6829a143>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6829a143>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/events" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Events`);
      } else {
        return [
          createTextVNode("Events")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6829a143>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/team" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Our Team`);
      } else {
        return [
          createTextVNode("Our Team")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="footer-column" data-v-6829a143><h3 data-v-6829a143>Get Involved</h3><ul data-v-6829a143><li data-v-6829a143>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/register-child" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Register a Child`);
      } else {
        return [
          createTextVNode("Register a Child")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6829a143>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/partner" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Partner with Us`);
      } else {
        return [
          createTextVNode("Partner with Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6829a143>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/kacis" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`KACIS`);
      } else {
        return [
          createTextVNode("KACIS")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6829a143>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/donate" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Donate`);
      } else {
        return [
          createTextVNode("Donate")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6829a143>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/volunteer" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Volunteer`);
      } else {
        return [
          createTextVNode("Volunteer")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="footer-column" data-v-6829a143><h3 data-v-6829a143>Stay Connected</h3><div class="contact-info" data-v-6829a143><div class="address" data-v-6829a143><h4 data-v-6829a143>USA Office:</h4><p data-v-6829a143>3001 SW 58th Avenue<br data-v-6829a143> Amarillo Texas 79118<br data-v-6829a143> United States<br data-v-6829a143> Suite 308, 3rd Floor</p></div><div class="address" data-v-6829a143><h4 data-v-6829a143>Nigeria Office:</h4><p data-v-6829a143>The Kings Opposite NAF Conference Centre<br data-v-6829a143> Ahmadu Bello Way<br data-v-6829a143> Abuja, Nigeria</p></div><div class="contact-details" data-v-6829a143><p data-v-6829a143><i class="fas fa-phone" data-v-6829a143></i> +234 (0)91 347 91980</p><p data-v-6829a143><i class="fas fa-envelope" data-v-6829a143></i> info.go@amufoundation.org</p></div></div></div><div class="footer-column" data-v-6829a143><h3 data-v-6829a143>About AMU</h3><p class="about-text" data-v-6829a143> A Million of Us (AMU) Foundation was established by a group of people, passionate and desiring to make a change in the life and development of young people between ages 4-18 in Nigeria... </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "read-more"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Read More`);
      } else {
        return [
          createTextVNode("Read More")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="social-links" data-v-6829a143><h4 data-v-6829a143>Follow Us:</h4><div class="social-icons" data-v-6829a143><a href="#" aria-label="Facebook" data-v-6829a143>`);
  _push(ssrRenderComponent(_component_Icon, { name: "i-lucide-facebook" }, null, _parent));
  _push(`</a><a href="#" aria-label="Twitter" data-v-6829a143>`);
  _push(ssrRenderComponent(_component_Icon, { name: "i-lucide-twitter" }, null, _parent));
  _push(`</a><a href="#" aria-label="Instagram" data-v-6829a143>`);
  _push(ssrRenderComponent(_component_Icon, { name: "i-lucide-instagram" }, null, _parent));
  _push(`</a><a href="#" aria-label="LinkedIn" data-v-6829a143>`);
  _push(ssrRenderComponent(_component_Icon, { name: "i-lucide-linkedin" }, null, _parent));
  _push(`</a></div></div></div></div><div class="copyright" data-v-6829a143><div class="copyright-content" data-v-6829a143><p data-v-6829a143>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} AMU Foundation. All rights reserved.</p><div class="copyright-links" data-v-6829a143>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/privacy" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy Policy`);
      } else {
        return [
          createTextVNode("Privacy Policy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="separator" data-v-6829a143>|</span>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/terms" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Terms of Service`);
      } else {
        return [
          createTextVNode("Terms of Service")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-6829a143"]]), { __name: "AppFooter" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __nuxt_component_0;
  const _component_AppFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col overflow-x-hidden" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<main class="flex-grow">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DBi4BVzw.mjs.map
