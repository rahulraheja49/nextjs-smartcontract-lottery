(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(50169)}])},33401:function(e,t,n){"use strict";let a=n(37917),i=n(63021);e.exports={abi:i,contractAddresses:a}},50169:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(85893),i=n(9008),s=n.n(i);n(25675);var r=n(99034),u=n.n(r),p=n(41942);function o(){return(0,a.jsxs)("div",{className:"p-5 border-b-2 flex flex-row",children:[(0,a.jsx)("h1",{className:"py-4 px-4 font-blog text-3xl",children:"Decentralized Lottery"}),(0,a.jsx)("div",{className:"ml-auto py-2 px-4",children:(0,a.jsx)(p.cg,{moralisAuth:!1})})]})}var l=n(83078),d=n(33401),y=n(67294),c=n(96110);function m(){let{chainId:e,isWeb3Enabled:t}=(0,l.Nr)(),n=parseInt(e),i=n in d.contractAddresses?d.contractAddresses[n][0]:null,[s,r]=(0,y.useState)("0"),[u,o]=(0,y.useState)("0"),[m,f]=(0,y.useState)("0"),b=(0,p.aa)(),{runContractFunction:_,isLoading:T,isFetching:x}=(0,l.JX)({abi:d.abi,contractAddress:i,functionName:"enterRaffle",params:{},msgValue:s}),{runContractFunction:h}=(0,l.JX)({abi:d.abi,contractAddress:i,functionName:"getEntranceFee",params:{}}),{runContractFunction:v}=(0,l.JX)({abi:d.abi,contractAddress:i,functionName:"getNumPlayers",params:{}}),{runContractFunction:w}=(0,l.JX)({abi:d.abi,contractAddress:i,functionName:"getRecentWinner",params:{}});async function N(){let e=(await h()).toString(),t=(await v()).toString(),n=await w();r(e),o(t),f(n)}(0,y.useEffect)(()=>{t&&N()},[t]);let g=async e=>{await e.wait(1),j(e),N()},j=e=>{b({type:"info",message:"Transaction Complete",title:"Tx Notification",position:"topR",icon:"bell"})};return(0,a.jsx)("div",{className:"p-5",children:i?(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto",onClick:async function(){await _({onSuccess:g,onError:e=>console.log(e)})},disabled:T||x,children:T||x?(0,a.jsx)("div",{className:"animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"}):(0,a.jsx)("div",{children:"Enter Raffle"})}),(0,a.jsxs)("div",{children:["Hi from lottery entrance ",c.bM(s,"ether"),"ETH"]}),(0,a.jsxs)("div",{children:["Players: ",u]}),(0,a.jsxs)("div",{children:["Recent Winner: ",m]})]}):(0,a.jsx)("div",{children:"No Raffle Address Detected"})})}function f(){return(0,a.jsxs)("div",{className:u().container,children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:"Smart Contract Lottery"}),(0,a.jsx)("meta",{name:"description",content:"Our Smart Contract Lottery"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(o,{}),(0,a.jsx)(m,{})]})}},99034:function(e){e.exports={container:"Home_container__d256j",main:"Home_main__VkIEL",footer:"Home_footer__yFiaX",title:"Home_title__hYX6j",description:"Home_description__uXNdx",code:"Home_code__VVrIr",grid:"Home_grid__AVljO",card:"Home_card__E5spL",logo:"Home_logo__IOQAX"}},63021:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"vrfCoordinatorV2","type":"address"},{"internalType":"uint256","name":"entranceFee","type":"uint256"},{"internalType":"bytes32","name":"gasLane","type":"bytes32"},{"internalType":"uint64","name":"subscriptionId","type":"uint64"},{"internalType":"uint32","name":"callbackGasLimit","type":"uint32"},{"internalType":"uint256","name":"interval","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"have","type":"address"},{"internalType":"address","name":"want","type":"address"}],"name":"OnlyCoordinatorCanFulfill","type":"error"},{"inputs":[],"name":"Raffle__NotEnoughETHEntered","type":"error"},{"inputs":[],"name":"Raffle__NotOpen","type":"error"},{"inputs":[],"name":"Raffle__TransferFailed","type":"error"},{"inputs":[{"internalType":"uint256","name":"currentBalance","type":"uint256"},{"internalType":"uint256","name":"numPlayers","type":"uint256"},{"internalType":"uint256","name":"raffleState","type":"uint256"}],"name":"Raffle__UpkeepNotNeeded","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"}],"name":"RaffleEnter","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"requestId","type":"uint256"}],"name":"RequestedRaffleWinner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"}],"name":"WinnerPicked","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"","type":"bytes"}],"name":"checkUpkeep","outputs":[{"internalType":"bool","name":"upkeepNeeded","type":"bool"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enterRaffle","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getEntranceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestTimeStamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumPlayers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumWords","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getPlayer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRaffleState","outputs":[{"internalType":"enum Raffle.RaffleState","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRecentWinner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRequestConfirmations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"","type":"bytes"}],"name":"performUpkeep","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"requestId","type":"uint256"},{"internalType":"uint256[]","name":"randomWords","type":"uint256[]"}],"name":"rawFulfillRandomWords","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},37917:function(e){"use strict";e.exports=JSON.parse('{"31337":["0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"]}')}},function(e){e.O(0,[686,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);