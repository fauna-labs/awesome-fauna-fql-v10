import Script from 'next/script'
import AuthorCard from './components/Authorcard'
export default {
  github: 'https://github.com/fauna-labs/aws-workshop',
  docsRepositoryBase: 'https://github.com/fauna-labs/aws-workshop',
  titleSuffix: 'Fauna',
  logo: (
    <>
      <img style={{ width: '100px' }} className="mr-2 font-extrabold hidden md:inline" src="https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/42f3e7fa7d39fab5b6222f6199f0203c/Fauna_Logo.svg" alt="Nextra" />
      <span className="text-gray-600 font-normal hidden md:inline" style={{ marginTop: '10px' }}>
        Fauna Sample Applications
      </span>
    </>
  ),
  head: (
    <>


      <title>Fauna Sample Applications</title>
      <meta name="title" content="Fauna Sample Applications"/>
      <meta name="description" content="Building applications with Fauna database"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://fauna.com"/>
      <meta property="og:title" content="Fauna Sample Applications"/>
      <meta property="og:description" content="Building applications with Fauna database"/>
      <meta property="og:image" content="https://workshop-shadid.s3.amazonaws.com/sample-app/sample-app.png"/>

      <meta name="twitter:site" content="@fauna" />
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://fauna.com"/>
      <meta property="twitter:title" content="Fauna Sample Applications"/>
      <meta property="twitter:description" content="Building applications with Fauna database"/>
      <meta property="twitter:image" content="https://workshop-shadid.s3.amazonaws.com/sample-app/sample-app.png"/>




      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/42f3e7fa7d39fab5b6222f6199f0203c/Fauna_Logo.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/42f3e7fa7d39fab5b6222f6199f0203c/Fauna_Logo.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/42f3e7fa7d39fab5b6222f6199f0203c/Fauna_Logo.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/42f3e7fa7d39fab5b6222f6199f0203c/Fauna_Logo.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/42f3e7fa7d39fab5b6222f6199f0203c/Fauna_Logo.svg"
      />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  unstable_flexsearch: true,
  feedbackLabels: "Learn More @",
  projectLink: 'https://github.com/fauna-labs/cf-workshop',
  floatTOC: true,
  feedbackLink: () => {
    return (
      <>
        <h4>Contributors</h4>
        <AuthorCard />
        <a style={{ fontSize: '16px', color: 'rgb(58,26,182)' }} href="https://github.com/fauna-labs" target="_blank">🧪 Fauna Labs</a>
        <br />
        <a style={{ fontSize: '16px', color: 'rgb(58,26,182)' }} href="https://docs.fauna.com/fauna/current/" target="_blank">📗 Docs</a>
        <br />
        <a style={{ fontSize: '16px', color: 'rgb(58,26,182)' }} href="https://docs.fauna.com/fauna/current/learn/sample_apps/" target="_blank">🤖 Sample Apps</a>
      </>
    );
  },
  footer: false,
  footerEditLink: '',
  footerText: <>MIT-0 {new Date().getFullYear()} © Fauna Inc.</>,
  unstable_faviconGlyph: '',
}
