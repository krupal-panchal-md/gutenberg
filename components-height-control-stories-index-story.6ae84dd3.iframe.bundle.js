"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[6265],{"./node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:()=>_typeof})},"./packages/a11y/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>speak});var build_module=__webpack_require__("./packages/i18n/build-module/index.js");function addContainer(ariaLive="polite"){const container=document.createElement("div");container.id=`a11y-speak-${ariaLive}`,container.className="a11y-speak-region",container.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),container.setAttribute("aria-live",ariaLive),container.setAttribute("aria-relevant","additions text"),container.setAttribute("aria-atomic","true");const{body}=document;return body&&body.appendChild(container),container}let previousMessage="";function speak(message,ariaLive){!function clear(){const regions=document.getElementsByClassName("a11y-speak-region"),introText=document.getElementById("a11y-speak-intro-text");for(let i=0;i<regions.length;i++)regions[i].textContent="";introText&&introText.setAttribute("hidden","hidden")}(),message=function filterMessage(message){return message=message.replace(/<[^<>]+>/g," "),previousMessage===message&&(message+=" "),previousMessage=message,message}(message);const introText=document.getElementById("a11y-speak-intro-text"),containerAssertive=document.getElementById("a11y-speak-assertive"),containerPolite=document.getElementById("a11y-speak-polite");containerAssertive&&"assertive"===ariaLive?containerAssertive.textContent=message:containerPolite&&(containerPolite.textContent=message),introText&&introText.removeAttribute("hidden")}!function domReady(callback){"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",callback):callback())}((function setup(){const introText=document.getElementById("a11y-speak-intro-text"),containerAssertive=document.getElementById("a11y-speak-assertive"),containerPolite=document.getElementById("a11y-speak-polite");null===introText&&function addIntroText(){const introText=document.createElement("p");introText.id="a11y-speak-intro-text",introText.className="a11y-speak-intro-text",introText.textContent=(0,build_module.__)("Notifications"),introText.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),introText.setAttribute("hidden","hidden");const{body}=document;return body&&body.appendChild(introText),introText}(),null===containerAssertive&&addContainer("assertive"),null===containerPolite&&addContainer("polite")}))},"./packages/block-editor/src/components/block-edit/context.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FF:()=>DEFAULT_BLOCK_EDIT_CONTEXT,Q2:()=>Provider,Z8:()=>useBlockEditContext,hP:()=>blockEditingModeKey,hh:()=>mayDisplayControlsKey,tL:()=>mayDisplayParentControlsKey});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const mayDisplayControlsKey=Symbol("mayDisplayControls"),mayDisplayParentControlsKey=Symbol("mayDisplayParentControls"),blockEditingModeKey=Symbol("blockEditingMode"),DEFAULT_BLOCK_EDIT_CONTEXT={name:"",isSelected:!1},Context=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(DEFAULT_BLOCK_EDIT_CONTEXT),{Provider}=Context;function useBlockEditContext(){return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context)}},"./packages/block-editor/src/components/use-settings/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>useSettings});var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/data/build-module/components/use-select/index.js"),_block_edit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/block-editor/src/components/block-edit/context.js"),_store__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/block-editor/src/store/index.js"),_lock_unlock__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/block-editor/src/lock-unlock.js");function useSettings(...paths){const{clientId=null}=(0,_block_edit__WEBPACK_IMPORTED_MODULE_1__.Z8)();return(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.Z)((select=>(0,_lock_unlock__WEBPACK_IMPORTED_MODULE_3__.U)(select(_store__WEBPACK_IMPORTED_MODULE_0__.h)).getBlockSettings(clientId,...paths)),[clientId,...paths])}},"./packages/components/build-module/utils/reduce-motion.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function reduceMotion(prop="transition"){let style;switch(prop){case"transition":style="transition-duration: 0ms;";break;case"animation":style="animation-duration: 1ms;";break;default:style="\n\t\t\t\tanimation-duration: 1ms;\n\t\t\t\ttransition-duration: 0ms;\n\t\t\t"}return`\n\t\t@media ( prefers-reduced-motion: reduce ) {\n\t\t\t${style};\n\t\t}\n\t`}__webpack_require__.d(__webpack_exports__,{r:()=>reduceMotion})},"./packages/compose/build-module/hooks/use-merge-refs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useMergeRefs});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function assignRef(ref,value){"function"==typeof ref?ref(value):ref&&ref.hasOwnProperty("current")&&(ref.current=value)}function useMergeRefs(refs){const element=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(),isAttached=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),didElementChange=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),previousRefs=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),currentRefs=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);return currentRefs.current=refs,(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{!1===didElementChange.current&&!0===isAttached.current&&refs.forEach(((ref,index)=>{const previousRef=previousRefs.current[index];ref!==previousRef&&(assignRef(previousRef,null),assignRef(ref,element.current))})),previousRefs.current=refs}),refs),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{didElementChange.current=!1})),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value=>{assignRef(element,value),didElementChange.current=!0,isAttached.current=null!==value;const refsToAssign=value?currentRefs.current:previousRefs.current;for(const ref of refsToAssign)assignRef(ref,value)}),[])}},"./packages/compose/build-module/hooks/use-ref-effect/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useRefEffect});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useRefEffect(callback,dependencies){const cleanup=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{node?cleanup.current=callback(node):cleanup.current&&cleanup.current()}),dependencies)}},"./packages/dom/build-module/utils/assert-is-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function assertIsDefined(val,name){0}__webpack_require__.d(__webpack_exports__,{c:()=>assertIsDefined})},"./packages/icons/build-module/library/plus.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"}))},"./packages/is-shallow-equal/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>isShallowEqual});var objects=__webpack_require__("./packages/is-shallow-equal/build-module/objects.js");function isShallowEqual(a,b){if(a&&b){if(a.constructor===Object&&b.constructor===Object)return(0,objects.Z)(a,b);if(Array.isArray(a)&&Array.isArray(b))return function isShallowEqualArrays(a,b){if(a===b)return!0;if(a.length!==b.length)return!1;for(let i=0,len=a.length;i<len;i++)if(a[i]!==b[i])return!1;return!0}(a,b)}return a===b}},"./packages/is-shallow-equal/build-module/objects.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isShallowEqualObjects(a,b){if(a===b)return!0;const aKeys=Object.keys(a),bKeys=Object.keys(b);if(aKeys.length!==bKeys.length)return!1;let i=0;for(;i<aKeys.length;){const key=aKeys[i],aValue=a[key];if(void 0===aValue&&!b.hasOwnProperty(key)||aValue!==b[key])return!1;i++}return!0}__webpack_require__.d(__webpack_exports__,{Z:()=>isShallowEqualObjects})},"./packages/keycodes/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ac:()=>rawShortcut,Bi:()=>PAGEDOWN,E_:()=>displayShortcut,J3:()=>shortcutAriaLabel,K5:()=>ENTER,L_:()=>SPACE,Mf:()=>TAB,RL:()=>LEFT,Sd:()=>HOME,UP:()=>UP,WV:()=>DOWN,ZH:()=>BACKSPACE,hY:()=>ESCAPE,kC:()=>F10,pX:()=>RIGHT,uR:()=>END,vd:()=>isKeyboardEvent,wx:()=>PAGEUP,yY:()=>DELETE});var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js"),_platform__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/keycodes/build-module/platform.js");const BACKSPACE=8,TAB=9,ENTER=13,ESCAPE=27,SPACE=32,PAGEUP=33,PAGEDOWN=34,END=35,HOME=36,LEFT=37,UP=38,RIGHT=39,DOWN=40,DELETE=46,F10=121,ALT="alt",CTRL="ctrl",COMMAND="meta",SHIFT="shift";function capitaliseFirstCharacter(string){return string.length<2?string.toUpperCase():string.charAt(0).toUpperCase()+string.slice(1)}function mapValues(object,mapFn){return Object.fromEntries(Object.entries(object).map((([key,value])=>[key,mapFn(value)])))}const modifiers={primary:_isApple=>_isApple()?[COMMAND]:[CTRL],primaryShift:_isApple=>_isApple()?[SHIFT,COMMAND]:[CTRL,SHIFT],primaryAlt:_isApple=>_isApple()?[ALT,COMMAND]:[CTRL,ALT],secondary:_isApple=>_isApple()?[SHIFT,ALT,COMMAND]:[CTRL,SHIFT,ALT],access:_isApple=>_isApple()?[CTRL,ALT]:[SHIFT,ALT],ctrl:()=>[CTRL],alt:()=>[ALT],ctrlShift:()=>[CTRL,SHIFT],shift:()=>[SHIFT],shiftAlt:()=>[SHIFT,ALT],undefined:()=>[]},rawShortcut=mapValues(modifiers,(modifier=>(character,_isApple=_platform__WEBPACK_IMPORTED_MODULE_1__.R)=>[...modifier(_isApple),character.toLowerCase()].join("+"))),displayShortcutList=mapValues(modifiers,(modifier=>(character,_isApple=_platform__WEBPACK_IMPORTED_MODULE_1__.R)=>{const isApple=_isApple(),replacementKeyMap={[ALT]:isApple?"⌥":"Alt",[CTRL]:isApple?"⌃":"Ctrl",[COMMAND]:"⌘",[SHIFT]:isApple?"⇧":"Shift"};return[...modifier(_isApple).reduce(((accumulator,key)=>{var _replacementKeyMap$ke;const replacementKey=null!==(_replacementKeyMap$ke=replacementKeyMap[key])&&void 0!==_replacementKeyMap$ke?_replacementKeyMap$ke:key;return isApple?[...accumulator,replacementKey]:[...accumulator,replacementKey,"+"]}),[]),capitaliseFirstCharacter(character)]})),displayShortcut=mapValues(displayShortcutList,(shortcutList=>(character,_isApple=_platform__WEBPACK_IMPORTED_MODULE_1__.R)=>shortcutList(character,_isApple).join(""))),shortcutAriaLabel=mapValues(modifiers,(modifier=>(character,_isApple=_platform__WEBPACK_IMPORTED_MODULE_1__.R)=>{const isApple=_isApple(),replacementKeyMap={[SHIFT]:"Shift",[COMMAND]:isApple?"Command":"Control",[CTRL]:"Control",[ALT]:isApple?"Option":"Alt",",":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Comma"),".":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Period"),"`":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Backtick"),"~":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tilde")};return[...modifier(_isApple),character].map((key=>{var _replacementKeyMap$ke2;return capitaliseFirstCharacter(null!==(_replacementKeyMap$ke2=replacementKeyMap[key])&&void 0!==_replacementKeyMap$ke2?_replacementKeyMap$ke2:key)})).join(isApple?" ":" + ")}));const isKeyboardEvent=mapValues(modifiers,(getModifiers=>(event,character,_isApple=_platform__WEBPACK_IMPORTED_MODULE_1__.R)=>{const mods=getModifiers(_isApple),eventMods=function getEventModifiers(event){return[ALT,CTRL,COMMAND,SHIFT].filter((key=>event[`${key}Key`]))}(event),replacementWithShiftKeyMap={Comma:",",Backslash:"\\",IntlRo:"\\",IntlYen:"\\"},modsDiff=mods.filter((mod=>!eventMods.includes(mod))),eventModsDiff=eventMods.filter((mod=>!mods.includes(mod)));if(modsDiff.length>0||eventModsDiff.length>0)return!1;let key=event.key.toLowerCase();return character?(event.altKey&&1===character.length&&(key=String.fromCharCode(event.keyCode).toLowerCase()),event.shiftKey&&1===character.length&&replacementWithShiftKeyMap[event.code]&&(key=replacementWithShiftKeyMap[event.code]),"del"===character&&(character="delete"),key===character.toLowerCase()):mods.includes(key)}))},"./packages/keycodes/build-module/platform.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isAppleOS(_window=null){if(!_window){if("undefined"==typeof window)return!1;_window=window}const{platform}=_window.navigator;return-1!==platform.indexOf("Mac")||["iPad","iPhone"].includes(platform)}__webpack_require__.d(__webpack_exports__,{R:()=>isAppleOS})},"./packages/primitives/build-module/svg/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cd:()=>Circle,G:()=>G,UL:()=>Rect,Wj:()=>SVG,y$:()=>Path});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");const Circle=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("circle",props),G=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("g",props),Path=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path",props),Rect=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect",props),SVG=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({className,isPressed,...props},ref)=>{const appliedProps={...props,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,{"is-pressed":isPressed})||void 0,"aria-hidden":!0,focusable:!1};return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg",{...appliedProps,ref})}));SVG.displayName="SVG"},"./packages/priority-queue/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createQueue});__webpack_require__("./node_modules/requestidlecallback/index.js");const request_idle_callback=function createRequestIdleCallback(){return"undefined"==typeof window?callback=>{setTimeout((()=>callback(Date.now())),0)}:window.requestIdleCallback}(),createQueue=()=>{const waitingList=new Map;let isRunning=!1;const runWaitingList=deadline=>{for(const[nextElement,callback]of waitingList)if(waitingList.delete(nextElement),callback(),"number"==typeof deadline||deadline.timeRemaining()<=0)break;0!==waitingList.size?request_idle_callback(runWaitingList):isRunning=!1};return{add:(element,item)=>{waitingList.set(element,item),isRunning||(isRunning=!0,request_idle_callback(runWaitingList))},flush:element=>{const callback=waitingList.get(element);return void 0!==callback&&(waitingList.delete(element),callback(),!0)},cancel:element=>waitingList.delete(element),reset:()=>{waitingList.clear(),isRunning=!1}}}},"./packages/private-apis/build-module/implementation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{es:()=>__dangerousOptInToUnstableAPIsOnlyForCoreModules});var process=__webpack_require__("./node_modules/process/browser.js");const CORE_MODULES_USING_PRIVATE_APIS=["@wordpress/block-directory","@wordpress/block-editor","@wordpress/block-library","@wordpress/blocks","@wordpress/commands","@wordpress/components","@wordpress/core-commands","@wordpress/core-data","@wordpress/customize-widgets","@wordpress/data","@wordpress/edit-post","@wordpress/edit-site","@wordpress/edit-widgets","@wordpress/editor","@wordpress/format-library","@wordpress/interface","@wordpress/patterns","@wordpress/preferences","@wordpress/reusable-blocks","@wordpress/router","@wordpress/dataviews"],registeredPrivateApis=[];let allowReRegistration;try{allowReRegistration=!process.env.IS_WORDPRESS_CORE}catch(error){allowReRegistration=!0}const __dangerousOptInToUnstableAPIsOnlyForCoreModules=(consent,moduleName)=>{if(!CORE_MODULES_USING_PRIVATE_APIS.includes(moduleName))throw new Error(`You tried to opt-in to unstable APIs as module "${moduleName}". This feature is only for JavaScript modules shipped with WordPress core. Please do not use it in plugins and themes as the unstable APIs will be removed without a warning. If you ignore this error and depend on unstable features, your product will inevitably break on one of the next WordPress releases.`);if(!allowReRegistration&&registeredPrivateApis.includes(moduleName))throw new Error(`You tried to opt-in to unstable APIs as module "${moduleName}" which is already registered. This feature is only for JavaScript modules shipped with WordPress core. Please do not use it in plugins and themes as the unstable APIs will be removed without a warning. If you ignore this error and depend on unstable features, your product will inevitably break on one of the next WordPress releases.`);if("I know using unstable features means my theme or plugin will inevitably break in the next version of WordPress."!==consent)throw new Error("You tried to opt-in to unstable APIs without confirming you know the consequences. This feature is only for JavaScript modules shipped with WordPress core. Please do not use it in plugins and themes as the unstable APIs will removed without a warning. If you ignore this error and depend on unstable features, your product will inevitably break on the next WordPress release.");return registeredPrivateApis.push(moduleName),{lock,unlock}};function lock(object,privateData){if(!object)throw new Error("Cannot lock an undefined object.");__private in object||(object[__private]={}),lockedData.set(object[__private],privateData)}function unlock(object){if(!object)throw new Error("Cannot unlock an undefined object.");if(!(__private in object))throw new Error("Cannot unlock an object that was not locked before. ");return lockedData.get(object[__private])}const lockedData=new WeakMap,__private=Symbol("Private API ID")},"./packages/block-editor/src/components/height-control/stories/index.story.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./packages/components/build-module/unit-control/utils.js"),base_control=__webpack_require__("./packages/components/build-module/base-control/index.js"),component=__webpack_require__("./packages/components/build-module/flex/flex/component.js"),flex_item_component=__webpack_require__("./packages/components/build-module/flex/flex-item/component.js"),unit_control=__webpack_require__("./packages/components/build-module/unit-control/index.js"),spacer_component=__webpack_require__("./packages/components/build-module/spacer/component.js"),range_control=__webpack_require__("./packages/components/build-module/range-control/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),use_settings=__webpack_require__("./packages/block-editor/src/components/use-settings/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RANGE_CONTROL_CUSTOM_SETTINGS={px:{max:1e3,step:1},"%":{max:100,step:1},vw:{max:100,step:1},vh:{max:100,step:1},em:{max:50,step:.1},rem:{max:50,step:.1},svw:{max:100,step:1},lvw:{max:100,step:1},dvw:{max:100,step:1},svh:{max:100,step:1},lvh:{max:100,step:1},dvh:{max:100,step:1},vi:{max:100,step:1},svi:{max:100,step:1},lvi:{max:100,step:1},dvi:{max:100,step:1},vb:{max:100,step:1},svb:{max:100,step:1},lvb:{max:100,step:1},dvb:{max:100,step:1},vmin:{max:100,step:1},svmin:{max:100,step:1},lvmin:{max:100,step:1},dvmin:{max:100,step:1},vmax:{max:100,step:1},svmax:{max:100,step:1},lvmax:{max:100,step:1},dvmax:{max:100,step:1}};function HeightControl({label=(0,build_module.__)("Height"),onChange,value}){var _RANGE_CONTROL_CUSTOM,_RANGE_CONTROL_CUSTOM2;const customRangeValue=parseFloat(value),[availableUnits]=(0,use_settings.r)("spacing.units"),units=(0,utils.nj)({availableUnits:availableUnits||["%","px","em","rem","vh","vw"]}),selectedUnit=(0,react.useMemo)((()=>(0,utils.YX)(value)),[value])[1]||units[0]?.value||"px";return(0,jsx_runtime.jsxs)("fieldset",{className:"block-editor-height-control",children:[(0,jsx_runtime.jsx)(base_control.ZP.VisualLabel,{as:"legend",children:label}),(0,jsx_runtime.jsxs)(component.Z,{children:[(0,jsx_runtime.jsx)(flex_item_component.Z,{isBlock:!0,children:(0,jsx_runtime.jsx)(unit_control.ZP,{value,units,onChange,onUnitChange:newUnit=>{const[currentValue,currentUnit]=(0,utils.YX)(value);["em","rem"].includes(newUnit)&&"px"===currentUnit?onChange((currentValue/16).toFixed(2)+newUnit):["em","rem"].includes(currentUnit)&&"px"===newUnit?onChange(Math.round(16*currentValue)+newUnit):["%","vw","svw","lvw","dvw","vh","svh","lvh","dvh","vi","svi","lvi","dvi","vb","svb","lvb","dvb","vmin","svmin","lvmin","dvmin","vmax","svmax","lvmax","dvmax"].includes(newUnit)&&currentValue>100&&onChange(100+newUnit)},min:0,size:"__unstable-large",label,hideLabelFromVision:!0})}),(0,jsx_runtime.jsx)(flex_item_component.Z,{isBlock:!0,children:(0,jsx_runtime.jsx)(spacer_component.Z,{marginX:2,marginBottom:0,children:(0,jsx_runtime.jsx)(range_control.Z,{value:customRangeValue,min:0,max:null!==(_RANGE_CONTROL_CUSTOM=RANGE_CONTROL_CUSTOM_SETTINGS[selectedUnit]?.max)&&void 0!==_RANGE_CONTROL_CUSTOM?_RANGE_CONTROL_CUSTOM:100,step:null!==(_RANGE_CONTROL_CUSTOM2=RANGE_CONTROL_CUSTOM_SETTINGS[selectedUnit]?.step)&&void 0!==_RANGE_CONTROL_CUSTOM2?_RANGE_CONTROL_CUSTOM2:.1,withInputField:!1,onChange:next=>{onChange([next,selectedUnit].join(""))},__nextHasNoMarginBottom:!0,label,hideLabelFromVision:!0})})})]})]})}HeightControl.displayName="HeightControl",HeightControl.__docgenInfo={description:"HeightControl renders a linked unit control and range control for adjusting the height of a block.\n\n@see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/height-control/README.md\n\n@param {Object}                     props\n@param {?string}                    props.label    A label for the control.\n@param {( value: string ) => void } props.onChange Called when the height changes.\n@param {string}                     props.value    The current height value.\n\n@return {Component} The component to be rendered.",methods:[],displayName:"HeightControl",props:{label:{defaultValue:{value:"__( 'Height' )",computed:!0},required:!1}}};const index_story={component:HeightControl,title:"BlockEditor/HeightControl",parameters:{sourceLink:"packages/block-editor/src/components/height-control"}},Template=props=>{const[value,setValue]=(0,react.useState)();return(0,jsx_runtime.jsx)(HeightControl,{onChange:setValue,value,...props})};Template.displayName="Template";const Default=Template.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"props => {\n  const [value, setValue] = useState();\n  return <HeightControl onChange={setValue} value={value} {...props} />;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);