"use strict";(self.webpackChunkresume=self.webpackChunkresume||[]).push([[868],{4534:function(e,n,t){t.r(n),t.d(n,{Head:function(){return h},default:function(){return p}});var l=t(1151),r=t(7294);function a(e){const n=Object.assign({h1:"h1",a:"a",blockquote:"blockquote",p:"p",h2:"h2",h3:"h3",h4:"h4",ol:"ol",li:"li",span:"span",ul:"ul"},(0,l.a)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.h1,{id:"what-is-a-devcontainer"},r.createElement(n.a,{href:"#what-is-a-devcontainer"},"What is a Devcontainer")),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"프로덕션 워크로드를 컨테이너화하는 것이 일반화됨에 따라 지속적인 통합, 테스트 자동화, 모든 기능을 갖춘 코딩 환경을 포함하여 배포 이상의 시나리오에 컨테이너를 사용하는 개발자가 늘어나고 있습니다."),"\n",r.createElement(n.p,null,"각 시나리오의 요구 사항은 단순한 단일 컨테이너 환경부터 복잡하고 조율된 다중 컨테이너 설정까지 다양할 수 있습니다. 개발 컨테이너 사양(또는 줄여서 Dev 컨테이너 사양)은 다른 오케스트레이터 형식을 만들려고 시도하는 대신 일반적인 개발 관련 설정, 도구 및 구성을 위한 메타데이터로 기존 형식을 강화하는 방법을 모색합니다."),"\n"),"\n",r.createElement(n.h2,{id:"why-use-a-devcontainer"},r.createElement(n.a,{href:"#why-use-a-devcontainer"},"Why use a Devcontainer")),"\n",r.createElement(n.h3,{id:"pros"},r.createElement(n.a,{href:"#pros"},"Pros")),"\n",r.createElement(n.h4,{id:"개발환경의-형상관리"},r.createElement(n.a,{href:"#개발환경의-형상관리"},"개발환경의 형상관리")),"\n",r.createElement(n.p,null,"아래와 같은 상황은 우리에게 간간히 일어납니다."),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Case1"),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"신규 개발자가 입사"),"\n",r.createElement(n.p,null,"개발 환경 구축 메뉴얼을 제공"),"\n",r.createElement(n.p,null,"개발 구축 메뉴얼의 Java / Node 상이한 버전 혹은 배포판을 설치"),"\n"),"\n"),"\n",r.createElement(n.li,null,"\n",r.createElement(n.p,null,"Case2"),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"보안 및 신규 기능 추가를 위해 Java / Node 의 버전이 변경"),"\n",r.createElement(n.p,null,"E-Mail, 메신저, 구두로 통해 공지 전달"),"\n",r.createElement(n.p,null,"적용/미적용 인력에 따른 이슈 발생"),"\n"),"\n"),"\n"),"\n",r.createElement(n.p,null,r.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">devcontainer</code>'}})," 는 Code base로 작동하기 때문에 변경사항에 대한 전파 및 적용이 매우 손쉬움."),"\n",r.createElement(n.h4,{id:"원격-연결을-통한-개발-기기-리소스-감소"},r.createElement(n.a,{href:"#원격-연결을-통한-개발-기기-리소스-감소"},"원격 연결을 통한 개발 기기 리소스 감소")),"\n",r.createElement(n.p,null,r.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">devcontainer</code>'}})," 를 k8s 혹은 Docker host에 실행 수 원격으로 접속하여 작업이 가능합니다."),"\n",r.createElement(n.p,null,"이로서 Local 개발 머신의 사양이 부족해도 원할하게 작업이 가능합니다."),"\n",r.createElement(n.p,null,"또한 LiveServer를 통해 동시 작업도 가능합니다."),"\n",r.createElement(n.h4,{id:"동일한-경험"},r.createElement(n.a,{href:"#동일한-경험"},"동일한 경험")),"\n",r.createElement(n.p,null,r.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">devcontainer</code>'}})," 내부에서 작업하기 때문에 사용자 또는 개발/운영환경 마다 다른 Folder path에 대해서 신경 쓸 필요가 없습니다.\r\n확장 및 설정조차 일률적으로 적용이 가능하기 때문에 사용자 또는 환경에 따른 Risk가 줄어 듭니다."),"\n",r.createElement(n.h3,{id:"cons"},r.createElement(n.a,{href:"#cons"},"Cons")),"\n",r.createElement(n.p,null,"마법의 은탄환 처럼 만능은 아닙니다. Local 환경에 Docker가 필수적으로 설치되야 함으로서 좀 더 많은 리소스가 사용됩니다."),"\n",r.createElement(n.h2,{id:"next-story"},r.createElement(n.a,{href:"#next-story"},"Next story")),"\n",r.createElement(n.p,null,"다음 편에서는 ",r.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">devcontainer</code>'}}),"를 어떻게 사용하는 지 알아봅시다."),"\n",r.createElement(n.h2,{id:"related-links"},r.createElement(n.a,{href:"#related-links"},"Related Links")),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://containers.dev/",rel:"nofollow noopener noreferrer"},"devcontainer")),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.a)(),e.components);return n?r.createElement(n,e,r.createElement(a,e)):a(e)},o=t(2868),u=t(5460),m=t(1094);const{Title:s,Paragraph:i}=o.default,E={hr:u.Z,p:i,wrapper(e){let{components:n,...t}=e;return r.createElement(o.default,t)}};function d(e){let{data:n,children:t}=e;return r.createElement(m.Z,{style:{minHeight:"100%"}},r.createElement(s,null,n.mdx.frontmatter.title),r.createElement(l.Z,{components:E},t))}function p(e){return r.createElement(d,e,r.createElement(c,e))}const h=e=>{let{data:n,pageContext:{frontmatter:{title:t,description:l}}}=e;return r.createElement(r.Fragment,null,r.createElement("title",null,t),r.createElement("meta",{name:"description",content:l}))}},1151:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return c}});var l=t(7294);const r={},a=l.createContext(r);function c(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);
//# sourceMappingURL=component---src-components-templates-post-template-jsx-content-file-path-src-posts-use-devcontainer-mdx-3d6e3d362f8a685c6368.js.map