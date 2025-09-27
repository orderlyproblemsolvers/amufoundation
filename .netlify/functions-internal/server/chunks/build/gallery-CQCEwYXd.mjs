import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderTeleport } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    const galleryItems = ref([
      {
        id: 1,
        src: "/img/bs1.webp",
        alt: "AMU Foundation Event 1",
        title: "Community Outreach Program",
        description: "Supporting local communities through various initiatives and programs.",
        date: "March 2024",
        orientation: "landscape"
      },
      {
        id: 2,
        src: "/img/bs4.jpg",
        alt: "AMU Foundation Event 2",
        title: "Education Initiative",
        description: "Providing educational resources and support to underprivileged children.",
        date: "February 2024",
        orientation: "portrait"
      },
      {
        id: 3,
        src: "/img/bs3.webp",
        alt: "AMU Foundation Event 3",
        title: "Healthcare Campaign",
        description: "Free medical checkups and health awareness programs.",
        date: "January 2024",
        orientation: "landscape"
      },
      {
        id: 4,
        src: "/img/bs2.webp",
        alt: "AMU Foundation Event 4",
        title: "Environmental Conservation",
        description: "Tree planting and environmental awareness activities.",
        date: "December 2023",
        orientation: "portrait"
      },
      {
        id: 5,
        src: "/img/bs5.jpg",
        alt: "AMU Foundation Event 5",
        title: "Youth Development",
        description: "Empowering young people through skill development programs.",
        date: "November 2023",
        orientation: "landscape"
      },
      {
        id: 6,
        src: "/img/bs6.jpg",
        alt: "AMU Foundation Event 6",
        title: "Women Empowerment",
        description: "Supporting women entrepreneurs and leadership development.",
        date: "October 2023",
        orientation: "portrait"
      },
      {
        id: 7,
        src: "/img/bs9.jpeg",
        alt: "AMU Foundation Event 6",
        title: "Women Empowerment",
        description: "Supporting women entrepreneurs and leadership development.",
        date: "October 2023",
        orientation: "portrait"
      },
      {
        id: 8,
        src: "/img/bs7.jpeg",
        alt: "AMU Foundation Event 6",
        title: "Women Empowerment",
        description: "Supporting women entrepreneurs and leadership development.",
        date: "October 2023",
        orientation: "portrait"
      },
      {
        id: 9,
        src: "/img/bs8.jpeg",
        alt: "AMU Foundation Event 6",
        title: "Women Empowerment",
        description: "Supporting women entrepreneurs and leadership development.",
        date: "October 2023",
        orientation: "portrait"
      }
    ]);
    const lightboxOpen = ref(false);
    const selectedItem = ref(0);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "gallery-container" }, _attrs))} data-v-4bbad4bc><div class="gallery-header" data-v-4bbad4bc><h2 class="gallery-title" data-v-4bbad4bc>AMU Foundation <span class="text-rose-700" data-v-4bbad4bc>Gallery</span></h2><p class="gallery-subtitle max-w-4xl leading-relaxed" data-v-4bbad4bc>Capturing moments that matter</p></div><div class="gallery-grid" data-v-4bbad4bc><!--[-->`);
      ssrRenderList(galleryItems.value, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ "active": selectedItem.value === index }, "gallery-item"])}" style="${ssrRenderStyle({ animationDelay: `${index * 0.1}s` })}" data-v-4bbad4bc><div class="image-wrapper" data-v-4bbad4bc><img${ssrRenderAttr("src", item.src)}${ssrRenderAttr("alt", item.alt)} class="gallery-image" loading="lazy" data-v-4bbad4bc><div class="image-overlay" data-v-4bbad4bc><div class="overlay-content" data-v-4bbad4bc><svg class="expand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-v-4bbad4bc><path d="M8 3H5a2 2 0 0 0-2 2v3m18-5h-3m0 0v3m0-3L16 8M8 21h-3a2 2 0 0 1-2-2v-3m0 0L8 16m0 0l3 3" data-v-4bbad4bc></path></svg></div></div></div><div class="item-info" data-v-4bbad4bc><h3 class="item-title" data-v-4bbad4bc>${ssrInterpolate(item.title)}</h3><p class="item-date" data-v-4bbad4bc>${ssrInterpolate(item.date)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (lightboxOpen.value) {
          _push2(`<div class="lightbox-overlay" data-v-4bbad4bc><div class="lightbox-container" data-v-4bbad4bc><button class="lightbox-close" data-v-4bbad4bc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" data-v-4bbad4bc><line x1="18" y1="6" x2="6" y2="18" data-v-4bbad4bc></line><line x1="6" y1="6" x2="18" y2="18" data-v-4bbad4bc></line></svg></button><div class="lightbox-content" data-v-4bbad4bc><img${ssrRenderAttr("src", galleryItems.value[selectedItem.value]?.src)}${ssrRenderAttr("alt", galleryItems.value[selectedItem.value]?.alt)} class="lightbox-image" data-v-4bbad4bc><div class="lightbox-info" data-v-4bbad4bc><h3 data-v-4bbad4bc>${ssrInterpolate(galleryItems.value[selectedItem.value]?.title)}</h3><p data-v-4bbad4bc>${ssrInterpolate(galleryItems.value[selectedItem.value]?.description)}</p><span class="lightbox-date" data-v-4bbad4bc>${ssrInterpolate(galleryItems.value[selectedItem.value]?.date)}</span></div></div>`);
          if (selectedItem.value > 0) {
            _push2(`<button class="lightbox-nav lightbox-prev" data-v-4bbad4bc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" data-v-4bbad4bc><polyline points="15,18 9,12 15,6" data-v-4bbad4bc></polyline></svg></button>`);
          } else {
            _push2(`<!---->`);
          }
          if (selectedItem.value < galleryItems.value.length - 1) {
            _push2(`<button class="lightbox-nav lightbox-next" data-v-4bbad4bc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" data-v-4bbad4bc><polyline points="9,18 15,12 9,6" data-v-4bbad4bc></polyline></svg></button>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stories/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4bbad4bc"]]);

export { gallery as default };
//# sourceMappingURL=gallery-CQCEwYXd.mjs.map
