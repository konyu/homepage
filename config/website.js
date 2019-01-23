const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'コンユウスケセイサクショ', // Navigation and Site Title
  siteTitleAlt: 'コンユウスケセイサクショ', // Alternative Site title for SEO
  siteTitleShort: 'コンユウスケセイサクショ', // short_name for manifest
  siteHeadline: 'Creating marvelous art & blazginly fast websites', // Headline for schema.org JSONLD
  siteUrl: 'https://kon-yu.work', // Domain of your site. No trailing slash!
  siteLanguage: 'ja', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Playful & Colorful One-Page website with Parallax effect',
  author: 'LekoArts', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@kon_yu', // Twitter Username
  ogSiteName: 'コンユウスケセイサクショ', // Facebook Site Name
  ogLanguage: 'ja_JP', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
