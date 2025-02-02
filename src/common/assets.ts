const CDN_URL = (path: string) => `https://res.cloudinary.com/dlj66ezaw/image/upload/${path}`;

const ICONS = {
  about: CDN_URL("v1737636084/PORTFOLIO/icons/v0vesar4jrzuab8im9ht.svg"),
  home: CDN_URL("v1737636708/PORTFOLIO/icons/uxyzebzlodu8tfm9dwd4.svg"),
  experience: CDN_URL("v1737637019/PORTFOLIO/icons/jx11dtmeyz2zimbvkjwt.svg"),
  light: CDN_URL("v1737637466/PORTFOLIO/icons/ptpsrvnfl4mbjeq6p6dn.svg"),
  book: CDN_URL("v1737637394/PORTFOLIO/icons/en2i93hdingns7wn6xse.svg"),
  package: CDN_URL("v1737637328/PORTFOLIO/icons/lujbmnljcx6ghub6one5.svg"),
  translation: CDN_URL("v1737637191/PORTFOLIO/icons/evpbmrv7emu8i0g1crje.svg"),
  java: CDN_URL("v1737637195/PORTFOLIO/icons/nqdleermgwahinn35cgk.svg"),
  code: CDN_URL("v1737637920/PORTFOLIO/icons/rn2yqvtmtseeq7dy0xsb.svg"),
  certificate: CDN_URL("v1737637995/PORTFOLIO/icons/sivdw5wrqk8zymijlgxw.svg"),
  globe: CDN_URL("v1737638003/PORTFOLIO/icons/agani9vrghook5sfps9s.svg"),
  pin: CDN_URL("v1737638010/PORTFOLIO/icons/wcq9dcqg8oy1ybglipnq.svg"),
  mail: CDN_URL("v1737638067/PORTFOLIO/icons/kb03aqdtknuxpehnldbk.svg"),
  cv: CDN_URL("v1737638483/PORTFOLIO/icons/rkvhn0scqhlg5geal6ly.svg"),
  github: CDN_URL("v1737638756/PORTFOLIO/icons/i6mc8ltopss4dzkwm1ia.svg"),
  instagram: CDN_URL("v1737638773/PORTFOLIO/icons/tikki94v0cgew38oynwx.svg"),
  linkedin: CDN_URL("v1737638789/PORTFOLIO/icons/dv6nkxjv00rvn3jlmwiy.svg"),
  npm: CDN_URL("v1737638905/PORTFOLIO/icons/xrxobr4syjjosfx84alq.svg"),
  building: CDN_URL("v1737639954/PORTFOLIO/icons/zcxwss2v0ug9ek9ya9ng.svg"),
} as const;

const IMAGES = {
  me: CDN_URL("v1737637215/PORTFOLIO/images/y0xrdfsewnwtxbuu22px.png"),
  me_thumbnail: CDN_URL("c_thumb,w_200,g_face/v1737637215/PORTFOLIO/images/y0xrdfsewnwtxbuu22px.png"),
  countryside: CDN_URL("v1737637031/PORTFOLIO/images/ek6epfaf5rxumbx5joup.avif"),
  countryside_banner: CDN_URL("c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/v1737637031/PORTFOLIO/images/ek6epfaf5rxumbx5joup.avif"),
  basantani: CDN_URL("v1737637223/PORTFOLIO/certifications/rddy2l7uhvdaqlnxplyo.png"),
  horizon: CDN_URL("v1737637219/PORTFOLIO/certifications/kpje8jnflj3ryct15olq.png"),
  shortcut: CDN_URL("v1737652037/PORTFOLIO/images/h5ogavy6mdfxbrqq0ods.png"),
  media_tip: CDN_URL("v1738067980/PORTFOLIO/images/tsd05lsq8pxcdu2whoas.png"),
  npm_tip: CDN_URL("v1738068609/PORTFOLIO/images/knpmxji8ykmdcixelnzf.png"),
  translatio_tip: CDN_URL("v1738068039/PORTFOLIO/images/l6vr0na5pr1py3g3xdr9.png"),
  aws: CDN_URL("v1737735270/PORTFOLIO/images/ufifigdinsuiz2ettt7x.png"),
  aws_white: CDN_URL("v1737735628/PORTFOLIO/images/kww6u4k3xq5okooicbd4.webp"),
} as const;

const CERTIFICATIONS = {
  architect: {
    icon: CDN_URL("v1737820700/PORTFOLIO/certifications/wch9fgkry0i7qnorptcr.png"),
    cert: CDN_URL("v1737733943/PORTFOLIO/certifications/gr5ffrsekg0wkpef7ej0.png"),
  },
  well_architect: {
    icon: CDN_URL("v1737820700/PORTFOLIO/certifications/wch9fgkry0i7qnorptcr.png"),
    cert: CDN_URL("v1737733975/PORTFOLIO/certifications/ms7b8yhnsil1o4rsvu9k.png"),
  },
  devops: {
    icon: CDN_URL("v1737820910/PORTFOLIO/certifications/xxsfzyn8dxp0v8aybsxa.png"),
    cert: CDN_URL("v1737733948/PORTFOLIO/certifications/qqmv9dzjs1nqblbegkut.png"),
  },
  kubernetes: {
    icon: CDN_URL("v1737821171/PORTFOLIO/certifications/qdnj0dsisvetonpbhlin.png"),
    cert: CDN_URL("v1737733959/PORTFOLIO/certifications/dqevrtn6glviqptl9uio.png"),
  },
  data_sience: {
    icon: CDN_URL("v1737821230/PORTFOLIO/certifications/n9vsb83eq1njxe2wxbt3.png"),
    cert: CDN_URL("v1737733953/PORTFOLIO/certifications/axrjhw5gdjh6o6rsiurk.png"),
  },
  serverless: {
    icon: CDN_URL("v1737821116/PORTFOLIO/certifications/jt3i6yhb8jrwvjavfwud.png"),
    cert: CDN_URL("v1737733970/PORTFOLIO/certifications/sak2tqsfomqrmy8z1v1h.png"),
  },
  cloud_operations: {
    icon: CDN_URL("v1737821036/PORTFOLIO/certifications/dzums30ysjbavturj73j.png"),
    cert: CDN_URL("v1737733964/PORTFOLIO/certifications/oq8n0sp3ohc1jjgqrjyg.png"),
  },
} as const;

const PROJECTS = {
  portfolio: CDN_URL("v1737906101/PORTFOLIO/projects/f370xaxobeohonxkfanz.png"),
  roccocode: CDN_URL("v1737906146/PORTFOLIO/projects/rngfxsaxdiy1wachakcd.png"),
  mindmapper: CDN_URL("v1737915897/PORTFOLIO/projects/j4db49x1m1tjs1ziqgcn.png"),
  resq: CDN_URL("v1737906180/PORTFOLIO/projects/lolhg37p3hxgkq9f6lvn.png"),
  npmrunwild: CDN_URL("v1737915084/PORTFOLIO/projects/isuoijxriuazkggv2uar.png"),
  portfolio_banner: CDN_URL('v1737906092/PORTFOLIO/projects/dx7i154ohywp5qrma8ui.png'),
} as const;

const ASSETS = { ICONS, IMAGES, CERTIFICATIONS, PROJECTS } as const;

export { ASSETS };
