import __nuxt_component_1 from './index-IBbNTAQQ.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
  __name: "team",
  __ssrInlineRender: true,
  setup(__props) {
    const teamMembers = ref([
      {
        "name": "Terfa Timothy Addingi",
        "position": "Founder, Designer, Creator, Innovator and Inventor",
        "image": "/img/terfa.jpg",
        "background": "Industrial Designer",
        "description": "A dedicated and result-driven Industrial Designer with a successful background in achieving profitable business growth through product development and brand promotion.",
        "expertise": [
          "Product Design",
          "Mechanics",
          "Fabrication",
          "CAD Modeling",
          "Computer-Aided Design",
          "Digital Manufacturing Techniques",
          "Mechatronics"
        ],
        "focus": "Eco-friendly product development with consideration for material use, production process, and environmental impact",
        "activities": [
          "Tutoring",
          "Mentoring",
          "Training",
          "Impacting",
          "Equipping"
        ]
      },
      {
        "name": "Samantha Iyunade Addingi",
        "position": "Executive Director",
        "image": "/img/samantha.jpg",
        "background": "Educator, Writer, Justice Advocate & Entrepreneur",
        "description": "Samantha Iyunade Addingi is a dynamic and visionary leader in the fields of education, philanthropy, and entrepreneurship. As an accomplished educator, writer, and justice advocate, she has dedicated her career to empowering young people through innovative educational programs and community initiatives.",
        "education": [
          "Bachelor's degree in Mathematics from University of Jos",
          "Masters degree in Multidisciplinary Studies in Education from State University of New York, College at Buffalo"
        ],
        "organizations": [
          "Managing Director and CEO of B&S Educational Services",
          "MD/CEO of B&S Music School",
          "Executive Director of A Million of Us Foundation",
          "Education Consultant"
        ],
        "expertise": [
          "Educational Leadership",
          "International Student Placement",
          "Arts & Music Education",
          "Philanthropic Management",
          "Youth Empowerment",
          "Global Partnerships"
        ],
        "focus": "Fostering access to quality education and cultural enrichment through innovative educational programs",
        "achievements": [
          "Established multiple B&S Education study centers across Nigeria",
          "Partnerships with over 50 prestigious international institutions across UK, US, Canada, Australia, Hungary, Antigua, and various European countries",
          "Successfully placed countless Nigerian students in international programs"
        ],
        "success_stories": [
          "Organized over four annual editions of B&S Music School concerts featuring young performers",
          "Drew participation from more than 30 secondary schools in Nigeria for music concerts",
          "Established multiple B&S Education study centers providing vital resources for academic development",
          "Led philanthropic efforts supporting justice, peace, and community welfare through A Million of Us Foundation"
        ],
        "activities": [
          "Student mentoring",
          "International education consulting",
          "Music education promotion",
          "Community development"
        ],
        "origin": "Nigeria",
        "personal": "Happily married with three beautiful children"
      },
      {
        "name": "Nnamdi Okoye",
        "position": "Banker, Businessman, Consultant, Trainer, and Life Coach",
        "image": "/img/nnamdi.jpg",
        "background": "18 years in financial sector",
        "work_experience": [
          "Diamond Bank Plc",
          "Guaranty Trust Bank Plc",
          "Dynamone Consults (Lead Consultant)",
          "Denis Hotels Ltd (Personal Consultant to Chairman)"
        ],
        "skills": [
          "Banking operations",
          "Audit",
          "Marketing",
          "Customer Care",
          "Relationship Management",
          "Credit Management",
          "Staff Supervision",
          "General Administration",
          "Human Resources Management",
          "Emotional Intelligence",
          "Conflict Resolution",
          "Critical Thinking",
          "Problem Solving"
        ],
        "description": "Nnamdi Okoye is a banker, businessman, consultant, trainer, and life coach. For 18 years, Nnamdi has worked largely in the financial sector where his work experience was birthed in Diamond Bank Plc and later Guaranty Trust Bank Plc.",
        "passions": [
          "Positively impacting younger people",
          "Relationship and marital counselling",
          "Sexual rights",
          "Human rights issues"
        ],
        "church_service": [
          "Youth Coordinator and mentor at Foundation Faith Church (Salem Cathedral)",
          "Church Council member",
          "Various capacities at The Capital Assembly, Abuja"
        ],
        "education": ["Currently studying MBA at University of South Wales"],
        "certifications": [
          "Project Management",
          "Facility Management",
          "Renewable Energy"
        ]
      },
      {
        "name": "Anne Aburime",
        "position": "Operations Head at Respire",
        "image": "/img/anne.jpg",
        "background": "Non-profit executive and humanitarian worker",
        "current_role": "Governing executive and Operations Head at Respire (non-profit based in Abuja Nigeria)",
        "description": "Miss Anne Aburime has distinguished herself as a giant amongst men, with her selfless and relentless desire to meet the needs of the underprivileged in society, as well as making a difference in the life of everyone she comes across.",
        "projects": [
          "Renovation of classrooms in Bama/Gwoza IDP camp in Durumi Abuja",
          "Various educational and developmental projects in Abuja"
        ],
        "experience": "Advisory and coordinators role with several charities",
        "achievements": [
          "NYSC FCT state award for being one of the most outstanding corp members during 2012/2013 service year",
          "Commendations from local chieftains and corporate bodies"
        ],
        "characteristics": [
          "Patriot",
          "Entrepreneur",
          "Advocate for gender equality",
          "Women empowerment advocate"
        ],
        "focus": "Meeting needs of underprivileged in society and community development"
      },
      {
        "name": "Dr. Nneka Cos-Okpalla",
        "position": "Health Care Management & Policy Consultant",
        "image": "/img/nneka.jpg",
        "background": "Harvard trained consultant",
        "description": "Dr. Nneka Cos-Okpalla is a Harvard trained Health Care Management & Policy Consultant. She is an alumnus of the University of Jos Nigeria, Texas A & M University and Harvard University.",
        "education": [
          "University of Jos Nigeria",
          "Texas A & M University",
          "Harvard University"
        ],
        "current_work": "Works for United States federal government",
        "experience": "Various positions in private healthcare sector and academia",
        "passion": "Education as a tool to lift poverty shackles and bridge socioeconomic inequalities",
        "origin": "Native of Anambra State, Nigeria",
        "volunteer_work": [
          "Mentoring at-risk kids",
          "Helping elderly navigate Health Care System in America"
        ],
        "location": "United States of America"
      }
      //   {
      //     "name": "Elizabeth Titilayo Adesanya",
      //     "position": "Business Management Consultant",
      //     "image": "/img/elizabeth.png",
      //     "current_role": "Business Management Consultant with Presidential Enabling Business Environment Council (PEBEC)",
      //     "description": "Ms. Elizabeth Adesanya is a Business Management Consultant with the Presidential Enabling Business Environment Council (PEBEC) which was set up by HE President Muhammadu Buhari GCFR and is chaired by HE Vice President Yemi Osinbajo SAN GCON.",
      //     "pebec_details": "Set up by President Muhammadu Buhari GCFR, chaired by Vice President Yemi Osinbajo SAN GCON",
      //     "achievements": ["Led reforms that helped Nigeria move up 24 places in 2018 World Bank's Ease of Doing Business rankings"],
      //     "prior_experience": "8 years with Nigerian Private sector in Administration and Finance management",
      //     "education": [
      //       "Bachelor degree in Business Administration (Accounting and Finance) from Kwame Nkrumah University of Science and Technology (KNUST) Ghana",
      //       "Currently pursuing Master's in Business Administration"
      //     ],
      //     "certifications": [
      //       "Leadership course certificates in Covenant Ministerial Institute",
      //       "Rhema Training College, Abuja"
      //     ],
      //     "skills_and_gifts": [
      //       "Mentoring",
      //       "Teaching",
      //       "Organizing",
      //       "Writing",
      //       "Music"
      //     ],
      //     "background": "8 years with Nigerian Private sector",
      //     "volunteer_work": ["Several NGOs, private and government sectors"],
      //     "origin": "Indigene of Lagos State",
      //     "passion": "Development issues in Africa relating to teenage girls and boys, orphans, internally displaced persons, house helps",
      //     "other_roles": [
      //       "Avid writer",
      //       "Minister",
      //       "Minstrel"
      //     ],
      //     "mentoring_experience": "Over 12 years mentoring Nigerian youth in various capacities"
      //   }
    ]);
    const selectedMember = ref(null);
    const getInitials = (name) => {
      return name.split(" ").map((word) => word.charAt(0)).slice(0, 2).join("").toUpperCase();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-gray-50 py-16" }, _attrs))} data-v-b644f7a5><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-b644f7a5><div class="text-center mb-16" data-v-b644f7a5><h1 class="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-8" data-v-b644f7a5> Meet Our <span class="text-rose-700" data-v-b644f7a5>Team</span></h1><p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed" data-v-b644f7a5> Meet The Team That Have Steered AMU Foundation In The Right Direction </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-b644f7a5><!--[-->`);
      ssrRenderList(teamMembers.value, (member) => {
        _push(`<div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 group" data-v-b644f7a5><div class="flex justify-center mb-6" data-v-b644f7a5><div class="w-32 h-32 rounded-full bg-gray-200 overflow-hidden" data-v-b644f7a5>`);
        if (member.image) {
          _push(`<img${ssrRenderAttr("src", member.image)}${ssrRenderAttr("alt", member.name)} class="w-full h-full object-cover" data-v-b644f7a5>`);
        } else {
          _push(`<div class="w-full h-full flex items-center justify-center bg-rose-700 text-white text-2xl font-bold" data-v-b644f7a5>${ssrInterpolate(getInitials(member.name))}</div>`);
        }
        _push(`</div></div><div class="text-center mb-4" data-v-b644f7a5><h3 class="text-xl font-semibold text-gray-900 mb-2" data-v-b644f7a5>${ssrInterpolate(member.name)}</h3><p class="text-rose-700 font-medium text-sm mb-3" data-v-b644f7a5>${ssrInterpolate(member.position)}</p></div><p class="text-gray-600 text-sm mb-4 line-clamp-4" data-v-b644f7a5>${ssrInterpolate(member.description)}</p>`);
        if (member.expertise && member.expertise.length > 0) {
          _push(`<div class="mb-4" data-v-b644f7a5><div class="flex flex-wrap gap-2" data-v-b644f7a5><!--[-->`);
          ssrRenderList(member.expertise.slice(0, 3), (skill) => {
            _push(`<span class="inline-block bg-rose-100 text-rose-700 px-2 py-1 rounded-full text-xs font-medium" data-v-b644f7a5>${ssrInterpolate(skill)}</span>`);
          });
          _push(`<!--]-->`);
          if (member.expertise.length > 3) {
            _push(`<span class="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium" data-v-b644f7a5> +${ssrInterpolate(member.expertise.length - 3)} more </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else if (member.skills && member.skills.length > 0) {
          _push(`<div class="mb-4" data-v-b644f7a5><div class="flex flex-wrap gap-2" data-v-b644f7a5><!--[-->`);
          ssrRenderList(member.skills.slice(0, 3), (skill) => {
            _push(`<span class="inline-block bg-rose-100 text-rose-700 px-2 py-1 rounded-full text-xs font-medium" data-v-b644f7a5>${ssrInterpolate(skill)}</span>`);
          });
          _push(`<!--]-->`);
          if (member.skills.length > 3) {
            _push(`<span class="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium" data-v-b644f7a5> +${ssrInterpolate(member.skills.length - 3)} more </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="text-xs text-gray-500 mb-4" data-v-b644f7a5>`);
        if (member.background) {
          _push(`<div class="mb-1" data-v-b644f7a5>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "i-lucide-briefcase",
            class: "w-3 h-3 inline mr-1"
          }, null, _parent));
          _push(` ${ssrInterpolate(member.background)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (member.origin) {
          _push(`<div class="mb-1" data-v-b644f7a5>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "i-lucide-map-pin",
            class: "w-3 h-3 inline mr-1"
          }, null, _parent));
          _push(` ${ssrInterpolate(member.origin)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (member.location && member.location !== member.origin) {
          _push(`<div data-v-b644f7a5>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "i-lucide-globe",
            class: "w-3 h-3 inline mr-1"
          }, null, _parent));
          _push(` Currently in ${ssrInterpolate(member.location)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="text-center" data-v-b644f7a5><button class="inline-flex items-center text-rose-700 hover:text-rose-800 font-medium text-sm transition-colors duration-200" data-v-b644f7a5> Read More `);
        _push(ssrRenderComponent(_component_Icon, {
          name: "i-lucide-arrow-right",
          class: "w-4 h-4 ml-1"
        }, null, _parent));
        _push(`</button></div></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (selectedMember.value) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" data-v-b644f7a5><div class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" data-v-b644f7a5><div class="p-6" data-v-b644f7a5><div class="flex items-start justify-between mb-6" data-v-b644f7a5><div class="flex items-center space-x-4" data-v-b644f7a5><div class="w-20 h-20 rounded-full bg-gray-200 overflow-hidden flex-shrink-0" data-v-b644f7a5>`);
        if (selectedMember.value.image) {
          _push(`<img${ssrRenderAttr("src", selectedMember.value.image)}${ssrRenderAttr("alt", selectedMember.value.name)} class="w-full h-full object-cover" data-v-b644f7a5>`);
        } else {
          _push(`<div class="w-full h-full flex items-center justify-center bg-rose-700 text-white text-lg font-bold" data-v-b644f7a5>${ssrInterpolate(getInitials(selectedMember.value.name))}</div>`);
        }
        _push(`</div><div data-v-b644f7a5><h3 class="text-2xl font-bold text-gray-900" data-v-b644f7a5>${ssrInterpolate(selectedMember.value.name)}</h3><p class="text-rose-700 font-medium" data-v-b644f7a5>${ssrInterpolate(selectedMember.value.position)}</p></div></div><button class="text-gray-400 hover:text-gray-600 transition-colors duration-200" data-v-b644f7a5>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "i-lucide-x",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</button></div><div class="space-y-6" data-v-b644f7a5>`);
        if (selectedMember.value.description) {
          _push(`<div data-v-b644f7a5><h4 class="text-lg font-semibold text-gray-900 mb-3" data-v-b644f7a5>About</h4><p class="text-gray-600 leading-relaxed" data-v-b644f7a5>${ssrInterpolate(selectedMember.value.description)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="grid md:grid-cols-2 gap-6" data-v-b644f7a5>`);
        if (selectedMember.value.background) {
          _push(`<div data-v-b644f7a5><h4 class="text-lg font-semibold text-gray-900 mb-3" data-v-b644f7a5>Background</h4><p class="text-gray-600" data-v-b644f7a5>${ssrInterpolate(selectedMember.value.background)}</p>`);
          if (selectedMember.value.focus) {
            _push(`<p class="text-gray-600 mt-2" data-v-b644f7a5><strong data-v-b644f7a5>Focus:</strong> ${ssrInterpolate(selectedMember.value.focus)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedMember.value.education && selectedMember.value.education.length > 0) {
          _push(`<div data-v-b644f7a5><h4 class="text-lg font-semibold text-gray-900 mb-3" data-v-b644f7a5>Education</h4><ul class="text-gray-600 space-y-1" data-v-b644f7a5><!--[-->`);
          ssrRenderList(selectedMember.value.education, (edu) => {
            _push(`<li class="flex items-start" data-v-b644f7a5>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "i-lucide-graduation-cap",
              class: "w-4 h-4 mr-2 mt-0.5 text-rose-700 flex-shrink-0"
            }, null, _parent));
            _push(` ${ssrInterpolate(edu)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (selectedMember.value.expertise && selectedMember.value.expertise.length > 0 || selectedMember.value.skills && selectedMember.value.skills.length > 0) {
          _push(`<div data-v-b644f7a5><h4 class="text-lg font-semibold text-gray-900 mb-3" data-v-b644f7a5>${ssrInterpolate(selectedMember.value.expertise ? "Expertise" : "Skills")}</h4><div class="flex flex-wrap gap-2" data-v-b644f7a5><!--[-->`);
          ssrRenderList(selectedMember.value.expertise || selectedMember.value.skills, (skill) => {
            _push(`<span class="inline-block bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium" data-v-b644f7a5>${ssrInterpolate(skill)}</span>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedMember.value.work_experience && selectedMember.value.work_experience.length > 0) {
          _push(`<div data-v-b644f7a5><h4 class="text-lg font-semibold text-gray-900 mb-3" data-v-b644f7a5>Work Experience</h4><ul class="text-gray-600 space-y-2" data-v-b644f7a5><!--[-->`);
          ssrRenderList(selectedMember.value.work_experience, (exp) => {
            _push(`<li class="flex items-start" data-v-b644f7a5>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "i-lucide-briefcase",
              class: "w-4 h-4 mr-2 mt-0.5 text-rose-700 flex-shrink-0"
            }, null, _parent));
            _push(` ${ssrInterpolate(exp)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedMember.value.achievements && selectedMember.value.achievements.length > 0) {
          _push(`<div data-v-b644f7a5><h4 class="text-lg font-semibold text-gray-900 mb-3" data-v-b644f7a5>Achievements</h4><ul class="text-gray-600 space-y-2" data-v-b644f7a5><!--[-->`);
          ssrRenderList(selectedMember.value.achievements, (achievement) => {
            _push(`<li class="flex items-start" data-v-b644f7a5>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "i-lucide-award",
              class: "w-4 h-4 mr-2 mt-0.5 text-rose-700 flex-shrink-0"
            }, null, _parent));
            _push(` ${ssrInterpolate(achievement)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedMember.value.volunteer_work && selectedMember.value.volunteer_work.length > 0) {
          _push(`<div data-v-b644f7a5><h4 class="text-lg font-semibold text-gray-900 mb-3" data-v-b644f7a5>Volunteer Work</h4><ul class="text-gray-600 space-y-2" data-v-b644f7a5><!--[-->`);
          ssrRenderList(selectedMember.value.volunteer_work, (volunteer) => {
            _push(`<li class="flex items-start" data-v-b644f7a5>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "i-lucide-heart",
              class: "w-4 h-4 mr-2 mt-0.5 text-rose-700 flex-shrink-0"
            }, null, _parent));
            _push(` ${ssrInterpolate(volunteer)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedMember.value.activities && selectedMember.value.activities.length > 0) {
          _push(`<div data-v-b644f7a5><h4 class="text-lg font-semibold text-gray-900 mb-3" data-v-b644f7a5>Activities</h4><div class="flex flex-wrap gap-2" data-v-b644f7a5><!--[-->`);
          ssrRenderList(selectedMember.value.activities, (activity) => {
            _push(`<span class="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm" data-v-b644f7a5>${ssrInterpolate(activity)}</span>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedMember.value.organizations && selectedMember.value.organizations.length > 0) {
          _push(`<div data-v-b644f7a5><h4 class="text-lg font-semibold text-gray-900 mb-3" data-v-b644f7a5>Organizations</h4><ul class="text-gray-600 space-y-2" data-v-b644f7a5><!--[-->`);
          ssrRenderList(selectedMember.value.organizations, (org) => {
            _push(`<li class="flex items-start" data-v-b644f7a5>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "i-lucide-building",
              class: "w-4 h-4 mr-2 mt-0.5 text-rose-700 flex-shrink-0"
            }, null, _parent));
            _push(` ${ssrInterpolate(org)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        if (selectedMember.value.success_stories && selectedMember.value.success_stories.length > 0) {
          _push(`<div data-v-b644f7a5><h4 class="text-lg font-semibold text-gray-900 mb-3" data-v-b644f7a5>Success Stories</h4><ul class="text-gray-600 space-y-2" data-v-b644f7a5><!--[-->`);
          ssrRenderList(selectedMember.value.success_stories, (story) => {
            _push(`<li class="flex items-start" data-v-b644f7a5>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "i-lucide-star",
              class: "w-4 h-4 mr-2 mt-0.5 text-rose-700 flex-shrink-0"
            }, null, _parent));
            _push(` ${ssrInterpolate(story)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const team = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b644f7a5"]]);

export { team as default };
//# sourceMappingURL=team-DtZYSkq-.mjs.map
