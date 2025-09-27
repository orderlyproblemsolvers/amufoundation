import { _ as __nuxt_component_0 } from './nuxt-link-BVklhgCu.mjs';
import { _ as _sfc_main$1 } from './Icon-Bt2XpItF.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "ButtonPrimary",
  __ssrInlineRender: true,
  props: {
    path: {
      type: String,
      default: "/"
    },
    title: {
      type: String,
      default: "Button",
      required: true
    },
    icon: {
      type: String,
      default: "i-lucide-arrow-right"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UIcon = _sfc_main$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: props.path,
        class: "inline-block bg-rose-700 text-white px-6 py-3 rounded-md hover:bg-rose-800 transition-colors duration-200 font-medium w-max"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center items-center"${_scopeId}><p${_scopeId}>${ssrInterpolate(props.title)}</p>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: props.icon,
              class: "inline-block w-5 h-5 ml-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-center items-center" }, [
                createVNode("p", null, toDisplayString(props.title), 1),
                createVNode(_component_UIcon, {
                  name: props.icon,
                  class: "inline-block w-5 h-5 ml-2"
                }, null, 8, ["name"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ButtonPrimary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ButtonPrimary-DZjlZYnE.mjs.map
