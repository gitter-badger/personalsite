(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{139:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),s=a(4),n=a.n(s),l=a(140),o=a(168),c=a.n(o),d=function(e){var t=e.imageInfo,a={borderRadius:"5px"},i=t.alt,s=void 0===i?"":i,n=t.childImageSharp,l=t.image;return l&&l.childImageSharp?r.a.createElement(c.a,{style:a,fluid:l.childImageSharp.fluid,alt:s}):n?r.a.createElement(c.a,{style:a,fluid:n.fluid,alt:s}):l&&"string"==typeof l?r.a.createElement("img",{style:a,src:l,alt:s}):null};d.propTypes={imageInfo:n.a.shape({alt:n.a.string,childImageSharp:n.a.object,image:n.a.oneOfType([n.a.object,n.a.string]).isRequired,style:n.a.object}).isRequired};var u=d,m=function(e){var t=e.gridItems;return r.a.createElement("div",{className:"columns is-multiline"},t.map(function(e){return r.a.createElement("div",{key:e.text,className:"column is-6"},r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"has-text-centered"},r.a.createElement("div",{style:{width:"240px",display:"inline-block"}},r.a.createElement(u,{imageInfo:e}))),r.a.createElement("p",null,e.text)))}))};m.propTypes={gridItems:n.a.arrayOf(n.a.shape({image:n.a.oneOfType([n.a.object,n.a.string]),text:n.a.string}))};var f=m,p=a(169),g=function(e){var t=e.testimonials;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement("article",{key:Object(p.v4)(),className:"message"},r.a.createElement("div",{className:"message-body"},e.quote,r.a.createElement("br",null),r.a.createElement("cite",null," – ",e.author)))}))};g.propTypes={testimonials:n.a.arrayOf(n.a.shape({quote:n.a.string,author:n.a.string}))};var h=g,y=function(e){var t=e.data;return r.a.createElement("div",{className:"columns"},t.map(function(e){return r.a.createElement("div",{key:e.plan,className:"column"},r.a.createElement("section",{className:"section"},r.a.createElement("h4",{className:"has-text-centered has-text-weight-semibold"},e.plan),r.a.createElement("h2",{className:"is-size-1 has-text-weight-bold has-text-primary has-text-centered"},"$",e.price),r.a.createElement("p",{className:"has-text-weight-semibold"},e.description),r.a.createElement("ul",null,e.items.map(function(e){return r.a.createElement("li",{key:e,className:"is-size-5"},e)}))))}))};y.propTypes={data:n.a.arrayOf(n.a.shape({plan:n.a.string,price:n.a.oneOfType([n.a.string,n.a.number]),description:n.a.string,items:n.a.array}))};var v=y;a.d(t,"ProductPageTemplate",function(){return b}),a.d(t,"productPageQuery",function(){return w});var b=function(e){var t=e.image,a=e.title,i=e.heading,s=e.description,n=e.intro,l=e.main,o=e.testimonials,c=e.fullImage,d=e.pricing;return r.a.createElement("section",{className:"section section--gradient"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-10 is-offset-1"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"full-width-image-container margin-top-0",style:{backgroundImage:"url("+(t.childImageSharp?t.childImageSharp.fluid.src:t)+")"}},r.a.createElement("h2",{className:"has-text-weight-bold is-size-1",style:{boxShadow:"0.5rem 0 0 #f40, -0.5rem 0 0 #f40",backgroundColor:"#f40",color:"white",padding:"1rem"}},a)),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-7"},r.a.createElement("h3",{className:"has-text-weight-semibold is-size-2"},i),r.a.createElement("p",null,s))),r.a.createElement(f,{gridItems:n.blurbs}),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-7"},r.a.createElement("h3",{className:"has-text-weight-semibold is-size-3"},l.heading),r.a.createElement("p",null,l.description))),r.a.createElement("div",{className:"tile is-ancestor"},r.a.createElement("div",{className:"tile is-vertical"},r.a.createElement("div",{className:"tile"},r.a.createElement("div",{className:"tile is-parent is-vertical"},r.a.createElement("article",{className:"tile is-child"},r.a.createElement(u,{imageInfo:l.image1}))),r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("article",{className:"tile is-child"},r.a.createElement(u,{imageInfo:l.image2})))),r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("article",{className:"tile is-child"},r.a.createElement(u,{imageInfo:l.image3}))))),r.a.createElement(h,{testimonials:o}),r.a.createElement("div",{className:"full-width-image-container",style:{backgroundImage:"url("+(c.childImageSharp?c.childImageSharp.fluid.src:c)+")"}}),r.a.createElement("h2",{className:"has-text-weight-semibold is-size-2"},d.heading),r.a.createElement("p",{className:"is-size-5"},d.description),r.a.createElement(v,{data:d.plans})))))))};b.propTypes={image:n.a.oneOfType([n.a.object,n.a.string]),title:n.a.string,heading:n.a.string,description:n.a.string,intro:n.a.shape({blurbs:n.a.array}),main:n.a.shape({heading:n.a.string,description:n.a.string,image1:n.a.oneOfType([n.a.object,n.a.string]),image2:n.a.oneOfType([n.a.object,n.a.string]),image3:n.a.oneOfType([n.a.object,n.a.string])}),testimonials:n.a.array,fullImage:n.a.oneOfType([n.a.object,n.a.string]),pricing:n.a.shape({heading:n.a.string,description:n.a.string,plans:n.a.array})};var E=function(e){var t=e.data.markdownRemark.frontmatter;return r.a.createElement(l.a,null,r.a.createElement(b,{image:t.image,title:t.title,heading:t.heading,description:t.description,intro:t.intro,main:t.main,testimonials:t.testimonials,fullImage:t.full_image,pricing:t.pricing}))};E.propTypes={data:n.a.shape({markdownRemark:n.a.shape({frontmatter:n.a.object})})};t.default=E;var w="2855502059"},154:function(e,t){var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(a){var i=new Uint8Array(16);e.exports=function(){return a(i),i}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},155:function(e,t){for(var a=[],i=0;i<256;++i)a[i]=(i+256).toString(16).substr(1);e.exports=function(e,t){var i=t||0,r=a;return[r[e[i++]],r[e[i++]],r[e[i++]],r[e[i++]],"-",r[e[i++]],r[e[i++]],"-",r[e[i++]],r[e[i++]],"-",r[e[i++]],r[e[i++]],"-",r[e[i++]],r[e[i++]],r[e[i++]],r[e[i++]],r[e[i++]],r[e[i++]]].join("")}},168:function(e,t,a){"use strict";var i=a(7);t.__esModule=!0,t.default=void 0;var r,s=i(a(6)),n=i(a(47)),l=i(a(150)),o=i(a(151)),c=i(a(0)),d=i(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},m={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!m[a]||(m[a]=!0,!1)},p=[];var g=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),p.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+l+o+t+n+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,s=(0,l.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({},s,{onLoad:i,onError:r,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var v=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!0,s=!1,l=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!1,s=!0),"undefined"==typeof window&&(i=!1,r=!1),t.critical&&(i=!0,r=!1,s=!1);var d=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:r,IOSupported:s,fadeIn:l,hasNoScript:d,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e,t=u(this.props),a=t.title,i=t.alt,r=t.className,s=t.style,n=void 0===s?{}:s,l=t.imgStyle,d=void 0===l?{}:l,m=t.placeholderStyle,f=void 0===m?{}:m,p=t.fluid,g=t.fixed,v=t.backgroundColor,b=t.Tag;e="boolean"==typeof v?"lightgray":v;var E=(0,o.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},d,f),w=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},d);if(p){var S=p;return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&c.default.createElement(y,{alt:i,title:a,src:S.base64,style:E}),S.tracedSVG&&c.default.createElement(y,{alt:i,title:a,src:S.tracedSVG,style:E}),e&&c.default.createElement(b,{title:a,style:{backgroundColor:e,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,S.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),c.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),c.default.createElement(y,{alt:i,title:a,src:S.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:i,title:a},S))}}))}if(g){var N=g,I=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},n);return"inherit"===n.display&&delete I.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef},N.base64&&c.default.createElement(y,{alt:i,title:a,src:N.base64,style:E}),N.tracedSVG&&c.default.createElement(y,{alt:i,title:a,src:N.tracedSVG,style:E}),e&&c.default.createElement(b,{title:a,style:{backgroundColor:e,width:N.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:N.height}}),this.state.isVisible&&c.default.createElement("picture",null,N.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),c.default.createElement("source",{srcSet:N.srcSet,sizes:N.sizes}),c.default.createElement(y,{alt:i,title:a,width:N.width,height:N.height,src:N.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:i,title:a,width:N.width,height:N.height},N))}}))}return null},t}(c.default.Component);v.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});v.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,Tag:d.default.string};var w=v;t.default=w},169:function(e,t,a){var i=a(170),r=a(171),s=r;s.v1=i,s.v4=r,e.exports=s},170:function(e,t,a){var i,r,s=a(154),n=a(155),l=0,o=0;e.exports=function(e,t,a){var c=t&&a||0,d=t||[],u=(e=e||{}).node||i,m=void 0!==e.clockseq?e.clockseq:r;if(null==u||null==m){var f=s();null==u&&(u=i=[1|f[0],f[1],f[2],f[3],f[4],f[5]]),null==m&&(m=r=16383&(f[6]<<8|f[7]))}var p=void 0!==e.msecs?e.msecs:(new Date).getTime(),g=void 0!==e.nsecs?e.nsecs:o+1,h=p-l+(g-o)/1e4;if(h<0&&void 0===e.clockseq&&(m=m+1&16383),(h<0||p>l)&&void 0===e.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=p,o=g,r=m;var y=(1e4*(268435455&(p+=122192928e5))+g)%4294967296;d[c++]=y>>>24&255,d[c++]=y>>>16&255,d[c++]=y>>>8&255,d[c++]=255&y;var v=p/4294967296*1e4&268435455;d[c++]=v>>>8&255,d[c++]=255&v,d[c++]=v>>>24&15|16,d[c++]=v>>>16&255,d[c++]=m>>>8|128,d[c++]=255&m;for(var b=0;b<6;++b)d[c+b]=u[b];return t||n(d)}},171:function(e,t,a){var i=a(154),r=a(155);e.exports=function(e,t,a){var s=t&&a||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var n=(e=e||{}).random||(e.rng||i)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t)for(var l=0;l<16;++l)t[s+l]=n[l];return t||r(n)}}}]);
//# sourceMappingURL=component---src-templates-product-page-js-b6a7b7b4e0746aa9f62b.js.map