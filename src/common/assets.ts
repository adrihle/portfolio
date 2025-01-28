const ICONS = {
  about: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737636084/PORTFOLIO/icons/v0vesar4jrzuab8im9ht.svg',
  home: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737636708/PORTFOLIO/icons/uxyzebzlodu8tfm9dwd4.svg',
  experience: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737637019/PORTFOLIO/icons/jx11dtmeyz2zimbvkjwt.svg',
  light: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737637466/PORTFOLIO/icons/ptpsrvnfl4mbjeq6p6dn.svg',
  book: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737637394/PORTFOLIO/icons/en2i93hdingns7wn6xse.svg',
  package: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737637328/PORTFOLIO/icons/lujbmnljcx6ghub6one5.svg',
  translation: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737637191/PORTFOLIO/icons/evpbmrv7emu8i0g1crje.svg',
  java: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737637195/PORTFOLIO/icons/nqdleermgwahinn35cgk.svg',
  code: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737637920/PORTFOLIO/icons/rn2yqvtmtseeq7dy0xsb.svg',
  certificate: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737637995/PORTFOLIO/icons/sivdw5wrqk8zymijlgxw.svg',
  globe: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737638003/PORTFOLIO/icons/agani9vrghook5sfps9s.svg',
  pin: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737638010/PORTFOLIO/icons/wcq9dcqg8oy1ybglipnq.svg',
  mail: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737638067/PORTFOLIO/icons/kb03aqdtknuxpehnldbk.svg',
  cv: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737638483/PORTFOLIO/icons/rkvhn0scqhlg5geal6ly.svg',
  github: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737638756/PORTFOLIO/icons/i6mc8ltopss4dzkwm1ia.svg',
  instagram: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737638773/PORTFOLIO/icons/tikki94v0cgew38oynwx.svg',
  linkedin: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737638789/PORTFOLIO/icons/dv6nkxjv00rvn3jlmwiy.svg',
  npm: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737638905/PORTFOLIO/icons/xrxobr4syjjosfx84alq.svg',
  building: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737639954/PORTFOLIO/icons/zcxwss2v0ug9ek9ya9ng.svg',
} as const;

const IMAGES = {
  me: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737637215/PORTFOLIO/images/y0xrdfsewnwtxbuu22px.png',
  me_thumbnail: 'https://res.cloudinary.com/dlj66ezaw/image/upload/c_thumb,w_200,g_face/v1737637215/PORTFOLIO/images/y0xrdfsewnwtxbuu22px.png',
  countryside: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737637031/PORTFOLIO/images/ek6epfaf5rxumbx5joup.avif',
  countryside_banner: 'https://res.cloudinary.com/dlj66ezaw/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/v1737637031/PORTFOLIO/images/ek6epfaf5rxumbx5joup.avif',
  basantani: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737637223/PORTFOLIO/certifications/rddy2l7uhvdaqlnxplyo.png',
  horizon: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737637219/PORTFOLIO/certifications/kpje8jnflj3ryct15olq.png',
  shortcut: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737652037/PORTFOLIO/images/h5ogavy6mdfxbrqq0ods.png',
  media_tip: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1738067980/PORTFOLIO/images/tsd05lsq8pxcdu2whoas.png',
  npm_tip: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1738068609/PORTFOLIO/images/knpmxji8ykmdcixelnzf.png',
  translatio_tip: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1738068039/PORTFOLIO/images/l6vr0na5pr1py3g3xdr9.png',
  aws: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737735270/PORTFOLIO/images/ufifigdinsuiz2ettt7x.png',
  aws_white: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737735628/PORTFOLIO/images/kww6u4k3xq5okooicbd4.webp',
} as const;

const CERTIFICATIONS = {
  architect: {
    icon: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737820700/PORTFOLIO/certifications/wch9fgkry0i7qnorptcr.png',
    cert: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737733943/PORTFOLIO/certifications/gr5ffrsekg0wkpef7ej0.png',
  },
  well_architect: {
    icon: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737820700/PORTFOLIO/certifications/wch9fgkry0i7qnorptcr.png',
    cert: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737733975/PORTFOLIO/certifications/ms7b8yhnsil1o4rsvu9k.png',
  },
  devops: {
    icon: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737820910/PORTFOLIO/certifications/xxsfzyn8dxp0v8aybsxa.png',
    cert: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737733948/PORTFOLIO/certifications/qqmv9dzjs1nqblbegkut.png',
  },
  kubernetes: {
    icon: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737821171/PORTFOLIO/certifications/qdnj0dsisvetonpbhlin.png',
    cert: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737733959/PORTFOLIO/certifications/dqevrtn6glviqptl9uio.png',
  },
  data_sience: {
    icon: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737821230/PORTFOLIO/certifications/n9vsb83eq1njxe2wxbt3.png',
    cert: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737733953/PORTFOLIO/certifications/axrjhw5gdjh6o6rsiurk.png',
  },
  serverless: {
    icon: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737821116/PORTFOLIO/certifications/jt3i6yhb8jrwvjavfwud.png',
    cert: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737733970/PORTFOLIO/certifications/sak2tqsfomqrmy8z1v1h.png',
  },
  cloud_operations: {
    icon: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737821036/PORTFOLIO/certifications/dzums30ysjbavturj73j.png',
    cert: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737733964/PORTFOLIO/certifications/oq8n0sp3ohc1jjgqrjyg.png',
  },
} as const;

const PROJECTS = {
  portfolio: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737906101/PORTFOLIO/projects/f370xaxobeohonxkfanz.png',
  roccocode: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737906146/PORTFOLIO/projects/rngfxsaxdiy1wachakcd.png',
  mindmapper: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737915897/PORTFOLIO/projects/j4db49x1m1tjs1ziqgcn.png',
  resq: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737906180/PORTFOLIO/projects/lolhg37p3hxgkq9f6lvn.png',
  npmrunwild: 'https://res.cloudinary.com/dlj66ezaw/image/upload/v1737915084/PORTFOLIO/projects/isuoijxriuazkggv2uar.png',
} as const;

const ASSETS = { ICONS, IMAGES, CERTIFICATIONS, PROJECTS } as const;

export { ASSETS };
