const _0x16aa35=_0x351b;(function(_0x4b4f81,_0x458863){const _0x56909c=_0x351b,_0x4badfd=_0x4b4f81();while(!![]){try{const _0x37652f=-parseInt(_0x56909c(0x37c))/0x1*(parseInt(_0x56909c(0x1f8))/0x2)+parseInt(_0x56909c(0x108))/0x3+parseInt(_0x56909c(0x230))/0x4+parseInt(_0x56909c(0x2b9))/0x5+parseInt(_0x56909c(0x366))/0x6*(parseInt(_0x56909c(0x21d))/0x7)+parseInt(_0x56909c(0x2ad))/0x8+-parseInt(_0x56909c(0x2f9))/0x9*(parseInt(_0x56909c(0x25f))/0xa);if(_0x37652f===_0x458863)break;else _0x4badfd['push'](_0x4badfd['shift']());}catch(_0x26af27){_0x4badfd['push'](_0x4badfd['shift']());}}}(_0x1be6,0x71029));const _0x306098=(function(){let _0x32b466=!![];return function(_0x45ef3a,_0xd8046){const _0x496ca5=_0x32b466?function(){const _0x433c57=_0x351b;if(_0xd8046){const _0x2f2537=_0xd8046[_0x433c57(0x33c)](_0x45ef3a,arguments);return _0xd8046=null,_0x2f2537;}}:function(){};return _0x32b466=![],_0x496ca5;};}()),_0x1bb8da=_0x306098(this,function(){const _0x1a6ddd=_0x351b;return _0x1bb8da[_0x1a6ddd(0x178)]()[_0x1a6ddd(0x2a8)]('(((.+)+)+)+$')['toString']()['constructor'](_0x1bb8da)[_0x1a6ddd(0x2a8)](_0x1a6ddd(0x197));});_0x1bb8da();const _0x257071=(function(){let _0x4d72be=!![];return function(_0x52d007,_0x212893){const _0x44fb00=_0x4d72be?function(){const _0x3e227c=_0x351b;if(_0x212893){const _0x5b90e3=_0x212893[_0x3e227c(0x33c)](_0x52d007,arguments);return _0x212893=null,_0x5b90e3;}}:function(){};return _0x4d72be=![],_0x44fb00;};}()),_0x40269b=_0x257071(this,function(){const _0x4550bb=_0x351b,_0x1e0736=function(){let _0x8cae46;try{_0x8cae46=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x67c057){_0x8cae46=window;}return _0x8cae46;},_0x188122=_0x1e0736(),_0x5324a3=_0x188122[_0x4550bb(0x130)]=_0x188122[_0x4550bb(0x130)]||{},_0x59d4cb=[_0x4550bb(0x1ad),'warn',_0x4550bb(0x2ec),_0x4550bb(0x352),_0x4550bb(0x25e),_0x4550bb(0x2a1),_0x4550bb(0x210)];for(let _0x563a1b=0x0;_0x563a1b<_0x59d4cb['length'];_0x563a1b++){const _0x4f8797=_0x257071['constructor'][_0x4550bb(0x1f4)][_0x4550bb(0x262)](_0x257071),_0x1c661f=_0x59d4cb[_0x563a1b],_0x47cb80=_0x5324a3[_0x1c661f]||_0x4f8797;_0x4f8797[_0x4550bb(0x28a)]=_0x257071[_0x4550bb(0x262)](_0x257071),_0x4f8797['toString']=_0x47cb80[_0x4550bb(0x178)][_0x4550bb(0x262)](_0x47cb80),_0x5324a3[_0x1c661f]=_0x4f8797;}});_0x40269b();import{connect}from'cloudflare:sockets';const VERSION=_0x16aa35(0x1a0),CLASH_TEMPLATE=_0x16aa35(0x14a),CLOUDFLARE_CIDRS=[_0x16aa35(0x293),'103.21.244.0/22','103.22.200.0/22',_0x16aa35(0x2d1),'141.101.64.0/18',_0x16aa35(0x302),'190.93.240.0/20',_0x16aa35(0x204),_0x16aa35(0x384),_0x16aa35(0x344),_0x16aa35(0x386),'104.16.0.0/13',_0x16aa35(0x103),_0x16aa35(0x15a),_0x16aa35(0x12e)],REACHABLE_CIDRS=[_0x16aa35(0x369),'104.24.0.0/14',_0x16aa35(0x15a),_0x16aa35(0x386),_0x16aa35(0x204)],CLOUDFLARE_CIDRS_V6=[_0x16aa35(0x226),'2606:4700::/32','2803:f800::/32',_0x16aa35(0x36c),_0x16aa35(0x1b6),_0x16aa35(0x1e0),_0x16aa35(0x14f)];function ipInCidrV6(_0x5e5fcd,_0x4b3287){const _0x4e97e5=_0x16aa35,[_0x140ec0,_0x284f32]=_0x4b3287['split']('/'),_0x1c782a=parseInt(_0x284f32,0xa),_0xbf9df=_0x472c04=>{const _0xcae4f8=_0x351b,_0x3bf32d=_0x472c04[_0xcae4f8(0x306)]('::');let _0x2eb50b;if(_0x3bf32d>=0x0){const _0x456e07=_0x472c04[_0xcae4f8(0x105)](0x0,_0x3bf32d)['split'](':')['filter'](Boolean),_0x1ea06a=_0x472c04[_0xcae4f8(0x105)](_0x3bf32d+0x2)[_0xcae4f8(0x237)](':')[_0xcae4f8(0x2e8)](Boolean),_0x2db34e=0x8-_0x456e07[_0xcae4f8(0x28d)]-_0x1ea06a[_0xcae4f8(0x28d)];_0x2eb50b=[..._0x456e07,...Array(_0x2db34e)[_0xcae4f8(0xfe)]('0'),..._0x1ea06a];}else _0x2eb50b=_0x472c04[_0xcae4f8(0x237)](':');return _0x2eb50b[_0xcae4f8(0x238)](_0x4da59a=>_0x4da59a[_0xcae4f8(0x254)](0x4,'0'));},_0x2d8739=_0xb561b4=>_0xb561b4[_0x4e97e5(0x238)](_0x4d3dba=>parseInt(_0x4d3dba,0x10)[_0x4e97e5(0x178)](0x2)[_0x4e97e5(0x254)](0x10,'0'))[_0x4e97e5(0x294)]('');return _0x2d8739(_0xbf9df(_0x5e5fcd))[_0x4e97e5(0x105)](0x0,_0x1c782a)===_0x2d8739(_0xbf9df(_0x140ec0))[_0x4e97e5(0x105)](0x0,_0x1c782a);}function isCloudflareIP(_0x4edac2){const _0x49fa0e=_0x16aa35;_0x4edac2=String(_0x4edac2||'');if(!isValidIp(_0x4edac2))return![];if(_0x4edac2[_0x49fa0e(0x306)](':')>=0x0)return CLOUDFLARE_CIDRS_V6[_0x49fa0e(0x2ce)](_0x119329=>ipInCidrV6(_0x4edac2,_0x119329));const _0x4867b5=_0x4edac2[_0x49fa0e(0x237)]('.')['map'](Number),_0x168f62=(_0x4867b5[0x0]<<0x18|_0x4867b5[0x1]<<0x10|_0x4867b5[0x2]<<0x8|_0x4867b5[0x3])>>>0x0;return CLOUDFLARE_RANGES[_0x49fa0e(0x2ce)](([_0x55af6c,_0xc0401f])=>_0x168f62>=_0x55af6c&&_0x168f62<=_0xc0401f);}const REGION_CN={'HK':'香港','TW':'台湾','MO':'澳门','JP':'日本','SG':_0x16aa35(0x27f),'US':'美国','KR':'韩国','DE':'德国','FR':'法国','GB':'英国','CA':_0x16aa35(0x2cc),'AU':_0x16aa35(0x1f1),'SE':'瑞典','NL':'荷兰','FI':'芬兰','NO':'挪威','DK':'丹麦','CH':'瑞士','IT':_0x16aa35(0x297),'ES':'西班牙','PT':_0x16aa35(0x395),'IE':_0x16aa35(0x136),'BE':_0x16aa35(0x20e),'AT':_0x16aa35(0x2ba),'PL':'波兰','CZ':'捷克','RO':_0x16aa35(0x398),'HU':_0x16aa35(0x34d),'GR':'希腊','RU':'俄罗斯','TR':_0x16aa35(0x19a),'UA':_0x16aa35(0x2fc),'IN':'印度','TH':'泰国','MY':_0x16aa35(0x267),'VN':'越南','PH':_0x16aa35(0x208),'ID':'印尼','BR':'巴西','MX':_0x16aa35(0x367),'AR':_0x16aa35(0x2d5),'CL':'智利','ZA':'南非','EG':'埃及','AE':'阿联酋','IL':_0x16aa35(0x167),'NZ':'新西兰','KZ':_0x16aa35(0x13a),'SA':'沙特'},DEFAULT_CONFIG={'uuid':'','path':'','admin':'','host':'','enableVless':!![],'enableTrojan':![],'trojanPassword':'','enableXhttp':![],'alpn':'','ech':![],'echHost':'cloudflare-ech.com','echDns':'','tlsOnly':![],'nodeLimit':![],'nodeLimitCount':0x64,'polling':!![],'proxyIP':'','outboundProxy':'','outboundMode':'','preferredDomains':_0x16aa35(0x341),'preferredIPs':[],'optimizer':{'source':'wetest_v4','sourceURL':'','port':0x1bb,'threads':0x5,'count':0x14,'useCidr':!![],'fillCount':0x0,'subMode':'','subRandomCount':0x10,'subIncludeDefault':![]},'filter':{'region':_0x16aa35(0x16c),'ipType':['IPv4','IPv6'],'isp':['移动','联通','电信']}},BUILTIN_OFFICIAL_DOMAINS=[_0x16aa35(0x244),_0x16aa35(0x185),_0x16aa35(0x278)],BUILTIN_PREFERRED_IPS=[_0x16aa35(0x234),'104.16.123.96#优选IP-002',_0x16aa35(0x375),_0x16aa35(0x146),_0x16aa35(0x284),_0x16aa35(0x25d),_0x16aa35(0x291),_0x16aa35(0x12c),_0x16aa35(0x159),_0x16aa35(0x2c8),_0x16aa35(0x287),_0x16aa35(0x1ec),_0x16aa35(0x248),_0x16aa35(0x295),_0x16aa35(0x339),_0x16aa35(0x2d2),'104.21.213.24#优选IP-017',_0x16aa35(0x23a),_0x16aa35(0x2a7),_0x16aa35(0x19b),_0x16aa35(0x18b),_0x16aa35(0x205),_0x16aa35(0x1f3),_0x16aa35(0x390),_0x16aa35(0x32b),_0x16aa35(0x126),_0x16aa35(0x381),_0x16aa35(0x13e),_0x16aa35(0x17b),'104.17.101.139#优选IP-030',_0x16aa35(0x1d7),_0x16aa35(0x141),_0x16aa35(0x148),_0x16aa35(0x38f),'104.18.184.243#优选IP-035',_0x16aa35(0x212),'172.65.64.7#优选IP-037',_0x16aa35(0x31e),'104.19.88.253#优选IP-039',_0x16aa35(0x2b5),_0x16aa35(0x285),_0x16aa35(0x2aa),_0x16aa35(0x387),_0x16aa35(0x143),_0x16aa35(0x17d),'188.114.98.144#优选IP-046',_0x16aa35(0x317),_0x16aa35(0x1d1),_0x16aa35(0x2a3),_0x16aa35(0x271),_0x16aa35(0x121),_0x16aa35(0x274),_0x16aa35(0x2ff),_0x16aa35(0x109),'104.25.214.211#优选IP-055','104.16.223.195#优选IP-056',_0x16aa35(0x1c2),_0x16aa35(0x2c1),'104.25.143.238#优选IP-059',_0x16aa35(0x154),_0x16aa35(0x32c),'104.16.113.211#优选IP-062',_0x16aa35(0x1b9),'188.114.98.91#优选IP-064',_0x16aa35(0xf4),'104.25.44.144#优选IP-066',_0x16aa35(0x137),'104.18.84.180#优选IP-068',_0x16aa35(0x1b1),_0x16aa35(0x18f),_0x16aa35(0x2fd),'162.159.235.27#优选IP-072','104.19.214.25#优选IP-073',_0x16aa35(0x2fb),_0x16aa35(0x2bb),_0x16aa35(0x112),'104.24.2.253#优选IP-077',_0x16aa35(0x1dd),'104.21.114.216#优选IP-079',_0x16aa35(0x23c),_0x16aa35(0x1be),_0x16aa35(0x300),_0x16aa35(0x12d),_0x16aa35(0x354),'104.18.133.24#优选IP-085','188.114.99.155#优选IP-086',_0x16aa35(0x243),'172.64.145.202#优选IP-088',_0x16aa35(0x34e),'104.17.118.180#优选IP-090',_0x16aa35(0x286),_0x16aa35(0x357),_0x16aa35(0x128),_0x16aa35(0x151),_0x16aa35(0x1b2),_0x16aa35(0x134),_0x16aa35(0x37b),'104.27.207.36#优选IP-098',_0x16aa35(0x1ff),_0x16aa35(0x279),_0x16aa35(0x316),_0x16aa35(0x39d),_0x16aa35(0x2c5),_0x16aa35(0x14c),_0x16aa35(0x2f6),'104.16.108.18#优选IP-106',_0x16aa35(0x35f),'172.67.163.14#优选IP-108',_0x16aa35(0x2a2),'104.19.106.1#优选IP-110','104.27.72.4#优选IP-111',_0x16aa35(0x129),_0x16aa35(0x326),'172.67.255.83#优选IP-114',_0x16aa35(0x340),_0x16aa35(0x29b),_0x16aa35(0xfa),'172.67.103.87#优选IP-118','162.159.237.243#优选IP-119',_0x16aa35(0x2dc),_0x16aa35(0x25a),_0x16aa35(0x252),_0x16aa35(0x15e),_0x16aa35(0x2a0),_0x16aa35(0x30a),'104.25.93.154#优选IP-126','172.66.199.166#优选IP-127',_0x16aa35(0x24b),_0x16aa35(0x2f8),_0x16aa35(0x1e3),_0x16aa35(0x26a),_0x16aa35(0x325),_0x16aa35(0x180),_0x16aa35(0x168),_0x16aa35(0x2f4),_0x16aa35(0x224),_0x16aa35(0x1eb),'104.24.51.58#优选IP-138',_0x16aa35(0x1a2),_0x16aa35(0x1a5),'104.17.146.117#优选IP-141',_0x16aa35(0x2a4),_0x16aa35(0x138),'104.25.100.203#优选IP-144',_0x16aa35(0x15d),'188.114.96.141#优选IP-146','104.19.247.23#优选IP-147',_0x16aa35(0x2b6),_0x16aa35(0x1dc),_0x16aa35(0x281),_0x16aa35(0x17f),_0x16aa35(0x21a),'104.16.68.175#优选IP-153',_0x16aa35(0x165),_0x16aa35(0x2db),_0x16aa35(0x245),_0x16aa35(0x107),_0x16aa35(0x23b),_0x16aa35(0x2a6),_0x16aa35(0x1b7),_0x16aa35(0x307),'172.67.82.86#优选IP-162',_0x16aa35(0x10f),'188.114.97.61#优选IP-164',_0x16aa35(0x2df),_0x16aa35(0xff),_0x16aa35(0x33f),_0x16aa35(0x176),'104.18.123.15#优选IP-169',_0x16aa35(0x38c),'188.114.96.64#优选IP-171',_0x16aa35(0x228),_0x16aa35(0x324),_0x16aa35(0x2c4),'188.114.96.89#优选IP-175','172.67.174.143#优选IP-176','104.25.251.220#优选IP-177',_0x16aa35(0x1cd),_0x16aa35(0x214),_0x16aa35(0x2e0),_0x16aa35(0x350),_0x16aa35(0x29e),'104.18.178.193#优选IP-183',_0x16aa35(0x379),_0x16aa35(0x1e8),_0x16aa35(0x23e),_0x16aa35(0x120),_0x16aa35(0x229),'172.65.184.114#优选IP-189',_0x16aa35(0x1fb),'172.65.21.190#优选IP-191','104.19.32.220#优选IP-192','104.18.211.8#优选IP-193',_0x16aa35(0x24e),'162.159.6.39#优选IP-195',_0x16aa35(0x31b),_0x16aa35(0x347),_0x16aa35(0x1aa),'162.159.6.246#优选IP-199','104.24.46.127#优选IP-200',_0x16aa35(0x123),_0x16aa35(0x1c4),_0x16aa35(0x304),_0x16aa35(0x1b4),_0x16aa35(0x2e9),_0x16aa35(0x14b),'104.19.68.127#优选IP-207','162.159.10.45#优选IP-208',_0x16aa35(0x2ae),_0x16aa35(0x35c),_0x16aa35(0x33e),_0x16aa35(0x1d9),_0x16aa35(0x162),'104.16.77.112#优选IP-214',_0x16aa35(0x2a9),_0x16aa35(0x215),_0x16aa35(0x258),_0x16aa35(0x29d),_0x16aa35(0x231),_0x16aa35(0x140),_0x16aa35(0x2c3),_0x16aa35(0x1e6),_0x16aa35(0x1cb),_0x16aa35(0x13f),_0x16aa35(0x330),_0x16aa35(0x399),'162.159.134.174#优选IP-227','104.18.194.107#优选IP-228',_0x16aa35(0x2de),_0x16aa35(0x211),_0x16aa35(0x264),'162.159.192.111#优选IP-232','162.159.240.54#优选IP-233',_0x16aa35(0x34f),_0x16aa35(0x147),_0x16aa35(0x358),_0x16aa35(0x273),'104.25.33.126#优选IP-238',_0x16aa35(0x35b),'104.25.123.130#优选IP-240','172.65.167.52#优选IP-241',_0x16aa35(0x33b),'104.25.113.22#优选IP-243','188.114.98.27#优选IP-244',_0x16aa35(0x351),_0x16aa35(0x36b),'104.21.215.255#优选IP-247',_0x16aa35(0x301),_0x16aa35(0x270),'172.65.45.102#优选IP-250','172.66.164.60#优选IP-251',_0x16aa35(0x260),_0x16aa35(0x38e),_0x16aa35(0x355),'162.159.236.19#优选IP-255',_0x16aa35(0x259),_0x16aa35(0x179),'104.17.121.245#优选IP-258',_0x16aa35(0x388),_0x16aa35(0x39e),_0x16aa35(0x35e),'104.27.116.114#优选IP-262',_0x16aa35(0x1d0),'104.20.17.160#优选IP-264','104.25.62.39#优选IP-265','104.27.20.220#优选IP-266',_0x16aa35(0x38b),_0x16aa35(0x190),_0x16aa35(0x2e2),_0x16aa35(0x114),_0x16aa35(0x17c),_0x16aa35(0x361),_0x16aa35(0x1b5),'104.24.46.107#优选IP-274',_0x16aa35(0xfc),_0x16aa35(0x2f5),_0x16aa35(0x22b),'104.27.124.239#优选IP-278',_0x16aa35(0x289),_0x16aa35(0x119),_0x16aa35(0x282),_0x16aa35(0x392),_0x16aa35(0x30e),_0x16aa35(0x2e7),_0x16aa35(0x201),'104.25.238.237#优选IP-286',_0x16aa35(0x319),_0x16aa35(0x377),_0x16aa35(0x222),'172.65.45.248#优选IP-290',_0x16aa35(0xf6),_0x16aa35(0x16d),_0x16aa35(0x173),'172.67.71.106#优选IP-294',_0x16aa35(0x393),'104.24.250.89#优选IP-296',_0x16aa35(0x15b),_0x16aa35(0x26c),_0x16aa35(0x16e),'172.67.85.54#优选IP-300'],DEFAULT_PREFERRED_DOMAINS=[_0x16aa35(0x24a),_0x16aa35(0x17a),_0x16aa35(0x20b),'cf.0sm.com','cf.090227.xyz','cfip.1323123.xyz',_0x16aa35(0x2da),_0x16aa35(0x296),_0x16aa35(0x327),'xn--b6gac.eu.org','bestcf.030101.xyz',_0x16aa35(0x24d),'fn.130519.xyz',_0x16aa35(0x383)]['join']('\x0a'),HTTP_PORTS=new Set([0x50,0x1f90,0x22b0,0x804,0x822,0x826,0x82f]),OPTIMIZE_SOURCES={'wetest_v4':{'label':_0x16aa35(0x39b),'url':'https://www.wetest.vip/page/cloudflare/address_v4.html'},'wetest_v6':{'label':_0x16aa35(0x135),'url':_0x16aa35(0x1de)},'bestcf':{'label':'优选\x20IP\x20列表','url':_0x16aa35(0x2c7)},'hostmonit':{'label':_0x16aa35(0x219),'url':_0x16aa35(0x268)},'wetest_cname':{'label':_0x16aa35(0x152),'url':_0x16aa35(0x1a4)}},TE=new TextEncoder(),TD=new TextDecoder();function b64FromBytes(_0x2dffad){const _0xe1fd16=_0x16aa35;let _0x295646='';const _0x4eb171=0x8000;for(let _0x5dbff2=0x0;_0x5dbff2<_0x2dffad[_0xe1fd16(0x28d)];_0x5dbff2+=_0x4eb171){_0x295646+=String[_0xe1fd16(0x272)](..._0x2dffad[_0xe1fd16(0x2b3)](_0x5dbff2,_0x5dbff2+_0x4eb171));}return btoa(_0x295646);}const MD5_S=[0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15],MD5_K=[0xd76aa478,0xe8c7b756,0x242070db,0xc1bdceee,0xf57c0faf,0x4787c62a,0xa8304613,0xfd469501,0x698098d8,0x8b44f7af,0xffff5bb1,0x895cd7be,0x6b901122,0xfd987193,0xa679438e,0x49b40821,0xf61e2562,0xc040b340,0x265e5a51,0xe9b6c7aa,0xd62f105d,0x2441453,0xd8a1e681,0xe7d3fbc8,0x21e1cde6,0xc33707d6,0xf4d50d87,0x455a14ed,0xa9e3e905,0xfcefa3f8,0x676f02d9,0x8d2a4c8a,0xfffa3942,0x8771f681,0x6d9d6122,0xfde5380c,0xa4beea44,0x4bdecfa9,0xf6bb4b60,0xbebfbc70,0x289b7ec6,0xeaa127fa,0xd4ef3085,0x4881d05,0xd9d4d039,0xe6db99e5,0x1fa27cf8,0xc4ac5665,0xf4292244,0x432aff97,0xab9423a7,0xfc93a039,0x655b59c3,0x8f0ccc92,0xffeff47d,0x85845dd1,0x6fa87e4f,0xfe2ce6e0,0xa3014314,0x4e0811a1,0xf7537e82,0xbd3af235,0x2ad7d2bb,0xeb86d391];function rotl32(_0x1cc04f,_0xcb13ad){return(_0x1cc04f<<_0xcb13ad|_0x1cc04f>>>0x20-_0xcb13ad)>>>0x0;}function md5hex(_0x10f7f8){const _0x56e5db=_0x16aa35,_0x510412=TE[_0x56e5db(0x1b0)](String(_0x10f7f8)),_0x304470=_0x510412[_0x56e5db(0x28d)]*0x8,_0x21b504=(_0x510412[_0x56e5db(0x28d)]+0x8>>0x6)+0x1<<0x6,_0x1f06fb=new Uint8Array(_0x21b504);_0x1f06fb[_0x56e5db(0x362)](_0x510412),_0x1f06fb[_0x510412[_0x56e5db(0x28d)]]=0x80;const _0xadf716=new DataView(_0x1f06fb['buffer']);_0xadf716[_0x56e5db(0x2cf)](_0x21b504-0x8,_0x304470>>>0x0,!![]),_0xadf716[_0x56e5db(0x2cf)](_0x21b504-0x4,Math[_0x56e5db(0x1f2)](_0x304470/0x100000000),!![]);let _0x576deb=0x67452301,_0x2b3306=0xefcdab89,_0x5beb9c=0x98badcfe,_0x57e120=0x10325476;for(let _0x5278e7=0x0;_0x5278e7<_0x21b504;_0x5278e7+=0x40){const _0x47c18d=new Uint32Array(0x10);for(let _0x12a5f0=0x0;_0x12a5f0<0x10;_0x12a5f0++)_0x47c18d[_0x12a5f0]=_0xadf716['getUint32'](_0x5278e7+_0x12a5f0*0x4,!![]);let _0x1c7db7=_0x576deb,_0x192615=_0x2b3306,_0x124393=_0x5beb9c,_0x46bc25=_0x57e120;for(let _0x4fb919=0x0;_0x4fb919<0x40;_0x4fb919++){let _0x39d865,_0x10ce3e;if(_0x4fb919<0x10)_0x39d865=_0x192615&_0x124393|~_0x192615&_0x46bc25,_0x10ce3e=_0x4fb919;else{if(_0x4fb919<0x20)_0x39d865=_0x46bc25&_0x192615|~_0x46bc25&_0x124393,_0x10ce3e=(0x5*_0x4fb919+0x1)%0x10;else _0x4fb919<0x30?(_0x39d865=_0x192615^_0x124393^_0x46bc25,_0x10ce3e=(0x3*_0x4fb919+0x5)%0x10):(_0x39d865=_0x124393^(_0x192615|~_0x46bc25),_0x10ce3e=0x7*_0x4fb919%0x10);}const _0x3b2251=_0x1c7db7+_0x39d865+MD5_K[_0x4fb919]+_0x47c18d[_0x10ce3e]>>>0x0,_0x187346=_0x192615+rotl32(_0x3b2251,MD5_S[_0x4fb919])>>>0x0;_0x1c7db7=_0x46bc25,_0x46bc25=_0x124393,_0x124393=_0x192615,_0x192615=_0x187346;}_0x576deb=_0x576deb+_0x1c7db7>>>0x0,_0x2b3306=_0x2b3306+_0x192615>>>0x0,_0x5beb9c=_0x5beb9c+_0x124393>>>0x0,_0x57e120=_0x57e120+_0x46bc25>>>0x0;}let _0x1a63db='';for(const _0x56cbdc of[_0x576deb,_0x2b3306,_0x5beb9c,_0x57e120]){_0x1a63db+=(_0x56cbdc&0xff)[_0x56e5db(0x178)](0x10)[_0x56e5db(0x254)](0x2,'0'),_0x1a63db+=(_0x56cbdc>>>0x8&0xff)[_0x56e5db(0x178)](0x10)['padStart'](0x2,'0'),_0x1a63db+=(_0x56cbdc>>>0x10&0xff)[_0x56e5db(0x178)](0x10)[_0x56e5db(0x254)](0x2,'0'),_0x1a63db+=(_0x56cbdc>>>0x18&0xff)[_0x56e5db(0x178)](0x10)['padStart'](0x2,'0');}return _0x1a63db;}function uuidv4(){const _0x15c43f=_0x16aa35;if(crypto[_0x15c43f(0x373)])return crypto[_0x15c43f(0x373)]();const _0x383d05=crypto['getRandomValues'](new Uint8Array(0x10));return _0x383d05[0x6]=_0x383d05[0x6]&0xf|0x40,_0x383d05[0x8]=_0x383d05[0x8]&0x3f|0x80,[..._0x383d05]['map']((_0x3767eb,_0xdae5e1)=>(_0xdae5e1===0x4||_0xdae5e1===0x6||_0xdae5e1===0x8||_0xdae5e1===0xa?'-':'')+_0x3767eb[_0x15c43f(0x178)](0x10)['padStart'](0x2,'0'))[_0x15c43f(0x294)]('');}function isUUID(_0x5ecda0){const _0x1d5e95=_0x16aa35;return/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/[_0x1d5e95(0xfd)](_0x5ecda0||'');}function parseHostPort(_0x2235a3,_0x39f9a4=0x1bb){const _0x3f8a4c=_0x16aa35;_0x2235a3=String(_0x2235a3||'')[_0x3f8a4c(0xfb)]();if(!_0x2235a3)return{'host':'','port':_0x39f9a4};if(_0x2235a3['startsWith']('[')){const _0x5ed030=_0x2235a3[_0x3f8a4c(0x20f)](/^\[([^\]]+)\](?::(\d+))?$/);return{'host':_0x5ed030?_0x5ed030[0x1]:_0x2235a3[_0x3f8a4c(0x2e1)](/^\[|\]$/g,''),'port':_0x5ed030&&_0x5ed030[0x2]?parseInt(_0x5ed030[0x2]):_0x39f9a4};}const _0x51c8b5=_0x2235a3[_0x3f8a4c(0x1f7)](':');if(_0x51c8b5>0x0&&/^\d+$/['test'](_0x2235a3[_0x3f8a4c(0x105)](_0x51c8b5+0x1)))return{'host':_0x2235a3[_0x3f8a4c(0x105)](0x0,_0x51c8b5),'port':parseInt(_0x2235a3[_0x3f8a4c(0x105)](_0x51c8b5+0x1))};return{'host':_0x2235a3,'port':_0x39f9a4};}function _0x1be6(){const _0x321981=['162.159.137.205#优选IP-036','stash','162.159.153.10#优选IP-179','172.67.165.245#优选IP-216','every','🐟\x20漏网之鱼','x-padding-placement','HostMonit\x20优选','104.17.195.133#优选IP-152','PATH','\x20\x20\x20\x20\x20\x20ech:','14PXuBPv','next','x-padding-key','超时/网络错误','\x0a\x0a[Proxy\x20Group]\x0a🚀\x20节点选择\x20=\x20select,\x20','104.24.18.62#优选IP-289','BESTIP_AUTO','162.159.14.18#优选IP-136','127.0.0.1','2400:cb00::/32','keys','104.18.18.214#优选IP-172','172.67.195.152#优选IP-188','https://dns.alidns.com/resolve','104.25.238.28#优选IP-277','waitUntil','优选IP-','any','searchParams','3447196cFDdoP','188.114.97.63#优选IP-219','text/html;\x20charset=utf-8','href','104.17.127.180#优选IP-001','\x20HTTP/1.1\x0d\x0aHost:\x20','candidates','split','map','string','104.17.234.5#优选IP-018','162.159.19.201#优选IP-158','188.114.98.53#优选IP-080','quantumult','104.19.69.150#优选IP-186','xPaddingKey','不支持的\x20VLESS\x20版本','config','presetErr','172.64.34.109#优选IP-087','cloudflare.com','104.18.28.48#优选IP-156','value','delete','188.114.99.52#优选IP-013','223.5.5.5','cloudflare.182682.xyz','172.67.64.94#优选IP-128','所有出站方式均失败','cdns.doon.eu.org','104.17.160.131#优选IP-194','login','<!DOCTYPE\x20html>\x0a<html\x20lang=\x22zh-CN\x22>\x0a<head>\x0a<meta\x20charset=\x22utf-8\x22>\x0a<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1\x22>\x0a<title>CFNext\x20·\x20登录</title>\x0a<style>\x0abody{background:#0d1117;color:#e6edf3;font-family:\x22PingFang\x20SC\x22,\x22Microsoft\x20YaHei\x22,system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0}\x0a.box{background:#161b22;border:1px\x20solid\x20#2d333b;border-radius:12px;padding:28px;width:320px}\x0ah1{font-size:18px;margin-bottom:6px}\x0ap{color:#8b949e;font-size:13px;margin:0\x200\x2018px}\x0ainput{width:100%;background:#1c2230;border:1px\x20solid\x20#2d333b;color:#e6edf3;border-radius:8px;padding:10px\x2012px;font-size:14px;outline:none;box-sizing:border-box;margin-bottom:12px}\x0ainput:focus{border-color:#4f9dff}\x0abutton{width:100%;background:#4f9dff;border:none;color:#fff;border-radius:8px;padding:10px;font-size:14px;font-weight:600;cursor:pointer}\x0a.msg{color:#f85149;font-size:13px;margin-bottom:10px;display:none}\x0a</style>\x0a</head>\x0a<body>\x0a<div\x20class=\x22box\x22>\x0a\x20\x20<h1>CFNext</h1>\x0a\x20\x20<p>请输入管理密码</p>\x0a\x20\x20<div\x20class=\x22msg\x22\x20id=\x22msg\x22>密码错误</div>\x0a\x20\x20<form\x20id=\x22form\x22>\x0a\x20\x20\x20\x20<input\x20type=\x22password\x22\x20id=\x22pwd\x22\x20placeholder=\x22管理密码\x22\x20autofocus>\x0a\x20\x20\x20\x20<button\x20type=\x22submit\x22>登录</button>\x0a\x20\x20</form>\x0a</div>\x0a<script>\x0avar\x20next\x20=\x20new\x20URLSearchParams(location.search).get(\x27next\x27)\x20||\x20\x27/\x27;\x0adocument.getElementById(\x27form\x27).addEventListener(\x27submit\x27,\x20function(e){\x0a\x20\x20e.preventDefault();\x0a\x20\x20var\x20pwd\x20=\x20document.getElementById(\x27pwd\x27).value;\x0a\x20\x20fetch(\x27/login\x27,\x20{\x20method:\x20\x27POST\x27,\x20headers:\x20{\x20\x27Content-Type\x27:\x20\x27application/x-www-form-urlencoded\x27\x20},\x20body:\x20\x27password=\x27\x20+\x20encodeURIComponent(pwd)\x20+\x20\x27&next=\x27\x20+\x20encodeURIComponent(next)\x20})\x0a\x20\x20\x20\x20.then(function(r){\x20return\x20r.json();\x20})\x0a\x20\x20\x20\x20.then(function(r){\x0a\x20\x20\x20\x20\x20\x20if(r\x20&&\x20r.ok){\x20location.href\x20=\x20r.next\x20||\x20\x27/\x27;\x20}\x0a\x20\x20\x20\x20\x20\x20else\x20{\x20document.getElementById(\x27msg\x27).style.display\x20=\x20\x27block\x27;\x20}\x0a\x20\x20\x20\x20})\x0a\x20\x20\x20\x20.catch(function(){\x20document.getElementById(\x27msg\x27).textContent\x20=\x20\x27网络错误\x27;\x20document.getElementById(\x27msg\x27).style.display\x20=\x20\x27block\x27;\x20});\x0a});\x0a</script>\x0a</body>\x0a</html>','servername','172.65.11.191#优选IP-122','source','padStart','quantumultx','surge','vless=','104.17.169.109#优选IP-217','104.19.143.220#优选IP-256','104.18.141.27#优选IP-121','values',',\x20method=none,\x20password=','104.16.127.96#优选IP-006','exception','2791430rKuoNo','162.159.26.248#优选IP-252','customErr','bind','api','104.18.41.168#优选IP-231','quanx','includes','马来西亚','https://stock.hostmonit.com/CloudFlareYes','tls','104.18.173.224#优选IP-131','headerLength','104.27.21.175#优选IP-298','tlsOnly','port','exec','162.159.135.234#优选IP-249','104.18.255.187#优选IP-050','fromCharCode','172.67.127.122#优选IP-237','104.18.176.111#优选IP-052','hostname','get','&security=tls&sni=','speed.cloudflare.com','104.25.20.146#优选IP-100','enqueue','AAAA','isArray','random','luma','新加坡','\x20\x20\x20\x20\x20\x20\x20\x20Host:\x20','104.27.23.242#优选IP-150','162.159.10.243#优选IP-281','GET','104.16.126.96#优选IP-005','104.18.185.40#优选IP-041','104.17.13.179#优选IP-091','188.114.96.1#优选IP-011','trojan://','104.24.34.149#优选IP-279','__proto__','catch','User-Agent','length','tag','enableVless','admin','104.16.132.229#优选IP-007','trojanPassword','173.245.48.0/20','join','162.159.94.229#优选IP-014','cdn.tzpro.xyz','意大利','🌐\x20全球直连','colo','_ctx','162.159.230.149#优选IP-116','queryInHeader','172.65.44.103#优选IP-218','172.67.232.109#优选IP-182','ips','188.114.97.52#优选IP-124','table','104.24.230.213#优选IP-109','162.159.4.175#优选IP-049','172.67.161.136#优选IP-142','polling','104.25.166.112#优选IP-159','104.16.245.187#优选IP-019','search','104.19.181.118#优选IP-215','104.25.141.168#优选IP-042','HTTP\x20代理\x20CONNECT\x20失败:\x20','MAN','3978696ckCyVv','104.25.181.74#优选IP-209','proxyip.nl.cmliussss.net','sort',',\x20ws-headers=Host:','MUC','subarray','http:','162.159.136.73#优选IP-040','104.25.24.66#优选IP-148','\x20\x20\x20\x20\x20\x20path:\x20',',\x20username=','3047350zUVgBK','奥地利','104.24.244.237#优选IP-075','\x0a[policy]\x0astatic=🚀\x20节点选择,\x20','forEach','proxyip.jp.cmliussss.net','x-padding-header','HKG','172.64.81.44#优选IP-058','subMode','104.17.245.237#优选IP-221','104.17.153.58#优选IP-174','172.65.134.100#优选IP-103','security','https://cf.090227.xyz/ip.164746.xyz','162.159.0.1#优选IP-010','vless://','ICN','object','加拿大','method','some','setUint32','byteLength','103.31.4.0/22','104.18.119.34#优选IP-016',',\x20obfs=','\x20\x20\x20\x20ws-opts:','阿根廷','name','loon',',\x20obfs-host=','count','cloudflare-ip.mofashi.ltd','104.16.218.231#优选IP-155','104.25.193.135#优选IP-120','custom','188.114.97.21#优选IP-229','104.17.240.245#优选IP-165','104.25.129.238#优选IP-180','replace','188.114.96.238#优选IP-269','writable','text/yaml','doh\x20unavailable','message','104.24.25.178#优选IP-284','filter','188.114.97.0#优选IP-205','\x20\x20\x20\x20udp:\x20true','from','info','.xyz','proxyip.us.cmliussss.net','subIncludeDefault','xPaddingObfsMode','OSA','parse','toLowerCase','104.17.195.184#优选IP-135','162.159.137.71#优选IP-276','104.25.197.107#优选IP-105','域名-','104.27.94.231#优选IP-129','81LMSjIE',',\x20tls=false','104.19.168.107#优选IP-074','乌克兰','162.159.228.244#优选IP-071',',\x20tls-verification=true,\x20tls13=true','104.25.122.6#优选IP-053','188.114.96.255#优选IP-082','172.67.131.200#优选IP-248','108.162.192.0/18','abort','188.114.97.108#优选IP-203','then','indexOf','104.16.91.33#优选IP-161','doh\x20fail','&security=none','104.27.4.144#优选IP-125','text/plain;\x20charset=utf-8',',\x20obfs-uri=','unknown','172.65.78.200#优选IP-283','getReader','cloudflare-ech.com','xPaddingHeader','chrome','stringify','selector','endsWith','104.27.113.151#优选IP-101','188.114.99.18#优选IP-047','useCidr','104.16.45.249#优选IP-287','\x20\x20\x20\x20\x20\x20x-padding-header:\x20','162.159.43.223#优选IP-196','put','empty','104.25.45.44#优选IP-038',';\x20Path=/;\x20Max-Age=86400;\x20HttpOnly;\x20Secure;\x20SameSite=Lax','未授权（需要管理密码）','https://223.5.5.5/dns-query','ECH','#\x20CFNext\x20订阅\x0atest-url:\x20\x27http://www.gstatic.com/generate_204\x27\x0aproxies:\x0a','104.17.46.187#优选IP-173','172.67.173.89#优选IP-132','172.65.162.213#优选IP-113','cf.877771.xyz','\x20\x20\x20\x20xhttp-opts:',',\x20password=','\x20\x20\x20\x20password:\x20','104.18.47.234#优选IP-025','104.19.169.53#优选IP-061','byteOffset','subRandomCount','\x20\x20\x20\x20network:\x20','172.65.118.105#优选IP-225','alpn',',\x20tag=','proxyip.vultr.cmliussss.net','write',',\x20tls-verification=true,\x20tag=','has','SOCKS5\x20不支持的认证方法\x20','pathname','162.159.5.175#优选IP-015','|raw','172.67.159.243#优选IP-242','apply','mixed-in','188.114.96.164#优选IP-211','104.17.25.173#优选IP-167','172.67.189.246#优选IP-115','https://bestcf.pages.dev/random-region/HK/100.txt\x0ahttps://bestcf.pages.dev/random-region/TW/100.txt\x0ahttps://bestcf.pages.dev/random-region/JP/100.txt\x0ahttps://bestcf.pages.dev/random-region/SG/100.txt\x0ahttps://bestcf.pages.dev/random-region/US/100.txt\x0ahttps://bestcf.pages.dev/random-region/KR/100.txt','fmt','YXURL','198.41.128.0/17','\x20\x20\x20\x20\x20\x20x-padding-method:\x20','wetest_cname','104.21.224.5#优选IP-197','getUint8','|rf','data','xudp','wss','匈牙利','104.19.78.30#优选IP-089','104.17.0.4#优选IP-234','172.65.3.67#优选IP-181','162.159.198.200#优选IP-245','error','https://','172.66.161.31#优选IP-084','172.65.50.167#优选IP-254','Mozilla/5.0','172.65.35.169#优选IP-092','104.27.97.130#优选IP-236','network','echDns','104.25.223.90#优选IP-239','104.24.178.200#优选IP-210','version','104.17.100.40#优选IP-261','172.64.233.36#优选IP-107','仅支持\x20POST','104.25.126.144#优选IP-272','set','addr','SIN','headers','2023746itqMmP','墨西哥','http://','104.16.0.0/13',',\x20ws=true,\x20ws-path=','104.17.76.49#优选IP-246','2405:b500::/32','ARN','\x20\x20\x20\x20skip-cert-verify:\x20false','region','proxyIP','sing-box','TXT','randomUUID','\x20\x20\x20\x20\x20\x20x-padding-key:\x20','104.16.124.96#优选IP-003','v2rayn','104.16.234.241#优选IP-288','\x20\x20\x20\x20\x20\x20x-padding-obfs-mode:\x20','104.19.78.144#优选IP-184','function','104.24.58.243#优选IP-097','3830yYFJRg','POST','xPaddingMethod','websocket','BER','172.64.144.49#优选IP-027','&path=','saas.sin.fan','197.234.240.0/22','\x20\x20\x20\x20uuid:\x20','162.158.0.0/15','104.25.246.123#优选IP-043','104.18.144.168#优选IP-259','Not\x20Found','application/json','172.65.118.85#优选IP-267','104.25.124.155#优选IP-170','add','162.159.90.82#优选IP-253','172.65.127.225#优选IP-034','104.18.37.92#优选IP-024','concat','104.27.96.232#优选IP-282','162.159.228.164#优选IP-295','number','葡萄牙','close','\x20\x20-\x20name:\x20','罗马尼亚','104.21.7.133#优选IP-226','vless','微测网\x20IPv4','push','104.24.230.144#优选IP-102','162.159.228.231#优选IP-260','Proxy-Authorization:\x20Basic\x20','162.159.236.5#优选IP-065','UNICOM','104.25.169.144#优选IP-291','\x20\x20\x20\x20tls:\x20true','&fp=chrome&host=','http','162.159.197.16#优选IP-117','trim','104.25.109.0#优选IP-275','test','fill','172.66.157.150#优选IP-166','xhttp-opts','latency','mozilla','104.24.0.0/14','拉取失败\x20HTTP\x20','slice','text','162.159.143.225#优选IP-157','1260234QtoOah','188.114.96.116#优选IP-054','extra','xhttp','VLESS\x20头部过短','server','nekoray','104.16.11.246#优选IP-163','attachment;\x20filename*=utf-8\x27\x27CFNext','startsWith','104.27.66.179#优选IP-076','application/dns-json','162.159.42.67#优选IP-270','x-padding-method','ws-opts','raw','SOCKS5\x20握手失败','104.19.246.234#优选IP-280','https://doh.pub/dns-query','cloudflare','size','singbox','CONNECT\x20','enableXhttp','104.25.73.92#优选IP-187','172.65.173.221#优选IP-051','https','104.17.87.46#优选IP-201','cidr','outboundProxy','104.18.42.54#优选IP-026','clash','104.16.0.133#优选IP-093','104.21.57.47#优选IP-112','&alpn=','signal','104.16.248.248#优选IP-008','104.25.245.147#优选IP-083','131.0.72.0/22','trojan','console','optimizer','Upgrade','SEL','104.19.115.243#优选IP-096','微测网\x20IPv6','爱尔兰','162.159.46.167#优选IP-067','104.17.99.0#优选IP-143','sub','哈萨克斯坦','fillCount','\x20\x20\x20\x20\x20\x20headers:','path','172.64.146.15#优选IP-028','172.65.139.108#优选IP-224','172.65.47.182#优选IP-220','162.159.44.214#优选IP-032','read','104.24.54.254#优选IP-044','shift','v2ray','104.16.125.96#优选IP-004','104.25.86.143#优选IP-235','104.18.217.109#优选IP-033','stream-one','pr:\x20&pr\x20{type:\x20select,\x20proxies:\x20[♻️\x20自动选择,\x20🚀\x20默认代理,\x20🌐\x20全部节点,\x20♻️\x20香港自动,\x20♻️\x20日本自动,\x20♻️\x20美国自动,\x20🔯\x20香港故转,\x20🔯\x20日本故转,\x20🇭🇰\x20香港节点,\x20🇯🇵\x20日本节点,\x20🇺🇲\x20美国节点,\x20DIRECT]}\x0aproxy-groups:\x0a\x20\x20-\x20{name:\x20🌐\x20全部节点,\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20\x22^((?!(DIRECT|REJECT)).)*$\x22}\x0a\x20\x20-\x20{name:\x20♻️\x20自动选择,\x20type:\x20url-test,\x20url:\x20\x27http://www.gstatic.com/generate_204\x27,\x20include-all:\x20true,\x20tolerance:\x2020,\x20interval:\x20300,\x20filter:\x20\x22^((?!(DIRECT|REJECT)).)*$\x22}\x0a\x20\x20-\x20{name:\x20♻️\x20香港自动,\x20type:\x20url-test,\x20url:\x20\x27http://www.gstatic.com/generate_204\x27,\x20include-all:\x20true,\x20tolerance:\x2020,\x20interval:\x20300,\x20filter:\x20\x22(?=.*(港|HK|(?i)Hong))^((?!(台|日|韩|新|深|美)).)*$\x22}\x0a\x20\x20-\x20{name:\x20♻️\x20日本自动,\x20type:\x20url-test,\x20url:\x20\x27http://www.gstatic.com/generate_204\x27,\x20include-all:\x20true,\x20tolerance:\x2020,\x20interval:\x20300,\x20filter:\x20\x22(?=.*(日|JP|(?i)Japan))^((?!(港|台|韩|新|美)).)*$\x22\x20}\x0a\x20\x20-\x20{name:\x20♻️\x20美国自动,\x20type:\x20url-test,\x20url:\x20\x27http://www.gstatic.com/generate_204\x27,\x20include-all:\x20true,\x20tolerance:\x2020,\x20interval:\x20300,\x20filter:\x20\x22(?=.*(美|US|(?i)States|America))^((?!(港|台|日|韩|新)).)*$\x22}\x0a\x20\x20-\x20{name:\x20🔯\x20香港故转,\x20type:\x20fallback,\x20url:\x20\x27http://www.gstatic.com/generate_204\x27,\x20include-all:\x20true,\x20tolerance:\x2020,\x20interval:\x20300,\x20filter:\x20\x22(?=.*(港|HK|(?i)Hong))^((?!(台|日|韩|新|深|美)).)*$\x22}\x0a\x20\x20-\x20{name:\x20🔯\x20日本故转,\x20type:\x20fallback,\x20url:\x20\x27http://www.gstatic.com/generate_204\x27,\x20include-all:\x20true,\x20tolerance:\x2020,\x20interval:\x20300,\x20filter:\x20\x22(?=.*(日|JP|(?i)Japan))^((?!(港|台|韩|新|美)).)*$\x22\x20}\x0a\x20\x20-\x20{name:\x20🇭🇰\x20香港节点,\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20\x22(?i)港|hk|hongkong|hong\x20kong\x22}\x0a\x20\x20-\x20{name:\x20🇯🇵\x20日本节点,\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20\x22(?i)日|jp|japan\x22}\x0a\x20\x20-\x20{name:\x20🇺🇲\x20美国节点,\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20\x22(?i)美|us|unitedstates|united\x20states\x22}\x0a\x20\x20-\x20{name:\x20🚀\x20默认代理,\x20type:\x20select,\x20proxies:\x20[♻️\x20自动选择,\x20🌐\x20全部节点,\x20♻️\x20香港自动,\x20♻️\x20日本自动,\x20♻️\x20美国自动,\x20🔯\x20香港故转,\x20🔯\x20日本故转,\x20🇭🇰\x20香港节点,\x20🇯🇵\x20日本节点,\x20🇺🇲\x20美国节点,\x20DIRECT]}\x0a\x20\x20-\x20{name:\x20📹\x20YouTube,\x20<<:\x20*pr}\x0a\x20\x20-\x20{name:\x20🍀\x20Google,\x20<<:\x20*pr}\x0a\x20\x20-\x20{name:\x20🤖\x20ChatGPT,\x20<<:\x20*pr}\x0a\x20\x20-\x20{name:\x20👨🏿‍💻\x20GitHub,\x20<<:\x20*pr}\x0a\x20\x20-\x20{name:\x20🐬\x20OneDrive,\x20<<:\x20*pr}\x0a\x20\x20-\x20{name:\x20🪟\x20Microsoft,\x20<<:\x20*pr}\x0a\x20\x20-\x20{name:\x20🎵\x20TikTok,\x20<<:\x20*pr}\x0a\x20\x20-\x20{name:\x20📲\x20Telegram,\x20<<:\x20*pr}\x0a\x20\x20-\x20{name:\x20🎥\x20NETFLIX,\x20<<:\x20*pr}\x0a\x20\x20-\x20{name:\x20✈️\x20Speedtest,\x20<<:\x20*pr}\x0a\x20\x20-\x20{name:\x20💶\x20PayPal,\x20<<:\x20*pr}\x0a\x20\x20-\x20{name:\x20🍎\x20Apple,\x20type:\x20select,\x20proxies:\x20[DIRECT,\x20🚀\x20默认代理]}\x0a\x20\x20-\x20{name:\x20🎯\x20直连,\x20type:\x20select,\x20proxies:\x20[DIRECT,\x20🚀\x20默认代理]}\x0a\x20\x20-\x20{name:\x20🐟\x20漏网之鱼,\x20<<:\x20*pr}\x0a\x0a#\x20规则匹配\x0a#\x20此规则部分没有做防泄露处理，因为弊严重大于利！\x0arules:\x0a\x20\x20-\x20DOMAIN-SUFFIX,fastly.jsdelivr.net,DIRECT\x0a\x20\x20-\x20DOMAIN-SUFFIX,cdn.jsdelivr.net,DIRECT\x0a\x20\x20-\x20DOMAIN-SUFFIX,youtube.com,📹\x20YouTube\x0a\x20\x20-\x20DOMAIN-SUFFIX,googlevideo.com,📹\x20YouTube\x0a\x20\x20-\x20DOMAIN-SUFFIX,ytimg.com,📹\x20YouTube\x0a\x20\x20-\x20DOMAIN-SUFFIX,ggpht.com,📹\x20YouTube\x0a\x20\x20-\x20DOMAIN-SUFFIX,google.com,🍀\x20Google\x0a\x20\x20-\x20DOMAIN-SUFFIX,googleapis.com,🍀\x20Google\x0a\x20\x20-\x20DOMAIN-SUFFIX,gstatic.com,🍀\x20Google\x0a\x20\x20-\x20DOMAIN-SUFFIX,qichiyu.com,🚀\x20默认代理\x0a\x20\x20-\x20RULE-SET,private_domain,DIRECT\x0a\x20\x20-\x20RULE-SET,apple_domain,🍎\x20Apple\x0a\x20\x20-\x20RULE-SET,ai,🤖\x20ChatGPT\x0a\x20\x20-\x20RULE-SET,github_domain,👨🏿‍💻\x20GitHub\x0a\x20\x20-\x20RULE-SET,youtube_domain,📹\x20YouTube\x0a\x20\x20-\x20RULE-SET,google_domain,🍀\x20Google\x0a\x20\x20-\x20RULE-SET,onedrive_domain,🐬\x20OneDrive\x0a\x20\x20-\x20RULE-SET,microsoft_domain,🪟\x20Microsoft\x0a\x20\x20-\x20RULE-SET,tiktok_domain,🎵\x20TikTok\x0a\x20\x20-\x20RULE-SET,speedtest_domain,✈️\x20Speedtest\x0a\x20\x20-\x20RULE-SET,telegram_domain,📲\x20Telegram\x0a\x20\x20-\x20RULE-SET,netflix_domain,🎥\x20NETFLIX\x0a\x20\x20-\x20RULE-SET,paypal_domain,💶\x20PayPal\x0a\x20\x20-\x20RULE-SET,gfw_domain,🚀\x20默认代理\x0a\x20\x20-\x20RULE-SET,geolocation-!cn,🚀\x20默认代理\x0a\x20\x20-\x20RULE-SET,cn_domain,🎯\x20直连\x0a\x20\x20-\x20RULE-SET,google_ip,🍀\x20Google,no-resolve\x0a\x20\x20-\x20RULE-SET,netflix_ip,🎥\x20NETFLIX,no-resolve\x0a\x20\x20-\x20RULE-SET,telegram_ip,📲\x20Telegram,no-resolve\x0a\x20\x20-\x20RULE-SET,cn_ip,🎯\x20直连\x0a\x20\x20-\x20MATCH,🐟\x20漏网之鱼\x0a\x0a#\x20规则集\x0arule-anchor:\x0a\x20\x20ip:\x20&ip\x20{type:\x20http,\x20interval:\x2086400,\x20behavior:\x20ipcidr,\x20format:\x20mrs}\x0a\x20\x20domain:\x20&domain\x20{type:\x20http,\x20interval:\x2086400,\x20behavior:\x20domain,\x20format:\x20mrs}\x0arule-providers:\x20\x0a\x20\x20private_domain:\x20{\x20<<:\x20*domain,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/private.mrs\x22}\x0a\x20\x20ai:\x20{\x20\x20<<:\x20*domain,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/category-ai-!cn.mrs\x22\x20}\x0a\x20\x20youtube_domain:\x20{\x20<<:\x20*domain,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/youtube.mrs\x22}\x0a\x20\x20google_domain:\x20{\x20<<:\x20*domain,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/google.mrs\x22}\x0a\x20\x20github_domain:\x20{\x20<<:\x20*domain,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/github.mrs\x22}\x0a\x20\x20telegram_domain:\x20{\x20<<:\x20*domain,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/telegram.mrs\x22}\x0a\x20\x20netflix_domain:\x20{\x20<<:\x20*domain,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/netflix.mrs\x22}\x0a\x20\x20paypal_domain:\x20{\x20<<:\x20*domain,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/paypal.mrs\x22}\x0a\x20\x20onedrive_domain:\x20{\x20<<:\x20*domain,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/onedrive.mrs\x22}\x0a\x20\x20microsoft_domain:\x20{\x20<<:\x20*domain,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/microsoft.mrs\x22}\x0a\x20\x20apple_domain:\x20{\x20<<:\x20*domain,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/apple-cn.mrs\x22}\x0a\x20\x20speedtest_domain:\x20{\x20<<:\x20*domain,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/ookla-speedtest.mrs\x22}\x0a\x20\x20tiktok_domain:\x20{\x20<<:\x20*domain,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/tiktok.mrs\x22}\x0a\x20\x20gfw_domain:\x20{\x20<<:\x20*domain,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/gfw.mrs\x22}\x0a\x20\x20geolocation-!cn:\x20{\x20<<:\x20*domain,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/geolocation-!cn.mrs\x22}\x0a\x20\x20cn_domain:\x20{\x20<<:\x20*domain,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/cn.mrs\x22}\x0a\x20\x20\x0a\x20\x20cn_ip:\x20{\x20<<:\x20*ip,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/cn.mrs\x22}\x0a\x20\x20google_ip:\x20{\x20<<:\x20*ip,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/google.mrs\x22}\x0a\x20\x20telegram_ip:\x20{\x20<<:\x20*ip,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/telegram.mrs\x22}\x0a\x20\x20netflix_ip:\x20{\x20<<:\x20*ip,\x20url:\x20\x22https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/netflix.mrs\x22}\x0a','188.114.99.14#优选IP-206','188.114.96.94#优选IP-104','getWriter','&extra=','2c0f:f248::/32',',\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png\x0astatic=🌐\x20全球直连,\x20direct,\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Direct.png\x0astatic=🐟\x20漏网之鱼,\x20🚀\x20节点选择,\x20direct,\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png\x0a[filter_local]\x0ageoip,\x20cn,\x20🌐\x20全球直连\x0afinal,\x20🐟\x20漏网之鱼\x0a','104.16.238.98#优选IP-094','微测网\x20优选域名','no-store','188.114.99.114#优选IP-060','assign','Answer','🚀\x20节点选择','tokenish','104.16.249.249#优选IP-009','172.64.0.0/13','104.18.185.26#优选IP-297','https://cloudflare-dns.com/dns-query','104.19.23.222#优选IP-145','104.24.184.158#优选IP-123','body','&host=','readable','104.17.97.72#优选IP-213','text/plain','?name=','188.114.98.19#优选IP-154','自定义源:\x20','以色列','188.114.97.91#优选IP-134','true','uuid','pass','all','104.27.27.106#优选IP-292','104.24.49.39#优选IP-299','&type=','now','TROJAN','host','162.159.43.85#优选IP-293','json','domains','104.18.26.28#优选IP-168','DUS','toString','104.17.151.244#优选IP-257','bestcf.top','104.17.185.207#优选IP-029','104.27.46.114#优选IP-271','104.19.123.4#优选IP-045','Cookie','104.25.36.200#优选IP-151','104.17.107.217#优选IP-133','proxyip.multacom.cmliussss.net','HAM','addEventListener','拉取失败:\x20','www.cloudflare.com','tls-opts','\x20\x20\x20\x20\x20\x20x-padding-placement:\x20','x-padding-obfs-mode','sourceURL','CHINAMOBILE','172.67.64.12#优选IP-021','SOCKS5\x20认证失败','only','fragmentParam','104.24.155.234#优选IP-070','104.19.83.33#优选IP-268','090227','\x20\x20\x20\x20server:\x20','HOST','url','PROXYIP','\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20🚀\x20节点选择\x0a\x0a[Rule]\x0aGEOIP,CN,DIRECT\x0aFINAL,🐟\x20漏网之鱼\x0a','(((.+)+)+)+$','AMS',';\x20charset=utf-8','土耳其','172.67.64.211#优选IP-020',',\x20tls=true,\x20skip-cert-verify=false,\x20sni=','bestcf','mode','password','1.0.2','fragment','104.19.97.238#优选IP-139','&fp=chrome','https://www.wetest.vip/page/cloudflare/cname.html','104.25.161.217#优选IP-140','STR','issued','&type=xhttp&mode=stream-one','stats','104.25.18.216#优选IP-198','\x0a\x0a[Rule]\x0aGEOIP,CN,DIRECT\x0aFINAL,🐟\x20漏网之鱼\x0a','182682','log','buffer','redirect','encode','104.18.196.199#优选IP-069','104.18.28.140#优选IP-095','protocol','162.159.241.11#优选IP-204','104.25.173.14#优选IP-273','2405:8100::/32','104.16.201.45#优选IP-160','status','104.27.40.81#优选IP-063','proxyip.fi.cmliussss.net','IPv4','nodeLimit','user','172.65.145.187#优选IP-081','/login?next=','_skipIssued','block','104.25.101.186#优选IP-057','direct','188.114.97.80#优选IP-202','ipType','application/json;\x20charset=utf-8','已重置：KV\x20已清空，面板还原为初始部署状态','\x20=\x20vless,\x20','订阅生成失败:\x20','&ech=','188.114.96.151#优选IP-223','LHR','104.27.195.79#优选IP-178','nodeLimitCount','boolean','162.159.199.220#优选IP-263','104.17.127.106#优选IP-048','opened','://','xhttp\x20代理错误:\x20','@edtunnel','IPv6','162.159.44.215#优选IP-031','min','104.24.41.240#优选IP-212','已保存并生效','preset','104.16.123.26#优选IP-149','104.21.61.179#优选IP-078','https://www.wetest.vip/page/cloudflare/address_v6.html','HTTP\x20','2a06:98c0::/29','binaryType','max','104.24.168.96#优选IP-130','outboundMode','proxyip.digitalocean.cmliussss.net','162.159.2.86#优选IP-222','decode','104.18.63.107#优选IP-185','无法识别的地址类型','releaseLock','172.67.229.44#优选IP-137','104.17.24.252#优选IP-012','enableTrojan','ADMIN','isp','\x20=\x20trojan,\x20','澳大利亚','floor','104.18.40.93#优选IP-023','prototype','\x20\x20\x20\x20\x20\x20mode:\x20','toUpperCase','lastIndexOf','46kHXFDW','SOCKS5\x20服务器要求认证但未提供凭据','threads','172.65.202.216#优选IP-190','NRT','未绑定\x20KV\x20命名空间，无需重置','\x20\x20\x20\x20servername:\x20','104.21.192.230#优选IP-099','TROJAN_PASSWORD','104.24.84.86#优选IP-285','type','find','188.114.96.0/20','104.18.43.224#优选IP-022','preferredIPs','ALPN','菲律宾','ech','arraybuffer','cdn.2020111.xyz','application/octet-stream','Host','比利时','match','trace','162.159.9.18#优选IP-230'];_0x1be6=function(){return _0x321981;};return _0x1be6();}function isValidIp(_0xe2a1ce){const _0x15f6fd=_0x16aa35;_0xe2a1ce=String(_0xe2a1ce||'')[_0x15f6fd(0xfb)]();if(!_0xe2a1ce)return![];const _0x3ccc5c=_0xe2a1ce[_0x15f6fd(0x20f)](/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);if(_0x3ccc5c)return _0x3ccc5c[_0x15f6fd(0x105)](0x1)[_0x15f6fd(0x216)](_0x36f661=>Number(_0x36f661)<=0xff);if(!/^[0-9a-fA-F:]+$/[_0x15f6fd(0xfd)](_0xe2a1ce))return![];if((_0xe2a1ce['match'](/::/g)||[])[_0x15f6fd(0x28d)]>0x1)return![];const _0x1e81c7=_0xe2a1ce['includes']('::'),_0x59fa11=_0xe2a1ce[_0x15f6fd(0x2e1)](/::/g,':')['split'](':')[_0x15f6fd(0x2e8)](Boolean);if(!_0x1e81c7&&_0x59fa11[_0x15f6fd(0x28d)]!==0x8)return![];if(_0x1e81c7&&(_0x59fa11['length']<0x1||_0x59fa11['length']>0x7))return![];return _0x59fa11['every'](_0x419c8d=>/^[0-9a-fA-F]{1,4}$/['test'](_0x419c8d));}function formatIPv6(_0xef1a7f){const _0x463a65=_0x16aa35,_0x5f07ee=[];for(let _0x38cbd9=0x0;_0x38cbd9<0x10;_0x38cbd9+=0x2)_0x5f07ee['push']((_0xef1a7f[_0x38cbd9]<<0x8|_0xef1a7f[_0x38cbd9+0x1])[_0x463a65(0x178)](0x10));let _0x47bc61=-0x1,_0x1bb9f2=0x0,_0x364961=-0x1,_0x46c616=0x0;for(let _0x3d8be3=0x0;_0x3d8be3<0x8;_0x3d8be3++){if(_0x5f07ee[_0x3d8be3]==='0'){if(_0x364961<0x0)_0x364961=_0x3d8be3,_0x46c616=0x1;else _0x46c616++;_0x46c616>_0x1bb9f2&&(_0x1bb9f2=_0x46c616,_0x47bc61=_0x364961);}else _0x364961=-0x1,_0x46c616=0x0;}if(_0x1bb9f2>=0x2){const _0xe499a0=_0x5f07ee[_0x463a65(0x105)](0x0,_0x47bc61)['join'](':'),_0x2a83f3=_0x5f07ee['slice'](_0x47bc61+_0x1bb9f2)['join'](':');return(_0xe499a0?_0xe499a0+'::':'::')+_0x2a83f3;}return _0x5f07ee[_0x463a65(0x294)](':');}function cidrToRange(_0x417615){const _0x57bf9f=_0x16aa35,[_0xa29d9a,_0x3d60e6]=_0x417615[_0x57bf9f(0x237)]('/'),_0x52f152=_0xa29d9a[_0x57bf9f(0x237)]('.')['map'](Number),_0x4a153c=(_0x52f152[0x0]<<0x18|_0x52f152[0x1]<<0x10|_0x52f152[0x2]<<0x8|_0x52f152[0x3])>>>0x0,_0x5b78fe=_0x3d60e6>=0x20?0x0:0xffffffff<<0x20-_0x3d60e6>>>0x0,_0x469ffb=(_0x4a153c&_0x5b78fe)>>>0x0,_0x1e3693=(_0x4a153c|~_0x5b78fe>>>0x0)>>>0x0;return[_0x469ffb,_0x1e3693];}const CLOUDFLARE_RANGES=CLOUDFLARE_CIDRS['map'](cidrToRange),REACHABLE_RANGES=REACHABLE_CIDRS[_0x16aa35(0x238)](cidrToRange),_rangeCache=new Map();function cidrRangeCached(_0x5a9abb){const _0x15282f=_0x16aa35;let _0x312581=_rangeCache['get'](_0x5a9abb);return!_0x312581&&(_0x312581=cidrToRange(_0x5a9abb),_rangeCache[_0x15282f(0x362)](_0x5a9abb,_0x312581)),_0x312581;}function randomIPFromCidr(_0x2eb22e){const _0x14038a=_0x16aa35,[_0x2a5e8e,_0x27622a]=cidrRangeCached(_0x2eb22e),_0x341de8=_0x2a5e8e+Math[_0x14038a(0x1f2)](Math[_0x14038a(0x27d)]()*(_0x27622a-_0x2a5e8e>>>0x0));return(_0x341de8>>>0x18&0xff)+'.'+(_0x341de8>>>0x10&0xff)+'.'+(_0x341de8>>>0x8&0xff)+'.'+(_0x341de8&0xff);}function randomIPsFromCidrs(_0x13805d,_0x218972){const _0x593695=_0x16aa35,_0x2958d1=new Set(),_0x5722d0=[];let _0x116077=0x0;while(_0x5722d0[_0x593695(0x28d)]<_0x218972&&_0x116077++<_0x218972*0x14){const _0x33b725=randomIPFromCidr(_0x13805d[Math[_0x593695(0x1f2)](Math['random']()*_0x13805d[_0x593695(0x28d)])]);!_0x2958d1[_0x593695(0x336)](_0x33b725)&&(_0x2958d1[_0x593695(0x38d)](_0x33b725),_0x5722d0[_0x593695(0x39c)](_0x33b725));}return _0x5722d0;}function parseIPList(_0x251a4f){const _0x5f50b0=_0x16aa35,_0x1cad30=[],_0x1c7900=new Set();return String(_0x251a4f||'')[_0x5f50b0(0x237)](/[\n,;]+/)[_0x5f50b0(0x238)](_0x21479c=>_0x21479c[_0x5f50b0(0xfb)]())[_0x5f50b0(0x2e8)](Boolean)[_0x5f50b0(0x2bd)](_0x16ae3b=>{const _0x33f91d=_0x5f50b0;let _0x48242c='';if(_0x16ae3b[_0x33f91d(0x266)]('#')){const [_0x304e57,_0x105ab5]=_0x16ae3b[_0x33f91d(0x237)]('#');_0x16ae3b=_0x304e57,_0x48242c=_0x105ab5;}const {host:_0x1a5974,port:_0x5eeada}=parseHostPort(_0x16ae3b,0x1bb);_0x1a5974&&isValidIp(_0x1a5974)&&!_0x1c7900[_0x33f91d(0x336)](_0x1a5974)&&(_0x1c7900[_0x33f91d(0x38d)](_0x1a5974),_0x1cad30['push']({'ip':_0x1a5974,'port':_0x5eeada,'name':_0x48242c}));}),_0x1cad30;}function parseProxyAddress(_0x5a8414){const _0x5e09ac=_0x16aa35;if(!_0x5a8414)return null;let _0x134065='socks5',_0x3db062=String(_0x5a8414)['trim']();const _0x3bcf77=_0x3db062[_0x5e09ac(0x20f)](/^(socks5|http|https):\/\/(.+)$/i);_0x3bcf77&&(_0x134065=_0x3bcf77[0x1]['toLowerCase'](),_0x3db062=_0x3bcf77[0x2]);let _0x446631='',_0x3a86a9='';if(_0x3db062[_0x5e09ac(0x266)]('@')){const [_0x531db4,_0x1ceb65]=_0x3db062['split']('@'),_0x1e60fb=_0x531db4[_0x5e09ac(0x306)](':');if(_0x1e60fb>=0x0)_0x446631=_0x531db4[_0x5e09ac(0x105)](0x0,_0x1e60fb),_0x3a86a9=_0x531db4[_0x5e09ac(0x105)](_0x1e60fb+0x1);else _0x446631=_0x531db4;_0x3db062=_0x1ceb65;}const _0x442c9e=_0x134065==='http'?0x50:_0x134065==='https'?0x1bb:0x438,{host:_0x3c05ed,port:_0x316e03}=parseHostPort(_0x3db062,_0x442c9e);return{'type':_0x134065,'host':_0x3c05ed,'port':_0x316e03,'user':_0x446631,'pass':_0x3a86a9};}function json(_0x1164fa,_0xad732c){const _0x75011e=_0x16aa35;return new Response(JSON[_0x75011e(0x313)](_0x1164fa),{'status':_0xad732c||0xc8,'headers':{'Content-Type':_0x75011e(0x1c6)}});}async function loadConfig(_0x5872d9){const _0x29c49c=_0x16aa35,_0x1e17dd=JSON[_0x29c49c(0x2f2)](JSON['stringify'](DEFAULT_CONFIG));if(_0x5872d9['U'])_0x1e17dd['uuid']=String(_0x5872d9['U'])[_0x29c49c(0x2f3)]();if(_0x5872d9['D']||_0x5872d9['PATH'])_0x1e17dd[_0x29c49c(0x13d)]=String(_0x5872d9['D']||_0x5872d9[_0x29c49c(0x21b)]);if(_0x5872d9['ADMIN']||_0x5872d9[_0x29c49c(0x290)])_0x1e17dd[_0x29c49c(0x290)]=String(_0x5872d9[_0x29c49c(0x1ee)]||_0x5872d9['admin']);if(_0x5872d9[_0x29c49c(0x193)])_0x1e17dd[_0x29c49c(0x172)]=String(_0x5872d9[_0x29c49c(0x193)])['replace'](/^https?:\/\//,'')['split']('/')[0x0];if(_0x5872d9[_0x29c49c(0x195)])_0x1e17dd[_0x29c49c(0x370)]=String(_0x5872d9[_0x29c49c(0x195)]);if(_0x5872d9['S']||_0x5872d9['OUTBOUND'])_0x1e17dd[_0x29c49c(0x125)]=String(_0x5872d9['S']||_0x5872d9['OUTBOUND']);if(_0x5872d9[_0x29c49c(0x322)]===_0x29c49c(0x169)||_0x5872d9[_0x29c49c(0x322)]==='1')_0x1e17dd[_0x29c49c(0x209)]=!![];if(_0x5872d9[_0x29c49c(0x171)]===_0x29c49c(0x169)||_0x5872d9['TROJAN']==='1')_0x1e17dd[_0x29c49c(0x1ed)]=!![];if(_0x5872d9[_0x29c49c(0x200)])_0x1e17dd[_0x29c49c(0x292)]=String(_0x5872d9[_0x29c49c(0x200)]);if(_0x5872d9[_0x29c49c(0x207)])_0x1e17dd[_0x29c49c(0x331)]=String(_0x5872d9[_0x29c49c(0x207)]);if(_0x5872d9['YX'])_0x1e17dd[_0x29c49c(0x206)]=parseIPList(_0x5872d9['YX']);if(_0x5872d9[_0x29c49c(0x343)])_0x1e17dd['optimizer'][_0x29c49c(0x189)]=String(_0x5872d9[_0x29c49c(0x343)]);if(_0x5872d9['K']&&typeof _0x5872d9['K'][_0x29c49c(0x276)]===_0x29c49c(0x37a))try{const _0x334d07=await _0x5872d9['K'][_0x29c49c(0x276)](_0x29c49c(0x241));if(_0x334d07){const _0x3b8877=JSON['parse'](_0x334d07);Object[_0x29c49c(0x155)](_0x1e17dd,_0x3b8877);if(_0x3b8877[_0x29c49c(0x131)])_0x1e17dd['optimizer']=Object['assign'](JSON['parse'](JSON[_0x29c49c(0x313)](DEFAULT_CONFIG[_0x29c49c(0x131)])),_0x3b8877[_0x29c49c(0x131)]);if(_0x3b8877[_0x29c49c(0x206)]&&Array[_0x29c49c(0x27c)](_0x3b8877[_0x29c49c(0x206)]))_0x1e17dd[_0x29c49c(0x206)]=_0x3b8877[_0x29c49c(0x206)];if(_0x3b8877['admin'])_0x1e17dd[_0x29c49c(0x290)]=String(_0x3b8877[_0x29c49c(0x290)]);if(_0x3b8877[_0x29c49c(0x16a)])_0x1e17dd[_0x29c49c(0x16a)]=String(_0x3b8877[_0x29c49c(0x16a)])[_0x29c49c(0x2f3)]();}}catch(_0x6f294){}delete _0x1e17dd[_0x29c49c(0x1a1)],delete _0x1e17dd[_0x29c49c(0x18e)],_0x1e17dd[_0x29c49c(0x16a)]=String(_0x1e17dd[_0x29c49c(0x16a)]||'')[_0x29c49c(0x2f3)]();if(!isUUID(_0x1e17dd[_0x29c49c(0x16a)]))_0x1e17dd[_0x29c49c(0x16a)]=uuidv4();if(!_0x1e17dd[_0x29c49c(0x13d)])_0x1e17dd[_0x29c49c(0x13d)]=_0x1e17dd[_0x29c49c(0x16a)];if(!Array[_0x29c49c(0x27c)](_0x1e17dd[_0x29c49c(0x206)]))_0x1e17dd[_0x29c49c(0x206)]=parseIPList(_0x1e17dd[_0x29c49c(0x206)]);return _0x1e17dd;}async function saveConfig(_0x5928d1,_0x9065a2){const _0x558ee6=_0x16aa35;if(!_0x5928d1['K']||typeof _0x5928d1['K']['put']!==_0x558ee6(0x37a))return![];const _0xb6d3a7=JSON[_0x558ee6(0x2f2)](JSON[_0x558ee6(0x313)](_0x9065a2));if(_0xb6d3a7[_0x558ee6(0x290)])_0xb6d3a7[_0x558ee6(0x290)]=String(_0xb6d3a7['admin']);return await _0x5928d1['K'][_0x558ee6(0x31c)](_0x558ee6(0x241),JSON[_0x558ee6(0x313)](_0xb6d3a7)),!![];}function readAddress(_0x2afdd7,_0x55ebca,_0x4def6f,_0x2f6953){const _0x122b56=_0x16aa35;if(_0x2f6953===0x1)return{'addr':_0x55ebca[_0x122b56(0x348)](_0x4def6f)+'.'+_0x55ebca[_0x122b56(0x348)](_0x4def6f+0x1)+'.'+_0x55ebca[_0x122b56(0x348)](_0x4def6f+0x2)+'.'+_0x55ebca[_0x122b56(0x348)](_0x4def6f+0x3),'len':0x4};if(_0x2f6953===0x2){const _0xa83070=_0x55ebca[_0x122b56(0x348)](_0x4def6f),_0x2af087=_0x2afdd7[_0x122b56(0x2b3)](_0x4def6f+0x1,_0x4def6f+0x1+_0xa83070);return{'addr':TD[_0x122b56(0x1e7)](_0x2af087),'len':0x1+_0xa83070};}if(_0x2f6953===0x3){const _0x17bbfd=_0x2afdd7[_0x122b56(0x2b3)](_0x4def6f,_0x4def6f+0x10);return{'addr':formatIPv6(_0x17bbfd),'len':0x10};}throw new Error(_0x122b56(0x1e9));}function parseVlessHeader(_0x1cc843){const _0x18bb8c=_0x16aa35;if(!_0x1cc843||_0x1cc843[_0x18bb8c(0x2d0)]<0x1)throw new Error(_0x18bb8c(0x10c));const _0x4e1a55=new DataView(_0x1cc843[_0x18bb8c(0x1ae)],_0x1cc843['byteOffset'],_0x1cc843[_0x18bb8c(0x2d0)]);let _0x41cfcc=0x0;if(_0x4e1a55[_0x18bb8c(0x348)](0x0)!==0x0)throw new Error(_0x18bb8c(0x240));_0x41cfcc+=0x1+0x10;if(_0x41cfcc>=_0x1cc843[_0x18bb8c(0x2d0)])throw new Error(_0x18bb8c(0x10c));const _0x59bc10=_0x4e1a55['getUint8'](_0x41cfcc);_0x41cfcc+=0x1,_0x41cfcc+=_0x59bc10;if(_0x41cfcc+0x3>_0x1cc843[_0x18bb8c(0x2d0)])throw new Error(_0x18bb8c(0x10c));const _0x3c845b=_0x4e1a55[_0x18bb8c(0x348)](_0x41cfcc);_0x41cfcc+=0x1;const _0x26fddc=_0x4e1a55['getUint16'](_0x41cfcc);_0x41cfcc+=0x2;const _0x4b7a6a=_0x4e1a55[_0x18bb8c(0x348)](_0x41cfcc);_0x41cfcc+=0x1;const {addr:_0x29aed5,len:_0x4cf62d}=readAddress(_0x1cc843,_0x4e1a55,_0x41cfcc,_0x4b7a6a);return _0x41cfcc+=_0x4cf62d,{'command':_0x3c845b,'port':_0x26fddc,'addr':_0x29aed5,'headerLength':_0x41cfcc,'earlyData':_0x1cc843[_0x18bb8c(0x2b3)](_0x41cfcc)};}function parseTrojanHeader(_0x119650){const _0xb0376f=_0x16aa35;if(!_0x119650||_0x119650['byteLength']<0x3a+0x8)throw new Error('Trojan\x20头部过短');const _0x5257ca=new DataView(_0x119650[_0xb0376f(0x1ae)],_0x119650[_0xb0376f(0x32d)],_0x119650['byteLength']);let _0x15f4c2=0x3a;const _0x19c94b=_0x5257ca[_0xb0376f(0x348)](_0x15f4c2);_0x15f4c2+=0x1;const _0x1b810c=_0x5257ca[_0xb0376f(0x348)](_0x15f4c2);_0x15f4c2+=0x1;let _0x6b5a80,_0x4b9f19;if(_0x1b810c===0x1)_0x6b5a80=_0x5257ca[_0xb0376f(0x348)](_0x15f4c2)+'.'+_0x5257ca[_0xb0376f(0x348)](_0x15f4c2+0x1)+'.'+_0x5257ca[_0xb0376f(0x348)](_0x15f4c2+0x2)+'.'+_0x5257ca['getUint8'](_0x15f4c2+0x3),_0x4b9f19=0x4;else{if(_0x1b810c===0x3){const _0x42543d=_0x5257ca[_0xb0376f(0x348)](_0x15f4c2);_0x6b5a80=TD[_0xb0376f(0x1e7)](_0x119650[_0xb0376f(0x2b3)](_0x15f4c2+0x1,_0x15f4c2+0x1+_0x42543d)),_0x4b9f19=0x1+_0x42543d;}else{if(_0x1b810c===0x4)_0x6b5a80=formatIPv6(_0x119650[_0xb0376f(0x2b3)](_0x15f4c2,_0x15f4c2+0x10)),_0x4b9f19=0x10;else throw new Error('无法识别的地址类型');}}_0x15f4c2+=_0x4b9f19;const _0x3c5a8d=_0x5257ca['getUint16'](_0x15f4c2);return _0x15f4c2+=0x2,_0x15f4c2+=0x2,{'command':_0x19c94b,'port':_0x3c5a8d,'addr':_0x6b5a80,'password':TD[_0xb0376f(0x1e7)](_0x119650[_0xb0376f(0x2b3)](0x0,0x38)),'headerLength':_0x15f4c2};}const SHA256_K=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0xfc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x6ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];function sha224hex(_0x5849e8){const _0x4e7dc4=_0x16aa35,_0x4ac1b2=TE[_0x4e7dc4(0x1b0)](String(_0x5849e8)),_0x497264=_0x4ac1b2[_0x4e7dc4(0x28d)]*0x8,_0x5fe14c=(_0x4ac1b2[_0x4e7dc4(0x28d)]+0x8>>0x6)+0x1<<0x6,_0xfd0910=new Uint8Array(_0x5fe14c);_0xfd0910[_0x4e7dc4(0x362)](_0x4ac1b2),_0xfd0910[_0x4ac1b2[_0x4e7dc4(0x28d)]]=0x80;const _0x4e186a=new DataView(_0xfd0910['buffer']);_0x4e186a[_0x4e7dc4(0x2cf)](_0x5fe14c-0x8,Math[_0x4e7dc4(0x1f2)](_0x497264/0x100000000),![]),_0x4e186a[_0x4e7dc4(0x2cf)](_0x5fe14c-0x4,_0x497264>>>0x0,![]);let _0x2d00d4=0xc1059ed8,_0x54d3a2=0x367cd507,_0x44153=0x3070dd17,_0x1be473=0xf70e5939,_0x8aefe1=0xffc00b31,_0x3170c4=0x68581511,_0x139292=0x64f98fa7,_0x25f100=0xbefa4fa4;const _0x4777cb=(_0x11c28a,_0x5bcb0a)=>_0x11c28a>>>_0x5bcb0a|_0x11c28a<<0x20-_0x5bcb0a;for(let _0x1c6404=0x0;_0x1c6404<_0x5fe14c;_0x1c6404+=0x40){const _0x510982=new Uint32Array(0x40);for(let _0x377f92=0x0;_0x377f92<0x10;_0x377f92++)_0x510982[_0x377f92]=_0x4e186a['getUint32'](_0x1c6404+_0x377f92*0x4,![]);for(let _0x5d40dc=0x10;_0x5d40dc<0x40;_0x5d40dc++){const _0x3b7474=_0x4777cb(_0x510982[_0x5d40dc-0xf],0x7)^_0x4777cb(_0x510982[_0x5d40dc-0xf],0x12)^_0x510982[_0x5d40dc-0xf]>>>0x3,_0x5676c4=_0x4777cb(_0x510982[_0x5d40dc-0x2],0x11)^_0x4777cb(_0x510982[_0x5d40dc-0x2],0x13)^_0x510982[_0x5d40dc-0x2]>>>0xa;_0x510982[_0x5d40dc]=_0x510982[_0x5d40dc-0x10]+_0x3b7474+_0x510982[_0x5d40dc-0x7]+_0x5676c4>>>0x0;}let _0x6bd0d7=_0x2d00d4,_0x523703=_0x54d3a2,_0xd52027=_0x44153,_0x23432c=_0x1be473,_0x51beb3=_0x8aefe1,_0x5c769b=_0x3170c4,_0x2fdd6f=_0x139292,_0x27f006=_0x25f100;for(let _0x501d97=0x0;_0x501d97<0x40;_0x501d97++){const _0x14c4e1=_0x4777cb(_0x51beb3,0x6)^_0x4777cb(_0x51beb3,0xb)^_0x4777cb(_0x51beb3,0x19),_0x21a2ea=_0x51beb3&_0x5c769b^~_0x51beb3&_0x2fdd6f,_0x3ab53e=_0x27f006+_0x14c4e1+_0x21a2ea+SHA256_K[_0x501d97]+_0x510982[_0x501d97]>>>0x0,_0x545112=_0x4777cb(_0x6bd0d7,0x2)^_0x4777cb(_0x6bd0d7,0xd)^_0x4777cb(_0x6bd0d7,0x16),_0x12f683=_0x6bd0d7&_0x523703^_0x6bd0d7&_0xd52027^_0x523703&_0xd52027,_0x3d9582=_0x545112+_0x12f683>>>0x0;_0x27f006=_0x2fdd6f,_0x2fdd6f=_0x5c769b,_0x5c769b=_0x51beb3,_0x51beb3=_0x23432c+_0x3ab53e>>>0x0,_0x23432c=_0xd52027,_0xd52027=_0x523703,_0x523703=_0x6bd0d7,_0x6bd0d7=_0x3ab53e+_0x3d9582>>>0x0;}_0x2d00d4=_0x2d00d4+_0x6bd0d7>>>0x0,_0x54d3a2=_0x54d3a2+_0x523703>>>0x0,_0x44153=_0x44153+_0xd52027>>>0x0,_0x1be473=_0x1be473+_0x23432c>>>0x0,_0x8aefe1=_0x8aefe1+_0x51beb3>>>0x0,_0x3170c4=_0x3170c4+_0x5c769b>>>0x0,_0x139292=_0x139292+_0x2fdd6f>>>0x0,_0x25f100=_0x25f100+_0x27f006>>>0x0;}let _0x128416='';for(const _0x5c562f of[_0x2d00d4,_0x54d3a2,_0x44153,_0x1be473,_0x8aefe1,_0x3170c4,_0x139292]){_0x128416+=(_0x5c562f>>>0x18&0xff)[_0x4e7dc4(0x178)](0x10)[_0x4e7dc4(0x254)](0x2,'0'),_0x128416+=(_0x5c562f>>>0x10&0xff)[_0x4e7dc4(0x178)](0x10)[_0x4e7dc4(0x254)](0x2,'0'),_0x128416+=(_0x5c562f>>>0x8&0xff)[_0x4e7dc4(0x178)](0x10)[_0x4e7dc4(0x254)](0x2,'0'),_0x128416+=(_0x5c562f&0xff)['toString'](0x10)[_0x4e7dc4(0x254)](0x2,'0');}return _0x128416;}let _trojanPassC='',_trojanHashC='';function trojanPasswordHash(_0x5700be){return _0x5700be!==_trojanPassC&&(_trojanPassC=_0x5700be,_trojanHashC=sha224hex(_0x5700be)),_trojanHashC;}async function connectDirect(_0x31cade){const _0x3d46d9=_0x16aa35,_0x53b7db=connect({'hostname':_0x31cade[_0x3d46d9(0x275)],'port':_0x31cade[_0x3d46d9(0x26e)]});return await _0x53b7db[_0x3d46d9(0x1d2)],_0x53b7db;}async function connectViaSocks5(_0x4d4a36,_0x2378d1){const _0x2eda22=_0x16aa35,_0x3f4035=connect({'hostname':_0x4d4a36[_0x2eda22(0x172)],'port':_0x4d4a36[_0x2eda22(0x26e)]});await _0x3f4035[_0x2eda22(0x1d2)];const _0x59313b=_0x3f4035[_0x2eda22(0x2e3)]['getWriter'](),_0x5e46d8=_0x3f4035[_0x2eda22(0x161)][_0x2eda22(0x30f)]();let _0xc5fdb6=new Uint8Array(0x0);const _0x4ae5bd=async _0x4898a1=>{const _0x48b10c=_0x2eda22;while(_0xc5fdb6[_0x48b10c(0x28d)]<_0x4898a1){const {done:_0x2f1906,value:_0x2c5381}=await _0x5e46d8[_0x48b10c(0x142)]();if(_0x2f1906)throw new Error('连接被关闭');_0xc5fdb6=concatBytes(_0xc5fdb6,_0x2c5381);}const _0x56df49=_0xc5fdb6[_0x48b10c(0x105)](0x0,_0x4898a1);return _0xc5fdb6=_0xc5fdb6['subarray'](_0x4898a1),_0x56df49;},_0x5369a6=_0x4d4a36['user']?[0x5,0x2,0x0,0x2]:[0x5,0x1,0x0];await _0x59313b[_0x2eda22(0x334)](new Uint8Array(_0x5369a6));const _0x188792=await _0x4ae5bd(0x2);if(_0x188792[0x0]!==0x5||_0x188792[0x1]===0xff)throw new Error(_0x2eda22(0x118));if(_0x188792[0x1]===0x2){if(!_0x4d4a36[_0x2eda22(0x1bd)])throw new Error(_0x2eda22(0x1f9));const _0x3838d0=TE[_0x2eda22(0x1b0)](_0x4d4a36['user']),_0x313f94=TE[_0x2eda22(0x1b0)](_0x4d4a36['pass']),_0x22f377=new Uint8Array([0x1,_0x3838d0[_0x2eda22(0x28d)],..._0x3838d0,_0x313f94[_0x2eda22(0x28d)],..._0x313f94]);await _0x59313b[_0x2eda22(0x334)](_0x22f377);const _0x4f547c=await _0x4ae5bd(0x2);if(_0x4f547c[0x1]!==0x0)throw new Error(_0x2eda22(0x18c));}else{if(_0x188792[0x1]!==0x0)throw new Error(_0x2eda22(0x337)+_0x188792[0x1]);}const _0x57d23c=TE[_0x2eda22(0x1b0)](_0x2378d1[_0x2eda22(0x275)]);let _0x4a5c54;/^\d+\.\d+\.\d+\.\d+$/[_0x2eda22(0xfd)](_0x2378d1['hostname'])?_0x4a5c54=new Uint8Array([0x5,0x1,0x0,0x1,..._0x2378d1['hostname'][_0x2eda22(0x237)]('.')['map'](Number),_0x2378d1[_0x2eda22(0x26e)]>>0x8&0xff,_0x2378d1[_0x2eda22(0x26e)]&0xff]):_0x4a5c54=new Uint8Array([0x5,0x1,0x0,0x3,_0x57d23c[_0x2eda22(0x28d)],..._0x57d23c,_0x2378d1[_0x2eda22(0x26e)]>>0x8&0xff,_0x2378d1[_0x2eda22(0x26e)]&0xff]);await _0x59313b[_0x2eda22(0x334)](_0x4a5c54);const _0x3ec36f=await _0x4ae5bd(0x4);if(_0x3ec36f[0x1]!==0x0)throw new Error('SOCKS5\x20连接失败\x20码'+_0x3ec36f[0x1]);if(_0x3ec36f[0x3]===0x1)await _0x4ae5bd(0x6);else{if(_0x3ec36f[0x3]===0x3){const _0x5acee7=(await _0x4ae5bd(0x1))[0x0];await _0x4ae5bd(_0x5acee7+0x2);}else{if(_0x3ec36f[0x3]===0x4)await _0x4ae5bd(0x12);}}return _0x59313b[_0x2eda22(0x1ea)](),_0x5e46d8[_0x2eda22(0x1ea)](),_0x3f4035;}async function connectViaHttpProxy(_0x52478b,_0x3d37ba){const _0x833861=_0x16aa35,_0x5351dd=connect({'hostname':_0x52478b[_0x833861(0x172)],'port':_0x52478b['port']});await _0x5351dd[_0x833861(0x1d2)];const _0x2549af=_0x5351dd[_0x833861(0x2e3)][_0x833861(0x14d)](),_0x3ca1b7=_0x5351dd[_0x833861(0x161)][_0x833861(0x30f)]();let _0x5b235d='';if(_0x52478b[_0x833861(0x1bd)])_0x5b235d=_0x833861(0x39f)+b64FromBytes(TE[_0x833861(0x1b0)](_0x52478b[_0x833861(0x1bd)]+':'+_0x52478b[_0x833861(0x16b)]))+'\x0d\x0a';const _0x433a96=_0x833861(0x11e)+_0x3d37ba[_0x833861(0x275)]+':'+_0x3d37ba['port']+_0x833861(0x235)+_0x3d37ba['hostname']+':'+_0x3d37ba[_0x833861(0x26e)]+'\x0d\x0a'+_0x5b235d+'\x0d\x0a';await _0x2549af['write'](TE['encode'](_0x433a96));const _0x1405f8=await readUntilCRLFCRLF(_0x3ca1b7);if(!/^HTTP\/\d\.\d\s+2\d\d/i['test'](_0x1405f8))throw new Error(_0x833861(0x2ab)+_0x1405f8[_0x833861(0x237)]('\x0d\x0a')[0x0]);return _0x2549af[_0x833861(0x1ea)](),_0x3ca1b7['releaseLock'](),_0x5351dd;}async function readN(_0xcbf830,_0x24a8c7){const _0x3ef0e3=_0x16aa35,_0x146a42=new Uint8Array(_0x24a8c7);let _0x3054b7=0x0;while(_0x3054b7<_0x24a8c7){const {done:_0x3e8211,value:_0x100fe8}=await _0xcbf830[_0x3ef0e3(0x142)]();if(_0x3e8211)throw new Error('连接被关闭');const _0x41c609=_0x24a8c7-_0x3054b7;_0x146a42['set'](_0x100fe8[_0x3ef0e3(0x2b3)](0x0,Math[_0x3ef0e3(0x1d8)](_0x41c609,_0x100fe8[_0x3ef0e3(0x28d)])),_0x3054b7),_0x3054b7+=Math['min'](_0x41c609,_0x100fe8[_0x3ef0e3(0x28d)]);}return _0x146a42;}async function readUntilCRLFCRLF(_0x57150e){const _0x4dafb8=_0x16aa35;let _0x4371c6=new Uint8Array(0x0);while(_0x4371c6[_0x4dafb8(0x28d)]<0x10000){const {done:_0x4e2439,value:_0x358ecd}=await _0x57150e[_0x4dafb8(0x142)]();if(_0x4e2439)break;_0x4371c6=concatBytes(_0x4371c6,_0x358ecd);const _0x29ec22=findBytes(_0x4371c6,[0xd,0xa,0xd,0xa]);if(_0x29ec22>=0x0)return TD['decode'](_0x4371c6[_0x4dafb8(0x2b3)](0x0,_0x29ec22));}return TD[_0x4dafb8(0x1e7)](_0x4371c6);}function concatBytes(_0x2724f8,_0x1d27b3){const _0x555d1b=_0x16aa35,_0x15162c=new Uint8Array(_0x2724f8['length']+_0x1d27b3[_0x555d1b(0x28d)]);return _0x15162c['set'](_0x2724f8,0x0),_0x15162c[_0x555d1b(0x362)](_0x1d27b3,_0x2724f8[_0x555d1b(0x28d)]),_0x15162c;}function findBytes(_0x3e6715,_0x34edfd){const _0x27f1be=_0x16aa35;_0x163426:for(let _0x50eb9d=0x0;_0x50eb9d<=_0x3e6715[_0x27f1be(0x28d)]-_0x34edfd['length'];_0x50eb9d++){for(let _0x48a87c=0x0;_0x48a87c<_0x34edfd[_0x27f1be(0x28d)];_0x48a87c++)if(_0x3e6715[_0x50eb9d+_0x48a87c]!==_0x34edfd[_0x48a87c])continue _0x163426;return _0x50eb9d;}return-0x1;}const RELAY_DOMAINS={'HK':'proxyip.hk.cmliussss.net','US':_0x16aa35(0x2ee),'SG':'proxyip.sg.cmliussss.net','JP':_0x16aa35(0x2be),'KR':'proxyip.kr.cmliussss.net','DE':'proxyip.de.cmliussss.net','SE':'proxyip.se.cmliussss.net','NL':_0x16aa35(0x2af),'FI':_0x16aa35(0x1ba),'GB':'proxyip.gb.cmliussss.net','Oracle':'proxyip.oracle.cmliussss.net','DigitalOcean':_0x16aa35(0x1e5),'Vultr':_0x16aa35(0x333),'Multacom':_0x16aa35(0x181)};function selectRelayRegion(_0x41fbee){const _0x323189=_0x16aa35,_0x36020a=(_0x41fbee||'')[_0x323189(0x1f6)]();if(_0x36020a[_0x323189(0x111)](_0x323189(0x2c0))||_0x36020a[_0x323189(0x111)]('HK'))return'HK';if(_0x36020a['startsWith'](_0x323189(0x364))||_0x36020a[_0x323189(0x111)]('SG'))return'SG';if(_0x36020a[_0x323189(0x111)](_0x323189(0x1fc))||_0x36020a['startsWith']('KIX')||_0x36020a[_0x323189(0x111)]('TYO')||_0x36020a[_0x323189(0x111)](_0x323189(0x2f1))||_0x36020a[_0x323189(0x111)]('JP'))return'JP';if(_0x36020a[_0x323189(0x111)](_0x323189(0x2ca))||_0x36020a[_0x323189(0x111)](_0x323189(0x133))||_0x36020a[_0x323189(0x111)]('KR'))return'KR';if(/^(HKG|SIN|NRT|KIX|ICN|TYO|OSA|SEL|HK|SG|JP|KR|SJC)/[_0x323189(0xfd)](_0x36020a))return'HK';if(_0x36020a[_0x323189(0x111)]('FRA')||_0x36020a[_0x323189(0x111)](_0x323189(0x380))||_0x36020a[_0x323189(0x111)](_0x323189(0x2b2))||_0x36020a[_0x323189(0x111)](_0x323189(0x177))||_0x36020a['startsWith'](_0x323189(0x182))||_0x36020a[_0x323189(0x111)](_0x323189(0x1a6))||_0x36020a[_0x323189(0x111)]('DE'))return'DE';if(_0x36020a[_0x323189(0x111)](_0x323189(0x36d))||_0x36020a['startsWith']('SE'))return'SE';if(_0x36020a[_0x323189(0x111)](_0x323189(0x198))||_0x36020a[_0x323189(0x111)]('NL'))return'NL';if(_0x36020a[_0x323189(0x111)]('HEL')||_0x36020a[_0x323189(0x111)]('FI'))return'FI';if(_0x36020a[_0x323189(0x111)](_0x323189(0x1cc))||_0x36020a[_0x323189(0x111)](_0x323189(0x2ac))||_0x36020a[_0x323189(0x111)]('GB')||_0x36020a['startsWith']('UK'))return'GB';if(/^(FRA|ARN|AMS|HEL|LHR|MAN|CDG|MAD|VIE|ZRH|MXP|PRG|WAW|BER|MUC|DUS|HAM|STR|DE|SE|NL|FI|GB|UK|FR|ES|AT|CH|IT|CZ|PL)/['test'](_0x36020a))return'DE';return'US';}const PROXYIP_CACHE=new Map();async function resolveProxyIPs(_0x35b36e,_0x1088f1){const _0x2d3879=_0x16aa35;_0x1088f1=_0x1088f1||0x1bb;if(isValidIp(_0x35b36e))return[{'hostname':_0x35b36e,'port':_0x1088f1}];const _0x31ed83=_0x35b36e+':'+_0x1088f1,_0x474a33=Date['now'](),_0x612e95=PROXYIP_CACHE[_0x2d3879(0x276)](_0x31ed83);if(_0x612e95&&_0x474a33-_0x612e95['t']<0x5*0x3c*0x3e8)return _0x612e95[_0x2d3879(0x29f)];const _0x5aac9b=[_0x2d3879(0x15c),_0x2d3879(0x22a),_0x2d3879(0x11a)],_0x184e75=async(_0x441633,_0x3207d2)=>{const _0x4f1648=_0x2d3879,_0x50fecf=_0x5aac9b[_0x4f1648(0x238)](async _0x4a5009=>{const _0x4cec63=_0x4f1648,_0x5181db=await fetchTimeout(_0x4a5009+_0x4cec63(0x164)+encodeURIComponent(_0x35b36e)+_0x4cec63(0x16f)+_0x441633,{'headers':{'accept':_0x4cec63(0x113)}},0xfa0);if(!_0x5181db||!_0x5181db['ok'])throw new Error(_0x4cec63(0x308));const _0x494aca=await _0x5181db[_0x4cec63(0x174)]();return(_0x494aca[_0x4cec63(0x156)]||[])['filter'](_0x3c89b1=>_0x3c89b1[_0x4cec63(0x202)]===_0x3207d2)[_0x4cec63(0x238)](_0x35f7fd=>_0x35f7fd['data']);});try{return await Promise[_0x4f1648(0x22e)](_0x50fecf);}catch(_0x167b65){return[];}},[_0x370985,_0x18a0de]=await Promise[_0x2d3879(0x16c)]([_0x184e75(_0x2d3879(0x372),0x10),_0x184e75('A',0x1)]);let _0x3746cc=[];for(const _0x5f26f5 of _0x370985){const _0x5b1d4d=String(_0x5f26f5)[_0x2d3879(0x2e1)](/^"|"$/g,'')['replace'](/\\010/g,',')[_0x2d3879(0x2e1)](/\n/g,',')['trim']();if(!_0x5b1d4d)continue;if(_0x5b1d4d===_0x2d3879(0x1d5)){_0x3746cc=_0x18a0de['filter'](_0x4d2bcf=>/^\d+\.\d+\.\d+\.\d+$/['test'](_0x4d2bcf))['map'](_0x265a5c=>({'hostname':_0x265a5c,'port':_0x1088f1}));break;}const _0x574bb0=_0x5b1d4d[_0x2d3879(0x237)](/[,;\s]+/)[_0x2d3879(0x238)](_0x37142a=>_0x37142a[_0x2d3879(0xfb)]())[_0x2d3879(0x2e8)](Boolean),_0x53584f=[];for(const _0x48ae30 of _0x574bb0){const {host:_0x22d4c8,port:_0x24c0e7}=parseHostPort(_0x48ae30,_0x1088f1);if(isValidIp(_0x22d4c8))_0x53584f['push']({'hostname':_0x22d4c8,'port':_0x24c0e7});}if(_0x53584f[_0x2d3879(0x28d)]){_0x3746cc=_0x53584f;break;}}!_0x3746cc[_0x2d3879(0x28d)]&&(_0x3746cc=_0x18a0de[_0x2d3879(0x2e8)](_0x1b9bc9=>/^\d+\.\d+\.\d+\.\d+$/[_0x2d3879(0xfd)](_0x1b9bc9))[_0x2d3879(0x238)](_0x458547=>({'hostname':_0x458547,'port':_0x1088f1})));if(!_0x3746cc[_0x2d3879(0x28d)]){const _0x50d396=await _0x184e75('AAAA',0x1c);_0x3746cc=_0x50d396[_0x2d3879(0x2e8)](_0x58476f=>isValidIp(_0x58476f))[_0x2d3879(0x238)](_0x4d1b6d=>({'hostname':_0x4d1b6d,'port':_0x1088f1}));}const _0x12328f=new Set(),_0x3b7013=_0x3746cc[_0x2d3879(0x2e8)](_0x177a92=>{const _0x396667=_0x2d3879,_0xac5c86=_0x177a92['hostname']+':'+_0x177a92[_0x396667(0x26e)];if(_0x12328f[_0x396667(0x336)](_0xac5c86))return![];return _0x12328f[_0x396667(0x38d)](_0xac5c86),!![];});if(_0x3b7013[_0x2d3879(0x28d)])PROXYIP_CACHE[_0x2d3879(0x362)](_0x31ed83,{'t':_0x474a33,'ips':_0x3b7013});return _0x3b7013;}async function openOutbound(_0xae08ca,_0x7ed21,_0x1d152b,_0x10c9df){const _0x358d57=_0x16aa35,_0x4553f7=parseProxyAddress(_0x7ed21[_0x358d57(0x125)]),_0x461059=_0x7ed21[_0x358d57(0x1e4)]||'',_0x1e2938=_0x4553f7?_0x4553f7[_0x358d57(0x202)]===_0x358d57(0xf9)||_0x4553f7[_0x358d57(0x202)]===_0x358d57(0x122)?_0x5ce0df=>connectViaHttpProxy(_0x4553f7,_0x5ce0df):_0x2cb68a=>connectViaSocks5(_0x4553f7,_0x2cb68a):null,_0x2c7f61=_0x3fbc40=>{const _0x3fbb1c=_0x358d57,_0x27aa53=[];if(_0x461059===_0x3fbb1c(0x18d))_0x27aa53['push'](_0x1e2938?()=>_0x1e2938(_0x3fbc40):()=>connectDirect(_0x3fbc40));else{if(_0x461059==='no'){_0x27aa53['push'](()=>connectDirect(_0x3fbc40));if(_0x1e2938)_0x27aa53[_0x3fbb1c(0x39c)](()=>_0x1e2938(_0x3fbc40));}else{if(_0x1e2938)_0x27aa53[_0x3fbb1c(0x39c)](()=>_0x1e2938(_0x3fbc40));_0x27aa53['push'](()=>connectDirect(_0x3fbc40));}}return _0x27aa53;};let _0x42977d;const _0x49da6b=async _0x8200de=>{for(const _0x15aa8f of _0x2c7f61(_0x8200de)){try{return await _0x15aa8f();}catch(_0x3a3ea5){_0x42977d=_0x3a3ea5;}}return null;},_0x24af12=await _0x49da6b({'hostname':_0xae08ca[_0x358d57(0x363)],'port':_0xae08ca[_0x358d57(0x26e)]});if(_0x24af12)return _0x24af12;const _0x3b31e3=_0x7ed21[_0x358d57(0x370)]?parseHostPort(_0x7ed21['proxyIP'],0x1bb):null;if(_0x3b31e3&&_0x3b31e3['host']){let _0x4b5cf7=await resolveProxyIPs(_0x3b31e3['host'],_0x3b31e3[_0x358d57(0x26e)]);if(!_0x4b5cf7[_0x358d57(0x28d)])_0x4b5cf7=[{'hostname':_0x3b31e3[_0x358d57(0x172)],'port':_0x3b31e3[_0x358d57(0x26e)]}];for(const _0x61bc48 of _0x4b5cf7){const _0xb04824=await _0x49da6b(_0x61bc48);if(_0xb04824)return _0xb04824;}}if(_0x10c9df){const _0xa474f1=selectRelayRegion(_0x1d152b),_0x4000cb=RELAY_DOMAINS[_0xa474f1];if(_0x4000cb){const _0xc9871f=await resolveProxyIPs(_0x4000cb,0x1bb);for(const _0x13b713 of _0xc9871f){const _0xe16545=await _0x49da6b(_0x13b713);if(_0xe16545)return _0xe16545;}}}throw _0x42977d||new Error(_0x358d57(0x24c));}async function pumpToReader(_0x37c0eb,_0x3ff8c9,_0x202f0f){try{while(!![]){const {done:_0x239671,value:_0x59b2a7}=await _0x37c0eb['read']();if(_0x239671)break;_0x3ff8c9(_0x59b2a7);}}catch(_0x2f421b){}try{if(_0x202f0f)_0x202f0f();}catch(_0x301310){}}async function handleWebSocketProxy(_0x11b78c,_0xeb6944){const _0x2435d0=_0x16aa35,_0x2b9b34=new WebSocketPair(),[_0x4533a6,_0x231261]=Object[_0x2435d0(0x25b)](_0x2b9b34);try{_0x231261['accept']({'allowHalfOpen':!![]});}catch(_0x52de80){_0x231261['accept']();}_0x231261[_0x2435d0(0x1e1)]=_0x2435d0(0x20a);let _0x1629c9=null,_0x158ade=null,_0x7d4ad4=![],_0x3d95e1=null;const _0x10bcee=_0x7e2690=>{try{_0x231261['send'](_0x7e2690);}catch(_0x275477){}};_0x231261[_0x2435d0(0x183)]('message',async _0x854be8=>{const _0x589fe3=_0x2435d0;try{const _0x5e622f=typeof _0x854be8[_0x589fe3(0x34a)]===_0x589fe3(0x239)?TE[_0x589fe3(0x1b0)](_0x854be8['data']):new Uint8Array(_0x854be8[_0x589fe3(0x34a)]);if(!_0x7d4ad4){_0x3d95e1=_0x3d95e1?concatBytes(_0x3d95e1,_0x5e622f):_0x5e622f;let _0x5cc4a6,_0x4369eb;try{let _0x5a97ac=![];if(_0xeb6944['enableTrojan']){const _0x22382b=_0xeb6944[_0x589fe3(0x292)]||_0xeb6944[_0x589fe3(0x16a)];_0x5a97ac=_0x3d95e1[_0x589fe3(0x2d0)]>=0x3a&&TD[_0x589fe3(0x1e7)](_0x3d95e1[_0x589fe3(0x2b3)](0x0,0x38))['toLowerCase']()===trojanPasswordHash(_0x22382b);}_0x4369eb=!_0x5a97ac,_0x5cc4a6=_0x5a97ac?parseTrojanHeader(_0x3d95e1):parseVlessHeader(_0x3d95e1);}catch(_0x1c2896){if(/头部过短/[_0x589fe3(0xfd)](_0x1c2896[_0x589fe3(0x2e6)]||''))return;throw _0x1c2896;}_0x7d4ad4=!![];const _0x41339c=await openOutbound(_0x5cc4a6,_0xeb6944,_0x11b78c['cf']&&_0x11b78c['cf'][_0x589fe3(0x299)],_0x4369eb);_0x1629c9=_0x41339c,_0x158ade=_0x41339c['writable'][_0x589fe3(0x14d)]();if(_0x4369eb)_0x10bcee(new Uint8Array([0x0,0x0]));await _0x158ade[_0x589fe3(0x334)](_0x3d95e1[_0x589fe3(0x2b3)](_0x5cc4a6[_0x589fe3(0x26b)])),pumpToReader(_0x41339c['readable'][_0x589fe3(0x30f)](),_0x10bcee,()=>{const _0x486f66=_0x589fe3;try{_0x231261[_0x486f66(0x396)](0x3e8);}catch(_0x446235){}});}else{if(_0x158ade)await _0x158ade[_0x589fe3(0x334)](_0x5e622f);}}catch(_0x3f3877){try{_0x231261['close'](0x3f3,String(_0x3f3877&&_0x3f3877[_0x589fe3(0x2e6)]||_0x3f3877));}catch(_0x568d45){}}});const _0x4770db=()=>{if(_0x1629c9){try{_0x1629c9['close']();}catch(_0x160938){}_0x1629c9=null;}};return _0x231261['addEventListener'](_0x2435d0(0x396),_0x4770db),_0x231261['addEventListener'](_0x2435d0(0x352),_0x4770db),new Response(null,{'status':0x65,'webSocket':_0x4533a6});}async function handleXhttpProxy(_0x4ba52c,_0x561cb7){const _0x137034=_0x16aa35,_0x5e6cc7=_0x4ba52c[_0x137034(0x15f)][_0x137034(0x30f)](),_0x191ad1=await _0x5e6cc7[_0x137034(0x142)]();if(_0x191ad1['done'])return new Response(_0x137034(0x31d),{'status':0x190});const _0x3ad883=parseVlessHeader(_0x191ad1[_0x137034(0x246)]),_0x10c2e6=await openOutbound(_0x3ad883,_0x561cb7,_0x4ba52c['cf']&&_0x4ba52c['cf'][_0x137034(0x299)],!![]),_0x231acb=_0x10c2e6['writable'][_0x137034(0x14d)]();await _0x231acb[_0x137034(0x334)](_0x191ad1[_0x137034(0x246)][_0x137034(0x2b3)](_0x3ad883['headerLength'])),((async()=>{const _0x363d96=_0x137034;try{while(!![]){const {done:_0x191d6a,value:_0x4858d2}=await _0x5e6cc7['read']();if(_0x191d6a)break;await _0x231acb[_0x363d96(0x334)](_0x4858d2);}}catch(_0x35da34){}try{await _0x231acb['close']();}catch(_0x5301a2){}})());const _0x1f7e0f=new ReadableStream({async 'start'(_0xfef3b3){const _0x35cebe=_0x137034;_0xfef3b3['enqueue'](new Uint8Array([0x0,0x0]));const _0x3ea9cd=_0x10c2e6[_0x35cebe(0x161)]['getReader']();try{while(!![]){const {done:_0x38d502,value:_0x240a95}=await _0x3ea9cd['read']();if(_0x38d502)break;_0xfef3b3[_0x35cebe(0x27a)](_0x240a95);}}catch(_0x4bcaba){}try{_0xfef3b3[_0x35cebe(0x396)]();}catch(_0x3750dc){}try{_0x10c2e6[_0x35cebe(0x396)]();}catch(_0x16517f){}},'cancel'(){try{_0x10c2e6['close']();}catch(_0x973383){}}});return new Response(_0x1f7e0f,{'status':0xc8,'headers':{'content-type':_0x137034(0x20c),'x-accel-buffering':'no','cache-control':'no-store'}});}function extractCandidates(_0x231bf6){const _0x30a48c=_0x16aa35,_0x9bdb87=new Set(),_0xc87371=[],_0x2788c5=(_0x230f67,_0x4d9972,_0x42eaf9)=>{const _0x30d419=_0x351b;if(!isValidIp(_0x230f67))return;if(_0x9bdb87['has'](_0x230f67))return;_0x9bdb87[_0x30d419(0x38d)](_0x230f67),_0xc87371[_0x30d419(0x39c)]({'ip':_0x230f67,'port':_0x4d9972||0x1bb,'name':_0x42eaf9||''});};parseIPList(_0x231bf6)[_0x30a48c(0x2bd)](_0x57b868=>_0x2788c5(_0x57b868['ip'],_0x57b868['port'],_0x57b868[_0x30a48c(0x2d6)]));const _0x3abd54=/\b(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?\b/g;let _0x314066;while(_0x314066=_0x3abd54[_0x30a48c(0x26f)](_0x231bf6)){const {host:_0x336884,port:_0x11137c}=parseHostPort(_0x314066[0x0],0x1bb);if(_0x336884)_0x2788c5(_0x336884,_0x11137c,'');}const _0x892b6e=/[0-9a-fA-F:]+/g;while(_0x314066=_0x892b6e[_0x30a48c(0x26f)](_0x231bf6)){const _0xac8077=_0x314066[0x0];if(_0xac8077[_0x30a48c(0x266)](':')&&_0xac8077[_0x30a48c(0x237)](':')[_0x30a48c(0x28d)]>=0x3&&isValidIp(_0xac8077))_0x2788c5(_0xac8077,0x1bb,'');}return _0xc87371;}function extractDomains(_0x515641){const _0x54e1b9=_0x16aa35,_0x3ffc34=new Set(),_0x3d0bc3=[],_0x4cb637=/(?:\*\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}/gi;let _0x1d8778;while(_0x1d8778=_0x4cb637[_0x54e1b9(0x26f)](_0x515641)){const _0xe048b4=_0x1d8778[0x0][_0x54e1b9(0x2f3)]();!_0x3ffc34[_0x54e1b9(0x336)](_0xe048b4)&&(_0xe048b4[_0x54e1b9(0x266)](_0x54e1b9(0x11b))||_0xe048b4['includes'](_0x54e1b9(0x19d))||_0xe048b4[_0x54e1b9(0x266)](_0x54e1b9(0x1ac))||_0xe048b4[_0x54e1b9(0x266)](_0x54e1b9(0x191))||_0xe048b4[_0x54e1b9(0x315)](_0x54e1b9(0x2ed))||_0xe048b4['endsWith']('.top'))&&(_0x3ffc34[_0x54e1b9(0x38d)](_0xe048b4),_0x3d0bc3[_0x54e1b9(0x39c)](_0xe048b4));}return _0x3d0bc3['slice'](0x0,0xa);}async function collectCandidates(_0x4ec4ab){const _0x21214f=_0x16aa35;_0x4ec4ab=_0x4ec4ab||{};const _0x3adf4d=[],_0x3f3020={'preset':0x0,'presetErr':'','custom':0x0,'customErr':'','cidr':0x0},_0x112572=_0x40a1db=>{const _0x523589=_0x351b;if(_0x40a1db&&_0x40a1db['ip']&&isCloudflareIP(_0x40a1db['ip']))_0x3adf4d[_0x523589(0x39c)]({'ip':_0x40a1db['ip'],'port':_0x4ec4ab[_0x523589(0x26e)]||_0x40a1db[_0x523589(0x26e)]||0x1bb,'name':_0x40a1db[_0x523589(0x2d6)]||''});};if(_0x4ec4ab[_0x21214f(0x253)]&&OPTIMIZE_SOURCES[_0x4ec4ab[_0x21214f(0x253)]]){const _0x271525=await fetchTimeout(OPTIMIZE_SOURCES[_0x4ec4ab[_0x21214f(0x253)]]['url'],{'headers':{'User-Agent':_0x21214f(0x356)}},0x1770);if(_0x271525&&_0x271525['ok']){const _0x3fd50c=extractCandidates(await _0x271525[_0x21214f(0x106)]());_0x3fd50c[_0x21214f(0x2bd)](_0x112572),_0x3f3020[_0x21214f(0x1db)]=_0x3fd50c[_0x21214f(0x28d)];}else _0x3f3020[_0x21214f(0x242)]=_0x271525?_0x21214f(0x1df)+_0x271525[_0x21214f(0x1b8)]:_0x21214f(0x220);}if(_0x4ec4ab[_0x21214f(0x189)]){const _0x49f0a5=await fetchTimeout(_0x4ec4ab[_0x21214f(0x189)],{'headers':{'User-Agent':_0x21214f(0x356)}},0x1770);if(_0x49f0a5&&_0x49f0a5['ok']){const _0x55738f=extractCandidates(await _0x49f0a5['text']());_0x55738f['forEach'](_0x112572),_0x3f3020['custom']=_0x55738f[_0x21214f(0x28d)];}else _0x3f3020[_0x21214f(0x261)]=_0x49f0a5?_0x21214f(0x1df)+_0x49f0a5[_0x21214f(0x1b8)]:_0x21214f(0x220);}const _0x31095f=new Set(),_0x2047c8=[];for(const _0x41fa43 of _0x3adf4d){if(_0x31095f[_0x21214f(0x336)](_0x41fa43['ip']))continue;_0x31095f['add'](_0x41fa43['ip']),_0x2047c8[_0x21214f(0x39c)](_0x41fa43);}if(_0x4ec4ab[_0x21214f(0x318)]!==![]&&_0x2047c8['length']<(_0x4ec4ab[_0x21214f(0x2d9)]||0x14)){const _0x406827=(_0x4ec4ab[_0x21214f(0x2d9)]||0x14)-_0x2047c8[_0x21214f(0x28d)],_0x65c5cc=randomIPsFromCidrs(CLOUDFLARE_CIDRS,_0x406827*0x3);let _0x485a29=0x0;for(const _0x5cbc2b of _0x65c5cc){if(_0x485a29>=_0x406827)break;if(_0x31095f[_0x21214f(0x336)](_0x5cbc2b))continue;_0x31095f[_0x21214f(0x38d)](_0x5cbc2b),_0x2047c8[_0x21214f(0x39c)]({'ip':_0x5cbc2b,'port':_0x4ec4ab['port']||0x1bb,'name':''}),_0x485a29++;}_0x3f3020[_0x21214f(0x124)]=_0x485a29;}return{'candidates':_0x2047c8,'stats':_0x3f3020};}function testOneLatency(_0x566807,_0x2f6173,_0x772c93){return new Promise(_0x5daea5=>{const _0x2194aa=_0x351b,_0x1f5f20=Date[_0x2194aa(0x170)]();let _0x4c9483,_0x34c353=![];const _0x48cff2=(_0x216729,_0x3a6ea6)=>{const _0xa5c25b=_0x2194aa;if(_0x34c353)return;_0x34c353=!![],clearTimeout(_0x545d1a);try{if(_0x4c9483)_0x4c9483[_0xa5c25b(0x396)]();}catch(_0x48879d){}_0x5daea5({'ip':_0x566807,'port':_0x2f6173,'ok':_0x216729,'latency':_0x3a6ea6});},_0x545d1a=setTimeout(()=>_0x48cff2(![],-0x1),_0x772c93);try{_0x4c9483=connect({'hostname':_0x566807,'port':_0x2f6173});}catch(_0x49a35b){return _0x48cff2(![],-0x1);}_0x4c9483[_0x2194aa(0x1d2)][_0x2194aa(0x305)](()=>_0x48cff2(!![],Date['now']()-_0x1f5f20))[_0x2194aa(0x28b)](()=>_0x48cff2(![],-0x1));});}async function runLatencyTest(_0x441727,_0x34f59e,_0x24dd58){const _0x1ff0a9=_0x16aa35;_0x34f59e=Math[_0x1ff0a9(0x1e2)](0x1,Math[_0x1ff0a9(0x1d8)](0x32,Number(_0x34f59e)||0x5)),_0x24dd58=Math[_0x1ff0a9(0x1e2)](0x1f4,Number(_0x24dd58)||0x1388);const _0x5526f5=[];let _0x4f10a9=0x0;async function _0x3687f8(){const _0x1d8704=_0x1ff0a9;while(_0x4f10a9<_0x441727['length']){const _0x19a3ee=_0x441727[_0x4f10a9++],_0xa172d9=await testOneLatency(_0x19a3ee['ip'],_0x19a3ee[_0x1d8704(0x26e)],_0x24dd58);_0x5526f5['push'](_0xa172d9);}}return await Promise[_0x1ff0a9(0x16c)](Array[_0x1ff0a9(0x2eb)]({'length':_0x34f59e},_0x3687f8)),_0x5526f5['sort']((_0x2fb2cc,_0x2d69f2)=>(_0x2fb2cc[_0x1ff0a9(0x101)]<0x0?0x3b9aca00:_0x2fb2cc[_0x1ff0a9(0x101)])-(_0x2d69f2['latency']<0x0?0x3b9aca00:_0x2d69f2[_0x1ff0a9(0x101)])),_0x5526f5;}function xhttpPadding(_0x4a27e0){const _0x7b92ac=_0x16aa35,_0x29fb83=_0x4a27e0[_0x7b92ac(0x16a)]||'';return{'xPaddingObfsMode':!![],'xPaddingMethod':_0x7b92ac(0x158),'xPaddingPlacement':_0x7b92ac(0x29c),'xPaddingHeader':_0x29fb83[_0x7b92ac(0x105)](0x1,0x7),'xPaddingKey':'_'+_0x29fb83[_0x7b92ac(0x105)](0x19,0x1f)};}function vlessNode(_0x31acab,_0x4790da,_0x25333b,_0x15da21,_0x3ad9c1={}){const _0x47026e=_0x16aa35,_0x274ef7=_0x31acab[_0x47026e(0x172)],_0x17f853=_0x4790da[_0x47026e(0x266)](':')&&!_0x4790da['startsWith']('[')?'['+_0x4790da+']':_0x4790da,_0x30151b=!HTTP_PORTS[_0x47026e(0x336)](Number(_0x25333b)),_0x1ecf42=encodeURIComponent;let _0x12967c='encryption=none';if(_0x30151b)_0x12967c+=_0x47026e(0x277)+_0x1ecf42(_0x274ef7)+_0x47026e(0x1a3);else _0x12967c+=_0x47026e(0x309);_0x12967c+=_0x47026e(0x160)+_0x1ecf42(_0x274ef7);if(_0x3ad9c1['type']===_0x47026e(0x10b))_0x12967c+=_0x47026e(0x1a8),_0x12967c+=_0x47026e(0x14e)+_0x1ecf42(JSON['stringify'](xhttpPadding(_0x31acab)));else _0x12967c+='&type=ws';_0x12967c+=_0x47026e(0x382)+_0x1ecf42('/'+_0x31acab[_0x47026e(0x13d)]);if(_0x31acab['alpn'])_0x12967c+=_0x47026e(0x12a)+_0x1ecf42(_0x31acab[_0x47026e(0x331)]);return _0x31acab['ech']&&(_0x12967c+='&ech='+_0x1ecf42((_0x31acab['echHost']||_0x47026e(0x310))+'+'+(_0x31acab[_0x47026e(0x35a)]||'https://223.5.5.5/dns-query'))),_0x47026e(0x2c9)+_0x31acab['uuid']+'@'+_0x17f853+':'+_0x25333b+'?'+_0x12967c+'#'+encodeURIComponent(_0x15da21);}function trojanNode(_0x16531e,_0x38cec0,_0x85fc78,_0x40f707){const _0x4ebabb=_0x16aa35,_0x434cbf=_0x16531e[_0x4ebabb(0x172)],_0xc682b8=_0x38cec0['includes'](':')&&!_0x38cec0[_0x4ebabb(0x111)]('[')?'['+_0x38cec0+']':_0x38cec0,_0x5c61b9=encodeURIComponent;let _0x162e21='security=tls&sni='+_0x5c61b9(_0x434cbf)+_0x4ebabb(0xf8)+_0x5c61b9(_0x434cbf)+'&type=ws&path='+_0x5c61b9('/'+_0x16531e[_0x4ebabb(0x13d)]);if(_0x16531e[_0x4ebabb(0x331)])_0x162e21+=_0x4ebabb(0x12a)+_0x5c61b9(_0x16531e[_0x4ebabb(0x331)]);if(_0x16531e[_0x4ebabb(0x209)])_0x162e21+=_0x4ebabb(0x1ca)+_0x5c61b9((_0x16531e['echHost']||_0x4ebabb(0x310))+'+'+(_0x16531e['echDns']||_0x4ebabb(0x321)));return _0x4ebabb(0x288)+(_0x16531e[_0x4ebabb(0x292)]||_0x16531e['uuid'])+'@'+_0xc682b8+':'+_0x85fc78+'?'+_0x162e21+'#'+encodeURIComponent(_0x40f707);}const DNH_CACHE=new Map();function fetchTimeout(_0x63b1b4,_0x1c742b,_0x5aacb5){return new Promise(_0x2d6738=>{const _0x4b2729=_0x351b,_0x513d95=new AbortController(),_0x433f1a=setTimeout(()=>_0x513d95[_0x4b2729(0x303)](),_0x5aacb5);fetch(_0x63b1b4,Object[_0x4b2729(0x155)]({},_0x1c742b,{'signal':_0x513d95[_0x4b2729(0x12b)]}))[_0x4b2729(0x305)](_0x1440fc=>{clearTimeout(_0x433f1a),_0x2d6738(_0x1440fc);})['catch'](()=>{clearTimeout(_0x433f1a),_0x2d6738(null);});});}async function resolvePreferredDomains(_0x8cdbd7,_0x516103=0x64,_0x3549a3=0x12c,_0x4c7479=![],_0x1132f1=!![],_0x486d46=![]){const _0x52ea62=_0x16aa35,_0x125133=String(_0x8cdbd7||'')[_0x52ea62(0x237)](/[\n,;]+/)['map'](_0x538170=>_0x538170[_0x52ea62(0xfb)]()[_0x52ea62(0x2e1)](/^\*\./,''))['filter'](Boolean),_0x348510=Date[_0x52ea62(0x170)](),_0x3f368d=[_0x52ea62(0x15c),_0x52ea62(0x22a)],_0xe72e04=async(_0x3f4b1d,_0x55567c,_0x232419)=>{const _0x332a15=_0x52ea62,_0x37f80d=_0x3f368d[_0x332a15(0x238)](async _0x259eb7=>{const _0x4888f9=_0x332a15,_0x3ebfbc=await fetchTimeout(_0x259eb7+_0x4888f9(0x164)+encodeURIComponent(_0x3f4b1d)+'&type='+_0x55567c,{'headers':{'accept':_0x4888f9(0x113)}},0xfa0);if(!_0x3ebfbc||!_0x3ebfbc['ok'])throw new Error(_0x4888f9(0x2e5));const _0x310a13=await _0x3ebfbc[_0x4888f9(0x174)](),_0x77e43=(_0x310a13['Answer']||[])['filter'](_0x236474=>_0x236474[_0x4888f9(0x202)]===_0x232419&&(_0x55567c==='A'?/^\d+\.\d+\.\d+\.\d+$/['test'](_0x236474[_0x4888f9(0x34a)]):/^[0-9a-fA-F:]+$/[_0x4888f9(0xfd)](_0x236474[_0x4888f9(0x34a)])))[_0x4888f9(0x238)](_0x4a7a26=>_0x4a7a26[_0x4888f9(0x34a)]);if(!_0x77e43[_0x4888f9(0x28d)])throw new Error('no\x20answer');return _0x77e43;});try{return await Promise['any'](_0x37f80d);}catch(_0x46d273){return[];}},_0x5cfbce=await Promise[_0x52ea62(0x16c)](_0x125133[_0x52ea62(0x238)](async _0x3d8e5e=>{const _0x125146=_0x52ea62;if(_0x3d8e5e[_0x125146(0x266)]('://')){const _0x5a456c='url:'+_0x3d8e5e+(_0x4c7479?_0x125146(0x349):'')+(_0x1132f1?'':_0x125146(0x33a)),_0x1beb7f=DNH_CACHE[_0x125146(0x276)](_0x5a456c);if(_0x1beb7f&&_0x348510-_0x1beb7f['t']<0xa*0x3c*0x3e8)return _0x1beb7f[_0x125146(0x29f)]['slice'](0x0,_0x516103);try{const _0x19b18a=await fetchTimeout(_0x3d8e5e,{},0x1770);if(!_0x19b18a||!_0x19b18a['ok'])throw new Error('unreachable');const _0x331872=await _0x19b18a['text'](),_0x289244=new Set(),_0x47a5d1={},_0x120399=[];for(const _0x36e11e of _0x331872[_0x125146(0x237)](/\r?\n/)){if(_0x120399['length']>=_0x516103)break;const _0xffb2a2=_0x36e11e[_0x125146(0x20f)](/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?(?:#([^\r\n]*))?/);if(!_0xffb2a2)continue;const _0xa80159=_0xffb2a2[0x1],_0x681909=_0xffb2a2[0x2]?parseInt(_0xffb2a2[0x2]):0x1bb,_0x1ae30=_0xa80159+':'+_0x681909;if(_0x289244[_0x125146(0x336)](_0x1ae30))continue;if(_0x1132f1&&!isCloudflareIP(_0xa80159))continue;_0x289244['add'](_0x1ae30);const _0x12fef3=(_0xffb2a2[0x3]||'')[_0x125146(0xfb)]();if(_0x12fef3&&!/[\u4e00-\u9fa5]/[_0x125146(0xfd)](_0x12fef3)&&!_0x12fef3['includes']('|')){_0x120399['push']({'ip':_0xa80159,'port':_0x681909,'name':_0x12fef3});continue;}let _0x27cd5c='';if(_0xffb2a2[0x3]){const _0x2d93ec=_0xffb2a2[0x3]['match'](/^\s*[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}/);if(_0x2d93ec){const _0x26fd95=_0x2d93ec[0x0]['match'](/[\u4e00-\u9fa5]{2,5}/);if(_0x26fd95)_0x27cd5c=_0x26fd95[0x0];}else{const _0x316514=_0xffb2a2[0x3][_0x125146(0x237)]('|')[_0x125146(0x238)](_0x3d350d=>_0x3d350d[_0x125146(0xfb)]()),_0x3c7bd0=_0x316514[_0x125146(0x203)](_0x4a3ded=>/^[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}$/[_0x125146(0xfd)](_0x4a3ded));if(_0x3c7bd0){const _0x247916=_0x3c7bd0['match'](/[\u4e00-\u9fa5]{2,5}/);if(_0x247916)_0x27cd5c=_0x247916[0x0];}else{const _0xc49a7e=_0x316514['find'](_0x10ccd1=>/^[\u4e00-\u9fa5]{2,5}$/[_0x125146(0xfd)](_0x10ccd1)&&!/^(地区随机|随机优选|官方优选|优选|CF优选)$/['test'](_0x10ccd1));if(_0xc49a7e)_0x27cd5c=_0xc49a7e;else{const _0x1c8e8e=_0xffb2a2[0x3][_0x125146(0x20f)](/\b([A-Z]{2})\b/);if(_0x1c8e8e)_0x27cd5c=REGION_CN[_0x1c8e8e[0x1]]||_0x1c8e8e[0x1];}}}}if(_0x27cd5c)_0x47a5d1[_0x27cd5c]=(_0x47a5d1[_0x27cd5c]||0x0)+0x1,_0x120399[_0x125146(0x39c)]({'ip':_0xa80159,'port':_0x681909,'name':_0x27cd5c+'-'+String(_0x47a5d1[_0x27cd5c])['padStart'](0x2,'0')});else _0x120399[_0x125146(0x39c)]({'ip':_0xa80159,'port':_0x681909,'name':''});}if(!_0x120399['length']&&_0x4c7479){const _0x1adff4=(String(_0x3d8e5e)['match'](/\/([A-Z]{2})\//)||[])[0x1]||String(_0x3d8e5e)['replace'](/^https?:\/\//,'')[_0x125146(0x237)]('.')[0x0];if(REGION_CN[_0x1adff4]){const _0x338b8c=randomIPsFromCidrs(REACHABLE_CIDRS,_0x516103);_0x338b8c[_0x125146(0x2bd)]((_0x44dacd,_0x4eb76e)=>_0x120399['push']({'ip':_0x44dacd,'port':0x1bb,'name':REGION_CN[_0x1adff4]+'-'+String(_0x4eb76e+0x1)['padStart'](0x2,'0')}));}}return DNH_CACHE[_0x125146(0x362)](_0x5a456c,{'t':_0x348510,'ips':_0x120399}),_0x120399[_0x125146(0x105)]();}catch(_0x10e9f4){const _0xa03d1a=DNH_CACHE[_0x125146(0x276)](_0x5a456c);if(_0xa03d1a&&_0xa03d1a[_0x125146(0x29f)]&&_0xa03d1a['ips']['length'])return _0xa03d1a['ips'][_0x125146(0x105)](0x0,_0x516103);return[];}}if(!/^[a-z0-9.-]+\.[a-z]{2,}$/i['test'](_0x3d8e5e))return[];const _0x11248a=DNH_CACHE[_0x125146(0x276)](_0x3d8e5e);if(_0x11248a&&_0x348510-_0x11248a['t']<0xa*0x3c*0x3e8)return _0x11248a[_0x125146(0x29f)][_0x125146(0x105)](0x0,_0x516103)[_0x125146(0x238)]((_0x4d362e,_0x3b616f)=>({'ip':_0x4d362e,'port':0x1bb,'name':_0x3d8e5e+'-'+(_0x3b616f+0x1)}));const _0x37c950=await _0xe72e04(_0x3d8e5e,'A',0x1);let _0x310b97=_0x37c950[_0x125146(0x2e8)](isCloudflareIP);if(_0x486d46){const _0x17c653=await _0xe72e04(_0x3d8e5e,_0x125146(0x27b),0x1c);_0x310b97=[...new Set(_0x37c950[_0x125146(0x391)](_0x17c653))][_0x125146(0x2e8)](isCloudflareIP);}_0x310b97=_0x310b97['slice'](0x0,_0x516103);if(!_0x310b97[_0x125146(0x28d)]){if(_0x11248a&&_0x11248a[_0x125146(0x29f)]&&_0x11248a['ips']['length'])return _0x11248a[_0x125146(0x29f)]['slice'](0x0,_0x516103)[_0x125146(0x238)]((_0x3979de,_0x26c0ff)=>({'ip':_0x3979de,'port':0x1bb,'name':_0x3d8e5e+'-'+(_0x26c0ff+0x1)}));return[];}return DNH_CACHE[_0x125146(0x362)](_0x3d8e5e,{'t':_0x348510,'ips':_0x310b97}),_0x310b97[_0x125146(0x238)]((_0x152fcc,_0x1aac9e)=>({'ip':_0x152fcc,'port':0x1bb,'name':_0x3d8e5e+'-'+(_0x1aac9e+0x1)}));})),_0x4dc303=[];let _0x256863=0x0;while(_0x256863<_0x3549a3){let _0x3bf7e3=![];for(const _0x54b45e of _0x5cfbce){if(_0x256863>=_0x3549a3)break;_0x54b45e[_0x52ea62(0x28d)]&&(_0x4dc303[_0x52ea62(0x39c)](_0x54b45e[_0x52ea62(0x144)]()),_0x256863++,_0x3bf7e3=!![]);}if(!_0x3bf7e3)break;}return _0x4dc303;}function buildNodes(_0x2c2819,_0x538745=0x320,_0x5e557c=null){const _0x475737=_0x16aa35,_0x53e473=[],_0x4d3df3=new Set(),_0x95022e=_0x2c2819[_0x475737(0x131)]&&_0x2c2819[_0x475737(0x131)][_0x475737(0x2c2)]||'',_0x13741d=_0x95022e==='custom'&&!(_0x2c2819[_0x475737(0x131)]&&_0x2c2819['optimizer']['subIncludeDefault']),_0x30a50c=(_0x558881,_0x371cdf,_0x3d379c)=>{const _0x4c52f8=_0x475737;if(_0x53e473[_0x4c52f8(0x28d)]>=_0x538745)return;if(isValidIp(_0x558881)&&!isCloudflareIP(_0x558881)&&!_0x13741d)return;const _0x4937f0=_0x558881;if(_0x4d3df3[_0x4c52f8(0x336)](_0x4937f0))return;_0x4d3df3[_0x4c52f8(0x38d)](_0x4937f0);const _0x269d85=!HTTP_PORTS['has'](Number(_0x371cdf));if(_0x2c2819[_0x4c52f8(0x26d)]&&!_0x269d85)return;if(_0x2c2819[_0x4c52f8(0x28f)])_0x53e473[_0x4c52f8(0x39c)](vlessNode(_0x2c2819,_0x558881,_0x371cdf,_0x3d379c));if(_0x2c2819[_0x4c52f8(0x1ed)]&&_0x269d85)_0x53e473[_0x4c52f8(0x39c)](trojanNode(_0x2c2819,_0x558881,_0x371cdf,_0x3d379c));if(_0x2c2819['enableXhttp'])_0x53e473[_0x4c52f8(0x39c)](vlessNode(_0x2c2819,_0x558881,_0x371cdf,_0x3d379c,{'type':_0x4c52f8(0x10b)}));};if(_0x95022e==='random'){let _0x1fdf00=Math[_0x475737(0x1d8)](Math[_0x475737(0x1e2)](parseInt(_0x2c2819[_0x475737(0x131)][_0x475737(0x32e)])||0x10,0x1),Math[_0x475737(0x1d8)](0x63,_0x538745));if(_0x2c2819[_0x475737(0x1bc)]&&_0x2c2819[_0x475737(0x2a5)]!==![]){const _0x33e05b=parseInt(_0x2c2819['nodeLimitCount'])||0x0;if(_0x33e05b>0x0)_0x1fdf00=Math[_0x475737(0x1d8)](Math[_0x475737(0x1e2)](_0x1fdf00,_0x33e05b),_0x538745);}const _0x265b57=(_0x2c2819[_0x475737(0x28f)]?0x1:0x0)+(_0x2c2819[_0x475737(0x1ed)]?0x1:0x0)+(_0x2c2819[_0x475737(0x11f)]?0x1:0x0)||0x1;let _0x4d46f9=0x0;const _0x2b29e1=randomIPsFromCidrs(REACHABLE_CIDRS,Math['ceil'](_0x1fdf00/_0x265b57)*0x3);let _0xea7ca5=_0x2b29e1;if(_0x5e557c){const _0x1ba2bb=_0x2b29e1['filter'](_0x3665a8=>!_0x5e557c[_0x475737(0x336)](_0x3665a8)),_0x41a564=_0x2b29e1[_0x475737(0x2e8)](_0x469d6b=>_0x5e557c['has'](_0x469d6b));_0xea7ca5=[..._0x1ba2bb,..._0x41a564];}for(const _0xdbe4b5 of _0xea7ca5){if(_0x4d46f9>=_0x1fdf00)break;_0x2c2819[_0x475737(0x28f)]&&(_0x53e473[_0x475737(0x39c)](vlessNode(_0x2c2819,_0xdbe4b5,0x1bb,_0x475737(0x22d)+String(_0x4d46f9+0x1)[_0x475737(0x254)](0x2,'0'))),_0x4d46f9++);if(_0x4d46f9>=_0x1fdf00)break;_0x2c2819[_0x475737(0x1ed)]&&(_0x53e473[_0x475737(0x39c)](trojanNode(_0x2c2819,_0xdbe4b5,0x1bb,_0x475737(0x22d)+String(_0x4d46f9+0x1)[_0x475737(0x254)](0x2,'0'))),_0x4d46f9++);if(_0x4d46f9>=_0x1fdf00)break;_0x2c2819[_0x475737(0x11f)]&&(_0x53e473[_0x475737(0x39c)](vlessNode(_0x2c2819,_0xdbe4b5,0x1bb,_0x475737(0x22d)+String(_0x4d46f9+0x1)[_0x475737(0x254)](0x2,'0'),{'type':_0x475737(0x10b)})),_0x4d46f9++);}return _0x53e473;}const _0x10fc1d=String(_0x2c2819['preferredDomains']||'')[_0x475737(0x237)](/[\n,;]+/)[_0x475737(0x238)](_0x342380=>_0x342380['trim']())[_0x475737(0x2e8)](_0x4345c4=>_0x4345c4&&!_0x4345c4[_0x475737(0x266)](_0x475737(0x1d3)));_0x10fc1d[_0x475737(0x2bd)]((_0x519d03,_0x2a0649)=>{const _0xe7f56c=_0x475737,_0x181a8a=_0x519d03[_0xe7f56c(0x306)]('#'),_0x53e57d=(_0x181a8a>=0x0?_0x519d03['slice'](0x0,_0x181a8a):_0x519d03)[_0xe7f56c(0xfb)](),_0x18f68c=(_0x181a8a>=0x0?_0x519d03[_0xe7f56c(0x105)](_0x181a8a+0x1):'')['trim'](),_0x24537c=parseHostPort(_0x53e57d,0x1bb);if(_0x24537c[_0xe7f56c(0x172)]['startsWith']('*.'))return;_0x30a50c(_0x24537c['host'],_0x24537c[_0xe7f56c(0x26e)],_0x18f68c||_0xe7f56c(0x22d)+String(_0x2a0649+0x1)[_0xe7f56c(0x254)](0x2,'0'));}),(_0x2c2819[_0x475737(0x206)]||[])[_0x475737(0x2bd)]((_0x47e670,_0x75b6f3)=>{const _0x3dac3a=_0x475737;_0x30a50c(_0x47e670['ip'],_0x47e670[_0x3dac3a(0x26e)]||0x1bb,_0x47e670[_0x3dac3a(0x2d6)]||_0x3dac3a(0x22d)+String(_0x75b6f3+0x1)[_0x3dac3a(0x254)](0x2,'0'));});if(_0x95022e===_0x475737(0x2dd)&&!(_0x2c2819[_0x475737(0x131)]&&_0x2c2819[_0x475737(0x131)][_0x475737(0x2ef)]))return _0x53e473;!_0x10fc1d['length']&&!(_0x2c2819[_0x475737(0x206)]||[])[_0x475737(0x28d)]&&(parseIPList(BUILTIN_PREFERRED_IPS[_0x475737(0x294)]('\x0a'))['forEach'](_0x11b772=>_0x30a50c(_0x11b772['ip'],_0x11b772['port']||0x1bb,_0x11b772[_0x475737(0x2d6)]||'0')),BUILTIN_OFFICIAL_DOMAINS['forEach']((_0x293e24,_0x5aa27c)=>_0x30a50c(_0x293e24,0x1bb,_0x475737(0x2f7)+String(_0x5aa27c+0x1)[_0x475737(0x254)](0x2,'0'))));const _0x2694a2=Math['min'](Math[_0x475737(0x1e2)](parseInt(_0x2c2819['optimizer']&&_0x2c2819[_0x475737(0x131)]['fillCount']||0x0)||0x0,0x0),0x1388),_0x101668=Math['min'](_0x2694a2,_0x538745)-_0x4d3df3[_0x475737(0x11c)];if(_0x101668>0x0){const _0x395b32=randomIPsFromCidrs(REACHABLE_CIDRS,_0x101668*0x3),_0x2eb3e2=_0x5e557c?_0x395b32[_0x475737(0x2e8)](_0x29e7c2=>!_0x5e557c[_0x475737(0x336)](_0x29e7c2)):_0x395b32,_0x4c1aa9=_0x2eb3e2[_0x475737(0x28d)]>=_0x101668?_0x2eb3e2:_0x395b32;let _0x5cf1b0=0x0;for(const _0x12e6c2 of _0x4c1aa9){if(_0x53e473[_0x475737(0x28d)]>=_0x538745)break;_0x5cf1b0++,_0x53e473[_0x475737(0x39c)](vlessNode(_0x2c2819,_0x12e6c2,0x1bb,_0x475737(0x22d)+String(_0x5cf1b0)[_0x475737(0x254)](0x3,'0')));}}return _0x53e473;}function _0x351b(_0x3c69b2,_0x3a792d){const _0x3f3fed=_0x1be6();return _0x351b=function(_0x40269b,_0x257071){_0x40269b=_0x40269b-0xf4;let _0x3166a8=_0x3f3fed[_0x40269b];return _0x3166a8;},_0x351b(_0x3c69b2,_0x3a792d);}function parseNodeServer(_0x33990f){const _0x25e722=_0x16aa35,_0x3e8f78=_0x33990f[_0x25e722(0x306)]('@'),_0x385b57=_0x33990f[_0x25e722(0x306)]('?',_0x3e8f78),_0xd4ec4c=_0x385b57>_0x3e8f78&&_0x3e8f78>=0x0?_0x33990f['slice'](_0x3e8f78+0x1,_0x385b57):_0x33990f[_0x25e722(0x105)](_0x3e8f78+0x1);if(_0xd4ec4c[_0x25e722(0x111)]('[')){const _0xd8de66=_0xd4ec4c[_0x25e722(0x306)](']'),_0x335ad7=_0xd8de66>0x0?_0xd4ec4c[_0x25e722(0x105)](0x1,_0xd8de66):_0xd4ec4c,_0xf28d06=_0xd4ec4c['slice'](_0xd8de66+0x1),_0x129447=_0xf28d06['startsWith'](':')?parseInt(_0xf28d06[_0x25e722(0x105)](0x1)):0x1bb;return{'host':_0x335ad7,'port':isNaN(_0x129447)?0x1bb:_0x129447};}const _0x311e9b=_0xd4ec4c['lastIndexOf'](':');if(_0x311e9b>0x0){const _0x4e1a8f=parseInt(_0xd4ec4c[_0x25e722(0x105)](_0x311e9b+0x1));return{'host':_0xd4ec4c['slice'](0x0,_0x311e9b),'port':isNaN(_0x4e1a8f)?0x1bb:_0x4e1a8f};}return{'host':_0xd4ec4c,'port':0x1bb};}function getParam(_0x95ce3d,_0x52444f){const _0x23c82e=_0x16aa35,_0x125c49=_0x95ce3d[_0x23c82e(0x306)]('?');if(_0x125c49<0x0)return null;const _0x377195=_0x95ce3d[_0x23c82e(0x306)]('#',_0x125c49),_0x58897c=_0x377195>_0x125c49?_0x95ce3d['slice'](_0x125c49+0x1,_0x377195):_0x95ce3d[_0x23c82e(0x105)](_0x125c49+0x1);for(const _0x34d2d0 of _0x58897c['split']('&')){const _0x3d517a=_0x34d2d0['indexOf']('='),_0x584ab7=_0x3d517a>0x0?_0x34d2d0['slice'](0x0,_0x3d517a):_0x34d2d0;if(_0x584ab7===_0x52444f)return _0x3d517a>0x0?decodeURIComponent(_0x34d2d0[_0x23c82e(0x105)](_0x3d517a+0x1)):'';}return null;}function parseShareNode(_0x125967,_0x16fb7d){const _0x248791=_0x16aa35,{host:_0x2ed3a0,port:_0x16fef0}=parseNodeServer(_0x125967),_0x20744e=_0x125967[_0x248791(0x306)]('#');let _0x4b7232='节点'+(_0x16fb7d+0x1);if(_0x20744e>=0x0)try{_0x4b7232=decodeURIComponent(_0x125967[_0x248791(0x105)](_0x20744e+0x1))||_0x4b7232;}catch(_0x5fa593){}const _0x328cdb=_0x125967[_0x248791(0x306)]('@');let _0x387c9c='';if(_0x328cdb>=0x0){const _0x48c36e=_0x125967[_0x248791(0x306)]('://'),_0x3cb27a=_0x48c36e>=0x0?_0x48c36e+0x3:0x0;try{_0x387c9c=decodeURIComponent(_0x125967[_0x248791(0x105)](_0x3cb27a,_0x328cdb));}catch(_0x26a782){_0x387c9c=_0x125967['slice'](_0x3cb27a,_0x328cdb);}}const _0x158d6d=_0x125967[_0x248791(0x111)](_0x248791(0x288)),_0x1c2e6b=_0x158d6d||(getParam(_0x125967,_0x248791(0x2c6))||'tls')===_0x248791(0x269);return{'srv':_0x2ed3a0,'prt':_0x16fef0,'name':_0x4b7232,'user':_0x387c9c,'isTrojan':_0x158d6d,'tls':_0x1c2e6b};}const REGION_TAGS={'HK':['HK','香港'],'TW':['TW','台湾'],'US':['US','美国'],'SG':['SG',_0x16aa35(0x27f)],'JP':['JP','日本'],'KR':['KR','韩国'],'DE':['DE','德国']},ISP_TAGS={'移动':['移动','CM',_0x16aa35(0x18a)],'联通':['联通','CU',_0x16aa35(0xf5)],'电信':['电信','CT','CHINATELECOM']},FILTER_ISPS=['移动','联通','电信'],FILTER_IPTYPES=[_0x16aa35(0x1bb),_0x16aa35(0x1d6)];function filterNodes(_0x8f03e4,_0x38b92a){const _0x1e4d0a=_0x16aa35;if(!_0x38b92a||!_0x38b92a[_0x1e4d0a(0x36f)]&&!_0x38b92a[_0x1e4d0a(0x1c5)]&&!_0x38b92a['isp'])return _0x8f03e4;const _0x278fad=_0x38b92a['region']||_0x1e4d0a(0x16c),_0x150260=_0x38b92a['ipType']||FILTER_IPTYPES,_0x2fc0b2=_0x38b92a[_0x1e4d0a(0x1ef)]||FILTER_ISPS,_0x431611=_0x8f03e4[_0x1e4d0a(0x238)](_0x3eae94=>{const _0x22051e=_0x1e4d0a,{host:_0x1dc837}=parseNodeServer(_0x3eae94);let _0x164b02='';try{const _0x2b8ffe=_0x3eae94[_0x22051e(0x306)]('#');if(_0x2b8ffe>=0x0)_0x164b02=decodeURIComponent(_0x3eae94['slice'](_0x2b8ffe+0x1)||'');}catch(_0x2d8906){_0x164b02='';}return{'host':_0x1dc837,'name':_0x164b02,'up':_0x164b02[_0x22051e(0x1f6)]()};}),_0x1308b8=_0x431611[_0x1e4d0a(0x2ce)](_0x539048=>_0x539048['up']&&Object[_0x1e4d0a(0x227)](ISP_TAGS)[_0x1e4d0a(0x2ce)](_0x2d3977=>(ISP_TAGS[_0x2d3977]||[_0x2d3977])[_0x1e4d0a(0x2ce)](_0x1c89a1=>_0x539048['up'][_0x1e4d0a(0x266)](_0x1c89a1[_0x1e4d0a(0x1f6)]())))),_0x1774c5=(_0x2a8377,_0x524893,_0x297aa1)=>{const _0x3de6aa=_0x1e4d0a,_0x2be58c=_0x2a8377!==_0x3de6aa(0x16c)?REGION_TAGS[_0x2a8377]||[]:null,_0x414b24=_0x297aa1[_0x3de6aa(0x28d)]>0x0&&_0x297aa1['length']<FILTER_ISPS[_0x3de6aa(0x28d)];return _0x8f03e4[_0x3de6aa(0x2e8)]((_0xef89ea,_0x3b447d)=>{const _0x449dd7=_0x3de6aa,_0x5d0b68=_0x431611[_0x3b447d],_0x5162be=_0x5d0b68[_0x449dd7(0x172)]['indexOf'](':')>=0x0;if(!_0x5d0b68[_0x449dd7(0x2d6)])return![];if(_0x2be58c&&!_0x2be58c[_0x449dd7(0x2ce)](_0x18605c=>_0x5d0b68['up'][_0x449dd7(0x266)](_0x18605c['toUpperCase']()))){if(!/^(优选IP|域名)-\d+/[_0x449dd7(0xfd)](_0x5d0b68[_0x449dd7(0x2d6)]))return![];}if(_0x524893[_0x449dd7(0x28d)]===0x1){if(_0x524893[0x0]===_0x449dd7(0x1bb)&&_0x5162be)return![];if(_0x524893[0x0]==='IPv6'&&!_0x5162be)return![];}if(_0x414b24&&_0x1308b8&&!_0x297aa1[_0x449dd7(0x2ce)](_0x4425ae=>(ISP_TAGS[_0x4425ae]||[_0x4425ae])[_0x449dd7(0x2ce)](_0x3f13ee=>_0x5d0b68['up'][_0x449dd7(0x266)](_0x3f13ee[_0x449dd7(0x1f6)]()))))return![];return!![];});};let _0x1d1d34=_0x1774c5(_0x278fad,_0x150260,_0x2fc0b2);if(!_0x1d1d34[_0x1e4d0a(0x28d)])_0x1d1d34=_0x1774c5(_0x278fad,_0x150260,FILTER_ISPS);if(!_0x1d1d34[_0x1e4d0a(0x28d)])_0x1d1d34=_0x1774c5(_0x278fad,FILTER_IPTYPES,FILTER_ISPS);if(!_0x1d1d34[_0x1e4d0a(0x28d)])_0x1d1d34=_0x1774c5('all',FILTER_IPTYPES,FILTER_ISPS);return _0x1d1d34;}function yamlVal(_0x15573d){const _0x2ee8c6=_0x16aa35;if(typeof _0x15573d===_0x2ee8c6(0x1cf)||typeof _0x15573d===_0x2ee8c6(0x394))return String(_0x15573d);const _0x48ff89=String(_0x15573d);return/^[\w.\-/\u4e00-\u9fa5]+$/['test'](_0x48ff89)?_0x48ff89:JSON[_0x2ee8c6(0x313)](_0x48ff89);}function clashProxyYaml(_0x4c1fa8){const _0x23c61d=_0x16aa35,_0x3bf0ad=[];_0x3bf0ad[_0x23c61d(0x39c)](_0x23c61d(0x397)+yamlVal(_0x4c1fa8[_0x23c61d(0x2d6)])),_0x3bf0ad[_0x23c61d(0x39c)]('\x20\x20\x20\x20type:\x20'+_0x4c1fa8[_0x23c61d(0x202)]),_0x3bf0ad[_0x23c61d(0x39c)](_0x23c61d(0x192)+yamlVal(_0x4c1fa8[_0x23c61d(0x10d)])),_0x3bf0ad[_0x23c61d(0x39c)]('\x20\x20\x20\x20port:\x20'+_0x4c1fa8[_0x23c61d(0x26e)]);if(_0x4c1fa8[_0x23c61d(0x202)]===_0x23c61d(0x39a))_0x3bf0ad['push'](_0x23c61d(0x385)+yamlVal(_0x4c1fa8[_0x23c61d(0x16a)]));else _0x3bf0ad['push'](_0x23c61d(0x32a)+yamlVal(_0x4c1fa8[_0x23c61d(0x19f)]));_0x3bf0ad[_0x23c61d(0x39c)](_0x23c61d(0x32f)+_0x4c1fa8[_0x23c61d(0x359)]),_0x3bf0ad[_0x23c61d(0x39c)](_0x23c61d(0x2ea));_0x4c1fa8[_0x23c61d(0x269)]&&(_0x3bf0ad[_0x23c61d(0x39c)](_0x23c61d(0xf7)),_0x3bf0ad['push'](_0x23c61d(0x36e)),_0x3bf0ad[_0x23c61d(0x39c)](_0x23c61d(0x1fe)+yamlVal(_0x4c1fa8[_0x23c61d(0x251)])),_0x3bf0ad[_0x23c61d(0x39c)]('\x20\x20\x20\x20client-fingerprint:\x20chrome'),_0x4c1fa8[_0x23c61d(0x186)]&&(_0x3bf0ad[_0x23c61d(0x39c)]('\x20\x20\x20\x20tls-opts:'),_0x3bf0ad[_0x23c61d(0x39c)](_0x23c61d(0x21c)),_0x3bf0ad[_0x23c61d(0x39c)]('\x20\x20\x20\x20\x20\x20\x20\x20enable:\x20true')));if(_0x4c1fa8[_0x23c61d(0x359)]==='ws')_0x3bf0ad['push'](_0x23c61d(0x2d4)),_0x3bf0ad[_0x23c61d(0x39c)](_0x23c61d(0x2b7)+yamlVal(_0x4c1fa8[_0x23c61d(0x116)][_0x23c61d(0x13d)])),_0x3bf0ad[_0x23c61d(0x39c)](_0x23c61d(0x13c)),_0x3bf0ad[_0x23c61d(0x39c)](_0x23c61d(0x280)+yamlVal(_0x4c1fa8[_0x23c61d(0x116)][_0x23c61d(0x365)][_0x23c61d(0x20d)]));else{if(_0x4c1fa8[_0x23c61d(0x359)]===_0x23c61d(0x10b)){const _0x95f551=_0x4c1fa8[_0x23c61d(0x100)];_0x3bf0ad[_0x23c61d(0x39c)](_0x23c61d(0x328)),_0x3bf0ad[_0x23c61d(0x39c)]('\x20\x20\x20\x20\x20\x20path:\x20'+yamlVal(_0x95f551[_0x23c61d(0x13d)])),_0x3bf0ad[_0x23c61d(0x39c)](_0x23c61d(0x1f5)+yamlVal(_0x95f551[_0x23c61d(0x19e)])),_0x3bf0ad[_0x23c61d(0x39c)](_0x23c61d(0x13c)),_0x3bf0ad['push'](_0x23c61d(0x280)+yamlVal(_0x95f551[_0x23c61d(0x365)]['Host'])),_0x3bf0ad[_0x23c61d(0x39c)](_0x23c61d(0x378)+yamlVal(_0x95f551[_0x23c61d(0x188)])),_0x3bf0ad[_0x23c61d(0x39c)](_0x23c61d(0x345)+yamlVal(_0x95f551[_0x23c61d(0x115)])),_0x3bf0ad['push'](_0x23c61d(0x187)+yamlVal(_0x95f551[_0x23c61d(0x218)])),_0x3bf0ad[_0x23c61d(0x39c)](_0x23c61d(0x31a)+yamlVal(_0x95f551[_0x23c61d(0x2bf)])),_0x3bf0ad['push'](_0x23c61d(0x374)+yamlVal(_0x95f551[_0x23c61d(0x21f)]));}}return _0x3bf0ad[_0x23c61d(0x294)]('\x0a');}function generateClash(_0x3f3b2c,_0x24e270){const _0x19505e=_0x16aa35,_0x4f8e41=_0x3f3b2c['host'],_0x378b27='/'+_0x3f3b2c[_0x19505e(0x13d)],_0x5202b3=new Set(),_0x3a7dc2=_0x24e270['map'](_0x1d23ca=>{const _0x20b617=_0x19505e,{user:_0x2cb4c5,srv:_0x115b1f,prt:_0x2b75d3,name:_0xf95944,isTrojan:_0x646012,tls:_0x54a8ae}=parseShareNode(_0x1d23ca,0x0);let _0x35adc2=_0xf95944;const _0x224a2e=getParam(_0x1d23ca,'type')||'ws';if(_0x5202b3[_0x20b617(0x336)](_0x35adc2)){const _0xc17932=_0x646012?'T':_0x224a2e===_0x20b617(0x10b)?'X':'W';let _0x26ec1a=_0x35adc2+'·'+_0xc17932,_0x1d737b=0x2;while(_0x5202b3['has'](_0x26ec1a)){_0x26ec1a=_0x35adc2+'·'+_0xc17932+_0x1d737b,_0x1d737b++;}_0x35adc2=_0x26ec1a;}_0x5202b3[_0x20b617(0x38d)](_0x35adc2);const _0x2fe923={'name':_0x35adc2,'server':_0x115b1f,'port':_0x2b75d3,'udp':!![],..._0x54a8ae?{'tls':!![],'skip-cert-verify':![],'servername':_0x4f8e41,'client-fingerprint':'chrome'}:{},..._0x3f3b2c[_0x20b617(0x209)]&&_0x54a8ae?{'tls-opts':{'ech':{'enable':!![]}}}:{}};if(_0x646012)return{..._0x2fe923,'type':_0x20b617(0x12f),'password':_0x2cb4c5,'network':'ws','ws-opts':{'path':_0x378b27,'headers':{'Host':_0x4f8e41}}};if(_0x224a2e===_0x20b617(0x10b)){let _0xba4e3={};try{_0xba4e3=JSON[_0x20b617(0x2f2)](getParam(_0x1d23ca,_0x20b617(0x10a))||'{}');}catch(_0xd209d9){}return{..._0x2fe923,'type':_0x20b617(0x39a),'uuid':_0x2cb4c5,'network':_0x20b617(0x10b),'xhttp-opts':{'path':_0x378b27,'mode':_0x20b617(0x149),'headers':{'Host':_0x4f8e41},'x-padding-obfs-mode':_0xba4e3[_0x20b617(0x2f0)]!==undefined?_0xba4e3[_0x20b617(0x2f0)]:!![],'x-padding-method':_0xba4e3[_0x20b617(0x37e)]||_0x20b617(0x158),'x-padding-placement':_0xba4e3['xPaddingPlacement']||_0x20b617(0x29c),'x-padding-header':_0xba4e3[_0x20b617(0x311)]||'','x-padding-key':_0xba4e3[_0x20b617(0x23f)]||''}};}return{..._0x2fe923,'type':'vless','uuid':_0x2cb4c5,'network':'ws','ws-opts':{'path':_0x378b27,'headers':{'Host':_0x4f8e41}}};});_0x3a7dc2[_0x19505e(0x2b0)]((_0x4e01fa,_0x1da132)=>(_0x4e01fa['port']===0x1bb?0x0:0x1)-(_0x1da132[_0x19505e(0x26e)]===0x1bb?0x0:0x1));const _0x5c39c1=_0x19505e(0x323)+_0x3a7dc2[_0x19505e(0x238)](_0x1c0dee=>clashProxyYaml(_0x1c0dee))[_0x19505e(0x294)]('\x0a')+'\x0a'+CLASH_TEMPLATE+'\x0a';return _0x5c39c1;}function generateSingbox(_0x287607,_0x32a6ac){const _0x3c448b=_0x16aa35,_0xc40eff=_0x287607[_0x3c448b(0x172)],_0x4b3148='/'+_0x287607[_0x3c448b(0x13d)],_0x22b918=_0x32a6ac[_0x3c448b(0x238)]((_0x5eb2fb,_0x3b0f2f)=>{const _0x2b6ab5=_0x3c448b,{user:_0x3cf82f,srv:_0x7b9ac8,prt:_0x7477b1,name:_0xaa8d4f,isTrojan:_0x371da6,tls:_0x36fc53}=parseShareNode(_0x5eb2fb,_0x3b0f2f),_0x220101=getParam(_0x5eb2fb,_0x2b6ab5(0x202))||'ws',_0x3eeaae=_0x36fc53?{'enabled':!![],'server_name':_0xc40eff,'utls':{'enabled':!![],'fingerprint':_0x2b6ab5(0x312)}}:{'enabled':![]},_0xa587ea=_0x220101===_0x2b6ab5(0x10b)?{'type':_0x2b6ab5(0x10b),'mode':_0x2b6ab5(0x149),'path':_0x4b3148}:{'type':'ws','path':_0x4b3148,'headers':{'Host':_0xc40eff}};if(_0x371da6)return{'type':'trojan','tag':_0xaa8d4f,'server':_0x7b9ac8,'server_port':_0x7477b1,'password':_0x3cf82f,'tls':_0x3eeaae,'transport':_0xa587ea};return{'type':_0x2b6ab5(0x39a),'tag':_0xaa8d4f,'server':_0x7b9ac8,'server_port':_0x7477b1,'uuid':_0x3cf82f,'flow':'','packet_encoding':_0x2b6ab5(0x34b),'tls':_0x3eeaae,'transport':_0xa587ea};}),_0x136eea=_0x22b918['map'](_0x5a292c=>_0x5a292c[_0x3c448b(0x28e)]),_0xe79563={'log':{'level':'info'},'dns':{'servers':[{'address':_0x3c448b(0x249)},{'address':'119.29.29.29'}]},'inbounds':[{'type':'mixed','tag':_0x3c448b(0x33d),'listen':_0x3c448b(0x225),'listen_port':0x820}],'outbounds':[..._0x22b918,{'type':_0x3c448b(0x1c3),'tag':_0x3c448b(0x1c3)},{'type':_0x3c448b(0x1c1),'tag':_0x3c448b(0x1c1)},{'type':_0x3c448b(0x314),'tag':_0x3c448b(0x157),'outbounds':_0x136eea},{'type':_0x3c448b(0x314),'tag':_0x3c448b(0x298),'outbounds':[_0x3c448b(0x1c3)]},{'type':_0x3c448b(0x314),'tag':_0x3c448b(0x217),'outbounds':['🚀\x20节点选择','🌐\x20全球直连']}],'route':{'rules':[{'geoip':['cn'],'outbound':'direct'},{'outbound':_0x3c448b(0x217)}]}};return JSON[_0x3c448b(0x313)](_0xe79563,null,0x2);}function generateSurge(_0x16dd60,_0x214f18){const _0x5e5941=_0x16aa35,_0x54290e=_0x16dd60[_0x5e5941(0x172)],_0x385726='/'+_0x16dd60['path'],_0x2bf1ac=_0x214f18[_0x5e5941(0x238)]((_0x3fb6d,_0x2c33a3)=>{const _0x3ab8c4=_0x5e5941,{user:_0x679f79,srv:_0x3c823d,prt:_0x193301,name:_0x36f5a0,isTrojan:_0x5f2f23,tls:_0x1b14ae}=parseShareNode(_0x3fb6d,_0x2c33a3),_0x1b11d1=_0x1b14ae?_0x3ab8c4(0x19c)+_0x54290e:_0x3ab8c4(0x2fa);return _0x5f2f23?_0x36f5a0+_0x3ab8c4(0x1f0)+_0x3c823d+',\x20'+_0x193301+_0x3ab8c4(0x329)+_0x679f79+_0x3ab8c4(0x36a)+_0x385726+_0x3ab8c4(0x2b1)+_0x54290e+_0x1b11d1:_0x36f5a0+_0x3ab8c4(0x1c8)+_0x3c823d+',\x20'+_0x193301+_0x3ab8c4(0x2b8)+_0x679f79+_0x3ab8c4(0x36a)+_0x385726+_0x3ab8c4(0x2b1)+_0x54290e+_0x1b11d1;});return'#!MANAGED-CONFIG\x0a[General]\x0aloglevel\x20=\x20notify\x0adns-server\x20=\x20223.5.5.5,\x20119.29.29.29\x0a\x0a[Proxy]\x0a'+_0x2bf1ac['join']('\x0a')+_0x5e5941(0x221)+_0x2bf1ac['map'](_0x12b042=>_0x12b042[_0x5e5941(0x237)]('\x20=\x20')[0x0])[_0x5e5941(0x294)](',\x20')+_0x5e5941(0x196);}function generateLoon(_0x27a3a7,_0x4e90bd){const _0x550620=_0x16aa35,_0xfd4142=_0x27a3a7['host'],_0x1e9af8='/'+_0x27a3a7['path'],_0x11c69c=_0x4e90bd[_0x550620(0x238)]((_0x241c4e,_0x10d1e4)=>{const _0x2e61c0=_0x550620,{user:_0x4700d2,srv:_0x35684b,prt:_0x4109f3,name:_0x43f104,isTrojan:_0x1713a0,tls:_0x4f1344}=parseShareNode(_0x241c4e,_0x10d1e4),_0x52bdee=_0x4f1344?_0x2e61c0(0x19c)+_0xfd4142:_0x2e61c0(0x2fa);return _0x1713a0?_0x43f104+_0x2e61c0(0x1f0)+_0x35684b+',\x20'+_0x4109f3+_0x2e61c0(0x329)+_0x4700d2+_0x2e61c0(0x36a)+_0x1e9af8+',\x20ws-headers=Host:'+_0xfd4142+_0x52bdee:_0x43f104+'\x20=\x20vless,\x20'+_0x35684b+',\x20'+_0x4109f3+_0x2e61c0(0x2b8)+_0x4700d2+',\x20ws=true,\x20ws-path='+_0x1e9af8+_0x2e61c0(0x2b1)+_0xfd4142+_0x52bdee;}),_0x17ca24=_0x11c69c[_0x550620(0x238)](_0x3e797d=>_0x3e797d[_0x550620(0x237)]('\x20=\x20')[0x0])[_0x550620(0x294)](',\x20');return'[General]\x0adns-server\x20=\x20223.5.5.5,\x20119.29.29.29\x0a\x0a[Proxy]\x0a'+_0x11c69c[_0x550620(0x294)]('\x0a')+_0x550620(0x221)+_0x17ca24+'\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20'+_0x17ca24+_0x550620(0x1ab);}function generateQuanX(_0x80287d,_0x5a9e23){const _0x5556aa=_0x16aa35,_0x1ad3c0=_0x80287d[_0x5556aa(0x172)],_0x5ee78f='/'+_0x80287d[_0x5556aa(0x13d)],_0x26cdb9=_0x5a9e23[_0x5556aa(0x238)]((_0x5b9970,_0x397529)=>{const _0x18e5b6=_0x5556aa,{user:_0x2350ce,srv:_0x5e5b76,prt:_0x449f50,name:_0x39c6a9}=parseShareNode(_0x5b9970,_0x397529);if(_0x5b9970[_0x18e5b6(0x111)]('trojan://'))return'trojan='+_0x5e5b76+':'+_0x449f50+_0x18e5b6(0x329)+_0x2350ce+',\x20over-tls=true,\x20tls-host='+_0x1ad3c0+',\x20obfs=wss,\x20obfs-host='+_0x1ad3c0+_0x18e5b6(0x30c)+_0x5ee78f+_0x18e5b6(0x335)+_0x39c6a9;const _0x4b85e1=(getParam(_0x5b9970,_0x18e5b6(0x2c6))||'tls')===_0x18e5b6(0x269);return _0x18e5b6(0x257)+_0x5e5b76+':'+_0x449f50+_0x18e5b6(0x25c)+_0x2350ce+_0x18e5b6(0x2d3)+(_0x4b85e1?_0x18e5b6(0x34c):'ws')+_0x18e5b6(0x2d8)+_0x1ad3c0+_0x18e5b6(0x30c)+_0x5ee78f+(_0x4b85e1?_0x18e5b6(0x2fe):'')+_0x18e5b6(0x332)+_0x39c6a9;}),_0x3d8523=_0x5a9e23['map']((_0x554375,_0x5af0a4)=>{const _0x1f54e5=_0x5556aa,_0x302150=_0x554375['indexOf']('#');if(_0x302150<0x0)return'节点'+(_0x5af0a4+0x1);try{return decodeURIComponent(_0x554375[_0x1f54e5(0x105)](_0x302150+0x1))||'节点'+(_0x5af0a4+0x1);}catch(_0x424d65){return'节点'+(_0x5af0a4+0x1);}})['join'](',\x20');return'[general]\x0anetwork_check_url=http://www.gstatic.com/generate_204\x0aserver_check_url=http://www.gstatic.com/generate_204\x0adns_exclusion_list=*.cmpassport.com,\x20*.qq.com,\x20*.weibo.com,\x20*.icloud.com\x0a[dns]\x0aserver=223.5.5.5\x0aserver=119.29.29.29\x0a[server_local]\x0a'+_0x26cdb9[_0x5556aa(0x294)]('\x0a')+_0x5556aa(0x2bc)+_0x3d8523+_0x5556aa(0x150);}async function generateSubscription(_0x46ecfc,_0x16b871,_0x45b21c,_0x1ceefe,_0x46863a){const _0x5604bf=_0x16aa35,_0x4a04b0=Object[_0x5604bf(0x155)]({},_0x46ecfc,{'host':_0x46ecfc[_0x5604bf(0x172)]||new URL(_0x16b871)[_0x5604bf(0x275)]}),_0x26f157=_0x46ecfc[_0x5604bf(0x131)]&&_0x46ecfc[_0x5604bf(0x131)][_0x5604bf(0x2c2)]||'';let _0x14bceb=[];const _0x1ece0d=!!(_0x46ecfc['filter']&&_0x46ecfc['filter'][_0x5604bf(0x1c5)]&&_0x46ecfc[_0x5604bf(0x2e8)][_0x5604bf(0x1c5)]['length']===0x1&&_0x46ecfc[_0x5604bf(0x2e8)][_0x5604bf(0x1c5)][0x0]===_0x5604bf(0x1d6)),_0x517c34=parseIPList(BUILTIN_PREFERRED_IPS[_0x5604bf(0x294)]('\x0a'))[_0x5604bf(0x238)](_0xcfe473=>({'ip':_0xcfe473['ip'],'port':_0xcfe473[_0x5604bf(0x26e)]||0x1bb,'name':_0xcfe473[_0x5604bf(0x2d6)]||_0x5604bf(0x22d)+String(BUILTIN_PREFERRED_IPS['indexOf'](_0xcfe473)+0x1)[_0x5604bf(0x254)](0x2,'0')}));if(_0x26f157===_0x5604bf(0x2dd)){const _0x594f5e=!!(_0x46ecfc['optimizer']&&_0x46ecfc[_0x5604bf(0x131)]['subIncludeDefault']);_0x14bceb=await resolvePreferredDomains(_0x46ecfc['preferredDomains']||'',0x28,0x12c,_0x594f5e,_0x594f5e,_0x1ece0d);if(_0x594f5e){const _0x16e1e6=await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS,0x28,0xf0,![],!![],_0x1ece0d),_0x2a949c=new Set(_0x16e1e6[_0x5604bf(0x238)](_0x52b901=>_0x52b901['ip']));_0x14bceb=[..._0x16e1e6,..._0x14bceb['filter'](_0x4ba0eb=>!_0x2a949c[_0x5604bf(0x336)](_0x4ba0eb['ip']))],_0x4a04b0[_0x5604bf(0x206)]=[..._0x4a04b0[_0x5604bf(0x206)]||[],..._0x517c34];if(!_0x4a04b0[_0x5604bf(0x131)])_0x4a04b0[_0x5604bf(0x131)]={};_0x4a04b0[_0x5604bf(0x131)][_0x5604bf(0x13b)]=Math[_0x5604bf(0x1e2)](parseInt(_0x4a04b0[_0x5604bf(0x131)]['fillCount'])||0x0,0x320);}}else{if(_0x26f157===''){_0x14bceb=await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS,0x64,0x12c,![],!![],_0x1ece0d),_0x4a04b0['preferredIPs']=[..._0x4a04b0[_0x5604bf(0x206)]||[],..._0x517c34];if(!_0x4a04b0[_0x5604bf(0x131)])_0x4a04b0[_0x5604bf(0x131)]={};_0x4a04b0[_0x5604bf(0x131)][_0x5604bf(0x13b)]=Math['max'](parseInt(_0x4a04b0[_0x5604bf(0x131)][_0x5604bf(0x13b)])||0x0,0x1e);}}const _0x4db3cb=_0x46ecfc[_0x5604bf(0x1c0)]&&_0x46ecfc[_0x5604bf(0x1c0)][_0x5604bf(0x11c)]?_0x46ecfc[_0x5604bf(0x1c0)]:null;if(_0x14bceb[_0x5604bf(0x28d)]){let _0x52209c=_0x14bceb;if(_0x4db3cb){const _0x161876=_0x14bceb[_0x5604bf(0x2e8)](_0x479c3f=>!_0x4db3cb['has'](_0x479c3f['ip'])),_0x567ed3=_0x14bceb[_0x5604bf(0x2e8)](_0x1ec57a=>_0x4db3cb['has'](_0x1ec57a['ip']));_0x52209c=[..._0x161876,..._0x567ed3];}const _0x34fde1=(_0x4a04b0[_0x5604bf(0x206)]||[])[_0x5604bf(0x28d)];_0x52209c=_0x52209c['map']((_0xba3041,_0x3a713a)=>/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}-\d+$/[_0x5604bf(0xfd)](_0xba3041[_0x5604bf(0x2d6)]||'')?Object[_0x5604bf(0x155)]({},_0xba3041,{'name':'优选IP-'+String(_0x34fde1+_0x3a713a+0x1)[_0x5604bf(0x254)](0x2,'0')}):_0xba3041),_0x4a04b0[_0x5604bf(0x206)]=[..._0x4a04b0['preferredIPs']||[],..._0x52209c];}_0x1ceefe=(_0x1ceefe||'')[_0x5604bf(0x2f3)]();const _0x27e84a=(_0x45b21c||'')[_0x5604bf(0x2f3)](),_0x2c309c=[_0x5604bf(0x127),_0x5604bf(0x11d),_0x5604bf(0x371),_0x5604bf(0x256),_0x5604bf(0x2d7),_0x5604bf(0x265),_0x5604bf(0x255)][_0x5604bf(0x266)](_0x27e84a)||/clash|singbox|sing-box|surge|loon|quantumult/['test'](_0x1ceefe);let _0x4f45aa=_0x2c309c?0x12c:0x320;if(_0x26f157===_0x5604bf(0x2dd)&&_0x46ecfc[_0x5604bf(0x131)]&&_0x46ecfc['optimizer'][_0x5604bf(0x2ef)])_0x4f45aa=_0x2c309c?Math[_0x5604bf(0x1e2)](_0x4f45aa,0x12c):Math[_0x5604bf(0x1e2)](_0x4f45aa,0x320);if(_0x46ecfc[_0x5604bf(0x2a5)]===![])_0x4f45aa=0x2710;if(_0x46ecfc[_0x5604bf(0x1bc)]&&_0x46ecfc['polling']!==![]){const _0x292171=parseInt(_0x46ecfc[_0x5604bf(0x1ce)])||0x0;if(_0x292171>0x0)_0x4f45aa=Math['min'](_0x292171,0x3e8);}const _0x3e2e98=_0x26f157==='random'?Object[_0x5604bf(0x155)]({},_0x46ecfc[_0x5604bf(0x2e8)],{'region':_0x5604bf(0x16c)}):_0x46ecfc['filter'];let _0x5c75b6=filterNodes(buildNodes(_0x4a04b0,_0x4f45aa,_0x4db3cb),_0x3e2e98);if(_0x46ecfc['nodeLimit']&&_0x46ecfc[_0x5604bf(0x2a5)]!==![]&&_0x26f157&&_0x5c75b6[_0x5604bf(0x28d)]<_0x4f45aa){const _0x76ae64=_0x4f45aa-_0x5c75b6[_0x5604bf(0x28d)],_0x513d87=randomIPsFromCidrs(REACHABLE_CIDRS,_0x76ae64*0x3),_0x44207b=_0x4db3cb?_0x513d87[_0x5604bf(0x2e8)](_0x426059=>!_0x4db3cb['has'](_0x426059)):_0x513d87,_0x5755da=_0x44207b[_0x5604bf(0x28d)]>=_0x76ae64?_0x44207b:_0x513d87;let _0x34f50a=0x0;for(const _0xd3d277 of _0x5755da){if(_0x5c75b6[_0x5604bf(0x28d)]>=_0x4f45aa)break;_0x34f50a++,_0x5c75b6[_0x5604bf(0x39c)](vlessNode(_0x4a04b0,_0xd3d277,0x1bb,_0x5604bf(0x22d)+String(_0x34f50a)[_0x5604bf(0x254)](0x3,'0')));}}if(_0x5c75b6['length']>_0x4f45aa)_0x5c75b6[_0x5604bf(0x28d)]=_0x4f45aa;const _0xc3c932=[],_0x1a1db4=new Set();for(const _0x331dfa of _0x5c75b6){try{const {host:_0x2e3e09}=parseNodeServer(_0x331dfa);isValidIp(_0x2e3e09)&&!_0x1a1db4[_0x5604bf(0x336)](_0x2e3e09)&&(_0x1a1db4[_0x5604bf(0x38d)](_0x2e3e09),_0xc3c932['push'](_0x2e3e09));}catch(_0x41af6d){}}let _0x29216f,_0x28c974;if(_0x27e84a===_0x5604bf(0x127))_0x29216f=_0x5604bf(0x2e4),_0x28c974=generateClash(_0x4a04b0,_0x5c75b6);else{if(_0x27e84a===_0x5604bf(0x11d)||_0x27e84a==='sing-box')_0x29216f=_0x5604bf(0x38a),_0x28c974=generateSingbox(_0x4a04b0,_0x5c75b6);else{if(_0x27e84a===_0x5604bf(0x256))_0x29216f=_0x5604bf(0x163),_0x28c974=generateSurge(_0x4a04b0,_0x5c75b6);else{if(_0x27e84a===_0x5604bf(0x2d7))_0x29216f=_0x5604bf(0x163),_0x28c974=generateLoon(_0x4a04b0,_0x5c75b6);else{if(_0x27e84a===_0x5604bf(0x265)||_0x27e84a===_0x5604bf(0x255))_0x29216f=_0x5604bf(0x163),_0x28c974=generateQuanX(_0x4a04b0,_0x5c75b6);else{if(_0x27e84a===_0x5604bf(0x145)||_0x27e84a===_0x5604bf(0x376)||_0x27e84a==='shadowrocket'||_0x27e84a===_0x5604bf(0x10e)||_0x27e84a===_0x5604bf(0x213))_0x29216f='text/plain',_0x28c974=_0x5c75b6['join']('\x0a');else{if(_0x1ceefe[_0x5604bf(0x266)](_0x5604bf(0x127))||_0x1ceefe['includes'](_0x5604bf(0x213)))_0x29216f=_0x5604bf(0x2e4),_0x28c974=generateClash(_0x4a04b0,_0x5c75b6);else{if(_0x1ceefe['includes'](_0x5604bf(0x371)))_0x29216f='application/json',_0x28c974=generateSingbox(_0x4a04b0,_0x5c75b6);else{if(_0x1ceefe[_0x5604bf(0x266)](_0x5604bf(0x256)))_0x29216f=_0x5604bf(0x163),_0x28c974=generateSurge(_0x4a04b0,_0x5c75b6);else{if(_0x1ceefe[_0x5604bf(0x266)]('loon'))_0x29216f=_0x5604bf(0x163),_0x28c974=generateLoon(_0x4a04b0,_0x5c75b6);else _0x1ceefe[_0x5604bf(0x266)](_0x5604bf(0x23d))?(_0x29216f=_0x5604bf(0x163),_0x28c974=generateQuanX(_0x4a04b0,_0x5c75b6)):(_0x29216f=_0x5604bf(0x163),_0x28c974=_0x5c75b6['join']('\x0a'));}}}}}}}}}return{'type':_0x29216f,'body':_0x28c974,'issued':_0xc3c932};}const PANEL_HTML=String[_0x16aa35(0x117)]`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CFNext · 管理面板</title>
<script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"></script>
<style>
:root{--bg:#0d1117;--card:#161b22;--card2:#1c2230;--line:#2d333b;--txt:#e6edf3;--dim:#8b949e;--acc:#4f9dff;--ok:#3fb950;--warn:#d29922;--err:#f85149}
[data-theme='light']{--bg:#f6f8fa;--card:#ffffff;--card2:#f0f3f6;--line:#d0d7de;--txt:#1f2328;--dim:#656d76;--acc:#0969da;--ok:#1a7f37;--warn:#9a6700;--err:#cf222e}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--bg);color:var(--txt);font-family:"PingFang SC","Microsoft YaHei",system-ui,sans-serif;font-size:14px;line-height:1.6}
a{color:var(--acc);text-decoration:none}
.wrap{max-width:1080px;margin:0 auto;padding:16px}
header{display:flex;align-items:center;gap:12px;padding:14px 0;border-bottom:1px solid var(--line);margin-bottom:16px}
.logo{width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,#4f9dff,#6f5bff);display:flex;align-items:center;justify-content:center;font-weight:800;color:#fff;font-size:13px;letter-spacing:-0.5px}
.logo span{transform:rotate(-12deg)}
header h1{font-size:18px;font-weight:700}
header .sub{color:var(--dim);font-size:12px}
nav{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:18px}
nav button{background:var(--card);color:var(--dim);border:1px solid var(--line);padding:8px 16px;border-radius:8px;cursor:pointer;font-size:13px;transition:.15s}
nav button:hover{color:var(--txt);border-color:var(--acc)}
nav button.on{background:var(--acc);color:#fff;border-color:var(--acc);font-weight:600}
.tab{display:none}
.tab.on{display:block}
.card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px;margin-bottom:14px}
.card h2{font-size:15px;margin-bottom:14px;display:flex;align-items:center;gap:8px}
.card h2 .tag{font-size:11px;color:var(--dim);font-weight:400}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.proto-row{display:flex;align-items:center;gap:12px;padding:10px 14px;background:var(--card2);border:1px solid var(--line);border-radius:10px;margin-bottom:8px}
.proto-row span{font-size:13px}
.proto-row .switch{margin:0}
.chk-row{display:flex;flex-wrap:wrap;gap:10px}
.chk-groups{display:flex;align-items:center;gap:8px 16px;flex-wrap:wrap}
.chk-group{display:inline-flex;align-items:center;gap:7px}
.chk-group .chk-gt{font-size:13px;color:var(--dim);white-space:nowrap}
.chk-group .chk{display:inline-flex;align-items:center;gap:4px;font-size:14px;color:var(--txt);cursor:pointer;white-space:nowrap}
.chk-group .chk input{width:auto;height:auto;accent-color:var(--acc);margin:0;padding:0}
.chk-group .chk:has(input:checked){color:var(--acc);font-weight:600}
@media(max-width:760px){.grid,.grid3{grid-template-columns:1fr}}
.field{margin-bottom:12px}
.field label{display:block;font-size:12px;color:var(--dim);margin-bottom:5px}
.field input,.field select,.field textarea{width:100%;background:var(--card2);border:1px solid var(--line);color:var(--txt);border-radius:8px;padding:9px 11px;font-size:13px;outline:none}
.field input:focus,.field select:focus,.field textarea:focus{border-color:var(--acc)}
.field textarea{resize:vertical;font-family:ui-monospace,Consolas,monospace;font-size:12px}
.field .hint{font-size:11px;color:var(--dim);margin-top:4px}
.row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
.switch{position:relative;width:44px;height:24px;display:inline-block;flex:none}
.switch input{opacity:0;width:0;height:0}
.switch .sl{position:absolute;inset:0;background:var(--card2);border:1px solid var(--line);border-radius:12px;transition:.15s;cursor:pointer}
.switch .sl:before{content:"";position:absolute;width:16px;height:16px;left:3px;top:3px;background:var(--dim);border-radius:50%;transition:.15s}
.switch input:checked + .sl{background:var(--acc);border-color:var(--acc)}
.switch input:checked + .sl:before{transform:translateX(20px);background:#fff}
.btn{background:var(--card2);border:1px solid var(--line);color:var(--txt);padding:8px 16px;border-radius:8px;cursor:pointer;font-size:13px;transition:.15s}
.btn:hover{border-color:var(--acc);color:var(--acc)}
.btn.primary{background:var(--acc);border-color:var(--acc);color:#fff;font-weight:600}
.btn.danger{background:var(--err);border-color:var(--err);color:#fff;font-weight:600}
.btn.danger:hover{background:#c62828;border-color:#c62828;color:#fff}
.btn.sm{padding:5px 10px;font-size:12px}
.btn.dirty{outline:2px solid var(--warn)}
.msg{padding:10px 14px;border-radius:8px;margin:10px 0;font-size:13px;display:none}
.msg.show{display:block}
.msg.info{background:rgba(79,157,255,.12);color:var(--acc);border:1px solid rgba(79,157,255,.35)}
.msg.ok{background:rgba(63,185,80,.12);color:var(--ok);border:1px solid rgba(63,185,80,.35)}
.msg.err{background:rgba(248,81,73,.12);color:var(--err);border:1px solid rgba(248,81,73,.35)}
table{width:100%;border-collapse:collapse;font-size:13px}
th,td{padding:9px 10px;text-align:left;border-bottom:1px solid var(--line)}
th{color:var(--dim);font-weight:500;font-size:12px}
td .ip{font-family:ui-monospace,Consolas,monospace}
.badge{display:inline-block;padding:2px 9px;border-radius:20px;font-size:11px;background:var(--card2);border:1px solid var(--line)}
.badge.g{color:var(--ok);border-color:var(--ok)}
.badge.r{color:var(--err);border-color:var(--err)}
.kv{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed var(--line);font-size:13px}
.kv:last-child{border-bottom:none}
.kv .k{color:var(--dim)}
.kv .v{font-family:ui-monospace,Consolas,monospace;word-break:break-all;text-align:right;max-width:70%}
.toast{position:fixed;top:16px;right:16px;z-index:99;background:var(--card2);border:1px solid var(--line);border-left:4px solid var(--acc);padding:11px 18px;border-radius:8px;font-size:13px;box-shadow:0 6px 24px rgba(0,0,0,.4);transform:translateX(120%);transition:.25s}
.toast.show{transform:translateX(0)}
.toast.ok{border-left-color:var(--ok)}
.toast.err{border-left-color:var(--err)}
.fbar{position:fixed;bottom:18px;right:18px;display:flex;flex-direction:column;gap:8px;z-index:50}
.fbar .btn{box-shadow:0 6px 20px rgba(0,0,0,.45)}
.loading{text-align:center;color:var(--dim);padding:40px}
pre.code{background:#0b0e14;border:1px solid var(--line);border-radius:8px;padding:12px;overflow:auto;font-size:11.5px;line-height:1.5;max-height:340px;font-family:ui-monospace,Consolas,monospace}
.center{text-align:center}
.mt{margin-top:14px}
#qrWrap{display:none;text-align:center;margin-top:10px}
#qrWrap canvas,#qrWrap img{margin:0 auto}
.qrbox{background:#fff;display:inline-block;padding:10px;border-radius:8px;margin-top:8px}
code.hl{background:var(--card2);padding:2px 6px;border-radius:5px;font-family:ui-monospace,Consolas,monospace;font-size:12px}
</style>
</head>
<body>
<div class="wrap">
<header>
  <div class="logo"><span>CF</span></div>
  <div>
    <h1>CFNext</h1>
    <div class="sub">Cloudflare 代理管理面板 · 全新编写</div>
  </div>
  <div style="margin-left:auto;font-size:12px;color:var(--dim);display:flex;align-items:center;gap:8px"><button id='themeBtn' class='btn sm' onclick='toggleTheme()' style='font-size:14px;padding:2px 8px'>🌙</button><span id="hdrInfo">加载中…</span></div>
</header>

<nav id="nav">
  <button data-tab="overview" class="on">总览</button>
  <button data-tab="nodes">节点配置</button>
  <button data-tab="pick">优选器</button>
  <button data-tab="help">关于项目</button>
</nav>

<!-- 总览 -->
<div class="tab on" id="tab-overview">
  <div class="card">
    <h2>快速开始</h2>
    <div id="wdwarn" style="display:none;background:rgba(242,85,73,.12);border:1px solid rgba(242,85,73,.4);color:#ff9c98;border-radius:8px;padding:8px 12px;font-size:12px;margin-bottom:10px">检测到当前通过 *.workers.dev 访问。该域名大陆直连常被阻断，下发的节点 SNI 取自访问域名，会导致客户端真连接延时全部 -1。请到 Cloudflare Workers 绑定自定义域名后，用自定义域名访问面板与订阅。</div>
    <div class="grid3">
      <div class="card" style="margin:0">
        <h2>1. 免配置使用（小白专属）</h2>
        <p style="color:var(--dim);font-size:13px">部署即可用，直接点击下方复制订阅链接导入客户端。</p>
      </div>
      <div class="card" style="margin:0">
        <h2>2. 配置协议使用</h2>
        <p style="color:var(--dim);font-size:13px">根据需要在节点配置选项中配置 VLESS / Trojan / XHTTP 协议、节点数量控制、TLS、ECH，保存后生效。</p>
      </div>
      <div class="card" style="margin:0">
        <h2>3. 优选方式使用</h2>
        <p style="color:var(--dim);font-size:13px">在优选器选项中将订阅模式改为【自定义订阅（支持汇聚）】或【随机优选模式（官方接口）】进行使用，【自定义订阅（支持汇聚）】模式内置 6 个在线源（可根据需求增删），在线优选需开启【自定义订阅（支持汇聚）】选项后方可使用。</p>
      </div>
    </div>
  </div>

  <div class="card">
    <h2>地区与筛选</h2>
    <div class="grid">
      <div class="field" style="display:flex;flex-direction:column">
        <label>地区选择</label>
        <select id="fl-region" style="max-width:280px" onchange="markDirty();makeSub(false)">
          <option value="all">全部节点</option>
          <option value="HK">HK 香港</option>
          <option value="TW">TW 台湾</option>
          <option value="US">US 美国</option>
          <option value="SG">SG 新加坡</option>
          <option value="JP">JP 日本</option>
          <option value="KR">KR 韩国</option>
          <option value="DE">DE 德国</option>
        </select>
        <p class="hint" style="color:var(--dim);font-size:12px;margin-top:auto;padding-top:5px">节点名称含地区标记（HK/香港、TW/台湾、US/美国…）即仅下发该地区</p>
      </div>
      <div class="field" style="display:flex;flex-direction:column">
        <label>筛选设置</label>
        <div class="chk-groups">
          <div class="chk-group">
            <span class="chk-gt">IP类型</span>
            <label class="chk"><input type="checkbox" id="fl-ipv4" checked onchange="markDirty()"> IPv4</label>
            <label class="chk"><input type="checkbox" id="fl-ipv6" checked onchange="markDirty()"> IPv6</label>
          </div>
          <div class="chk-group">
            <span class="chk-gt">运营商</span>
            <label class="chk"><input type="checkbox" id="fl-isp-mobile" checked onchange="markDirty()"> 移动</label>
            <label class="chk"><input type="checkbox" id="fl-isp-unicom" checked onchange="markDirty()"> 联通</label>
            <label class="chk"><input type="checkbox" id="fl-isp-telecom" checked onchange="markDirty()"> 电信</label>
          </div>
        </div>
        <p class="hint" style="color:var(--dim);font-size:12px;margin-top:auto;padding-top:5px">取消勾选即过滤；IP 类型按地址、运营商按名称匹配</p>
      </div>
    </div>
  </div>

  <div class="card">
    <h2>订阅地址</h2>
    <div class="field">
      <label>客户端格式</label>
      <select id="subFmt" onchange="makeSub(false)">
        <option value="auto">自动识别（UA）</option>
        <option value="clash">Clash YAML</option>
        <option value="singbox">Sing-box JSON</option>
        <option value="surge">Surge</option>
        <option value="loon">Loon</option>
        <option value="quanx">Quantumult X</option>
        <option value="v2ray">v2ray / 通用链接</option>
      </select>
    </div>
    <div class="field">
      <label>订阅链接</label>
      <div class="row">
        <input id="subUrl" readonly style="flex:1">
        <button class="btn" onclick="copySub()">复制</button>
        <button class="btn" onclick="showQRCode()">二维码</button>
        <button class="btn primary" onclick="downloadSub()">下载</button>
      </div>
      <div id="qrWrap"></div>
    </div>
  </div>

  <div class="card">
    <h2>运行状态</h2>
    <div id="statusBox"><div class="loading">加载中…</div></div>
  </div>
</div>

<!-- 节点配置 -->
<div class="tab" id="tab-nodes">
  <div class="card">
    <h2>基础配置</h2>
    <div class="grid">
      <div class="field"><label>面板路径</label><input id="f-path" placeholder="留空使用 UUID"></div>
      <div class="field"><label>管理密码（留空无需登录）</label><input id="f-admin" type="password" placeholder="可选"></div>
    </div>
    <div class="grid">
      <div class="field"><label>VLESS UUID</label><input id="f-uuid" placeholder="留空自动生成"></div>
      <div class="field"><label>自定义 SNI / Host（留空用 Worker 域名）</label><input id="f-host" placeholder="your.domain.com"></div>
    </div>
    <div class="hint" style="margin:0;font-size:11px;color:var(--dim)">UUID 为 VLESS 用户认证 ID；面板路径为访问面板的 URL 路径，留空时与 UUID 相同。</div>
  </div>

  <div class="card">
    <h2>节点配置</h2>
    <div class="grid">
      <div class="field"><label>ALPN（留空由客户端协商）</label><select id="f-alpn">
        <option value="">自动</option>
        <option value="h3">h3</option>
        <option value="h2">h2</option>
        <option value="http/1.1">http/1.1</option>
        <option value="h3,h2">h3,h2</option>
        <option value="h2,http/1.1">h2,http/1.1</option>
        <option value="h3,h2,http/1.1">h3,h2,http/1.1</option>
      </select></div>
      <div class="field"><label>TLS 控制（开启仅下发 TLS 端口节点）</label>
        <select id="f-tlsOnly">
          <option value="false">关闭</option>
          <option value="true">开启</option>
        </select>
      </div>
    </div>
    <div class="grid" style="margin-bottom:0">
      <div class="field" style="margin-bottom:0"><label>节点数量控制（开启后限制下发节点总数）</label>
        <select id="f-nodeLimit" onchange="onNodeLimit()">
          <option value="false">关闭</option>
          <option value="true">开启</option>
        </select>
      </div>
      <div class="field" id="f-nodeLimitWrap" style="margin-bottom:0;display:none"><label>下发节点数量</label>
        <input id="f-nodeLimitCount" type="number" min="1" max="800" value="100">
        <p class="hint">开启后最多下发该数量的节点</p>
      </div>
      <div class="field" style="margin-bottom:0"><label>轮询机制（开启后每次更新订阅下发不同节点）</label>
        <select id="f-polling" onchange="markDirty()">
          <option value="true">开启</option>
          <option value="false">关闭</option>
        </select>
        <p class="hint">开启：Clash节点上限：300/V2rayN节点上限：800，更新订阅覆盖原有下发节点；关闭：忽略轮询与数量限制，一次性下发全部节点</p>
      </div>
    </div>
  </div>

  <div class="card">
    <h2>ECH 配置</h2>
    <div class="grid">
      <div class="field" style="margin-bottom:0"><label>ECH 加密</label>
        <select id="f-ech">
          <option value="false">关闭</option>
          <option value="true">开启</option>
        </select>
        <p class="hint">关闭使用默认 ECH 配置，开启 ECH 加密 TLS 握手隐藏 SNI</p>
      </div>
      <div class="field" style="margin-bottom:0"><label>自定义 ECH 域名</label>
        <input id="f-echHost" placeholder="cloudflare-ech.com">
        <p class="hint">ECH 域名留空用默认</p>
      </div>
    </div>
    <div class="grid">
      <div class="field" style="margin-bottom:0"><label>自定义 ECH DNS</label>
        <input id="f-echDns" placeholder="https://223.5.5.5/dns-query">
        <p class="hint">关闭用客户端默认 DNS，开启自定义 DoH 获取 ECH 配置；地址留空用默认</p>
      </div>
      <div class="field" style="margin-bottom:0"></div>
    </div>
  </div>

  <div class="card">
    <h2>协议开关</h2>
    <div class="proto-row"><label class="switch"><input type="checkbox" id="f-enableVless"><span class="sl"></span></label><span>启用 VLESS 协议（默认开启）</span></div>
    <div class="proto-row"><label class="switch"><input type="checkbox" id="f-enableTrojan"><span class="sl"></span></label><span>启用 Trojan 协议（不支持Mihomo客户端）</span></div>
    <div class="proto-row"><label class="switch"><input type="checkbox" id="f-enableXhttp"><span class="sl"></span></label><span>启用 xhttp 协议（需勾选本项并绑定自定义域名）</span></div>
    <div class="field" style="margin-top:10px"><label>Trojan 密码（留空用 UUID）</label><input id="f-trojanPassword" placeholder="Trojan 密码"></div>
  </div>

  <div class="card">
    <h2>落地与出站</h2>
    <div class="grid">
      <div class="field"><label>反代/落地 IP（留空使用内置地区反代，填写后优先，格式 host 或 host:port）</label><input id="f-proxyIP" placeholder="留空使用内置中继"></div>
      <div class="field"><label>出站代理（可选，socks5:// / http:// 或 host:port）</label><input id="f-outboundProxy" placeholder="socks5://user:pass@1.2.3.4:1080"></div>
    </div>
    <div class="field"><label>出站方式</label><select id="f-outboundMode">
      <option value="">默认（优先代理，失败直连）</option>
      <option value="no">直连优先（no）</option>
      <option value="only">仅走代理（only）</option>
    </select></div>
  </div>
</div>

<!-- 优选器 -->
<div class="tab" id="tab-pick">
  <div class="card">
    <h2>在线优选</h2>
    <div class="field">
      <label>数据源</label>
      <select id="o-source">
        <option value="wetest_v4">微测网 IPv4</option>
        <option value="wetest_v6">微测网 IPv6</option>
        <option value="bestcf">优选 IP 列表</option>
        <option value="hostmonit">HostMonit 优选</option>
        <option value="cidr">内置 CF 地址段</option>
        <option value="custom">自定义 URL</option>
      </select>
    </div>
    <div class="field" id="o-customWrap" style="display:none"><label>自定义数据源 URL</label><input id="o-sourceURL" placeholder="https://.../ip.txt"></div>
    <div class="grid3">
      <div class="field" style="grid-column:span 3"><label>测速端口（本地→目标测速）</label>
        <select id="o-portSel" onchange="onPortSel()">
          <optgroup label="HTTPS">
            <option value="443">443</option>
            <option value="2053">2053</option>
            <option value="2083">2083</option>
            <option value="2087">2087</option>
            <option value="2096">2096</option>
            <option value="8443">8443</option>
          </optgroup>
          <optgroup label="HTTP">
            <option value="80">80</option>
            <option value="8080">8080</option>
            <option value="8880">8880</option>
            <option value="2052">2052</option>
            <option value="2082">2082</option>
            <option value="2086">2086</option>
            <option value="2095">2095</option>
          </optgroup>
          <option value="custom">自定义…</option>
        </select>
        <input id="o-portCustom" style="display:none;margin-top:8px" placeholder="输入端口号">
      </div>
      <div class="field"><label>并发线程（1-50）</label><input id="o-threads" value="5"></div>
      <div class="field"><label>候选数量</label><input id="o-count" value="20"></div>
      <div class="field"><label>随机补足数量（0 关闭）</label><input id="o-fillCount" value="0"></div>
    </div>
    <div class="row">
      <label class="switch"><input type="checkbox" id="o-useCidr" checked><span class="sl"></span></label>
      <span style="font-size:13px">不足时补充随机 Cloudflare IP</span>
      <button class="btn primary" onclick="runPick()">开始优选</button>
      <button class="btn" onclick="addAllBest()">全部加入最优</button>
    </div>
    <div class="msg" id="oMsg"></div>
  </div>

  <div class="card">
    <h2>测速结果</h2>
    <table><thead><tr><th>IP:端口</th><th>延迟</th><th>状态</th><th>操作</th></tr></thead>
    <tbody id="oTableBody"></tbody></table>
  </div>

  <div class="card">
    <h2>优选节点</h2>
    <div class="field">
      <label>订阅模式</label>
      <div class="row">
        <select id="o-subMode" onchange="onSubMode()" style="flex:1">
          <option value="">关闭（使用面板默认）</option>
          <option value="custom">自定义订阅（支持汇聚）</option>
          <option value="random">随机优选模式（官方接口）</option>
        </select>
        <select id="o-subIncludeDefault" style="flex:1">
          <option value="0">关闭（仅自定义节点）</option>
          <option value="1">开启（追加内置及默认节点）</option>
        </select>
      </div>
      <div class="hint">订阅模式：选择生成优选节点的方式；选择「自定义订阅（支持汇聚）」时，右侧开关控制是否同时下发内置优选池及默认 6 条地区源节点——关闭仅下发自定义节点，开启则默认地区与自定义节点合并下发</div>
    </div>
    <div class="field" id="sm-custom">
      <label>优选节点（域名 / 优选API / IP，每行一个，IP 格式 IP:端口#名称）</label>
      <textarea id="f-preferred" rows="5" placeholder="*.cloudflare.182682.xyz&#10;104.25.246.53:443#香港&#10;https://bestcf.pages.dev/random-region/HK/100.txt"></textarea>
      <div class="hint">开启「自定义订阅」后生效；域名与优选 API 保存后自动解析下发；点击上方测速结果「加入优选」自动填入 IP；保存用右上「保存全部」按钮</div>
      <button class="btn sm" style="margin-top:6px" onclick="fetchDomains()">拉取微测网优选域名</button>
    </div>
    <div class="field" id="sm-random" style="display:none">
      <label>随机优选数量（1-99）</label>
      <input id="o-subRandomCount" value="16" type="number" min="1" max="99">
      <div class="hint">从 Cloudflare 地址段随机生成指定数量的优选节点下发（不经域名解析）</div>
    </div>
  </div>
</div>

<!-- 关于项目 -->
<div class="tab" id="tab-help">
  <div class="card">
    <h2>特别鸣谢</h2>
    <p style="color:var(--dim);font-size:13px">本面板为全新独立编写，功能与接口参考以下开源项目：</p>
    <table>
      <tr><th>参考仓库</th><th>地址</th></tr>
      <tr><td>cmliu/edgetunnel</td><td><a href="https://github.com/cmliu/edgetunnel" target="_blank" rel="noopener">https://github.com/cmliu/edgetunnel</a></td></tr>
      <tr><td>zizifn/edgetunnel</td><td><a href="https://github.com/zizifn/edgetunnel" target="_blank" rel="noopener">https://github.com/zizifn/edgetunnel</a></td></tr>
      <tr><td>6Kmfi6HP/EDtunnel</td><td><a href="https://github.com/6Kmfi6HP/EDtunnel" target="_blank" rel="noopener">https://github.com/6Kmfi6HP/EDtunnel</a></td></tr>
      <tr><td>IonRh/Cloudflare-BestIP</td><td><a href="https://github.com/IonRh/Cloudflare-BestIP" target="_blank" rel="noopener">https://github.com/IonRh/Cloudflare-BestIP</a></td></tr>
    </table>
  </div>
  <div class="card">
    <h2>调用 API 接口</h2>
    <table>
      <tr><th>用途</th><th>接口</th></tr>
      <tr><td>微测网 IPv4 优选</td><td>https://www.wetest.vip/page/cloudflare/address_v4.html</td></tr>
      <tr><td>微测网 IPv6 优选</td><td>https://www.wetest.vip/page/cloudflare/address_v6.html</td></tr>
      <tr><td>微测网 优选域名</td><td>https://www.wetest.vip/page/cloudflare/cname.html</td></tr>
      <tr><td>优选 IP 列表</td><td>https://cf.090227.xyz/ip.164746.xyz</td></tr>
      <tr><td>HostMonit 优选</td><td>https://stock.hostmonit.com/CloudFlareYes</td></tr>
      <tr><td>优选 API（bestcf 随机地区）</td><td>https://bestcf.pages.dev/random-region/{HK|TW|JP|SG|US|KR}/100.txt</td></tr>
      <tr><td>DoH 解析（Cloudflare）</td><td>https://cloudflare-dns.com/dns-query</td></tr>
      <tr><td>DoH 解析（阿里）</td><td>https://dns.alidns.com/resolve</td></tr>
      <tr><td>DoH 解析（腾讯）</td><td>https://doh.pub/dns-query</td></tr>
    </table>
  </div>
  <div class="card">
    <h2>相关链接</h2>
    <p style="color:var(--dim);font-size:13px">YouTube @数字派：<a href="https://www.youtube.com/@PAI_CN" target="_blank" rel="noopener">https://www.youtube.com/@PAI_CN</a></p>
    <p style="color:var(--dim);font-size:13px">Telegram 交流群：<a href="https://t.me/SZ_PAI" target="_blank" rel="noopener">https://t.me/SZ_PAI</a></p>
  </div>
</div>

</div>
<div class="fbar"><button class="btn danger" id="resetBtn" onclick="resetAll()">重置</button>
<button class="btn primary" id="saveBtn" onclick="saveAll()">保存全部</button></div>
<div class="toast" id="toast"></div>

<script>
var APIPATH = location.pathname;
var CFG = null;
function $(id){ return document.getElementById(id); }
function api(p, opts){
  return fetch(APIPATH + '/api/' + p, opts).then(function(r){ return r.json(); });
}
var toastTimer = null;
function toast(t, ty){
  var el = $('toast');
  el.textContent = t;
  el.className = 'toast show ' + (ty || '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ el.className = 'toast'; }, 2600);
}
function showMsg(id, t, ty){
  var el = $(id);
  el.textContent = t;
  el.className = 'msg show ' + (ty || 'info');
}
function copyText(t){
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(t).then(function(){ toast('已复制', 'ok'); }, function(){ fallbackCopy(t); });
  } else fallbackCopy(t);
}
function fallbackCopy(t){
  var ta = document.createElement('textarea');
  ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); toast('已复制', 'ok'); } catch(e) { toast('复制失败，请手动复制', 'err'); }
  document.body.removeChild(ta);
}
function copySub(){ copyText($('subUrl').value); }
function markDirty(){ $('saveBtn').classList.add('dirty'); }
function switchTab(t){
  document.querySelectorAll('#nav button').forEach(function(b){
    b.classList.toggle('on', b.getAttribute('data-tab') === t);
  });
  document.querySelectorAll('.tab').forEach(function(x){
    x.classList.toggle('on', x.id === ('tab-' + t));
  });
  if(t === 'overview') makeSub(false);
}
document.querySelectorAll('#nav button').forEach(function(b){
  b.addEventListener('click', function(){ switchTab(b.getAttribute('data-tab')); });
});
document.querySelectorAll('input,select,textarea').forEach(function(el){
  if(el.id && el.id.length >= 2 && el.id.charAt(1) === '-' && (el.id.charAt(0) === 'f' || el.id.charAt(0) === 'o')){
    el.addEventListener('change', markDirty);
  }
});
$('saveBtn').addEventListener('click', saveAll);
$('o-source').addEventListener('change', function(){
  var v = $('o-source').value;
  $('o-customWrap').style.display = v === 'custom' ? '' : 'none';
  markDirty();
});
function onPortSel(){
  $('o-portCustom').style.display = $('o-portSel').value === 'custom' ? '' : 'none';
  markDirty();
}

function loadAll(){
  if (/\.workers\.dev$/i.test(location.hostname)) { var w = $('wdwarn'); if (w) w.style.display = ''; }
  api('status').then(function(r){
    if(r && r.ok) renderStatus(r.data);
  }).catch(function(){});
  api('config').then(function(r){
    if(r && r.ok){ CFG = r.data; fillForm(); renderPreferred(); renderHeader(); makeSub(false); }
    else if(r && r.status === 403){ location.href = '/login?next=' + encodeURIComponent(APIPATH); }
    else { toast('无法连接服务器', 'err'); }
  }).catch(function(){ toast('无法连接服务器', 'err'); });
}
function renderHeader(){
  if(!CFG) return;
  $('hdrInfo').textContent = '当前版本：' + (CFG.version || '');
}
function renderStatus(d){
  var h = '';
  h += '<div class="kv"><span class="k">Worker 地址</span><span class="v">' + (d.host || '') + '</span></div>';
  h += '<div class="kv"><span class="k">面板路径</span><span class="v">' + (d.path || '') + '</span></div>';
  h += '<div class="kv"><span class="k">面板入口</span><span class="v">' + location.origin + '/' + (d.path || '') + '</span></div>';
  h += '<div class="kv"><span class="k">接入节点</span><span class="v">' + (d.host ? '正常' : '未知') + '</span></div>';
  $('statusBox').innerHTML = h;
}
function onNodeLimit(){
  var on = $('f-nodeLimit') && $('f-nodeLimit').value === 'true';
  if($('f-nodeLimitWrap')) $('f-nodeLimitWrap').style.display = on ? '' : 'none';
}
function fillForm(){
  if(!CFG) return;
  $('f-uuid').value = CFG.uuid || '';
  $('f-path').value = CFG.path || '';
  $('f-admin').value = CFG.admin || '';
  $('f-host').value = CFG.host || '';
  $('f-alpn').value = CFG.alpn || '';
  $('f-ech').value = CFG.ech ? 'true' : 'false';
  $('f-echHost').value = CFG.echHost || '';
  $('f-echDns').value = CFG.echDns || '';
  $('f-tlsOnly').value = CFG.tlsOnly ? 'true' : 'false';
  $('f-nodeLimit').value = CFG.nodeLimit ? 'true' : 'false';
  $('f-nodeLimitCount').value = CFG.nodeLimitCount || 100;
  $('f-polling').value = CFG.polling === false ? 'false' : 'true';
  onNodeLimit();
  $('f-enableVless').checked = CFG.enableVless !== false;
  $('f-enableTrojan').checked = !!CFG.enableTrojan;
  $('f-trojanPassword').value = CFG.trojanPassword || '';
  $('f-enableXhttp').checked = !!CFG.enableXhttp;
  $('f-proxyIP').value = CFG.proxyIP || '';
  $('f-outboundProxy').value = CFG.outboundProxy || '';
  $('f-outboundMode').value = CFG.outboundMode || '';
  var o = CFG.optimizer || {};
  $('o-source').value = o.source || 'wetest_v4';
  $('o-sourceURL').value = o.sourceURL || '';
  fillPort(String(o.port || 443));
  $('o-threads').value = o.threads || 5;
  $('o-count').value = o.count || 20;
  $('o-fillCount').value = (o.fillCount == null ? 0 : o.fillCount);
  $('o-useCidr').checked = o.useCidr !== false;
  $('o-subMode').value = o.subMode || '';
  $('o-subIncludeDefault').value = (o.subIncludeDefault ? '1' : '0');
  $('o-subRandomCount').value = o.subRandomCount == null ? 16 : o.subRandomCount;
  onSubMode();
  $('o-customWrap').style.display = ($('o-source').value === 'custom') ? '' : 'none';
  var fl = CFG.filter || {};
  $('fl-region').value = fl.region || 'all';
  var ipType = fl.ipType || ['IPv4', 'IPv6'];
  $('fl-ipv4').checked = ipType.indexOf('IPv4') >= 0;
  $('fl-ipv6').checked = ipType.indexOf('IPv6') >= 0;
  var isp = fl.isp || ['移动', '联通', '电信'];
  $('fl-isp-mobile').checked = isp.indexOf('移动') >= 0;
  $('fl-isp-unicom').checked = isp.indexOf('联通') >= 0;
  $('fl-isp-telecom').checked = isp.indexOf('电信') >= 0;
}
function onSubMode(){
  var m = $('o-subMode') ? $('o-subMode').value : '';
  $('sm-custom').style.display = (m === 'custom') ? '' : 'none';
  $('sm-random').style.display = (m === 'random') ? '' : 'none';
}
function fillPort(pv){
  pv = String(pv == null ? 443 : pv);
  var sel = $('o-portSel');
  var found = Array.prototype.some.call(sel.options, function(o){ return o.value === pv; });
  if (found) {
    sel.value = pv;
    $('o-portCustom').style.display = 'none';
  } else {
    sel.value = 'custom';
    $('o-portCustom').value = pv;
    $('o-portCustom').style.display = '';
  }
}
function parseIps(t){
  var out = [];
  String(t || '').split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){
    var name = '';
    if(s.indexOf('#') >= 0){ var a = s.split('#'); s = a[0]; name = a[1]; }
    var m;
    if((m = s.match(/^\[([0-9a-fA-F:]+)\](?::(\d+))?$/))){ out.push({ ip: m[1], port: parseInt(m[2]) || 443, name: name }); return; }
    if((m = s.match(/^(\d+\.\d+\.\d+\.\d+)(?::(\d+))?$/))){ out.push({ ip: m[1], port: parseInt(m[2]) || 443, name: name }); }
  });
  return out;
}
function collectForm(){
  if(!CFG) return null;
  return {
    uuid: $('f-uuid').value.trim(),
    path: $('f-path').value.trim() || $('f-uuid').value.trim(),
    admin: $('f-admin').value,
    host: $('f-host').value.trim(),
    alpn: $('f-alpn').value,
    ech: $('f-ech').value === 'true',
    echHost: $('f-echHost').value.trim() || 'cloudflare-ech.com',
    echDns: $('f-echDns').value.trim(),
    tlsOnly: $('f-tlsOnly').value === 'true',
    nodeLimit: $('f-nodeLimit').value === 'true',
    nodeLimitCount: parseInt($('f-nodeLimitCount').value) || 100,
    polling: $('f-polling').value !== 'false',
    enableVless: $('f-enableVless').checked,
    enableTrojan: $('f-enableTrojan').checked,
    trojanPassword: $('f-trojanPassword').value,
    enableXhttp: $('f-enableXhttp').checked,
    proxyIP: $('f-proxyIP').value.trim(),
    outboundProxy: $('f-outboundProxy').value.trim(),
    outboundMode: $('f-outboundMode').value,
    preferredDomains: (function(){
      var d = [];
      String($('f-preferred').value).split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){ if (!parseIps(s).length) d.push(s); });
      return d.join('\n');
    })(),
    preferredIPs: (function(){
      var a = [], seen = {};
      String($('f-preferred').value).split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){ var p = parseIps(s); if (p.length) { var k = p[0].ip + ':' + (p[0].port || 443); if (seen[k]) return; seen[k] = 1; a.push(p[0]); } });
      return a;
    })(),
    optimizer: {
      source: $('o-source').value,
      sourceURL: $('o-sourceURL').value.trim(),
      port: (function(){
        var p = $('o-portSel').value;
        if (p === 'custom') p = $('o-portCustom').value;
        return parseInt(p) || 443;
      })(),
      threads: parseInt($('o-threads').value) || 5,
      count: parseInt($('o-count').value) || 20,
      fillCount: parseInt($('o-fillCount').value) || 0,
      useCidr: $('o-useCidr').checked,
      subMode: $('o-subMode').value,
      subRandomCount: parseInt($('o-subRandomCount').value) || 16,
      subIncludeDefault: $('o-subIncludeDefault').value === '1'
    },
    filter: {
      region: $('fl-region').value,
      ipType: (function(){ var a = []; if ($('fl-ipv4').checked) a.push('IPv4'); if ($('fl-ipv6').checked) a.push('IPv6'); return a; })(),
      isp: (function(){ var a = []; if ($('fl-isp-mobile').checked) a.push('移动'); if ($('fl-isp-unicom').checked) a.push('联通'); if ($('fl-isp-telecom').checked) a.push('电信'); return a; })()
    }
  };
}
function saveAll(){
  if(!CFG){ toast('配置尚未加载', 'err'); return; }
  var body = collectForm();
  $('saveBtn').disabled = true;
  api('config', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    .then(function(r){
      if(r && r.ok){ CFG = r.data; renderPreferred(); renderHeader(); $('saveBtn').classList.remove('dirty'); toast('已保存并生效', 'ok'); }
      else toast((r && r.msg) || '保存失败', 'err');
    })
    .catch(function(){ toast('保存失败：无法连接服务器', 'err'); })
    .then(function(){ $('saveBtn').disabled = false; });
}
// 重置：清空 KV 中全部数据（面板配置 + 已下发节点记录），面板还原为最开始的部署状态
function resetAll(){
  if(!confirm('确定重置？将清空 KV 中全部面板配置与节点记录，面板还原为最开始的部署状态。此操作不可恢复！')) return;
  var btn = $('resetBtn');
  btn.disabled = true;
  api('reset', { method: 'POST' })
    .then(function(r){
      if(r && r.ok){ toast(r.msg || '已重置', 'ok'); setTimeout(function(){ location.reload(); }, 900); }
      else toast((r && r.msg) || '重置失败', 'err');
    })
    .catch(function(){ toast('重置失败：无法连接服务器', 'err'); })
    .then(function(){ btn.disabled = false; });
}
function renderPreferred(){
  if(!CFG) return;
  var lines = [];
  var dom = String(CFG.preferredDomains || '').split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean);
  lines = lines.concat(dom);
  (CFG.preferredIPs || []).forEach(function(x){
    lines.push((String(x.ip).indexOf(':') >= 0 ? '[' + x.ip + ']' : x.ip) + ':' + (x.port || 443) + (x.name ? ('#' + x.name) : ''));
  });
  $('f-preferred').value = lines.join('\n');
}

// ---- 优选器 ----
var LAST = [];
// 本地（浏览器）→ 目标 IP 的延迟探测：HTTPS 端口用 https，HTTP 端口用 http（被混合内容阻止时回退 https）
function pingIp(ip, port, timeout){
  var t0 = Date.now();
  var addr = ip.indexOf(':') >= 0 ? '[' + ip + ']' : ip;
  var proto = (port === 80 || port === 8080 || port === 8880 || port === 2052 || port === 2082 || port === 2086 || port === 2095) ? 'http' : 'https';
  var ctrl = new AbortController();
  var timer = setTimeout(function(){ ctrl.abort(); }, timeout);
  return fetch(proto + '://' + addr + ':' + port + '/', { mode: 'no-cors', cache: 'no-store', redirect: 'manual', signal: ctrl.signal })
    .then(function(){ clearTimeout(timer); return { ok: true, latency: Date.now() - t0 }; })
    .catch(function(){
      clearTimeout(timer);
      var ms = Date.now() - t0;
      if (proto === 'http' && ms < 100) return pingHttps(ip, port, timeout);   // https 面板下 http 被混合内容阻止，回退 https 探测
      return { ok: ms < timeout, latency: ms };
    });
}
function pingHttps(ip, port, timeout){
  var t0 = Date.now();
  var addr = ip.indexOf(':') >= 0 ? '[' + ip + ']' : ip;
  var ctrl = new AbortController();
  var timer = setTimeout(function(){ ctrl.abort(); }, timeout);
  return fetch('https://' + addr + ':' + port + '/', { mode: 'no-cors', cache: 'no-store', redirect: 'manual', signal: ctrl.signal })
    .then(function(){ clearTimeout(timer); return { ok: true, latency: Date.now() - t0 }; })
    .catch(function(){ clearTimeout(timer); var ms = Date.now() - t0; return { ok: ms < timeout, latency: ms }; });
}
function localTest(cands, threads, timeout){
  var results = [], idx = 0, pending = 0;
  return new Promise(function(resolve){
    function next(){
      while (pending < threads && idx < cands.length) {
        var c = cands[idx++]; pending++;
        pingIp(c.ip, c.port, timeout).then(function(r){
          pending--; results.push({ ip: c.ip, port: c.port, ok: r.ok, latency: r.latency });
          if (results.length === cands.length) resolve(results);
          else next();
        });
      }
    }
    next();
  });
}
function runPick(){
  var o = collectForm().optimizer;
  showMsg('oMsg', '正在拉取候选 IP…', 'info');
  api('candidates', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(o) })
    .then(function(r){
      if(!r || !r.ok){ showMsg('oMsg', (r && r.msg) || '拉取失败', 'err'); return; }
      var cands = r.data || [];
      if(!cands.length){ showMsg('oMsg', (r && r.msg) || '没有可测的 IP，请换一个数据源', 'err'); return; }
      var st = r.stats || {};
      var parts = [];
      if (st.preset) parts.push('预设源 ' + st.preset + ' 条');
      if (st.presetErr) parts.push('预设源失败(' + st.presetErr + ')');
      if (st.custom) parts.push('自定义源 ' + st.custom + ' 条');
      if (st.customErr) parts.push('自定义源失败(' + st.customErr + ')');
      if (st.cidr) parts.push('CF补足 ' + st.cidr + ' 条');
      showMsg('oMsg', '拉取 ' + cands.length + ' 条（' + (parts.join('，') || '无') + '），本地测速中…', 'info');
      localTest(cands, o.threads || 5, 3000).then(function(results){
        results.sort(function(a,b){ return (a.latency < 0 ? 1e9 : a.latency) - (b.latency < 0 ? 1e9 : b.latency); });
        renderResults(results);
        var okc = results.filter(function(x){ return x.ok; }).length;
        showMsg('oMsg', '测速完成：' + okc + '/' + results.length + ' 可用（本地→目标）', okc ? 'ok' : 'err');
      });
    })
    .catch(function(){ showMsg('oMsg', '拉取失败：无法连接服务器', 'err'); });
}
function renderResults(list){
  // 显示层兜底：同一 IP 只显示一条（列表已按延迟排序，保留最先=最优的一条）
  var seen = {};
  var dedup = [];
  (list || []).forEach(function(r){
    if (seen[r.ip]) return;
    seen[r.ip] = 1;
    dedup.push(r);
  });
  LAST = dedup;
  var tb = $('oTableBody');
  tb.innerHTML = '';
  LAST.forEach(function(r, i){
    var tr = document.createElement('tr');
    var ok = r.ok;
    var lag = ok ? (r.latency + 'ms') : '超时';
    var badge = '<span class="badge ' + (ok ? 'g' : 'r') + '">' + (ok ? '可用' : '超时') + '</span>';
    var btn = ok ? '<button class="btn sm primary" onclick="useIp(' + i + ')">加入优选</button>' : '';
    tr.innerHTML = '<td class="ip">' + r.ip + ':' + r.port + '</td><td>' + lag + '</td><td>' + badge + '</td><td>' + btn + '</td>';
    tb.appendChild(tr);
  });
}
function useIp(i){
  var r = LAST[i];
  if(!r) return;
  var ta = $('f-preferred');
  var line = r.ip + ':' + r.port + (r.name ? ('#' + r.name) : '');
  // 同一 IP 已在优选列表中则不再重复加入
  var exists = false;
  String(ta.value || '').split(/[\n,;]+/).forEach(function(s){
    var p = parseIps(s);
    if (p.length && p[0].ip === r.ip) exists = true;
  });
  if (exists) { toast('该 IP 已在优选列表中', 'warn'); return; }
  var s = ta.value.trim();
  ta.value = s ? (s + '\n' + line) : line;
  markDirty();
  toast('已加入优选列表，点击「保存全部」下发', 'ok');
}
function addAllBest(){
  var n = parseInt($('o-count').value) || 20;
  var seen = {};
  var list = [];
  LAST.filter(function(r){ return r.ok; }).forEach(function(r){
    if (seen[r.ip] || list.length >= n) return;
    seen[r.ip] = 1;
    list.push(r);
  });
  if(!list.length){ toast('没有可用结果', 'err'); return; }
  var arr = [];
  list.forEach(function(r, i){ arr.push(r.ip + ':' + r.port + '#优选' + (i + 1)); });
  $('f-preferred').value = arr.join('\n');
  markDirty();
  toast('已加入最快的 ' + list.length + ' 个优选 IP，点击「保存全部」下发', 'ok');
}
function fetchDomains(){
  api('domains').then(function(r){
    if(r && r.ok && r.data && r.data.length){ $('f-preferred').value = r.data.join('\n'); markDirty(); toast('已拉取优选域名', 'ok'); }
    else toast((r && r.msg) || '拉取失败', 'err');
  }).catch(function(){ toast('拉取失败：无法连接服务器', 'err'); });
}

// ---- 订阅 ----
function subUrlOf(fmt){
  var u = location.origin + APIPATH + '/sub';
  return fmt ? (u + '/' + fmt) : u;
}
function makeSub(showQR){
  var fmt = $('subFmt').value;
  var url = subUrlOf(fmt === 'auto' ? '' : fmt);
  $('subUrl').value = url;
  if(showQR) showQRCode(url);
}
function showQRCode(){
  var url = $('subUrl').value || subUrlOf('');
  var w = $('qrWrap');
  w.style.display = 'block';
  if(typeof qrcode === 'undefined'){ w.innerHTML = '<div class="hint">二维码库加载失败，请直接复制链接</div>'; return; }
  var q = qrcode(0, 'M');
  q.addData(url);
  q.make();
  w.innerHTML = '<div class="qrbox">' + q.createImgTag(4, 10) + '</div>';
}
function downloadSub(){
  var fmt = $('subFmt').value;
  var a = document.createElement('a');
  a.href = subUrlOf(fmt === 'auto' ? '' : fmt);
  a.download = 'cfnext-sub.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

// 日间/夜间模式切换
function toggleTheme() {
  var cur = document.documentElement.getAttribute('data-theme') || 'dark';
  var next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('cfnext_theme', next); } catch(e) {}
  document.getElementById('themeBtn').textContent = next === 'dark' ? '🌙' : '☀';
}
(function() {
  var t = 'dark';
  try { t = localStorage.getItem('cfnext_theme') || 'dark'; } catch(e) {}
  if (t === 'light') { document.documentElement.setAttribute('data-theme', 'light'); }
  setTimeout(function() { var b = document.getElementById('themeBtn'); if(b) b.textContent = t === 'dark' ? '🌙' : '☀'; }, 0);
})();

loadAll();
</script>
</body>
</html>`,loginHTML=_0x16aa35(0x250);function isBrowserUA(_0x4255e1){const _0x234e31=_0x16aa35;return(_0x4255e1||'')[_0x234e31(0x2f3)]()['includes'](_0x234e31(0x102));}async function requireAuth(_0xe1f0ff,_0x3575d5){const _0x61ce01=_0x16aa35;if(!_0x3575d5['admin'])return!![];const _0x2555e4=_0xe1f0ff[_0x61ce01(0x365)]['get'](_0x61ce01(0x17e))||'',_0x31edc6=_0x2555e4['match'](/(?:^|;\s*)luma_auth=([^;]+)/);return!!(_0x31edc6&&_0x31edc6[0x1]===md5hex(String(_0x3575d5['admin'])));}async function handleRequest(_0x187c45,_0x5a2040){const _0x3870cf=_0x16aa35,_0x5dd6cb=new URL(_0x187c45[_0x3870cf(0x194)]),_0x2ea64e=_0x187c45[_0x3870cf(0x365)]['get'](_0x3870cf(0x28c))||'',_0x3f32b5=(_0x187c45[_0x3870cf(0x365)][_0x3870cf(0x276)](_0x3870cf(0x132))||'')[_0x3870cf(0x2f3)]();if(_0x5dd6cb[_0x3870cf(0x1b3)]===_0x3870cf(0x2b4))return Response[_0x3870cf(0x1af)](_0x5dd6cb[_0x3870cf(0x233)][_0x3870cf(0x2e1)](_0x3870cf(0x368),_0x3870cf(0x353)),0x12d);const _0xdd68d6=await loadConfig(_0x5a2040),_0x4e0951=_0xdd68d6['path']||_0xdd68d6[_0x3870cf(0x16a)],_0x1af14e=_0x5dd6cb[_0x3870cf(0x338)]['replace'](/^\/+|\/+$/g,''),_0x5e996c=_0x1af14e[_0x3870cf(0x237)]('/');if(_0x5e996c[0x0]===_0x3870cf(0x35d))return json({'version':VERSION});if(_0x5e996c[0x0]===_0x3870cf(0x24f)){if(_0x187c45[_0x3870cf(0x2cd)]===_0x3870cf(0x37d)){const _0x27797e=await _0x187c45[_0x3870cf(0x106)](),_0x1e621d=new URLSearchParams(_0x27797e);if(_0x1e621d[_0x3870cf(0x276)](_0x3870cf(0x19f))===_0xdd68d6[_0x3870cf(0x290)]){const _0xad4523=md5hex(String(_0xdd68d6[_0x3870cf(0x290)]));return new Response(JSON[_0x3870cf(0x313)]({'ok':!![],'next':_0x1e621d['get'](_0x3870cf(0x21e))||'/'}),{'status':0xc8,'headers':{'Content-Type':'application/json;\x20charset=utf-8','Set-Cookie':'luma_auth='+_0xad4523+_0x3870cf(0x31f)}});}return json({'ok':![],'msg':'密码错误'},0x193);}if(_0xdd68d6[_0x3870cf(0x290)])return new Response(loginHTML,{'status':0xc8,'headers':{'Content-Type':_0x3870cf(0x232)}});return Response[_0x3870cf(0x1af)](new URL('/'+_0x4e0951,_0x187c45[_0x3870cf(0x194)])[_0x3870cf(0x233)],0x12e);}const _0x40e436=_0x5e996c[0x0]===_0x4e0951;if(_0x5e996c[0x0]===''&&isBrowserUA(_0x2ea64e))return Response['redirect'](new URL('/'+_0x4e0951,_0x187c45[_0x3870cf(0x194)])[_0x3870cf(0x233)],0x12e);if(_0x40e436&&_0x5e996c[_0x3870cf(0x28d)]===0x1){if(_0x3f32b5===_0x3870cf(0x37f))return handleWebSocketProxy(_0x187c45,_0xdd68d6);if(_0x187c45['method']===_0x3870cf(0x37d)){if(_0xdd68d6['enableXhttp'])try{return await handleXhttpProxy(_0x187c45,_0xdd68d6);}catch(_0x49c72f){return json({'ok':![],'msg':_0x3870cf(0x1d4)+(_0x49c72f[_0x3870cf(0x2e6)]||_0x49c72f)},0x1f4);}}}if(_0x40e436&&(_0x5e996c[0x1]==='sub'||_0x5e996c[_0x3870cf(0x28d)]===0x1&&!isBrowserUA(_0x2ea64e)&&!_0x2ea64e[_0x3870cf(0x111)](_0x3870cf(0x27e)))){const _0x5caa45=_0x5e996c[_0x3870cf(0x28d)]>=0x3?_0x5e996c[0x2]:'';try{let _0x5c3b56=null;if(_0xdd68d6[_0x3870cf(0x2a5)]!==![]&&_0x5a2040['K']&&typeof _0x5a2040['K'][_0x3870cf(0x276)]==='function')try{const _0x5340dc=await _0x5a2040['K'][_0x3870cf(0x276)]('issued');if(_0x5340dc){const _0x5e047f=JSON[_0x3870cf(0x2f2)](_0x5340dc);if(Array[_0x3870cf(0x27c)](_0x5e047f[_0x3870cf(0x29f)])&&_0x5e047f[_0x3870cf(0x29f)]['length'])_0x5c3b56=new Set(_0x5e047f[_0x3870cf(0x29f)]);}}catch(_0x2ff8b4){}const _0x207303=await generateSubscription(_0x5c3b56?Object['assign']({},_0xdd68d6,{'_skipIssued':_0x5c3b56}):_0xdd68d6,_0x187c45[_0x3870cf(0x194)],_0x5caa45,_0x2ea64e,_0x187c45['cf']&&_0x187c45['cf']['colo']);if(_0xdd68d6[_0x3870cf(0x2a5)]!==![]&&_0x5a2040['K']&&typeof _0x5a2040['K'][_0x3870cf(0x31c)]===_0x3870cf(0x37a)&&_0x207303[_0x3870cf(0x1a7)]&&_0x207303[_0x3870cf(0x1a7)][_0x3870cf(0x28d)]){const _0x217cd0=_0x5c3b56?Array[_0x3870cf(0x2eb)](_0x5c3b56):[],_0x12cce1=[...new Set([..._0x207303['issued'],..._0x217cd0])][_0x3870cf(0x105)](0x0,0xc8),_0x533491=JSON[_0x3870cf(0x313)]({'t':Date[_0x3870cf(0x170)](),'ips':_0x12cce1});if(_0x5a2040[_0x3870cf(0x29a)]&&typeof _0x5a2040[_0x3870cf(0x29a)][_0x3870cf(0x22c)]===_0x3870cf(0x37a))_0x5a2040['_ctx'][_0x3870cf(0x22c)](_0x5a2040['K']['put'](_0x3870cf(0x1a7),_0x533491)[_0x3870cf(0x28b)](()=>{}));else await _0x5a2040['K'][_0x3870cf(0x31c)](_0x3870cf(0x1a7),_0x533491)['catch'](()=>{});}return new Response(_0x207303[_0x3870cf(0x15f)],{'status':0xc8,'headers':{'Content-Type':_0x207303[_0x3870cf(0x202)]+_0x3870cf(0x199),'Cache-Control':_0x3870cf(0x153),'Content-Disposition':_0x3870cf(0x110)}});}catch(_0x527dd4){return new Response(_0x3870cf(0x1c9)+(_0x527dd4&&_0x527dd4[_0x3870cf(0x2e6)]||_0x527dd4),{'status':0x1f4,'headers':{'Content-Type':_0x3870cf(0x30b)}});}}if(_0x40e436&&_0x5e996c['length']===0x1&&isBrowserUA(_0x2ea64e)){if(!await requireAuth(_0x187c45,_0xdd68d6))return Response[_0x3870cf(0x1af)](new URL(_0x3870cf(0x1bf)+encodeURIComponent('/'+_0x4e0951),_0x187c45[_0x3870cf(0x194)])[_0x3870cf(0x233)],0x12e);return new Response(PANEL_HTML,{'status':0xc8,'headers':{'Content-Type':_0x3870cf(0x232)}});}if(_0x40e436&&_0x5e996c[0x1]===_0x3870cf(0x263)){const _0x470719=_0x5e996c[0x2]||'',_0xa61e21=await requireAuth(_0x187c45,_0xdd68d6);if(!_0xa61e21)return json({'ok':![],'status':0x193,'msg':_0x3870cf(0x320)},0x193);if(_0x470719==='config'){if(_0x187c45[_0x3870cf(0x2cd)]===_0x3870cf(0x283))return json({'ok':!![],'data':Object[_0x3870cf(0x155)]({},_0xdd68d6,{'version':VERSION})});if(_0x187c45['method']===_0x3870cf(0x37d))try{const _0x32cdfa=await _0x187c45[_0x3870cf(0x174)](),_0x32502c=Object[_0x3870cf(0x155)](JSON[_0x3870cf(0x2f2)](JSON[_0x3870cf(0x313)](_0xdd68d6)),_0x32cdfa);if(_0x32cdfa[_0x3870cf(0x131)]&&typeof _0x32cdfa[_0x3870cf(0x131)]===_0x3870cf(0x2cb))_0x32502c[_0x3870cf(0x131)]=Object[_0x3870cf(0x155)](_0x32502c[_0x3870cf(0x131)],_0x32cdfa[_0x3870cf(0x131)]);if(_0x32cdfa[_0x3870cf(0x206)]&&Array[_0x3870cf(0x27c)](_0x32cdfa['preferredIPs']))_0x32502c[_0x3870cf(0x206)]=_0x32cdfa[_0x3870cf(0x206)];await saveConfig(_0x5a2040,_0x32502c);const _0x4a51e6=await loadConfig(_0x5a2040,_0x187c45[_0x3870cf(0x194)]);return json({'ok':!![],'data':Object[_0x3870cf(0x155)]({},_0x4a51e6,{'version':VERSION}),'msg':_0x3870cf(0x1da)});}catch(_0x24c2aa){return json({'ok':![],'msg':'保存失败:\x20'+(_0x24c2aa[_0x3870cf(0x2e6)]||_0x24c2aa)},0x1f4);}}if(_0x470719==='reset'){if(_0x187c45['method']!==_0x3870cf(0x37d))return json({'ok':![],'msg':_0x3870cf(0x360)},0x195);try{if(!_0x5a2040['K']||typeof _0x5a2040['K']['delete']!==_0x3870cf(0x37a))return json({'ok':![],'msg':_0x3870cf(0x1fd)},0x190);return await _0x5a2040['K'][_0x3870cf(0x247)]('config'),await _0x5a2040['K']['delete'](_0x3870cf(0x1a7)),json({'ok':!![],'msg':_0x3870cf(0x1c7)});}catch(_0x358226){return json({'ok':![],'msg':'重置失败:\x20'+(_0x358226['message']||_0x358226)},0x1f4);}}if(_0x470719===_0x3870cf(0x1b8))return json({'ok':!![],'data':{'version':VERSION,'host':_0x5dd6cb[_0x3870cf(0x275)],'path':_0x4e0951,'region':_0x187c45['cf']&&_0x187c45['cf'][_0x3870cf(0x299)]||_0x3870cf(0x30d)}});if(_0x470719===_0x3870cf(0x139)){const _0x1b013b=_0x5dd6cb[_0x3870cf(0x22f)][_0x3870cf(0x276)](_0x3870cf(0x342))||'';try{const _0x4fab96=await generateSubscription(_0xdd68d6,_0x187c45[_0x3870cf(0x194)],_0x1b013b,_0x2ea64e,_0x187c45['cf']&&_0x187c45['cf'][_0x3870cf(0x299)]);return json({'ok':!![],'type':_0x4fab96[_0x3870cf(0x202)],'body':_0x4fab96[_0x3870cf(0x15f)]});}catch(_0x8a2340){return json({'ok':![],'msg':'订阅生成失败:\x20'+(_0x8a2340[_0x3870cf(0x2e6)]||_0x8a2340)},0x1f4);}}if(_0x470719===_0x3870cf(0x236)){if(_0x187c45['method']!==_0x3870cf(0x37d))return json({'ok':![],'msg':_0x3870cf(0x360)},0x195);try{const _0x2a4bd9=await _0x187c45[_0x3870cf(0x174)]()[_0x3870cf(0x28b)](()=>({})),_0x3968c1=await collectCandidates(Object[_0x3870cf(0x155)]({},_0xdd68d6[_0x3870cf(0x131)],_0x2a4bd9));if(!_0x3968c1[_0x3870cf(0x236)]['length']){const _0x41e9f4=_0x3968c1[_0x3870cf(0x1a9)]||{},_0x46f200=[_0x41e9f4['presetErr']&&'预设源:\x20'+_0x41e9f4['presetErr'],_0x41e9f4[_0x3870cf(0x261)]&&_0x3870cf(0x166)+_0x41e9f4[_0x3870cf(0x261)]]['filter'](Boolean)[_0x3870cf(0x294)]('；');return json({'ok':![],'msg':'没有可测的\x20IP'+(_0x46f200?'（'+_0x46f200+'）':'，请换一个数据源')},0x190);}return json({'ok':!![],'data':_0x3968c1[_0x3870cf(0x236)],'stats':_0x3968c1['stats']});}catch(_0x481cbe){return json({'ok':![],'msg':_0x3870cf(0x184)+(_0x481cbe['message']||_0x481cbe)},0x1f4);}}if(_0x470719===_0x3870cf(0x175))try{const _0x1a3c0b=OPTIMIZE_SOURCES[_0x5dd6cb[_0x3870cf(0x22f)][_0x3870cf(0x276)](_0x3870cf(0x253))||_0x3870cf(0x346)]||OPTIMIZE_SOURCES[_0x3870cf(0x346)],_0x4e88c4=await fetch(_0x1a3c0b[_0x3870cf(0x194)],{'headers':{'User-Agent':_0x3870cf(0x356)}});if(!_0x4e88c4['ok'])return json({'ok':![],'msg':_0x3870cf(0x104)+_0x4e88c4['status']});const _0x3bb7e9=extractDomains(await _0x4e88c4[_0x3870cf(0x106)]());return json({'ok':!![],'data':_0x3bb7e9});}catch(_0x316620){return json({'ok':![],'msg':'拉取失败:\x20'+(_0x316620[_0x3870cf(0x2e6)]||_0x316620)},0x1f4);}return json({'ok':![],'msg':'未知\x20API:\x20'+_0x470719},0x194);}return new Response(_0x3870cf(0x389),{'status':0x194});}async function handleScheduled(_0x26b8e0,_0x22108d,_0x43c49f){const _0x24c2a2=_0x16aa35,_0x1fb368=String(_0x22108d[_0x24c2a2(0x223)]||'')[_0x24c2a2(0x2f3)]();if(_0x1fb368!=='1'&&_0x1fb368!==_0x24c2a2(0x169))return;try{const _0x50586a=await loadConfig(_0x22108d),_0x211b04=await collectCandidates(_0x50586a[_0x24c2a2(0x131)]),_0x3ef906=_0x211b04[_0x24c2a2(0x236)]||[];if(!_0x3ef906[_0x24c2a2(0x28d)])return;const _0x2eb6d9=await runLatencyTest(_0x3ef906,_0x50586a[_0x24c2a2(0x131)][_0x24c2a2(0x1fa)]||0x5,0x1388),_0x1d992f=_0x2eb6d9['filter'](_0x3342e8=>_0x3342e8['ok'])[_0x24c2a2(0x105)](0x0,_0x50586a['optimizer'][_0x24c2a2(0x2d9)]||0x14);if(!_0x1d992f[_0x24c2a2(0x28d)])return;_0x50586a[_0x24c2a2(0x206)]=_0x1d992f[_0x24c2a2(0x238)](_0x56cde1=>({'ip':_0x56cde1['ip'],'port':_0x56cde1['port']||0x1bb,'name':''})),await saveConfig(_0x22108d,_0x50586a);}catch(_0x49e274){}}export default{async 'fetch'(_0x18b2bb,_0x2723fb,_0x160370){const _0x24765=_0x16aa35;return handleRequest(_0x18b2bb,Object[_0x24765(0x155)]({},_0x2723fb,{'_ctx':_0x160370}));},async 'scheduled'(_0x416063,_0x1218af,_0x4c7647){return handleScheduled(_0x416063,_0x1218af,_0x4c7647);}};