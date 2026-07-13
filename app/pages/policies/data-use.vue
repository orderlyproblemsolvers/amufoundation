<!-- pages/policies/data-use.vue -->
<template>
  <div class="min-h-screen bg-white">
    <section class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
        Terms of <span class="text-rose-700">Data Use</span>
      </h1>
      <p class="text-sm text-gray-500 mb-10">Last updated: {{ lastUpdated }}</p>

      <div class="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 class="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
          <p>
            AMU Foundation ("AMU," "we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us. This Terms of Data Use policy explains what information we collect when you register for our programs — including B&S Music School and AMU Sports Camp — how we use it, and the rights you have over it. By submitting a registration form, you acknowledge that you have read and understood this policy.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
          <p>When you register for a program, we collect the following information directly from you:</p>
          <ul class="list-disc pl-6 space-y-1">
            <li>First and last name</li>
            <li>Date of birth</li>
            <li>Email address</li>
            <li>Phone number</li>
          </ul>
          <p class="mt-3">
            If you are registering a child or a person under your care, you confirm that you are their parent, guardian, or authorized representative, and that you have the authority to submit their information on their behalf.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
          <p>We use the information collected solely to:</p>
          <ul class="list-disc pl-6 space-y-1">
            <li>Process and confirm your program registration</li>
            <li>Verify eligibility (e.g. age-appropriate placement)</li>
            <li>Communicate important updates about the program, including schedule changes and event logistics</li>
            <li>Maintain accurate internal records of participants</li>
            <li>Comply with applicable legal or regulatory obligations</li>
          </ul>
          <p class="mt-3">
            We do not use your information for automated marketing profiling, and we do not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-gray-900 mb-3">4. Data Sharing</h2>
          <p>
            We do not share your personal information with third parties, except where necessary to operate the program (for example, program instructors or coaches directly involved in delivering the activity you registered for), or where required by law, court order, or governmental authority.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-gray-900 mb-3">5. Data Retention</h2>
          <p>
            We retain registration information for as long as necessary to fulfil the purposes described in this policy, including maintaining records for the duration of the program and a reasonable period afterward for administrative and reporting purposes. You may request earlier deletion of your data as described in Section 6.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-gray-900 mb-3">6. Your Rights</h2>
          <p>Consistent with the Nigeria Data Protection Act (NDPA) 2023, you have the right to:</p>
          <ul class="list-disc pl-6 space-y-1">
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction of inaccurate or incomplete data</li>
            <li>Request deletion of your data, subject to legal or administrative retention requirements</li>
            <li>Withdraw consent to future communication at any time</li>
          </ul>
          <p class="mt-3">
            To exercise any of these rights, please contact us using the details in Section 8.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-gray-900 mb-3">7. Data Security</h2>
          <p>
            We take reasonable technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of electronic storage or transmission is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-gray-900 mb-3">8. Contact Us</h2>
          <p>
            If you have questions about this policy or how your data is handled, please contact AMU Foundation through the contact details listed on our website.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-gray-900 mb-3">9. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time to reflect changes in our practices or for legal reasons. Any changes will be posted on this page with an updated revision date.
          </p>
        </section>

      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Terms of Data Use - AMU Foundation' })
const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
</script>