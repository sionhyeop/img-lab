/* 링크 정리 규칙 — 데이터만 담는 파일. 로직은 index.html의 '링크 정리' 영역에 있다.
   새 규칙은 여기에만 추가하면 된다 (index.html을 고칠 필요 없음).

   global : 어느 사이트에서든 지우는 파라미터. 추적용인 게 확실한 이름만 넣는다.
            대소문자 무시, 끝이 *이면 접두어 일치 (예: 'utm_*').
   sites  : 사이트별 규칙. 위에서부터 차례로 적용된다.
     hosts  — 적용할 도메인. 하위 도메인까지 포함 ('youtube.com' → m.youtube.com도 해당).
     path   — (선택) 경로 정규식. 있으면 경로가 맞을 때만 적용.
     remove — 이 사이트에서만 지울 파라미터 (source·ref처럼 사이트마다 뜻이 다른 이름은 여기에).
     keep   — 화이트리스트. 있으면 이 목록에 없는 파라미터는 전부 지운다.
              잘못 넣으면 링크가 깨지므로 path로 범위를 좁혀서 쓴다.
   확실하지 않으면 넣지 않는다 — 덜 줄이는 편이 링크를 깨뜨리는 것보다 낫다. */
window.URL_CLEAN_RULES = {
  global: [
    'utm_*',                         /* Google Analytics 캠페인 */
    'fbclid', 'gclid', 'dclid', 'gbraid', 'wbraid', 'gclsrc', 'msclkid', 'yclid', 'twclid', 'ttclid',
    'igshid', 'igsh',                /* Instagram 공유 */
    'mc_cid', 'mc_eid',              /* Mailchimp */
    '_hsenc', '_hsmi',               /* HubSpot */
    'mkt_tok',                       /* Marketo */
    '_ga', '_gl',                    /* GA 교차 도메인 링커 */
    'traceId',
    'NaPm'                           /* 네이버 광고 추적 */
  ],
  sites: [
    { hosts: ['youtube.com', 'youtu.be'], remove: ['si', 'feature', 'pp', 'ab_channel'] },
    { hosts: ['youtube.com'], path: '^/watch$', keep: ['v', 't', 'list', 'index'] },
    { hosts: ['coupang.com'], path: '^/vp/products/', keep: ['itemId', 'vendorItemId'] },
    { hosts: ['x.com', 'twitter.com'], remove: ['s', 't', 'ref_src'] },
    { hosts: ['open.spotify.com'], remove: ['si', 'nd'] },
    { hosts: ['notion.so', 'notion.site'], remove: ['pvs', 'source'] },
    { hosts: ['medium.com'], remove: ['source'] },
    { hosts: ['linkedin.com'], remove: ['trk', 'trackingId', 'lipi', 'refId', 'midToken', 'midSig'] },
    { hosts: ['facebook.com'], remove: ['mibextid', 'rdid', '__cft__*', '__tn__'] },
    { hosts: ['tiktok.com'], remove: ['_r', '_t', 'is_from_webapp', 'sender_device', 'is_copy_url', 'web_id'] },
    { hosts: ['blog.naver.com'], remove: ['fromRss', 'trackingCode'] },
    { hosts: ['amazon.com', 'amazon.co.jp', 'amazon.co.uk', 'amazon.de'], remove: ['ref', 'ref_', 'pf_rd_*', 'pd_rd_*', 'content-id', 'crid', 'sprefix'] }
  ]
};
