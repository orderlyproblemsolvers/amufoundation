import { _ as _sfc_main$6 } from './ButtonPrimary-DZjlZYnE.mjs';
import { _ as _sfc_main$7 } from './ButtonSecondary-CU5TzCbz.mjs';
import { ref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, defineComponent, useAttrs, computed, mergeProps, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { p as publicAssetsURL, C as defu, D as withLeadingSlash, l as hasProtocol, m as joinURL, E as parseURL, F as encodeParam, G as encodePath } from '../_/nitro.mjs';
import { _ as _export_sfc, u as useHead, a as useNuxtApp, b as useRuntimeConfig } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BVklhgCu.mjs';
import { _ as _sfc_main$8 } from './Icon-Bt2XpItF.mjs';
import __nuxt_component_1 from './index-IBbNTAQQ.mjs';
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
import 'reka-ui';
import '@vueuse/core';
import '@iconify/utils/lib/css/icon';

async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        const alias = ctx.options.alias[base];
        if (alias) {
          input = joinURL(alias, input.slice(base.length));
        }
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if (_options.modifiers?.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if (_options.modifiers?.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  const width = parseSize(opts.modifiers?.width);
  const height = parseSize(opts.modifiers?.height);
  const sizes = parseSizes(opts.sizes);
  const densities = opts.densities?.trim() ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = key ? getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx) : void 0;
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: opts.modifiers?.width,
          _cHeight: opts.modifiers?.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant?.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = sizeVariants[i + 1]?.media || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$lLxEpJiP0Wc0ys9Z9kZfoS5Ot_45J9QG4hExys3YsviK4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getImage,
  operationsGenerator,
  supportsAlias,
  validateDomains
}, Symbol.toStringTag, { value: "Module" }));
const imageOptions = {
  ...{
    "screens": {
      "xs": 320,
      "sm": 640,
      "md": 768,
      "lg": 1024,
      "xl": 1280,
      "xxl": 1536,
      "2xl": 1536
    },
    "presets": {},
    "provider": "ipx",
    "domains": [],
    "alias": {},
    "densities": [
      1,
      2
    ],
    "format": [
      "webp"
    ]
  },
  providers: {
    ["ipx"]: { provider: ipxRuntime$lLxEpJiP0Wc0ys9Z9kZfoS5Ot_45J9QG4hExys3YsviK4, defaults: {} }
  }
};
const useImage = (event) => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    event: nuxtApp.ssrContext?.event,
    nuxt: {
      baseURL: config.app.baseURL
    },
    runtimeConfig: config
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: false },
  // modifiers
  format: { type: String, required: false },
  quality: { type: [Number, String], required: false },
  background: { type: String, required: false },
  fit: { type: String, required: false },
  modifiers: { type: Object, required: false },
  // options
  preset: { type: String, required: false },
  provider: { type: String, required: false },
  sizes: { type: [Object, String], required: false },
  densities: { type: String, required: false },
  preload: {
    type: [Boolean, Object],
    required: false
  },
  // <img> attributes
  width: { type: [String, Number], required: false },
  height: { type: [String, Number], required: false },
  alt: { type: String, required: false },
  referrerpolicy: { type: String, required: false },
  usemap: { type: String, required: false },
  longdesc: { type: String, required: false },
  ismap: { type: Boolean, required: false },
  loading: {
    type: String,
    required: false,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    required: false,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    required: false,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], required: false }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], required: false },
  placeholderClass: { type: String, required: false },
  custom: { type: Boolean, required: false }
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "NuxtImg",
  __ssrInlineRender: true,
  props: imgProps,
  emits: ["load", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const attrs = useAttrs();
    const isServer = true;
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const imgEl = ref();
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const imgAttrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return (_ctx, _push, _parent, _attrs) => {
      if (!_ctx.custom) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "imgEl",
          ref: imgEl,
          class: placeholder.value && !placeholderLoaded.value ? _ctx.placeholderClass : void 0
        }, {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          ...imgAttrs.value,
          ...unref(attrs)
        }, { src: src.value }, _attrs))}>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          imgAttrs: {
            ...imgAttrs.value,
            ...unref(attrs)
          },
          isLoaded: placeholderLoaded.value,
          src: src.value
        }, null, _push, _parent);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$5, { __name: "NuxtImg" });
const _sfc_main$4 = {
  __name: "ButtonGlass",
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
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UIcon = _sfc_main$8;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: props.path,
        class: "liquid-glass-btn inline-block px-6 py-3 rounded-2xl font-medium w-max relative overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center items-center relative z-10" data-v-8097034a${_scopeId}><p class="text-white/90 group-hover:text-white transition-colors duration-200" data-v-8097034a${_scopeId}>${ssrInterpolate(props.title)}</p>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: props.icon,
              class: "inline-block w-5 h-5 ml-2 text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-xl border border-white/20 rounded-xl" data-v-8097034a${_scopeId}></div><div class="absolute inset-0 bg-gradient-to-t from-rose-500/30 via-transparent to-transparent rounded-2xl" data-v-8097034a${_scopeId}></div><div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-v-8097034a${_scopeId}><div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer rounded-xl" data-v-8097034a${_scopeId}></div></div><div class="absolute -inset-1 bg-gradient-to-r from-rose-400/20 via-purple-400/20 to-rose-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" data-v-8097034a${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-center items-center relative z-10" }, [
                createVNode("p", { class: "text-white/90 group-hover:text-white transition-colors duration-200" }, toDisplayString(props.title), 1),
                createVNode(_component_UIcon, {
                  name: props.icon,
                  class: "inline-block w-5 h-5 ml-2 text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200"
                }, null, 8, ["name"])
              ]),
              createVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-xl border border-white/20 rounded-xl" }),
              createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-rose-500/30 via-transparent to-transparent rounded-2xl" }),
              createVNode("div", { class: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }, [
                createVNode("div", { class: "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer rounded-xl" })
              ]),
              createVNode("div", { class: "absolute -inset-1 bg-gradient-to-r from-rose-400/20 via-purple-400/20 to-rose-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ButtonGlass.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8097034a"]]);
const _imports_0$1 = publicAssetsURL("/img/music.jpeg");
const _imports_1$1 = publicAssetsURL("/img/sports.jpeg");
const _sfc_main$3 = {
  __name: "EventCards",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-8 md:py-16 bg-gray-50" }, _attrs))} data-v-5c9ed0ac><div class="container mx-auto px-4" data-v-5c9ed0ac><div class="text-center mb-8 md:mb-12" data-v-5c9ed0ac><h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4" data-v-5c9ed0ac> Our <span class="text-rose-700" data-v-5c9ed0ac>Programs</span></h2><p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4" data-v-5c9ed0ac> Join us in making a difference through our impactful community events and programs </p></div><div class="block md:hidden" data-v-5c9ed0ac><div class="overflow-x-auto pb-6 hide-scrollbar" data-v-5c9ed0ac><div class="flex gap-4 w-max px-1" data-v-5c9ed0ac><div class="w-96 bg-gradient-to-r from-rose-400 to-rose-700 rounded-xl shadow-lg overflow-hidden flex-shrink-0" data-v-5c9ed0ac><div class="p-6" data-v-5c9ed0ac><h3 class="text-lg font-bold mb-4 text-center text-white" data-v-5c9ed0ac> B&amp;S Music School </h3><div class="space-y-4" data-v-5c9ed0ac><div class="w-16 h-16 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30 overflow-hidden mx-auto" data-v-5c9ed0ac><img${ssrRenderAttr("src", _imports_0$1)} alt="B&amp;S Music" class="w-full h-full object-cover" data-v-5c9ed0ac></div><div class="text-center space-y-4" data-v-5c9ed0ac><p class="text-white/90 text-sm leading-relaxed" data-v-5c9ed0ac> Experience the power of music in building communities and fostering creativity through our music program. </p><div class="space-y-2" data-v-5c9ed0ac><button class="w-full bg-white text-rose-600 px-4 py-2.5 rounded-md text-sm font-semibold hover:bg-rose-50 transition-colors duration-200" data-v-5c9ed0ac> Learn More </button><button class="w-full border border-white text-white px-4 py-2.5 rounded-md text-sm font-semibold hover:bg-white hover:text-rose-600 transition-colors duration-200" data-v-5c9ed0ac> Register Now </button></div></div></div></div></div><div class="w-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg overflow-hidden flex-shrink-0" data-v-5c9ed0ac><div class="p-6" data-v-5c9ed0ac><h3 class="text-lg font-bold mb-4 text-center text-white" data-v-5c9ed0ac> AMU Sports Camp </h3><div class="space-y-4" data-v-5c9ed0ac><div class="w-16 h-16 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30 overflow-hidden mx-auto" data-v-5c9ed0ac><img${ssrRenderAttr("src", _imports_1$1)} alt="AMU Sports Camp" class="w-full h-full object-cover" data-v-5c9ed0ac></div><div class="text-center space-y-4" data-v-5c9ed0ac><p class="text-white/90 text-sm leading-relaxed" data-v-5c9ed0ac> Empower young athletes through comprehensive sports training and character development programs. </p><div class="space-y-2" data-v-5c9ed0ac><button class="w-full bg-white text-blue-600 px-4 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-50 transition-colors duration-200" data-v-5c9ed0ac> Learn More </button><button class="w-full border border-white text-white px-4 py-2.5 rounded-md text-sm font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200" data-v-5c9ed0ac> Join Camp </button></div></div></div></div></div></div></div></div><div class="hidden md:grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" data-v-5c9ed0ac><div class="bg-gradient-to-r from-rose-400 to-rose-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-101 transition-all duration-300" data-v-5c9ed0ac><div class="p-8 text-white" data-v-5c9ed0ac><h3 class="text-xl font-bold mb-4 text-center" data-v-5c9ed0ac> B&amp;S Music School </h3><div class="flex gap-4 items-start" data-v-5c9ed0ac><div class="w-20 h-20 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30 overflow-hidden flex-shrink-0" data-v-5c9ed0ac><img${ssrRenderAttr("src", _imports_0$1)} alt="B&amp;S Music" class="w-full h-full object-cover" data-v-5c9ed0ac></div><div class="flex-1 space-y-3" data-v-5c9ed0ac><p class="text-white/90 text-sm leading-relaxed" data-v-5c9ed0ac> Experience the power of music in building communities and fostering creativity through our music program. </p><div class="space-y-2" data-v-5c9ed0ac><button class="w-full bg-white text-rose-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-rose-50 transition-colors duration-200" data-v-5c9ed0ac> Learn More </button><button class="w-full border border-white text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-white hover:text-rose-600 transition-colors duration-200" data-v-5c9ed0ac> Register Now </button></div></div></div></div></div><div class="bg-gradient-to-r from-blue-500 to-[#1E67A8] rounded-xl shadow-lg overflow-hidden transform hover:scale-101 transition-all duration-300" data-v-5c9ed0ac><div class="p-8 text-white" data-v-5c9ed0ac><h3 class="text-xl font-bold mb-4 text-center" data-v-5c9ed0ac> AMU Sports Camp </h3><div class="flex gap-4 items-start" data-v-5c9ed0ac><div class="w-20 h-20 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30 overflow-hidden flex-shrink-0" data-v-5c9ed0ac><img${ssrRenderAttr("src", _imports_1$1)} alt="AMU Sports Camp" class="w-full h-full object-cover" data-v-5c9ed0ac></div><div class="flex-1 space-y-3" data-v-5c9ed0ac><p class="text-white/90 text-sm leading-relaxed" data-v-5c9ed0ac> Empower young athletes through comprehensive sports training and character development programs. </p><div class="space-y-2" data-v-5c9ed0ac><button class="w-full bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-50 transition-colors duration-200" data-v-5c9ed0ac> Learn More </button><button class="w-full border border-white text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200" data-v-5c9ed0ac> Join Camp </button></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EventCards.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-5c9ed0ac"]]);
const _sfc_main$2 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 px-12" }, _attrs))} data-v-ebdbd141><div class="max-w-7xl mx-auto" data-v-ebdbd141><div class="text-center mb-12" data-v-ebdbd141><h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-v-ebdbd141> Our <span class="text-rose-700" data-v-ebdbd141>Impact</span> &amp; <span class="text-rose-700" data-v-ebdbd141>Community</span></h2><p class="text-gray-600 max-w-2xl mx-auto" data-v-ebdbd141> Through dedication and community support, A Million Of Us Foundation continues to transform lives across communities. </p></div><div class="grid lg:grid-cols-2 gap-12 items-center" data-v-ebdbd141><div class="order-2 lg:order-1" data-v-ebdbd141><h3 class="text-2xl font-semibold text-gray-800 mb-8" data-v-ebdbd141>Our Achievements</h3><div class="grid grid-cols-2 gap-6" data-v-ebdbd141><div class="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300" data-v-ebdbd141><div class="flex flex-col items-center text-center" data-v-ebdbd141><div class="bg-rose-200 rounded-full p-3 mb-4" data-v-ebdbd141><svg class="w-8 h-8 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ebdbd141><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" data-v-ebdbd141></path></svg></div><div class="text-3xl font-bold text-rose-700 mb-2" data-count="1500" data-v-ebdbd141>1,500+</div><div class="text-gray-600 text-sm font-medium" data-v-ebdbd141>Students Supported</div></div></div><div class="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300" data-v-ebdbd141><div class="flex flex-col items-center text-center" data-v-ebdbd141><div class="bg-rose-200 rounded-full p-3 mb-4" data-v-ebdbd141><svg class="w-8 h-8 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ebdbd141><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" data-v-ebdbd141></path></svg></div><div class="text-3xl font-bold text-rose-700 mb-2" data-count="250" data-v-ebdbd141>250+</div><div class="text-gray-600 text-sm font-medium" data-v-ebdbd141>Families Empowered</div></div></div><div class="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300" data-v-ebdbd141><div class="flex flex-col items-center text-center" data-v-ebdbd141><div class="bg-rose-200 rounded-full p-3 mb-4" data-v-ebdbd141><svg class="w-8 h-8 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ebdbd141><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-v-ebdbd141></path></svg></div><div class="text-3xl font-bold text-rose-700 mb-2" data-count="45" data-v-ebdbd141>45+</div><div class="text-gray-600 text-sm font-medium" data-v-ebdbd141>Schools Partnered</div></div></div><div class="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300" data-v-ebdbd141><div class="flex flex-col items-center text-center" data-v-ebdbd141><div class="bg-rose-200 rounded-full p-3 mb-4" data-v-ebdbd141><svg class="w-8 h-8 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ebdbd141><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" data-v-ebdbd141></path></svg></div><div class="text-3xl font-bold text-rose-700 mb-2" data-count="8" data-v-ebdbd141>8+</div><div class="text-gray-600 text-sm font-medium" data-v-ebdbd141>Years of Service</div></div></div></div></div><div class="order-1 lg:order-2" data-v-ebdbd141><div class="bg-white rounded-xl p-8 shadow-xl" data-v-ebdbd141><div class="flex items-center mb-6" data-v-ebdbd141><div class="text-[#1E67A8] mr-3" data-v-ebdbd141><svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" data-v-ebdbd141><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" data-v-ebdbd141></path></svg></div><h3 class="text-2xl font-semibold text-gray-800" data-v-ebdbd141>Community Voice</h3></div><div class="space-y-6" data-v-ebdbd141><blockquote class="text-lg text-gray-700 leading-relaxed italic" data-v-ebdbd141> &quot;I want to thank AMU (A Million of Us) Foundation for paying my child&#39;s school fees. This support has been life-changing for our family. My daughter can now continue her education without worry, and I am filled with gratitude for the foundation&#39;s commitment to supporting children&#39;s education in our community.&quot; </blockquote><div class="flex items-center pt-4 border-t border-gray-200" data-v-ebdbd141><div class="bg-gradient-to-r from-blue-500 to-[#1E67A8] rounded-full w-12 h-12 flex items-center justify-center text-white font-semibold text-lg mr-4" data-v-ebdbd141> A </div><div data-v-ebdbd141><div class="font-semibold text-gray-800" data-v-ebdbd141>Anonymous Parent</div><div class="text-gray-600 text-sm" data-v-ebdbd141>AMU Foundation Beneficiary</div></div></div></div><div class="flex justify-center mt-8 space-x-2" data-v-ebdbd141><button class="w-3 h-3 rounded-full bg-[#1E67A8]" data-v-ebdbd141></button><button class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400" data-v-ebdbd141></button><button class="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400" data-v-ebdbd141></button></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonials.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-ebdbd141"]]), { __name: "Testimonials" });
const _imports_0 = publicAssetsURL("/vid/intro.mp4");
const _imports_1 = publicAssetsURL("/img/bs9.jpeg");
const _sfc_main$1 = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const galleryImages = ref([
      {
        src: "/img/bs4.jpg",
        alt: "AMU Foundation community event - children participating in educational activities"
      },
      {
        src: "/img/bs5.jpg",
        alt: "Sports activities organized by AMU Foundation for youth development"
      },
      {
        src: "/img/bs6.jpg",
        alt: "Music and arts program showcasing talented children"
      },
      {
        src: "/img/bs7.jpeg",
        alt: "Educational workshop and skill development session"
      },
      {
        src: "/img/bs8.jpeg",
        alt: "Community gathering and networking event"
      },
      {
        src: "/img/bs9.jpeg",
        alt: "AMU Foundation impact story and success celebration"
      }
    ]);
    const statistics = ref([
      {
        number: "244 Million",
        text: "Children Are Out of School Globally",
        description: "Sub-Saharan Africa accounts for more than one-third of the global out-of-school children population, with many never having the chance to step foot in a classroom."
      },
      {
        number: "20 Million",
        text: "Nigerian Children Out of School",
        description: "Nigeria has the highest number of out-of-school children in the world. These children are denied their fundamental right to education and a chance at a better future."
      },
      {
        number: "38%",
        text: "Adult Illiteracy Rate in Nigeria",
        description: "More than 65 million Nigerian adults cannot read or write, limiting their opportunities and perpetuating cycles of poverty across generations."
      },
      {
        number: "60%",
        text: "Of African Youth Lack Basic Skills",
        description: "Despite completing primary education, many young Africans lack the foundational literacy and numeracy skills needed to thrive in the modern world."
      },
      {
        number: "1 in 5",
        text: "Children Will Never Learn to Read",
        description: "Without intervention, millions of children across Africa will grow up unable to read, write, or perform basic mathematics, limiting their life opportunities."
      }
    ]);
    ref(0);
    const currentStatistic = ref(statistics.value[0]);
    const isVisible = ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonPrimary = _sfc_main$6;
      const _component_ButtonSecondary = _sfc_main$7;
      const _component_NuxtImg = __nuxt_component_2;
      const _component_ButtonGlass = __nuxt_component_3;
      const _component_Icon = __nuxt_component_1;
      const _component_EventCards = __nuxt_component_5;
      const _component_Testimonials = __nuxt_component_6;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><section class="relative h-screen overflow-hidden" data-v-03813cca><video class="absolute inset-0 w-full h-full object-cover" autoplay muted loop playsinline data-v-03813cca><source${ssrRenderAttr("src", _imports_0)} type="video/mp4" data-v-03813cca><img${ssrRenderAttr("src", _imports_1)} alt="Children in need of education support" class="w-full h-full object-cover" data-v-03813cca></video><div class="absolute inset-0 bg-black/90" data-v-03813cca></div><div class="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8" data-v-03813cca><div class="text-center text-white max-w-4xl mx-auto" data-v-03813cca><div class="mb-8" data-v-03813cca><div class="${ssrRenderClass([{ "fade-in": isVisible.value }, "statistic-container"])}" data-v-03813cca><h1 class="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 text-shadow-lg" data-v-03813cca>${ssrInterpolate(currentStatistic.value.number)}</h1><p class="text-xl sm:text-2xl lg:text-3xl font-light mb-6 text-shadow" data-v-03813cca>${ssrInterpolate(currentStatistic.value.text)}</p><div class="w-24 h-1 bg-rose-700 mx-auto mb-6" data-v-03813cca></div><p class="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed text-shadow" data-v-03813cca>${ssrInterpolate(currentStatistic.value.description)}</p></div></div><div class="mt-12 opacity-90" data-v-03813cca><p class="text-lg mb-6 text-shadow" data-v-03813cca> Together, we can change these numbers </p><div class="flex flex-col sm:flex-row justify-center gap-4" data-v-03813cca>`);
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        title: "Make a Difference",
        path: "/donate"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ButtonSecondary, {
        title: "Learn More",
        path: "/about/kacis"
      }, null, _parent));
      _push(`</div></div><div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce" data-v-03813cca><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-03813cca><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-v-03813cca></path></svg></div></div></div></section><section class="relative bg-gray-50" data-v-03813cca><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6" data-v-03813cca><div class="text-center py-12" data-v-03813cca><h1 class="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl" data-v-03813cca> Welcome Believe <span class="text-rose-700 leckerli" data-v-03813cca>Talent</span> Should <br data-v-03813cca> Open Doors. </h1><p class="mt-6 text-lg text-gray-600 max-w-3xl mx-auto" data-v-03813cca> AMU is a Foundation committed to the professional development of the child. It is a foundation, and not-for-profit, non-sectarian, non-partisan, ethically and morally bound in principles, non-religious, and working to achieve the overall development of children </p><div class="mt-8 flex justify-center space-x-4" data-v-03813cca>`);
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        path: "/events",
        title: "Register",
        icon: "i-lucide-arrow-right"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ButtonSecondary, {
        path: "/donate",
        title: "Donate",
        icon: "i-lucide-gift"
      }, null, _parent));
      _push(`</div></div><div class="shadow-[0px_-14px_62px_-31px_#c70036] flex flex-col text-left banner w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] rounded-lg h-64 sm:h-72 md:h-80 lg:h-84 place-self-center" data-v-03813cca>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/bs9.jpeg",
        alt: "Support Our Cause Banner",
        class: "absolute inset-0 w-full h-full object-cover rounded-lg",
        loading: "eager",
        sizes: "95vw sm:90vw lg:85vw xl:80vw",
        quality: "85"
      }, null, _parent));
      _push(`<div class="relative justify-center flex flex-col bg-gradient-to-r from-black to-transparent bg-opacity-20 p-4 sm:p-6 lg:p-8 rounded-lg text-white h-full z-10" data-v-03813cca><h2 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4" data-v-03813cca> Support Our Cause </h2><p class="mb-4 sm:mb-6 lg:mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-sm sm:text-base lg:text-lg leading-relaxed" data-v-03813cca> Join us in making a difference in the lives of children through education, sports, and music. Your support can help unlock their potential and create a brighter future. </p><div class="w-fit" data-v-03813cca>`);
      _push(ssrRenderComponent(_component_ButtonGlass, {
        path: "/donate",
        title: "Donate Now",
        icon: "i-lucide-heart"
      }, null, _parent));
      _push(`</div></div></div></div></section><section class="relative bg-gray-50 py-16" data-v-03813cca><div class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12 py-12" data-v-03813cca><div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12" data-v-03813cca><div class="flex-1 text-left" data-v-03813cca><div class="flex flex-col justify-between gap-5" data-v-03813cca><h2 class="text-xl font-bold text-gray-900 sm:text-4xl lg:text-5xl" data-v-03813cca> More Than a Foundation - <span class="text-rose-700" data-v-03813cca>A Movement</span></h2><p class="mt-6 text-lg text-gray-600" data-v-03813cca> Born from B&amp;S Education Services, AMU is dedicated to creating equal opportunities for children through education, sports, and music. We believe talent should open doors — not privilege. <br data-v-03813cca><br data-v-03813cca> Our Mission is to create an enabling environment for children and use it to develop and showcase their talents and skills. </p>`);
      _push(ssrRenderComponent(_component_ButtonPrimary, {
        path: "/about/vision-mission",
        title: "Learn More",
        icon: "i-lucide-arrow-right"
      }, null, _parent));
      _push(`</div></div><div class="flex-1 w-full" data-v-03813cca><div class="w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden" data-v-03813cca>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/bs4.jpg",
        alt: "AMU Foundation - Creating opportunities for children",
        class: "w-full h-full object-cover",
        loading: "lazy",
        sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw",
        quality: "80"
      }, null, _parent));
      _push(`</div></div></div></div></section><section class="relative bg-gray-50 py-16" data-v-03813cca><div class="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12" data-v-03813cca><div class="text-center mb-16" data-v-03813cca><h2 class="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-8" data-v-03813cca> Our <span class="text-rose-700" data-v-03813cca>Approach</span></h2><p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed" data-v-03813cca> The Foundation strongly believes in the true and active participation of all key stakeholders particularly program beneficiaries. Fair efforts are taken to ensure that stakeholders participate and contribute to all the stages of the interventions. The following are the key elements of AMU program Strategies and Work Approach. </p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-v-03813cca><div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group" data-v-03813cca><div class="flex items-start mb-4" data-v-03813cca>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-lucide-graduation-cap",
        class: "w-8 h-8 text-rose-700"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-semibold text-gray-900 mb-3" data-v-03813cca> Skills Acquisitions and Training </h3><p class="text-gray-600 text-sm" data-v-03813cca> Empowering individuals through comprehensive skill development and professional training programs. </p></div><div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group" data-v-03813cca><div class="flex items-start mb-4" data-v-03813cca>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-lucide-megaphone",
        class: "w-8 h-8 text-rose-700"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-semibold text-gray-900 mb-3" data-v-03813cca>Advocacy</h3><p class="text-gray-600 text-sm" data-v-03813cca> Championing causes and raising awareness for educational and social justice initiatives. </p></div><div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group" data-v-03813cca><div class="flex items-start mb-4" data-v-03813cca>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-lucide-globe",
        class: "w-8 h-8 text-rose-700"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-semibold text-gray-900 mb-3" data-v-03813cca> Exchange Program and Networking </h3><p class="text-gray-600 text-sm" data-v-03813cca> Building global connections and facilitating knowledge exchange opportunities. </p></div><div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group" data-v-03813cca><div class="flex items-start mb-4" data-v-03813cca>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-lucide-trending-up",
        class: "w-8 h-8 text-rose-700"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-semibold text-gray-900 mb-3" data-v-03813cca> Capacity Development </h3><p class="text-gray-600 text-sm" data-v-03813cca> Strengthening organizational and individual capabilities for sustainable growth. </p></div><div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group" data-v-03813cca><div class="flex items-start mb-4" data-v-03813cca>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-lucide-share-2",
        class: "w-8 h-8 text-rose-700"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-semibold text-gray-900 mb-3" data-v-03813cca> Social Media Mobilization/Promotion </h3><p class="text-gray-600 text-sm" data-v-03813cca> Leveraging digital platforms to amplify our message and engage communities. </p></div><div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group" data-v-03813cca><div class="flex items-start mb-4" data-v-03813cca>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-lucide-handshake",
        class: "w-8 h-8 text-rose-700"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-semibold text-gray-900 mb-3" data-v-03813cca> Core Partnership and Endorsements </h3><p class="text-gray-600 text-sm" data-v-03813cca> Building strategic alliances and securing endorsements for maximum impact. </p></div><div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group" data-v-03813cca><div class="flex items-start mb-4" data-v-03813cca>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-lucide-music",
        class: "w-8 h-8 text-rose-700"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-semibold text-gray-900 mb-3" data-v-03813cca> Concerts and Sports Activities </h3><p class="text-gray-600 text-sm" data-v-03813cca> Organizing cultural and sporting events to showcase talent and build community. </p></div><div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group" data-v-03813cca><div class="flex items-start mb-4" data-v-03813cca>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-lucide-clipboard-list",
        class: "w-8 h-8 text-rose-700"
      }, null, _parent));
      _push(`</div><h3 class="text-xl font-semibold text-gray-900 mb-3" data-v-03813cca> Registrations </h3><p class="text-gray-600 text-sm" data-v-03813cca> Streamlined registration processes for programs, events, and services. </p></div></div></div></section><section class="relative bg-gray-50 py-16" data-v-03813cca>`);
      _push(ssrRenderComponent(_component_EventCards, null, null, _parent));
      _push(`</section><section class="relative bg-gray-50 py-16" data-v-03813cca>`);
      _push(ssrRenderComponent(_component_Testimonials, null, null, _parent));
      _push(`</section><section class="relative place-items-center bg-gray-50 py-16 sm:py-20" data-v-03813cca>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/stories/gallery",
        class: "shadow-[0px_-14px_62px_-31px_#c70036] flex flex-col text-left banners w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] rounded-lg h-64 sm:h-72 md:h-80 lg:h-84 place-self-center hover-scale cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative justify-center flex flex-col bg-black p-4 sm:p-6 lg:p-8 rounded-lg text-white h-full overflow-hidden" data-v-03813cca${_scopeId}><div class="absolute inset-0 gallery-grid" data-v-03813cca${_scopeId}><!--[-->`);
            ssrRenderList(galleryImages.value, (image, index2) => {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                key: index2,
                src: image.src,
                alt: image.alt,
                class: "gallery-image rounded-sm",
                loading: "lazy",
                sizes: "(max-width: 640px) 50vw, 33vw",
                quality: "70"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="relative z-10" data-v-03813cca${_scopeId}><h2 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4" data-v-03813cca${_scopeId}> Explore Our Gallery </h2><p class="mb-4 sm:mb-6 lg:mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-sm sm:text-base lg:text-lg leading-relaxed" data-v-03813cca${_scopeId}> Discover amazing stories and moments captured in our community gallery. Click to explore all our featured content and memories. </p><div class="w-fit" data-v-03813cca${_scopeId}><div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-200" data-v-03813cca${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:image",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm font-medium" data-v-03813cca${_scopeId}>View Gallery</span></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative justify-center flex flex-col bg-black p-4 sm:p-6 lg:p-8 rounded-lg text-white h-full overflow-hidden" }, [
                createVNode("div", { class: "absolute inset-0 gallery-grid" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(galleryImages.value, (image, index2) => {
                    return openBlock(), createBlock(_component_NuxtImg, {
                      key: index2,
                      src: image.src,
                      alt: image.alt,
                      class: "gallery-image rounded-sm",
                      loading: "lazy",
                      sizes: "(max-width: 640px) 50vw, 33vw",
                      quality: "70"
                    }, null, 8, ["src", "alt"]);
                  }), 128))
                ]),
                createVNode("div", { class: "relative z-10" }, [
                  createVNode("h2", { class: "text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4" }, " Explore Our Gallery "),
                  createVNode("p", { class: "mb-4 sm:mb-6 lg:mb-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-sm sm:text-base lg:text-lg leading-relaxed" }, " Discover amazing stories and moments captured in our community gallery. Click to explore all our featured content and memories. "),
                  createVNode("div", { class: "w-fit" }, [
                    createVNode("div", { class: "inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-200" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:image",
                        class: "w-4 h-4"
                      }),
                      createVNode("span", { class: "text-sm font-medium" }, "View Gallery")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-03813cca"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Hero = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Hero, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-C92xLOFG.mjs.map
