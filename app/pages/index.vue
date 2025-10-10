<template>
    <div>
        <Hero />
    </div>
</template>

<script setup>
useHead({

  title: 'AMU Foundation - Empowering Children Through Education, Sports, and Music',
  meta: [
    {
      name: 'description',
      content: 'AMU Foundation is dedicated to creating equal opportunities for children through education, sports, and music. Join us in making a difference.'
    },
    {
      name: 'keywords',
      content: 'AMU Foundation, education, sports, music, children empowerment, non-profit, charity, skill development, advocacy'
    },
    {
      name: 'author',
      content: 'AMU Foundation'
    },
    {
      property: 'og:title',
      content: 'AMU Foundation - Empowering Children Through Education, Sports, and Music'
    },
    {
      property: 'og:description',
      content: 'AMU Foundation is dedicated to creating equal opportunities for children through education, sports, and music. Join us in making a difference.'
    },
    {
      property: 'og:image',
      content: '/img/bs9.webp'
    },
    {
      property: 'og:url',
      content: 'https://www.amufoundation.org'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ],
})

useSeoMeta({
  title: 'AMU Foundation - Empowering Children Through Education, Sports, and Music',
  description: 'AMU Foundation is dedicated to creating equal opportunities for children through education, sports, and music. Join us in making a difference.',
  ogType: 'website',
  ogImage: '/img/bs9.webp',
  ogUrl: 'https://www.amufoundation.org',
  twitterCard: 'summary_large_image',
  twitterSite: '@amufoundation',
  twitterCreator: '@amufoundation',
  twitterImage: '/img/bs9.webp',
  keywords: ['AMU Foundation', 'education', 'sports', 'music', 'children empowerment', 'non-profit', 'charity', 'skill development', 'advocacy'],
})

defineOgImageComponent('AmuFoundation', {
  title: 'AMU Foundation',
  description: 'Empowering Children through Education, Music and Sports'
})
</script>
