import type { HeadConfig } from 'vitepress'
import { metaData } from './constants'

export const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      href: 'data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAACDtub/2vb+/9v2///b9v//2vX+/9r2/v/a9f//2/b//9v2///b9v//2vb+/9v2///b9v//2/b//9jy+f9AcKz/ksDs/9r2/v/b9v//2/b//9j0/f+y2Oz/2fX+/9v2///a9v//w+X3/6XP7P/b9v7/2/b//9v2///Y8vn/U4fA/3er5f/a9v7/2/b//9v2///b9v//ps/r/77i9f/Q8Pr/0vD6/47A5//T8Pv/2/b//9v2///b9v//1vH5/zd0uv9AgtH/veHz/9bz/P/a9f7/2/b//8Dj9P+Jveb/tNrv/67W7v+Btd7/2fb+/9v2///b9v//v+H0/5DA6f8ZZrv/OXOy/1+d2v+w2fL/2vb+/9v2//+r1fD/o8/v/8jp+P+eyuz/hrrl/9r2/v/a9v7/2vb+/4G24f9foNv/GDtr/y1hnv/L7Pn/a6ff/9b0+//V8vv/jL3i/9b0/f+Qu+r/dZXn/6zV7/+cyez/2fb9/7zh9P93rt7/zvD7/z9snf9votj/2vX+/7Xb8v98s+D/mcXl/8nq9f/r+v3/p8Tq/32Z5v/3/P3/pc3r/3iv3/94sOL/z+36/9r2/v99sNb/f7Pj/9r1///b9v//2vb+/9f0/f/S8vz/+v3+//b6/P+ryOj//v7+/+H2/P/T8vz/2vb+/9r2/v/a9f7/gcLq/2mi3f/a9v7/2/b//9v2///X9P7/z+74/2xudf/X1eX/1dD0/4eHjP+twsr/0/H9/9v2///b9v//2fX+/3e95P9FdrX/0vH6/9r1/v/a9v7/2/b//9n1/f96ipL/5ers//z+/v+RnaP/u9La/9r2/v/b9v//2vb+/87z/P9Qn9v/OWae/2+o3f/J6/v/2fX+/9v2///b9v//2/b//9v2/v/c9v7/2vX+/9v2///b9v7/2vX+/8Hl+P9optz/Oo3D/zRXhf9Ge7f/ueP7/8To/P/Y9P7/2/b+/9v2///b9v//2/b//9v2///b9v//1/T+/8Hn+/+24fr/Q4rL/0GNuf8tNlL/N2Sh/3y15/98s+X/msno/9n1/f/a9v7/2vb+/9r1/v/a9v7/2vX+/6XR7f9wrOL/ZqTf/zZ+v/9Tlrf/Pktw/ztKav87R2D/SEtb/zFZj/9Og7//ZZzU/3+05P+AteX/fq/d/1WRyP82fbz/SYOu/0qGr/9JjLT/Ro+u/y1Kdf9ANjn/PC4w/0c3OP9gUFD/clxW/2dUUv9wanD/UExU/1lIRv9ganD/NXed/0uRt/9HjbH/Q462/0qNp/9WQkD/TTo4/0IwMf9TQEP/U0BB/1M/QP9iTEn/WUM//2lTTf9bSEP/b1lS/0Nbav8/g67/QpS6/0KKr/9fkKD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=='
    }
  ],
  ['meta', { name: 'author', content: 'yalis' }],
  ['meta', { name: 'keywords', content: 'yalis的知识库, 知识库, 博客, yalis' }],

  ['meta', { name: 'HandheldFriendly', content: 'True' }],
  ['meta', { name: 'MobileOptimized', content: '320' }],
  ['meta', { name: 'theme-color', content: '#3c8772' }],

  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: metaData.locale }],
  ['meta', { property: 'og:title', content: metaData.title }],
  ['meta', { property: 'og:description', content: metaData.description }],
  ['meta', { property: 'og:site', content: metaData.site }],
  ['meta', { property: 'og:site_name', content: metaData.title }],
  ['meta', { property: 'og:image', content: metaData.image }],
  [
    'script',
    {},
    `var _hmt = _hmt || [];(function() {var hm = document.createElement("script");
      hm.src ="https://hm.baidu.com/hm.js?58bee9ede7d73403e7e9d3f215d8857e";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);})();`
  ],
  [
    'meta',
    {
      name: 'baidu-site-verification',
      content: 'codeva-OOIenenKnQ'
    }
  ]
]
