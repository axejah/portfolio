/* Customization Guide available on:
  https://gatsby-blog-mdx.now.sh/2020/05/4-customize/
  ======================================== */
const config = {
  /* Site
  ========================================= */
  title: `Kevin's Portfolio`, // Displayed in header
  description: `Portfolio of Kevin Soester`, // Site description
  maxWidth: "768px", // Max width of website
  enableAbout: true, // Enables about page
  siteUrl: `https://kevines.dev`, // For sitemap & RSS feed
  useScrollIndicator: true, // Use scroll indicator on top of screen in posts

  /* Profile
  ========================================= */
  author: `Kevin Soester`, // Name shows on profile
  profileDescription:
    "Junior Web Developer. I speak HTML, CSS and JavaScript. ❤ Whisky. Fan of Big Peat and Blackadder. Former e-Sporter.", // Shows under author name
  profileImageName: `profile.jpg`, // Place profile.jpg/.jpeg/.png in _assets folder
  location: "Zaandam, the Netherlands", // Location under profileDescription. "" --> disabled
  footerLink: "/", // Link to page when you click footer name

  /* Social Media Links
      accountName & emailAddress: leave blank ("") to disable
      showHeaderIcon: shows social media icon in header. When true, must have account name set
  ========================================= */
  socialMediaLinks: {
    email: { emailAddress: "kevin.soester1@gmail.com", showHeaderIcon: true },
    github: { accountName: "axejah", showHeaderIcon: true },
    facebook: { accountName: "", showHeaderIcon: true },
    instagram: { accountName: "", showHeaderIcon: true },
    twitter: { accountName: "", showHeaderIcon: true },
    linkedIn: {
      accountName: "in/kevin-soester-9b51231b",
      showHeaderIcon: true,
    }, // Use URL after "linkedin.com/"
    medium: { accountName: "", showHeaderIcon: true }, // Use URL after "medium.com/@"
  },

  /* Social Media Share Buttons--available below every post
  ========================================= */
  shareButtons: {
    email: false,
    facebook: false,
    twitter: false,
    reddit: false,
    linkedIn: false,
  },

  /* Comments
  ========================================= */
  comments: {
    facebook: { enabled: false, appId: "" }, // appId: optional, but used to moderate fb comments
    disqus: { enabled: false, shortName: "" }, // Check your shortName on https://disqus.com
    utterances: { enabled: false, repoUrl: "" }, // i.e. 'ellismin/gatsby-blog-mdx'
  },

  /* More Custom Settings
  ========================================= */
  defaultTheme: "light", // Options: dark / light -- applied to first visitors
  showTimeToRead: false, // Shows time to read for each post in main page
  breakCodeLines: false, // Breaks long code lines instead of having horizontal scroll
  faviconSrc: `_assets/profile.jpg`, // Favicon
  gaTrackingId: `UA-171589552-1`, // Your google analytics tracking id--i.e. UA-*****
  googleAdSenseId: ``, // Your google AdSense client id--i.e. ca-pub-****
}

module.exports = config
