"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[6962],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(t),u=o,k=p["".concat(s,".").concat(u)]||p[u]||m[u]||l;return t?a.createElement(k,r(r({ref:n},c),{},{components:t})):a.createElement(k,r({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var d=2;d<l;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},83984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));const l={sidebar_position:1},r="x/auth/tx",i={unversionedId:"modules/auth/tx",id:"modules/auth/tx",title:"x/auth/tx",description:"Pre-requisite Readings",source:"@site/docs/modules/auth/2-tx.md",sourceDirName:"modules/auth",slug:"/modules/auth/tx",permalink:"/main/modules/auth/tx",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"x/auth/vesting",permalink:"/main/modules/auth/vesting"},next:{title:"x/authz",permalink:"/main/modules/authz/"}},s={},d=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2},{value:"Transactions",id:"transactions",level:2},{value:"<code>TxConfig</code>",id:"txconfig",level:3},{value:"<code>TxBuilder</code>",id:"txbuilder",level:3},{value:"<code>TxEncoder</code>/ <code>TxDecoder</code>",id:"txencoder-txdecoder",level:3},{value:"Client",id:"client",level:2},{value:"CLI",id:"cli",level:3},{value:"Query",id:"query",level:4},{value:"Transactions",id:"transactions-1",level:4},{value:"<code>encode</code>",id:"encode",level:4},{value:"<code>decode</code>",id:"decode",level:4},{value:"gRPC",id:"grpc",level:3},{value:"<code>TxDecode</code>",id:"txdecode",level:4},{value:"<code>TxEncode</code>",id:"txencode",level:4},{value:"<code>TxDecodeAmino</code>",id:"txdecodeamino",level:4},{value:"<code>TxEncodeAmino</code>",id:"txencodeamino",level:4}],c={toc:d};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"xauthtx"},(0,o.kt)("inlineCode",{parentName:"h1"},"x/auth/tx")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("h3",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/core/transactions#transaction-generation"},"Transactions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/core/encoding#transaction-encoding"},"Encoding")))),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"This document specifies the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/auth/tx")," package of the Cosmos SDK."),(0,o.kt)("p",null,"This package represents the Cosmos SDK implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"client.TxConfig"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"client.TxBuilder"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"client.TxEncoder")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"client.TxDecoder")," interfaces."),(0,o.kt)("h2",{id:"contents"},"Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#transactions"},"Transactions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#txconfig"},(0,o.kt)("inlineCode",{parentName:"a"},"TxConfig"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#txbuilder"},(0,o.kt)("inlineCode",{parentName:"a"},"TxBuilder"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#txencoder-txdecoder"},(0,o.kt)("inlineCode",{parentName:"a"},"TxEncoder"),"/ ",(0,o.kt)("inlineCode",{parentName:"a"},"TxDecoder"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#client"},"Client"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cli"},"CLI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#grpc"},"gRPC"))))),(0,o.kt)("h2",{id:"transactions"},"Transactions"),(0,o.kt)("h3",{id:"txconfig"},(0,o.kt)("inlineCode",{parentName:"h3"},"TxConfig")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"client.TxConfig")," defines an interface a client can utilize to generate an application-defined concrete transaction type.\nThe interface defines a set of methods for creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"client.TxBuilder"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/client/tx_config.go#L25-L31\n")),(0,o.kt)("p",null,"The default implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"client.TxConfig")," is instantiated by ",(0,o.kt)("inlineCode",{parentName:"p"},"NewTxConfig")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"x/auth/tx")," module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/auth/tx/config.go#L22-L28\n")),(0,o.kt)("h3",{id:"txbuilder"},(0,o.kt)("inlineCode",{parentName:"h3"},"TxBuilder")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/client/tx_config.go#L33-L50\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/core/transactions#transaction-generation"},(0,o.kt)("inlineCode",{parentName:"a"},"client.TxBuilder"))," interface is as well implemented by ",(0,o.kt)("inlineCode",{parentName:"p"},"x/auth/tx"),".\nA ",(0,o.kt)("inlineCode",{parentName:"p"},"client.TxBuilder")," can be accessed with ",(0,o.kt)("inlineCode",{parentName:"p"},"TxConfig.NewTxBuilder()"),".  "),(0,o.kt)("h3",{id:"txencoder-txdecoder"},(0,o.kt)("inlineCode",{parentName:"h3"},"TxEncoder"),"/ ",(0,o.kt)("inlineCode",{parentName:"h3"},"TxDecoder")),(0,o.kt)("p",null,"More information about ",(0,o.kt)("inlineCode",{parentName:"p"},"TxEncoder")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TxDecoder")," can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/core/encoding#transaction-encoding"},"here"),"."),(0,o.kt)("h2",{id:"client"},"Client"),(0,o.kt)("h3",{id:"cli"},"CLI"),(0,o.kt)("h4",{id:"query"},"Query"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"x/auth/tx")," module provides a CLI command to query any transaction, given its hash, transaction sequence or signature."),(0,o.kt)("p",null,"Without any argument, the command will query the transaction using the transaction hash."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"simd query tx DFE87B78A630C0EFDF76C80CD24C997E252792E0317502AE1A02B9809F0D8685\n")),(0,o.kt)("p",null,"When querying a transaction from an account given its sequence, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--type=acc_seq")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"simd query tx --type=acc_seq cosmos1u69uyr6v9qwe6zaaeaqly2h6wnedac0xpxq325/1\n")),(0,o.kt)("p",null,"When querying a transaction given its signature, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--type=signature")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"simd query tx --type=signature Ofjvgrqi8twZfqVDmYIhqwRLQjZZ40XbxEamk/veH3gQpRF0hL2PH4ejRaDzAX+2WChnaWNQJQ41ekToIi5Wqw==\n")),(0,o.kt)("p",null,"When querying a transaction given its events, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--type=events")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"simd query txs --events 'message.sender=cosmos...' --page 1 --limit 30\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"x/auth/block")," module provides a CLI command to query any block, given its hash, height, or events."),(0,o.kt)("p",null,"When querying a block by its hash, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--type=hash")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"simd query block --type=hash DFE87B78A630C0EFDF76C80CD24C997E252792E0317502AE1A02B9809F0D8685\n")),(0,o.kt)("p",null,"When querying a block by its height, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--type=height")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"simd query block --type=height 1357\n")),(0,o.kt)("p",null,"When querying a block by its events, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--query")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"simd query blocks --query 'message.sender=cosmos...' --page 1 --limit 30\n")),(0,o.kt)("h4",{id:"transactions-1"},"Transactions"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"x/auth/tx")," module provides a convinient CLI command for decoding and encoding transactions."),(0,o.kt)("h4",{id:"encode"},(0,o.kt)("inlineCode",{parentName:"h4"},"encode")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"encode")," command encodes a transaction created with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--generate-only")," flag or signed with the sign command.\nThe transaction is seralized it to Protobuf and returned as base64."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ simd tx encode tx.json\nCo8BCowBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmwKLWNvc21vczFsNnZzcWhoN3Jud3N5cjJreXozampnM3FkdWF6OGd3Z3lsODI3NRItY29zbW9zMTU4c2FsZHlnOHBteHU3Znd2dDBkNng3amVzd3A0Z3d5a2xrNnkzGgwKBXN0YWtlEgMxMDASBhIEEMCaDA==\n$ simd tx encode tx.signed.json\n")),(0,o.kt)("p",null,"More information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"encode")," command can be found running ",(0,o.kt)("inlineCode",{parentName:"p"},"simd tx encode --help"),"."),(0,o.kt)("h4",{id:"decode"},(0,o.kt)("inlineCode",{parentName:"h4"},"decode")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"decode")," commands decodes a transaction encoded with the ",(0,o.kt)("inlineCode",{parentName:"p"},"encode")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"simd tx decode Co8BCowBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmwKLWNvc21vczFsNnZzcWhoN3Jud3N5cjJreXozampnM3FkdWF6OGd3Z3lsODI3NRItY29zbW9zMTU4c2FsZHlnOHBteHU3Znd2dDBkNng3amVzd3A0Z3d5a2xrNnkzGgwKBXN0YWtlEgMxMDASBhIEEMCaDA==\n")),(0,o.kt)("p",null,"More information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"decode")," command can be found running ",(0,o.kt)("inlineCode",{parentName:"p"},"simd tx decode --help"),"."),(0,o.kt)("h3",{id:"grpc"},"gRPC"),(0,o.kt)("p",null,"A user can query the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/auth/tx")," module using gRPC endpoints."),(0,o.kt)("h4",{id:"txdecode"},(0,o.kt)("inlineCode",{parentName:"h4"},"TxDecode")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TxDecode")," endpoint allows to decode a transaction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cosmos.tx.v1beta1.Service/TxDecode\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'grpcurl -plaintext \\\n    -d \'{"tx_bytes":"Co8BCowBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmwKLWNvc21vczFsNnZzcWhoN3Jud3N5cjJreXozampnM3FkdWF6OGd3Z3lsODI3NRItY29zbW9zMTU4c2FsZHlnOHBteHU3Znd2dDBkNng3amVzd3A0Z3d5a2xrNnkzGgwKBXN0YWtlEgMxMDASBhIEEMCaDA=="}\' \\\n    localhost:9090 \\\n    cosmos.tx.v1beta1.Service/TxDecode\n')),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tx": {\n    "body": {\n      "messages": [\n        {"@type":"/cosmos.bank.v1beta1.MsgSend","amount":[{"denom":"stake","amount":"100"}],"fromAddress":"cosmos1l6vsqhh7rnwsyr2kyz3jjg3qduaz8gwgyl8275","toAddress":"cosmos158saldyg8pmxu7fwvt0d6x7jeswp4gwyklk6y3"}\n      ]\n    },\n    "authInfo": {\n      "fee": {\n        "gasLimit": "200000"\n      }\n    }\n  }\n}\n')),(0,o.kt)("h4",{id:"txencode"},(0,o.kt)("inlineCode",{parentName:"h4"},"TxEncode")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TxEncode")," endpoint allows to encode a transaction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cosmos.tx.v1beta1.Service/TxEncode\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'grpcurl -plaintext \\\n    -d \'{"tx": {\n    "body": {\n      "messages": [\n        {"@type":"/cosmos.bank.v1beta1.MsgSend","amount":[{"denom":"stake","amount":"100"}],"fromAddress":"cosmos1l6vsqhh7rnwsyr2kyz3jjg3qduaz8gwgyl8275","toAddress":"cosmos158saldyg8pmxu7fwvt0d6x7jeswp4gwyklk6y3"}\n      ]\n    },\n    "authInfo": {\n      "fee": {\n        "gasLimit": "200000"\n      }\n    }\n  }}\' \\\n    localhost:9090 \\\n    cosmos.tx.v1beta1.Service/TxEncode\n')),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "txBytes": "Co8BCowBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmwKLWNvc21vczFsNnZzcWhoN3Jud3N5cjJreXozampnM3FkdWF6OGd3Z3lsODI3NRItY29zbW9zMTU4c2FsZHlnOHBteHU3Znd2dDBkNng3amVzd3A0Z3d5a2xrNnkzGgwKBXN0YWtlEgMxMDASBhIEEMCaDA=="\n}\n')),(0,o.kt)("h4",{id:"txdecodeamino"},(0,o.kt)("inlineCode",{parentName:"h4"},"TxDecodeAmino")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TxDecode")," endpoint allows to decode an amino transaction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cosmos.tx.v1beta1.Service/TxDecodeAmino\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'grpcurl -plaintext \\\n    -d \'{"amino_binary": "KCgWqQpvqKNhmgotY29zbW9zMXRzeno3cDJ6Z2Q3dnZrYWh5ZnJlNHduNXh5dTgwcnB0ZzZ2OWg1Ei1jb3Ntb3MxdHN6ejdwMnpnZDd2dmthaHlmcmU0d241eHl1ODBycHRnNnY5aDUaCwoFc3Rha2USAjEwEhEKCwoFc3Rha2USAjEwEMCaDCIGZm9vYmFy"}\' \\\n    localhost:9090 \\\n    cosmos.tx.v1beta1.Service/TxDecodeAmino\n')),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "aminoJson": "{\\"type\\":\\"cosmos-sdk/StdTx\\",\\"value\\":{\\"msg\\":[{\\"type\\":\\"cosmos-sdk/MsgSend\\",\\"value\\":{\\"from_address\\":\\"cosmos1tszz7p2zgd7vvkahyfre4wn5xyu80rptg6v9h5\\",\\"to_address\\":\\"cosmos1tszz7p2zgd7vvkahyfre4wn5xyu80rptg6v9h5\\",\\"amount\\":[{\\"denom\\":\\"stake\\",\\"amount\\":\\"10\\"}]}}],\\"fee\\":{\\"amount\\":[{\\"denom\\":\\"stake\\",\\"amount\\":\\"10\\"}],\\"gas\\":\\"200000\\"},\\"signatures\\":null,\\"memo\\":\\"foobar\\",\\"timeout_height\\":\\"0\\"}}"\n}\n')),(0,o.kt)("h4",{id:"txencodeamino"},(0,o.kt)("inlineCode",{parentName:"h4"},"TxEncodeAmino")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TxEncodeAmino")," endpoint allows to encode an amino transaction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cosmos.tx.v1beta1.Service/TxEncodeAmino\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'grpcurl -plaintext \\\n    -d \'{"amino_json":"{\\"type\\":\\"cosmos-sdk/StdTx\\",\\"value\\":{\\"msg\\":[{\\"type\\":\\"cosmos-sdk/MsgSend\\",\\"value\\":{\\"from_address\\":\\"cosmos1tszz7p2zgd7vvkahyfre4wn5xyu80rptg6v9h5\\",\\"to_address\\":\\"cosmos1tszz7p2zgd7vvkahyfre4wn5xyu80rptg6v9h5\\",\\"amount\\":[{\\"denom\\":\\"stake\\",\\"amount\\":\\"10\\"}]}}],\\"fee\\":{\\"amount\\":[{\\"denom\\":\\"stake\\",\\"amount\\":\\"10\\"}],\\"gas\\":\\"200000\\"},\\"signatures\\":null,\\"memo\\":\\"foobar\\",\\"timeout_height\\":\\"0\\"}}"}\' \\\n    localhost:9090 \\\n    cosmos.tx.v1beta1.Service/TxEncodeAmino\n')),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "amino_binary": "KCgWqQpvqKNhmgotY29zbW9zMXRzeno3cDJ6Z2Q3dnZrYWh5ZnJlNHduNXh5dTgwcnB0ZzZ2OWg1Ei1jb3Ntb3MxdHN6ejdwMnpnZDd2dmthaHlmcmU0d241eHl1ODBycHRnNnY5aDUaCwoFc3Rha2USAjEwEhEKCwoFc3Rha2USAjEwEMCaDCIGZm9vYmFy"\n}\n')))}m.isMDXComponent=!0}}]);