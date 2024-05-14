"use strict";exports.id=102,exports.ids=[102],exports.modules={77335:(e,t,n)=>{n.d(t,{CG:()=>s,Y2:()=>i,cJ:()=>r});var o=n(56914);const i=(e,t)=>(0,o.w)(e,t).then((e=>{if(e.length)try{return JSON.parse(e)}catch(t){throw"SyntaxError"===t?.name&&Object.defineProperty(t,"$responseBodyText",{value:e}),t}return{}})),s=async(e,t)=>{const n=await i(e,t);return n.message=n.message??n.Message,n},r=(e,t)=>{const n=e=>{let t=e;return"number"==typeof t&&(t=t.toString()),t.indexOf(",")>=0&&(t=t.split(",")[0]),t.indexOf(":")>=0&&(t=t.split(":")[0]),t.indexOf("#")>=0&&(t=t.split("#")[1]),t},o=(i=e.headers,"x-amzn-errortype",Object.keys(i).find((e=>e.toLowerCase()==="x-amzn-errortype".toLowerCase())));var i;return void 0!==o?n(e.headers[o]):void 0!==t.code?n(t.code):void 0!==t.__type?n(t.__type):void 0}},23102:(e,t,n)=>{n.d(t,{CognitoIdentityClient:()=>re,GetCredentialsForIdentityCommand:()=>Ke,GetIdCommand:()=>He});var o=n(81095),i=n(39359),s=n(48377),r=n(30499),a=n(11487),c=n(84966),d=n(70649),u=n(99389),p=n(94171),l=n(47385),h=n(49608),y=n(47135);const m=async(e,t,n)=>({operation:(0,y.u)(t).operation,region:await(0,y.t)(e.region)()||(()=>{throw new Error("expected `region` to be configured for `aws.auth#sigv4`")})()}),f=e=>{const t=[];switch(e.operation){case"GetCredentialsForIdentity":case"GetId":case"GetOpenIdToken":case"UnlinkIdentity":t.push({schemeId:"smithy.api#noAuth"});break;default:t.push(function(e){return{schemeId:"aws.auth#sigv4",signingProperties:{name:"cognito-identity",region:e.region},propertiesExtractor:(e,t)=>({signingProperties:{config:e,context:t}})}}(e))}return t},g={UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}};var x=n(12458),w=n(38257),v=n(94041),S=n(91701),E=n(51881),P=n(37778),I=n(7809),b=n(3323),C=n(11228),$=n(82641),A=n(94572),O=n(33197),k=n(66652),D=n(23875);const R="required",z="fn",M="argv",F="ref",j=!0,q="isSet",G="booleanEquals",N="error",T="endpoint",U="tree",K="PartitionResult",H={[R]:!1,type:"String"},L={[R]:!0,default:!1,type:"Boolean"},B={[F]:"Endpoint"},J={[z]:G,[M]:[{[F]:"UseFIPS"},!0]},W={[z]:G,[M]:[{[F]:"UseDualStack"},!0]},Y={},Z={[z]:"getAttr",[M]:[{[F]:K},"supportsFIPS"]},V={[z]:G,[M]:[!0,{[z]:"getAttr",[M]:[{[F]:K},"supportsDualStack"]}]},_=[J],Q=[W],X=[{[F]:"Region"}],ee={version:"1.0",parameters:{Region:H,UseDualStack:L,UseFIPS:L,Endpoint:H},rules:[{conditions:[{[z]:q,[M]:[B]}],rules:[{conditions:_,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:N},{conditions:Q,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:N},{endpoint:{url:B,properties:Y,headers:Y},type:T}],type:U},{conditions:[{[z]:q,[M]:X}],rules:[{conditions:[{[z]:"aws.partition",[M]:X,assign:K}],rules:[{conditions:[J,W],rules:[{conditions:[{[z]:G,[M]:[j,Z]},V],rules:[{endpoint:{url:"https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:Y,headers:Y},type:T}],type:U},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:N}],type:U},{conditions:_,rules:[{conditions:[{[z]:G,[M]:[Z,j]}],rules:[{endpoint:{url:"https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}",properties:Y,headers:Y},type:T}],type:U},{error:"FIPS is enabled but this partition does not support FIPS",type:N}],type:U},{conditions:Q,rules:[{conditions:[V],rules:[{endpoint:{url:"https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:Y,headers:Y},type:T}],type:U},{error:"DualStack is enabled but this partition does not support DualStack",type:N}],type:U},{endpoint:{url:"https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}",properties:Y,headers:Y},type:T}],type:U}],type:U},{error:"Invalid Configuration: Missing Region",type:N}]},te=(e,t={})=>(0,D.sO)(ee,{endpointParams:e,logger:t.logger});D.mw.aws=k.UF;var ne=n(44321);var oe=n(56928),ie=n(75479);const se=e=>{const t=e.httpAuthSchemes;let n=e.httpAuthSchemeProvider,o=e.credentials;return{setHttpAuthScheme(e){const n=t.findIndex((t=>t.schemeId===e.schemeId));-1===n?t.push(e):t.splice(n,1,e)},httpAuthSchemes:()=>t,setHttpAuthSchemeProvider(e){n=e},httpAuthSchemeProvider:()=>n,setCredentials(e){o=e},credentials:()=>o}};class re extends l.Kj{constructor(...[e]){const t=(e=>{(0,l.I9)(process.version);const t=(0,ne.I)(e),n=()=>t().then(l.lT),o=(e=>({apiVersion:"2014-06-30",base64Decoder:e?.base64Decoder??A.E,base64Encoder:e?.base64Encoder??A.n,disableHostPrefix:e?.disableHostPrefix??!1,endpointProvider:e?.endpointProvider??te,extensions:e?.extensions??[],httpAuthSchemeProvider:e?.httpAuthSchemeProvider??f,httpAuthSchemes:e?.httpAuthSchemes??[{schemeId:"aws.auth#sigv4",identityProvider:e=>e.getIdentityProvider("aws.auth#sigv4"),signer:new C.f},{schemeId:"smithy.api#noAuth",identityProvider:e=>e.getIdentityProvider("smithy.api#noAuth")||(async()=>({})),signer:new c.mR}],logger:e?.logger??new l.N4,serviceId:e?.serviceId??"Cognito Identity",urlParser:e?.urlParser??$.D,utf8Decoder:e?.utf8Decoder??O.ar,utf8Encoder:e?.utf8Encoder??O.Pq}))(e);return(0,x.I)(process.version),{...o,...e,runtime:"node",defaultsMode:t,bodyLengthChecker:e?.bodyLengthChecker??I.n,credentialDefaultProvider:e?.credentialDefaultProvider??w.v6,defaultUserAgentProvider:e?.defaultUserAgentProvider??(0,v.mJ)({serviceId:o.serviceId,clientVersion:"3.574.0"}),maxAttempts:e?.maxAttempts??(0,E.Z)(p.qs),region:e?.region??(0,E.Z)(a.GG,a.zH),requestHandler:P.$c.create(e?.requestHandler??n),retryMode:e?.retryMode??(0,E.Z)({...p.kN,default:async()=>(await n()).retryMode||b.L0}),sha256:e?.sha256??S.V.bind(null,"sha256"),streamCollector:e?.streamCollector??P.kv,useDualstackEndpoint:e?.useDualstackEndpoint??(0,E.Z)(a.e$),useFipsEndpoint:e?.useFipsEndpoint??(0,E.Z)(a.Ko)}})(e||{}),n=(y=t,{...y,useDualstackEndpoint:y.useDualstackEndpoint??!1,useFipsEndpoint:y.useFipsEndpoint??!1,defaultSigningName:"cognito-identity"});var y;const m=(0,a.TD)(n),g=(0,u.Co)(m),k=(0,p.$z)(g),D=(0,o.OV)(k);var R;const z=((e,t)=>{const n={...(0,oe.Rq)(e),...(0,l.xA)(e),...(0,ie.eS)(e),...se(e)};return t.forEach((e=>e.configure(n))),{...e,...(0,oe.$3)(n),...(0,l.uv)(n),...(0,ie.jt)(n),...(o=n,{httpAuthSchemes:o.httpAuthSchemes(),httpAuthSchemeProvider:o.httpAuthSchemeProvider(),credentials:o.credentials()})};var o})((R=(0,r.Dc)(D),{...(0,h.h)(R)}),e?.extensions||[]);super(z),this.config=z,this.middlewareStack.use((0,p.ey)(this.config)),this.middlewareStack.use((0,d.vK)(this.config)),this.middlewareStack.use((0,o.TC)(this.config)),this.middlewareStack.use((0,i.Y7)(this.config)),this.middlewareStack.use((0,s.n4)(this.config)),this.middlewareStack.use((0,r.sM)(this.config)),this.middlewareStack.use((0,c.wB)(this.config,{httpAuthSchemeParametersProvider:this.getDefaultHttpAuthSchemeParametersProvider(),identityProviderConfigProvider:this.getIdentityProviderConfigProvider()})),this.middlewareStack.use((0,c.lW)(this.config))}destroy(){super.destroy()}getDefaultHttpAuthSchemeParametersProvider(){return m}getIdentityProviderConfigProvider(){return async e=>new c.h$({"aws.auth#sigv4":e.credentials})}}var ae=n(1208),ce=n(77335);class de extends l.TJ{constructor(e){super(e),Object.setPrototypeOf(this,de.prototype)}}class ue extends de{constructor(e){super({name:"InternalErrorException",$fault:"server",...e}),this.name="InternalErrorException",this.$fault="server",Object.setPrototypeOf(this,ue.prototype)}}class pe extends de{constructor(e){super({name:"InvalidParameterException",$fault:"client",...e}),this.name="InvalidParameterException",this.$fault="client",Object.setPrototypeOf(this,pe.prototype)}}class le extends de{constructor(e){super({name:"LimitExceededException",$fault:"client",...e}),this.name="LimitExceededException",this.$fault="client",Object.setPrototypeOf(this,le.prototype)}}class he extends de{constructor(e){super({name:"NotAuthorizedException",$fault:"client",...e}),this.name="NotAuthorizedException",this.$fault="client",Object.setPrototypeOf(this,he.prototype)}}class ye extends de{constructor(e){super({name:"ResourceConflictException",$fault:"client",...e}),this.name="ResourceConflictException",this.$fault="client",Object.setPrototypeOf(this,ye.prototype)}}class me extends de{constructor(e){super({name:"TooManyRequestsException",$fault:"client",...e}),this.name="TooManyRequestsException",this.$fault="client",Object.setPrototypeOf(this,me.prototype)}}class fe extends de{constructor(e){super({name:"ResourceNotFoundException",$fault:"client",...e}),this.name="ResourceNotFoundException",this.$fault="client",Object.setPrototypeOf(this,fe.prototype)}}class ge extends de{constructor(e){super({name:"ExternalServiceException",$fault:"client",...e}),this.name="ExternalServiceException",this.$fault="client",Object.setPrototypeOf(this,ge.prototype)}}class xe extends de{constructor(e){super({name:"InvalidIdentityPoolConfigurationException",$fault:"client",...e}),this.name="InvalidIdentityPoolConfigurationException",this.$fault="client",Object.setPrototypeOf(this,xe.prototype)}}class we extends de{constructor(e){super({name:"DeveloperUserAlreadyRegisteredException",$fault:"client",...e}),this.name="DeveloperUserAlreadyRegisteredException",this.$fault="client",Object.setPrototypeOf(this,we.prototype)}}class ve extends de{constructor(e){super({name:"ConcurrentModificationException",$fault:"client",...e}),this.name="ConcurrentModificationException",this.$fault="client",Object.setPrototypeOf(this,ve.prototype)}}const Se=async(e,t)=>{const n=Ue("GetCredentialsForIdentity");let o;return o=JSON.stringify((0,l.Ss)(e)),Te(t,n,"/",void 0,o)},Ee=async(e,t)=>{const n=Ue("GetId");let o;return o=JSON.stringify((0,l.Ss)(e)),Te(t,n,"/",void 0,o)},Pe=async(e,t)=>{if(e.statusCode>=300)return be(e,t);const n=await(0,ce.Y2)(e.body,t);let o={};return o=qe(n,t),{$metadata:Ge(e),...o}},Ie=async(e,t)=>{if(e.statusCode>=300)return be(e,t);const n=await(0,ce.Y2)(e.body,t);let o={};return o=(0,l.Ss)(n),{$metadata:Ge(e),...o}},be=async(e,t)=>{const n={...e,body:await(0,ce.CG)(e.body,t)},o=(0,ce.cJ)(e,n.body);switch(o){case"InternalErrorException":case"com.amazonaws.cognitoidentity#InternalErrorException":throw await Oe(n,t);case"InvalidParameterException":case"com.amazonaws.cognitoidentity#InvalidParameterException":throw await De(n,t);case"LimitExceededException":case"com.amazonaws.cognitoidentity#LimitExceededException":throw await Re(n,t);case"NotAuthorizedException":case"com.amazonaws.cognitoidentity#NotAuthorizedException":throw await ze(n,t);case"ResourceConflictException":case"com.amazonaws.cognitoidentity#ResourceConflictException":throw await Me(n,t);case"TooManyRequestsException":case"com.amazonaws.cognitoidentity#TooManyRequestsException":throw await je(n,t);case"ResourceNotFoundException":case"com.amazonaws.cognitoidentity#ResourceNotFoundException":throw await Fe(n,t);case"ExternalServiceException":case"com.amazonaws.cognitoidentity#ExternalServiceException":throw await Ae(n,t);case"InvalidIdentityPoolConfigurationException":case"com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":throw await ke(n,t);case"DeveloperUserAlreadyRegisteredException":case"com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":throw await $e(n,t);case"ConcurrentModificationException":case"com.amazonaws.cognitoidentity#ConcurrentModificationException":throw await Ce(n,t);default:const i=n.body;return Ne({output:e,parsedBody:i,errorCode:o})}},Ce=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new ve({$metadata:Ge(e),...o});return(0,l.Mw)(i,n)},$e=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new we({$metadata:Ge(e),...o});return(0,l.Mw)(i,n)},Ae=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new ge({$metadata:Ge(e),...o});return(0,l.Mw)(i,n)},Oe=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new ue({$metadata:Ge(e),...o});return(0,l.Mw)(i,n)},ke=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new xe({$metadata:Ge(e),...o});return(0,l.Mw)(i,n)},De=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new pe({$metadata:Ge(e),...o});return(0,l.Mw)(i,n)},Re=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new le({$metadata:Ge(e),...o});return(0,l.Mw)(i,n)},ze=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new he({$metadata:Ge(e),...o});return(0,l.Mw)(i,n)},Me=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new ye({$metadata:Ge(e),...o});return(0,l.Mw)(i,n)},Fe=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new fe({$metadata:Ge(e),...o});return(0,l.Mw)(i,n)},je=async(e,t)=>{const n=e.body,o=(0,l.Ss)(n),i=new me({$metadata:Ge(e),...o});return(0,l.Mw)(i,n)},qe=(e,t)=>(0,l.s)(e,{Credentials:e=>((e,t)=>(0,l.s)(e,{AccessKeyId:l.lK,Expiration:e=>(0,l.Y0)((0,l.l3)((0,l.r$)(e))),SecretKey:l.lK,SessionToken:l.lK}))(e),IdentityId:l.lK}),Ge=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),Ne=(0,l.jr)(de),Te=async(e,t,n,o,i)=>{const{hostname:s,protocol:r="https",port:a,path:c}=await e.endpoint(),d={protocol:r,hostname:s,port:a,method:"POST",path:c.endsWith("/")?c.slice(0,-1)+n:c+n,headers:t};return void 0!==o&&(d.hostname=o),void 0!==i&&(d.body=i),new ie.Kd(d)};function Ue(e){return{"content-type":"application/x-amz-json-1.1","x-amz-target":`AWSCognitoIdentityService.${e}`}}class Ke extends(l.uB.classBuilder().ep({...g}).m((function(e,t,n,o){return[(0,ae.TM)(n,this.serialize,this.deserialize),(0,u.rD)(n,e.getEndpointParameterInstructions())]})).s("AWSCognitoIdentityService","GetCredentialsForIdentity",{}).n("CognitoIdentityClient","GetCredentialsForIdentityCommand").f(void 0,void 0).ser(Se).de(Pe).build()){}class He extends(l.uB.classBuilder().ep({...g}).m((function(e,t,n,o){return[(0,ae.TM)(n,this.serialize,this.deserialize),(0,u.rD)(n,e.getEndpointParameterInstructions())]})).s("AWSCognitoIdentityService","GetId",{}).n("CognitoIdentityClient","GetIdCommand").f(void 0,void 0).ser(Ee).de(Ie).build()){}}};