!function(){"use strict";var c=document.getElementById("hde-contact-widget"),t=c.getAttribute("data-host"),e=c.getAttribute("data-prepend-message"),g=c.getAttribute("data-comment"),a=c.getAttribute("data-assets-host")||"//"+t,s=c.getAttribute("data-lang")||"ru",o=c.getAttribute("data-user-name")||null,i=c.getAttribute("data-user-email")||null,n=c.getAttribute("data-custom-inner-container")||null;let r=c.getAttribute("data-chat-width")||300,l=c.getAttribute("data-chat-height")||400;const d=c.getAttribute("data-id")||null;if(window.hdeContactWidgetCustom)m(window.hdeContactWidgetCustom);else{var h=document.createElement("script");if(h.src="//"+t+"/custom/contact-widget-config.js",c.getAttribute("data-dev")&&(h.src=h.src+"?"+(new Date).getTime()),h.id="hde-contact-widget-config",h.defer=!0,c.after(h),c.getAttribute("data-json"))m(JSON.parse(c.getAttribute("data-json")));else var p=setInterval(function(){window.hdeContactWidget&&(clearTimeout(p),m(window.hdeContactWidget))},1e3)}function m(c){var h,p=c.position||"right-bottom",m=c.direction||"top",b=parseInt(c.size,10)||22,w=c.bg||"23869B",x=c.color||"fff",u=c.buttons||[];switch(m){case"top":h="bottom";break;case"bottom":h="top";break;case"left":h="right";break;case"right":h="left";break;default:h="right"}var v="";switch(p){case"bottom-right":v="right:2%;bottom:2%;";break;case"bottom-left":v="left:2%;bottom:2%;";break;case"top-right":v="right:2%;top:2%;";break;case"top-left":v="left:2%;top:2%;";break;default:v="right:2%;bottom:2%;"}var f=document.createElement("div");f.id="hde-contact-container",f.style.cssText="visibility: visible;height: auto;width: auto;position: fixed;z-index: 999999999;letter-spacing: normal;-moz-user-select: none;-khtml-user-select: none;user-select: none;"+v;var y=document.createElement("div");y.id="hde-contact-container-size",y.style.cssText="font-size: "+b+"px;";var k=document.createElement("div");k.id="hde-contact-open-btn",k.style.cssText="background:#"+w+"; width: 1em; height: 1em; padding:0.5em; line-height: 2em; text-align:center; -webkit-border-radius: 50%; -moz-border-radius: 50%; border-radius: 50%; animation: hde-contact-pulse 2s infinite; cursor:pointer; font-size:1em; -webkit-box-shadow: 0 0 0.5em 0 rgba(0,0,0,0.5); -moz-box-shadow: 0 0 0.5em 0 rgba(0,0,0,0.5); box-shadow: 0 0 0.5em 0 rgba(0,0,0,0.5);",k.innerHTML='<svg version="1.1" id="hde-contact-show" style="display:block" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 363 363" style="enable-background:new 0 0 363 363;" xml:space="preserve" fill="#'+x+'"> <path d="M277.73,94.123c0,10.997-8.006,17.685-13.852,22.593c-2.214,1.859-6.335,5.251-6.324,6.518 c0.04,4.97-3.956,8.939-8.927,8.939c-0.025,0-0.05,0-0.075,0c-4.936,0-8.958-3.847-8.998-8.792 c-0.079-9.747,7.034-15.584,12.75-20.383c4.485-3.766,7.426-6.416,7.426-8.841c0-4.909-3.994-8.903-8.903-8.903 c-4.911,0-8.906,3.994-8.906,8.903c0,4.971-4.029,9-9,9s-9-4.029-9-9c0-14.834,12.069-26.903,26.904-26.903 C265.661,67.253,277.73,79.288,277.73,94.123z M248.801,140.481c-4.971,0-8.801,4.029-8.801,9v0.069 c0,4.971,3.831,8.966,8.801,8.966s9-4.064,9-9.035S253.772,140.481,248.801,140.481z M67.392,203.174c-4.971,0-9,4.029-9,9 s4.029,9,9,9h0.75c4.971,0,9-4.029,9-9s-4.029-9-9-9H67.392z M98.671,203.174c-4.971,0-9,4.029-9,9s4.029,9,9,9h0.749 c4.971,0,9-4.029,9-9s-4.029-9-9-9H98.671z M363,59.425v101.301c0,23.985-19.232,43.448-43.217,43.448H203.066 c-2.282,0-4.161-0.013-5.733-0.046c-1.647-0.034-3.501-0.047-4.224,0.033c-0.753,0.5-2.599,2.191-4.378,3.83 c-0.705,0.649-1.503,1.363-2.364,2.149l-33.022,30.098c-2.634,2.403-6.531,3.025-9.793,1.587c-3.262-1.439-5.552-4.669-5.552-8.234 v-95.417H43.72c-14.062,0-25.72,11.523-25.72,25.583v101.301c0,14.061,11.659,25.116,25.72,25.116h130.374 c2.245,0,4.345,1.031,6.003,2.545L207,317.523v-85.539c0-4.971,4.029-9,9-9s9,4.029,9,9v105.938c0,3.565-2.04,6.747-5.303,8.186 c-1.167,0.515-2.339,0.718-3.566,0.718c-2.204,0-4.378-0.905-6.069-2.449l-39.457-36.204H43.72c-23.986,0-43.72-19.13-43.72-43.116 V163.757c0-23.985,19.734-43.583,43.72-43.583H138V59.425c0-23.986,19.885-43.251,43.871-43.251h137.913 C343.768,16.174,363,35.439,363,59.425z M345,59.425c0-14.061-11.157-25.251-25.217-25.251H181.871 C167.81,34.174,156,45.364,156,59.425v69.833v83.934l18.095-16.353c0.838-0.765,1.777-1.465,2.462-2.097 c8.263-7.614,10.377-8.831,21.155-8.609c1.47,0.031,3.221,0.042,5.354,0.042h116.717c14.06,0,25.217-11.388,25.217-25.448V59.425z" /> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> <svg version="1.1" id="hde-contact-hide" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001; display:none;" xml:space="preserve" fill="#'+x+'"> <g> <g> <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717 L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859 c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287 l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>';var z=document.createElement("ul");z.id="hde-contact-list",z.style.cssText="list-style:none; margin:0; padding:0; margin-right: .3em position:absolute; top:0; right:0;";var C=0;u&&u.forEach(function(c){C++;var h=document.createElement("li"),m="";switch(m=c.url?'<a href="'+c.url+'" target="_blank">':"<span>",c.source){case"vk":m=m+'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.998 511.998" style="enable-background:new 0 0 511.998 511.998;" xml:space="preserve" width="'+b+'px" height="'+b+'px" fill="#fff"> <g> <g> <path d="M489.25,335.681c-11.137-13.347-23.719-25.264-35.888-36.789c-4.276-4.051-8.7-8.24-12.96-12.399 c-0.001-0.001-0.002-0.002-0.003-0.003c-5.73-5.589-8.535-9.556-8.828-12.486c-0.288-2.88,1.68-7.153,6.207-13.469 c6.769-9.5,13.984-19.016,20.964-28.218c6.204-8.18,12.618-16.639,18.766-25.146l1.38-1.91 c11.995-16.602,24.397-33.769,31.043-54.689c1.898-5.998,3.869-14.874-0.885-22.666c-4.756-7.794-13.573-10.104-19.787-11.162 c-3.035-0.52-5.915-0.563-8.595-0.563l-77.806-0.069c-13.452-0.224-22.784,6.152-27.87,18.956 c-4.07,10.226-8.877,22.077-14.446,33.319c-10.655,21.703-24.194,46.7-43.818,67.527l-0.872,0.928 c-1.336,1.426-3.519,3.758-4.64,4.293c-2.126-1.336-4.579-8.977-4.467-12.98c0.003-0.099,0.004-0.197,0.004-0.295l-0.069-89.903 c0-0.457-0.032-0.914-0.093-1.367c-1.745-12.826-5.147-25.684-25.447-29.69c-0.651-0.129-1.313-0.193-1.975-0.193h-80.935 c-15.227,0-23.281,6.973-29.738,14.533c-1.869,2.204-6.835,8.056-4.305,15.21c2.56,7.239,10.188,8.684,12.692,9.158 c8.82,1.674,13.381,6.659,14.793,16.189c2.791,18.517,3.133,38.326,1.078,62.309c-0.573,6.439-1.639,11.333-3.359,15.403 c-0.476,1.127-0.894,1.825-1.186,2.236c-0.466-0.188-1.191-0.548-2.195-1.235c-6.198-4.241-10.869-10.834-15.386-17.208 c-18.042-25.473-33.218-53.607-46.401-86.022c-5.429-13.283-15.635-20.702-28.719-20.894c-24.928-0.415-47.983-0.405-70.459,0.032 c-10.601,0.184-18.035,3.521-22.099,9.92c-4.069,6.411-3.92,14.585,0.444,24.299c31.196,69.37,59.522,119.834,91.842,163.628 c22.757,30.832,45.665,52.234,72.092,67.354c27.766,15.885,59.08,23.67,95.408,23.669c4.131,0,8.334-0.101,12.593-0.304 c22.413-1.021,31.532-9.936,32.527-31.765c0.558-11.537,1.842-20.883,6.297-29.003c1.246-2.273,2.652-3.797,3.76-4.076 c1.178-0.294,3.267,0.427,5.59,1.936c4.247,2.758,7.904,6.498,10.911,9.781c3.048,3.337,6.128,6.784,9.109,10.117 c6.343,7.097,12.902,14.436,19.774,21.436c15.543,15.844,33.461,23.11,53.278,21.588l71.205,0.033c0.002,0,0.003,0,0.004,0 c0.226,0,0.452-0.007,0.678-0.022c8.213-0.547,15.314-5.094,19.484-12.478c5.021-8.892,4.945-20.155-0.207-30.14 C502.359,352.01,495.384,343.075,489.25,335.681z M490.181,382.502c-0.982,1.739-2.193,2.056-2.818,2.132l-71.19-0.033 c-0.002,0-0.004,0-0.007,0c-0.281,0-0.562,0.011-0.841,0.035c-14.025,1.168-25.946-3.762-37.474-15.512 c-6.539-6.662-12.937-13.819-19.124-20.741c-3.015-3.373-6.132-6.862-9.264-10.29c-3.884-4.242-8.685-9.117-14.854-13.123 c-9.236-5.995-16.89-5.814-21.683-4.606c-4.743,1.195-11.485,4.605-16.66,14.049c-6.704,12.219-8.183,25.401-8.785,37.854 c-0.348,7.616-1.636,9.628-2.174,10.139c-0.705,0.67-3.061,1.848-10.922,2.207c-37.776,1.776-69.478-4.989-96.931-20.696 c-23.882-13.664-44.794-33.291-65.809-61.762c-31.425-42.579-59.075-91.887-89.65-159.877c-1.108-2.463-1.45-4-1.549-4.823 c0.78-0.256,2.304-0.593,4.976-0.642c22.248-0.431,45.062-0.443,69.765-0.031c3.382,0.05,7.233,1.065,10.149,8.2 c13.774,33.869,29.685,63.344,48.645,90.112c5.034,7.105,11.3,15.949,20.509,22.25c8.435,5.776,15.28,5.5,19.538,4.252 c4.26-1.249,10.172-4.719,14.154-14.147c2.569-6.077,4.122-12.92,4.891-21.566c2.197-25.653,1.807-46.981-1.225-67.098 c-2.137-14.413-9.579-24.825-21.302-30.142c2.082-1.084,4.428-1.536,7.686-1.536h79.877c4.494,1.008,5.384,2.192,5.689,2.597 c1.294,1.721,2.034,5.792,2.486,8.973l0.068,89.074c-0.18,8.539,3.97,27.477,18.1,32.67c0.116,0.043,0.233,0.083,0.35,0.121 c12.864,4.204,21.373-4.877,25.941-9.756l0.814-0.866c21.496-22.815,35.971-49.473,47.28-72.508 c5.894-11.895,10.886-24.199,15.107-34.805c2.112-5.319,4.034-6.195,8.62-6.098c0.063,0.002,0.125,0.002,0.189,0.002l77.905,0.069 c1.812,0,3.703,0.021,5.17,0.272c3.712,0.632,5.241,1.402,5.745,1.721c0.052,0.591,0.04,2.291-1.082,5.839 c-5.651,17.789-16.572,32.903-28.133,48.905l-1.381,1.913c-6.007,8.312-12.35,16.675-18.483,24.764 c-7.07,9.321-14.378,18.958-21.307,28.684c-14.814,20.669-13.512,34.385,4.975,52.417c4.369,4.265,8.847,8.507,13.179,12.609 c12.281,11.633,23.882,22.62,34.235,35.026c5.42,6.534,11.564,14.381,16.042,23.029 C491.954,376.286,491.381,380.376,490.181,382.502z"/> </g> </g> <g> <g> <path d="M74.382,169.635c-1.498-2.964-2.983-5.936-4.454-8.914c-2.496-5.049-8.608-7.123-13.661-4.627 c-5.05,2.495-7.122,8.611-4.627,13.661c1.499,3.034,3.012,6.062,4.537,9.081c1.795,3.552,5.386,5.6,9.11,5.6 c1.546,0,3.117-0.353,4.592-1.098C74.908,180.796,76.923,174.662,74.382,169.635z"/> </g> </g> <g> <g> <path d="M138.353,275.441c-16.724-22.659-32.37-47.27-47.83-75.239c-2.725-4.93-8.931-6.716-13.86-3.992 c-4.929,2.725-6.717,8.931-3.992,13.86c15.896,28.756,32.013,54.102,49.271,77.485c2,2.71,5.087,4.143,8.214,4.143 c2.104,0,4.226-0.648,6.048-1.995C140.735,286.359,141.697,279.974,138.353,275.441z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>',h.innerHTML=m,h.style.cssText="background:#4a76a8";break;case"viber":m=m+'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="'+b+'px" height="'+b+'px" fill="#fff"> <g transform="translate(1 1)"> <g> <g> <path d="M254.948,39.96c5.973,4.267,11.093,5.12,26.453,5.973c45.227,2.56,73.387,12.8,104.96,35.84 c39.253,28.16,64,68.267,72.533,117.76c2.56,12.8,3.413,23.893,4.267,40.107c0.853,11.947,0.853,16.213,3.413,20.48 c4.267,6.827,11.093,11.093,18.773,11.947c0.853,0,1.707,0,2.56,0c6.827,0,13.653-3.413,17.067-9.387 c5.973-6.827,5.973-12.8,5.12-26.453c-1.707-41.813-10.24-80.213-27.307-112.64c-11.947-23.04-23.04-38.4-43.52-58.027 c-21.333-20.48-37.547-32.427-63.147-44.373c-26.453-12.8-45.227-17.067-73.387-20.48C297.615-0.147,287.375-1,279.695-1 c-13.653,0-19.627,0-25.6,5.973c-5.12,4.267-7.68,11.093-7.68,17.92S249.828,35.693,254.948,39.96z M265.188,17.773 c0.853-0.853,1.707-1.707,7.68-1.707c1.707,0,3.413,0,5.973,0c6.827,0,17.067,0.853,22.187,1.707 c26.453,3.413,43.52,6.827,68.267,18.773c23.893,11.947,38.4,22.187,58.88,41.813c18.773,18.773,29.013,32.427,40.107,53.76 c15.36,30.72,23.893,65.707,25.6,105.813c0,12.8,0,13.653-1.707,14.507c-0.853,1.707-3.413,1.707-5.12,1.707 s-4.267-0.853-5.12-2.56c-0.853-0.853-0.853-2.56-1.707-12.8c-0.853-17.067-1.707-29.013-4.267-42.667 c-10.24-54.613-36.693-98.133-79.36-128.853c-34.133-24.747-65.707-35.84-114.347-38.4c-14.507-0.853-15.36-1.707-17.067-2.56 c-0.853-0.853-1.707-2.56-1.707-4.267S264.335,18.627,265.188,17.773z"/> <path d="M394.895,223.427c0,11.947,0.853,23.04,12.8,29.013c3.413,1.707,7.68,2.56,11.947,2.56c3.413,0,7.68-0.853,10.24-2.56 c4.267-1.707,9.387-7.68,11.093-11.947c2.56-5.973,1.707-28.16,0.853-34.133c-3.413-27.307-12.8-52.907-27.307-74.24 c-27.307-39.253-67.413-62.293-119.467-69.973c-17.92-2.56-30.72-3.413-38.4,8.533c-5.973,8.533-5.12,20.48,1.707,28.16 c5.973,6.827,13.653,7.68,21.333,8.533c20.48,1.707,43.52,8.533,58.88,17.067c17.92,10.24,32.427,25.6,42.667,43.52 C389.775,184.173,394.895,203.8,394.895,223.427z M347.961,109.933c-17.92-10.24-43.52-17.067-68.267-18.773 c-6.827,0-8.533-1.707-9.387-2.56c-1.707-2.56-1.707-5.12,0-7.68c1.707-1.707,2.56-3.413,22.187-0.853 c47.787,6.827,83.627,27.307,107.52,62.293c13.653,18.773,22.187,41.813,24.747,66.56c1.707,8.533,0.853,23.04,0.853,25.6 c-0.853,0.853-2.56,2.56-3.413,3.413c-0.853,0-5.12,0-5.973-0.853c-1.707-0.853-3.413-1.707-3.413-13.653 c0-22.187-5.973-46.08-16.213-64C385.508,138.947,368.441,121.88,347.961,109.933z"/> <path d="M347.961,150.893c-11.093-11.093-24.747-17.92-42.667-21.333c-4.267-0.853-11.093-1.707-15.36-1.707 c-6.827,0-10.24,0-15.36,2.56c-5.973,3.413-10.24,9.387-11.947,16.213c-1.707,6.827,0.853,14.507,5.12,19.627 c5.973,5.973,11.093,6.827,22.187,8.533c18.773,1.707,29.013,8.533,34.987,20.48c3.413,5.973,5.12,12.8,5.973,23.04 c0.853,8.533,2.56,14.507,9.387,19.627c4.267,2.56,9.387,4.267,14.507,4.267c5.973,0,11.093-1.707,13.653-4.267 c8.533-7.68,9.387-17.92,6.827-32.427C371.001,181.613,363.321,164.547,347.961,150.893z M358.201,224.28 c-1.707,1.707-5.973,1.707-8.533,0c-0.853-0.853-1.707-0.853-2.56-7.68c-0.853-11.093-2.56-19.627-6.827-28.16 c-8.533-17.92-23.893-28.16-47.787-30.72c-9.387-1.707-10.24-1.707-11.093-3.413c-0.853-1.707-0.853-3.413-0.853-5.12 c0.853-1.707,1.707-3.413,3.413-4.267c0.853-0.853,0.853-0.853,2.56-0.853c0.853,0,2.56,0,3.413,0 c4.267,0.853,10.24,0.853,12.8,1.707c14.507,3.413,25.6,8.533,34.987,17.067c11.947,11.093,18.773,24.747,21.333,44.373 C361.615,220.867,359.908,222.573,358.201,224.28z"/> <path d="M501.561,387.267c-5.973-6.827-42.667-35.84-58.88-46.933c-12.8-8.533-33.28-20.48-42.667-25.6 c-13.653-6.827-28.16-7.68-41.813-3.413c-2.56,0.853-5.12,1.707-6.827,2.56c-6.827,3.413-11.947,9.387-22.187,21.333 c-10.24,12.8-12.8,15.36-12.8,15.36c-0.853,0.853-2.56,1.707-4.267,2.56h-0.853c-7.68,4.267-20.48,0.853-41.813-9.387 c-17.92-8.533-34.133-19.627-52.053-35.84c-15.36-13.653-30.72-31.573-39.253-45.227c-11.947-19.627-19.627-41.813-19.627-52.053 c0-4.267,1.707-10.24,3.413-12.8l0.853-0.853c0,0,0.853-0.853,1.707-1.707c3.413-2.56,7.68-5.973,11.947-9.387 c19.627-15.36,25.6-21.333,29.013-33.28c3.413-11.093,0.853-23.893-8.533-41.813c-13.653-26.453-58.027-82.773-75.947-94.72 c-2.56-2.56-7.68-5.12-11.093-5.973c-7.68-3.413-17.92-4.267-24.747-2.56c-9.387,1.707-19.627,7.68-41.813,24.747 c-12.8,8.533-31.573,26.453-36.693,34.987c-11.947,20.48-8.533,37.547,1.707,67.413c10.24,28.16,23.893,56.32,40.107,84.48 l0.853,1.707c3.413,5.12,6.827,11.093,10.24,16.213l0.853,1.707c3.413,5.12,6.827,11.093,10.24,16.213l5.973,8.533 c2.56,3.413,4.267,5.973,6.827,9.387c4.267,5.973,9.387,11.947,13.653,17.92c49.493,64,106.667,116.053,174.08,157.867 l2.56,1.707c9.387,5.973,19.627,11.947,30.72,17.92l4.267,2.56c11.093,5.973,21.333,11.093,32.427,16.213l3.413,1.707 c12.8,5.973,23.893,11.093,34.987,15.36c13.653,5.12,19.627,6.827,29.013,6.827c1.707,0,3.413,0,5.12,0 c5.973,0,11.947-0.853,17.067-2.56c7.68-2.56,14.507-5.973,23.04-11.947c0.853-0.853,2.56-2.56,4.267-3.413 c1.707-1.707,4.267-3.413,5.973-5.12c9.387-7.68,20.48-19.627,29.013-31.573c4.267-5.973,10.24-15.36,13.653-23.04 c3.413-6.827,4.267-14.507,4.267-21.333C510.948,402.627,507.535,394.093,501.561,387.267z M491.321,427.373 c-1.707,5.12-5.973,11.947-11.947,19.627c-7.68,11.093-17.92,21.333-26.453,29.013c-1.707,1.707-3.413,3.413-5.12,4.267 c-1.707,0.853-2.56,1.707-4.267,2.56c-6.827,5.12-12.8,7.68-17.92,9.387c-4.267,0.853-8.533,1.707-12.8,1.707 c-9.387,0-12.8,0-26.453-5.12c-10.24-5.12-21.333-9.387-34.133-15.36l-3.413-1.707c-10.24-5.12-21.333-10.24-31.573-16.213 l-4.267-2.56c-10.24-5.12-20.48-11.093-29.867-17.067l-2.56-1.707c-66.56-40.96-122.027-91.307-169.813-153.6 c-4.267-5.973-8.533-11.947-12.8-17.92c-2.56-3.413-5.12-5.973-6.827-9.387l-5.12-7.68c-4.267-5.12-7.68-10.24-11.093-16.213 l-0.853-0.853c-3.413-5.12-5.973-11.093-9.387-16.213l-0.853-1.707c-16.213-26.453-29.013-54.613-39.253-81.92 c-11.947-30.72-10.24-40.96-3.413-52.907c3.413-5.12,19.627-21.333,32.427-29.867C72.335,31.427,82.575,25.453,88.548,24.6 c3.413-0.853,11.093,0,15.36,1.707c1.707,0.853,5.12,2.56,7.68,4.267c12.8,8.533,55.467,60.587,69.973,87.893 c6.827,12.8,9.387,23.04,7.68,29.013c-1.707,5.973-3.413,9.387-23.04,24.747c-5.12,3.413-9.387,7.68-12.8,10.24 c-0.853,0.853-1.707,1.707-2.56,2.56l-0.853,0.853c-0.853,0.853-1.707,0.853-1.707,1.707l-0.853,0.853 c-4.267,5.12-6.827,15.36-6.827,23.04c0.853,15.36,9.387,40.107,22.187,60.587c9.387,14.507,26.453,34.133,42.667,48.64 c18.773,17.067,35.84,29.013,55.467,38.4c25.6,11.947,41.813,15.36,55.467,10.24h0.853l1.707-0.853 c1.707-0.853,4.267-1.707,5.12-2.56c0.853-0.853,1.707-0.853,2.56-1.707c0.853-0.853,1.707-1.707,15.36-17.92 c10.24-11.947,13.653-15.36,17.067-17.067c0.853-0.853,2.56-0.853,4.267-1.707c9.387-3.413,18.773-2.56,29.013,2.56 c8.533,5.12,28.16,16.213,40.107,24.747c17.92,11.947,52.053,39.253,55.467,43.52c4.267,4.267,5.973,8.533,5.973,14.507 C493.881,417.133,493.028,422.253,491.321,427.373z"/> </g> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>',h.innerHTML=m,h.style.cssText="background:#574e92;";break;case"fb":m=m+'<svg viewBox="-110 1 511 511.99996" xmlns="http://www.w3.org/2000/svg" width="'+b+'px" height="'+b+'px" fill="#fff"><path d="m180 512h-81.992188c-13.695312 0-24.835937-11.140625-24.835937-24.835938v-184.9375h-47.835937c-13.695313 0-24.835938-11.144531-24.835938-24.835937v-79.246094c0-13.695312 11.140625-24.835937 24.835938-24.835937h47.835937v-39.683594c0-39.347656 12.355469-72.824219 35.726563-96.804688 23.476562-24.089843 56.285156-36.820312 94.878906-36.820312l62.53125.101562c13.671875.023438 24.792968 11.164063 24.792968 24.835938v73.578125c0 13.695313-11.136718 24.835937-24.828124 24.835937l-42.101563.015626c-12.839844 0-16.109375 2.574218-16.808594 3.363281-1.152343 1.308593-2.523437 5.007812-2.523437 15.222656v31.351563h58.269531c4.386719 0 8.636719 1.082031 12.289063 3.121093 7.878906 4.402344 12.777343 12.726563 12.777343 21.722657l-.03125 79.246093c0 13.6875-11.140625 24.828125-24.835937 24.828125h-58.46875v184.941406c0 13.695313-11.144532 24.835938-24.839844 24.835938zm-76.8125-30.015625h71.632812v-193.195313c0-9.144531 7.441407-16.582031 16.582032-16.582031h66.726562l.027344-68.882812h-66.757812c-9.140626 0-16.578126-7.4375-16.578126-16.582031v-44.789063c0-11.726563 1.191407-25.0625 10.042969-35.085937 10.695313-12.117188 27.550781-13.515626 39.300781-13.515626l36.921876-.015624v-63.226563l-57.332032-.09375c-62.023437 0-100.566406 39.703125-100.566406 103.609375v53.117188c0 9.140624-7.4375 16.582031-16.578125 16.582031h-56.09375v68.882812h56.09375c9.140625 0 16.578125 7.4375 16.578125 16.582031zm163.0625-451.867187h.003906zm0 0"/></svg>',h.innerHTML=m,h.style.cssText="background:#4267b2;";break;case"whatsapp":m=m+'<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="'+b+'px" height="'+b+'px" fill="#fff"><path d="m439.277344 72.722656c-46.898438-46.898437-109.238282-72.722656-175.566406-72.722656-.003907 0-.019532 0-.023438 0-32.804688.00390625-64.773438 6.355469-95.011719 18.882812-30.242187 12.527344-57.335937 30.640626-80.535156 53.839844-46.894531 46.894532-72.71875 109.246094-72.71875 175.566406 0 39.550782 9.542969 78.855469 27.625 113.875l-41.734375 119.226563c-2.941406 8.410156-.859375 17.550781 5.445312 23.851563 4.410157 4.414062 10.214844 6.757812 16.183594 6.757812 2.558594 0 5.144532-.429688 7.667969-1.3125l119.226563-41.730469c35.019531 18.082031 74.324218 27.625 113.875 27.625 66.320312 0 128.667968-25.828125 175.566406-72.722656 46.894531-46.894531 72.722656-109.246094 72.722656-175.566406 0-66.324219-25.824219-128.675781-72.722656-175.570313zm-21.234375 329.902344c-41.222657 41.226562-96.035157 63.925781-154.332031 63.925781-35.664063 0-71.09375-8.820312-102.460938-25.515625-5.6875-3.023437-12.410156-3.542968-18.445312-1.429687l-108.320313 37.910156 37.914063-108.320313c2.113281-6.042968 1.589843-12.765624-1.433594-18.449218-16.691406-31.359375-25.515625-66.789063-25.515625-102.457032 0-58.296874 22.703125-113.109374 63.925781-154.332031 41.21875-41.21875 96.023438-63.921875 154.316406-63.929687h.019532c58.300781 0 113.109374 22.703125 154.332031 63.929687 41.226562 41.222657 63.929687 96.03125 63.929687 154.332031 0 58.300782-22.703125 113.113282-63.929687 154.335938zm0 0"/><path d="m355.984375 270.46875c-11.421875-11.421875-30.007813-11.421875-41.429687 0l-12.492188 12.492188c-31.019531-16.902344-56.121094-42.003907-73.027344-73.023438l12.492188-12.492188c11.425781-11.421874 11.425781-30.007812 0-41.429687l-33.664063-33.664063c-11.421875-11.421874-30.007812-11.421874-41.429687 0l-26.929688 26.929688c-15.425781 15.425781-16.195312 41.945312-2.167968 74.675781 12.179687 28.417969 34.46875 59.652344 62.761718 87.945313 28.292969 28.292968 59.527344 50.582031 87.945313 62.761718 15.550781 6.664063 29.695312 9.988282 41.917969 9.988282 13.503906 0 24.660156-4.058594 32.757812-12.15625l26.929688-26.933594v.003906c5.535156-5.535156 8.582031-12.890625 8.582031-20.714844 0-7.828124-3.046875-15.183593-8.582031-20.714843zm-14.5 80.792969c-4.402344 4.402343-17.941406 5.945312-41.609375-4.195313-24.992188-10.710937-52.886719-30.742187-78.542969-56.398437s-45.683593-53.546875-56.394531-78.539063c-10.144531-23.667968-8.601562-37.210937-4.199219-41.613281l26.414063-26.414063 32.625 32.628907-15.636719 15.640625c-7.070313 7.070312-8.777344 17.792968-4.242187 26.683594 20.558593 40.3125 52.734374 72.488281 93.046874 93.046874 8.894532 4.535157 19.617188 2.832032 26.6875-4.242187l15.636719-15.636719 32.628907 32.628906zm0 0"/></svg>',h.innerHTML=m,h.style.cssText="background:#00e676;";break;case"telegram":m=m+'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"  width="'+b+'px" height="'+b+'px" fill="#fff"> <g> <g> <g> <path d="M385.268,121.919l-210.569,129.69c-11.916,7.356-17.555,21.885-13.716,35.323l22.768,80 c1.945,6.821,8.015,11.355,14.999,11.355c0.389,0,0.782-0.014,1.176-0.043c7.466-0.542,13.374-6.103,14.367-13.515l5.92-43.866 c0.798-5.902,3.642-11.392,8.001-15.45l173.765-161.524c5.251-4.869,5.945-12.842,1.618-18.545 C399.263,119.636,391.388,118.16,385.268,121.919z M214.32,290.478c-7.808,7.268-12.895,17.089-14.323,27.655l-2.871,21.278 l-16.527-58.072c-1.343-4.704,0.635-9.791,4.805-12.365l154.258-95.007L214.32,290.478z"/> <path d="M503.67,37.382c-6.579-5.576-15.657-7.111-23.698-4.005L15.08,212.719C5.873,216.27-0.047,224.939,0,234.804 c0.048,9.874,6.055,18.495,15.316,21.965l108.59,40.529l42.359,136.225c2.326,7.489,8.197,13.308,15.703,15.566 c7.502,2.256,15.604,0.643,21.66-4.31l63.14-51.473c3.032-2.472,7.362-2.594,10.528-0.295l113.883,82.681 c4.097,2.978,8.932,4.511,13.823,4.511c2.865,0,5.749-0.526,8.517-1.596c7.486-2.895,12.93-9.312,14.56-17.163l83.429-401.309 C513.26,51.685,510.257,42.967,503.67,37.382z M491.536,55.99l-83.428,401.308c-0.302,1.45-1.346,2.053-1.942,2.284 c-0.6,0.232-1.785,0.489-2.997-0.393l-113.887-82.685c-5.091-3.696-11.077-5.531-17.052-5.531 c-6.518,0-13.027,2.185-18.347,6.519l-63.154,51.485c-1.124,0.92-2.291,0.756-2.885,0.577c-0.598-0.18-1.665-0.69-2.099-2.086 l-43.845-141.006c-0.937-3.013-3.217-5.423-6.173-6.527L22.462,237.662c-1.696-0.635-2.057-1.958-2.062-2.957 c-0.005-0.99,0.343-2.307,2.023-2.955L487.316,52.409c0.002-0.001,0.005-0.002,0.008-0.003c1.51-0.583,2.627,0.087,3.159,0.537 C491.017,53.398,491.867,54.398,491.536,55.99z"/> </g> </g> </g> <g> <g> <path d="M427.481,252.142c-5.506-1.196-10.936,2.299-12.131,7.804l-1.55,7.14c-1.195,5.505,2.299,10.936,7.804,12.131 c0.729,0.158,1.456,0.234,2.174,0.234c4.695,0,8.92-3.262,9.958-8.037l1.55-7.14C436.48,258.769,432.985,253.338,427.481,252.142z "/> </g> </g> <g> <g> <path d="M417.281,299.122c-5.512-1.195-10.938,2.299-12.132,7.804l-23.459,108.051c-1.195,5.505,2.299,10.936,7.803,12.131 c0.73,0.158,1.457,0.234,2.174,0.234c4.696,0,8.92-3.262,9.958-8.037l23.459-108.052 C426.279,305.748,422.785,300.317,417.281,299.122z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>',h.innerHTML=m,h.style.cssText="background:#179cde;";break;case"ok":m=m+'<svg enable-background="new 0 0 24 24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" width="'+b+'px" height="'+b+'px" fill="#fff"><path d="m4.721 12.881c-.613 1.205.083 1.781 1.671 2.765 1.35.834 3.215 1.139 4.413 1.261-.491.472 1.759-1.692-4.721 4.541-1.374 1.317.838 3.43 2.211 2.141l3.717-3.585c1.423 1.369 2.787 2.681 3.717 3.59 1.374 1.294 3.585-.801 2.226-2.141-.102-.097-5.037-4.831-4.736-4.541 1.213-.122 3.05-.445 4.384-1.261l-.001-.001c1.588-.989 2.284-1.564 1.68-2.769-.365-.684-1.349-1.256-2.659-.267 0 0-1.769 1.355-4.622 1.355-2.854 0-4.622-1.355-4.622-1.355-1.309-.994-2.297-.417-2.658.267z"/><path d="m11.999 12.142c3.478 0 6.318-2.718 6.318-6.064 0-3.36-2.84-6.078-6.318-6.078-3.479 0-6.319 2.718-6.319 6.078 0 3.346 2.84 6.064 6.319 6.064zm0-9.063c1.709 0 3.103 1.341 3.103 2.999 0 1.644-1.394 2.985-3.103 2.985s-3.103-1.341-3.103-2.985c-.001-1.659 1.393-2.999 3.103-2.999z"/></svg>',h.innerHTML=m,h.style.cssText="background:#ee8208;";break;case"skype":m=m+'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="'+b+'px" height="'+b+'px" fill="#fff"> <g> <g> <g> <path d="M496.64,300.373c2.56-14.507,4.267-29.013,4.267-43.52c0-133.973-109.227-243.2-243.2-243.2 c-14.507,0-29.013,1.707-43.52,4.267C192.853,5.973,168.96,0,144.213,0C64.853,0,0,64.853,0,144.213 c0,23.893,5.973,48.64,17.92,69.973c-2.56,14.507-4.267,29.013-4.267,43.52c0,133.973,109.227,243.2,243.2,243.2 c14.507,0,29.013-1.707,43.52-4.267c18.773,10.24,41.813,15.36,69.973,15.36C449.707,512,512,449.707,512,370.347 C512,342.187,506.88,319.147,496.64,300.373z M370.347,494.933c-26.453,0-46.933-5.12-64-14.507l-2.56-1.707l-3.413,0.853 c-14.507,2.56-29.013,4.267-43.52,4.267c-124.587,0-226.133-101.547-226.133-226.133c0-14.507,1.707-29.013,4.267-43.52 l0.853-3.413l-1.707-2.56c-11.093-19.627-17.067-41.813-17.067-64c0-69.973,57.173-127.147,127.147-127.147 c22.187,0,44.373,5.973,64,17.067l2.56,1.707l3.413-0.853c14.507-2.56,29.013-4.267,43.52-4.267 c124.587,0,226.133,101.547,226.133,226.133c0,14.507-1.707,29.013-4.267,43.52l-0.853,3.413l1.707,2.56 c9.387,17.067,14.507,37.547,14.507,64C494.933,440.32,440.32,494.933,370.347,494.933z"/> <path d="M278.187,215.04c-64-12.8-73.387-29.013-74.24-33.28c-1.707-5.973,2.56-11.093,6.827-14.507 c11.093-9.387,37.547-17.067,60.587-12.8c8.533,1.707,20.48,5.973,26.453,16.213c14.507,28.16,29.867,50.347,61.44,42.667 c10.24-2.56,17.92-9.387,23.04-19.627c5.973-13.653,5.973-32.427-1.707-46.933c-8.533-16.213-45.227-58.027-116.907-58.027 c-68.267,0-146.773,24.747-146.773,94.72c0,55.467,48.64,94.72,133.12,106.667c42.667,5.973,56.32,19.627,60.587,27.307 c2.56,5.12,2.56,10.24,0.853,15.36c-6.827,16.213-29.867,31.573-65.707,28.16c-40.96-4.267-54.613-40.96-57.173-48.64 c-6.827-21.333-29.867-24.747-41.813-23.893c-5.973,0.853-19.627,5.12-28.16,17.92c-5.12,7.68-10.24,22.187-2.56,44.373 c9.387,29.013,40.96,76.8,145.92,76.8c87.893,0,140.8-55.467,141.653-106.667C403.627,264.533,365.227,232.107,278.187,215.04z M261.12,410.453c-69.973,0-116.053-23.04-129.707-64.853c-4.267-12.8-4.267-23.04,0.853-29.867s12.8-10.24,16.213-10.24 c0,0,0.853,0,2.56,0c5.12,0,17.92,0.853,19.627,11.093c3.413,9.387,20.48,55.467,71.68,60.587 c45.227,4.267,74.24-17.067,83.627-39.253c4.267-10.24,3.413-21.333-1.707-30.72c-6.827-12.8-25.6-29.013-72.533-35.84 c-44.373-6.827-118.613-26.453-118.613-89.6c0-57.173,69.973-77.653,129.707-77.653c63.147,0,94.72,34.987,101.547,48.64 c4.267,9.387,5.12,23.04,0.853,32.427c-2.56,5.973-6.827,9.387-11.947,10.24c-15.36,3.413-24.747,0-42.667-34.133 c-6.827-12.8-20.48-21.333-38.4-24.747c-26.453-4.267-58.88,2.56-75.093,17.067c-10.24,9.387-14.507,20.48-11.947,31.573 c5.973,20.48,34.133,34.987,87.893,45.227c98.133,19.627,111.787,55.467,111.787,88.747 C384.853,363.52,338.773,410.453,261.12,410.453z"/> </g> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>',h.innerHTML=m,h.style.cssText="background:#0078ca;";break;case"instagram":case"ig":m=m+'<svg viewBox="0 0 512.00096 512.00096" xmlns="http://www.w3.org/2000/svg"  width="'+b+'px" height="'+b+'px" fill="#fff"><path d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0"/><path d="m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0"/><path d="m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0"/></svg>',h.innerHTML=m,h.style.cssText="background:#DD2A7B;";break;case"chat":m=(m='<span id="hde-chat-init-btn-'+C+'">')+'<svg viewBox="0 -38 512 512" xmlns="http://www.w3.org/2000/svg"  width="'+b+'px" height="'+b+'px" fill="#fff"><path d="m492 0h-396c-11.046875 0-20 8.953125-20 20v55.996094h-56c-11.046875 0-20 8.953125-20 20v235.988281c0 11.042969 8.953125 19.996094 20 19.996094h56v64c0 17.257812 20.476562 26.398437 33.324219 14.910156l88.308593-78.910156h218.367188c11.046875 0 20-8.953125 20-19.996094v-56h56c11.046875 0 20-8.953125 20-19.996094v-235.988281c0-11.046875-8.953125-20-20-20zm-96 311.984375h-206c-4.914062 0-9.660156 1.808594-13.324219 5.085937l-60.675781 54.214844v-39.304687c0-11.042969-8.953125-19.996094-20-19.996094h-56v-195.992187h356zm76-75.996094h-36v-139.992187c0-11.046875-8.953125-20-20-20h-300v-36h356zm-396-61.332031c0-11.046875 8.953125-20 20-20h240c11.046875 0 20 8.953125 20 20s-8.953125 20-20 20h-240c-11.046875 0-20-8.953125-20-20zm0 78.664062c0-11.042968 8.953125-20 20-20h160c11.046875 0 20 8.957032 20 20 0 11.046876-8.953125 20-20 20h-160c-11.046875 0-20-8.953124-20-20zm0 0"/></svg>',h.innerHTML=m,c.bg?h.style.cssText="background:#"+c.bg+";":h.style.cssText="background:#23869b;";var w=document.createElement("div");w.id="hde-contact-chat-container-"+C;var x="",u=window.innerHeight,v=window.innerWidth,y=parseInt(u/100),k=parseInt(v/100);switch(p){case"bottom-right":x="right:"+(r+2*k)+"px;bottom:0%;";break;case"bottom-left":x="left:2%;bottom:0%;";break;case"top-right":x="right:"+(r+2*k)+"px;top:"+(l+20+2*y)+"px;";break;case"top-left":x="left:2%;top:"+(l+20+2*y)+"px;";break;default:x="right:2%;bottom:2%;"}w.style.cssText="position: absolute; z-index: 9999999999;"+x,f.appendChild(w);var M=document.createElement("script");M.type="text/javascript",M.src=a+"/js/modules/chat_widget/hde.js?v=3",M.id="hde-chat-widget",M.setAttribute("data-lang",s),M.setAttribute("data-host",t),e&&M.setAttribute("data-prepend-message",e),g&&M.setAttribute("data-comment",g),o&&M.setAttribute("data-user-name",o),i&&M.setAttribute("data-user-email",i),d&&M.setAttribute("data-id",d),n&&M.setAttribute("data-custom-inner-container",n),M.setAttribute("data-custom-container","hde-contact-chat-container-"+C),M.setAttribute("data-custom-button","hde-chat-init-btn-"+C),M.setAttribute("data-position",p),M.setAttribute("data-width",r),M.setAttribute("data-height",l),w.appendChild(M),document.body.appendChild(w)}c.url?m+="</a>":m+="</span>",h.innerHTML=m,z.appendChild(h)});var M=document.createElement("style");function T(c,t,e,g,a){0==t&&c.style.setProperty("display","block"),g<a&&(t+=.1,g+=a/10,setTimeout(function(){T(c,t,e,g,a)},10)),c.style.setProperty("display","block"),c.style.setProperty(e,g+"em"),c.style.opacity=t}function A(c,t,e,g,a){g>0?(t-=.04,g-=a/25,setTimeout(function(){A(c,t,e,g,a)},4)):c.style.setProperty("display","none"),c.style.setProperty(e,g+"em"),c.style.opacity=t}M.innerHTML="@-webkit-keyframes hde-contact-pulse { 0% { -webkit-box-shadow: 0 0 0 0 rgba(0,0,0, 0.5); transform: scale(1.05, 1.05); } 50% { -webkit-box-shadow: 0 0 0 .5em rgba(0,0,0, 0); transform: scale(1.0, 1.0); } 100% { -webkit-box-shadow: 0 0 0 0 rgba(0,0,0, 0); } } @keyframes hde-contact-pulse { 0% { -moz-box-shadow: 0 0 0 0 rgba(0,0,0, 0.5); box-shadow: 0 0 0 0 rgba(0,0,0, 0.5); transform: scale(1.05, 1.05); } 50% { -moz-box-shadow: 0 0 0 0.5em rgba(0,0,0, 0); box-shadow: 0 0 0 0.5em rgba(0,0,0, 0); transform: scale(1.0, 1.0); } 100% { -moz-box-shadow: 0 0 0 0 rgba(0,0,0, 0); box-shadow: 0 0 0 0 rgba(0,0,0, 0); } } @-ms-keyframes hde-contact-pulse { 0% { -ms-box-shadow: 0 0 0 0 rgba(0,0,0, 0.5); box-shadow: 0 0 0 0 rgba(0,0,0, 0.5); -ms-transform: scale(1.05, 1.05); } 50% { -ms-box-shadow: 0 0 0 0.5em rgba(0,0,0, 0); box-shadow: 0 0 0 0.5em rgba(0,0,0, 0); -ms-transform: scale(1.0, 1.0); } 100% { -ms-box-shadow: 0 0 0 0 rgba(0,0,0, 0); box-shadow: 0 0 0 0 rgba(0,0,0, 0); } } #hde-contact-container #hde-contact-list li{ background:blue; color:#fff; width: 2em; height: 2em; text-align:center; -webkit-border-radius: 50%; -moz-border-radius: 50%; border-radius: 50%; cursor:pointer; position:absolute; display:none; -webkit-box-shadow: 0 0 0.5em 0 rgba(0,0,0,0.5); -moz-box-shadow: 0 0 0.5em 0 rgba(0,0,0,0.5); box-shadow: 0 0 0.5em 0 rgba(0,0,0,0.5); overflow:hidden; } #hde-contact-container #hde-contact-list li a, #hde-contact-container #hde-contact-list li span{ padding:0.475em; line-height: 1em; float: left; padding:.5em; font-size:1em; cursor:pointer; } #hde-contact-container *{ -webkit-box-sizing: unset !important; -moz-box-sizing: unset !important; box-sizing: unset !important; } #hde-contact-container svg{ max-width: none !important; max-height: none !important; height: auto !important; vertical-align: baseline !important;}",y.appendChild(k),y.appendChild(z),f.appendChild(y),f.appendChild(M),document.body.appendChild(f);var L=!1,H=k.querySelector("#hde-contact-show"),P=k.querySelector("#hde-contact-hide");function B(){!function c(t,e,g,a){1==a&&(a=!1,t?(H.style.setProperty("display","block"),H.style.setProperty("opacity","0"),P.style.setProperty("display","none"),k.style.setProperty("animation","hde-contact-pulse 2s infinite"),e=H):(H.style.setProperty("display","none"),P.style.setProperty("opacity","0"),P.style.setProperty("display","block"),k.style.setProperty("animation",""),e=P),g=0);g<1&&(g+=.1,setTimeout(function(){c(t,e,g,a)},50)),e.style.opacity=g}(L,!1,0,!0);for(var c=0;c<z.childNodes.length;c++){"bottom"==h?z.childNodes[c].style.setProperty("top","auto"):z.childNodes[c].style.setProperty("top","0");var t=2.5*(c+1);L?A(z.childNodes[c],1,h,t,t):T(z.childNodes[c],0,h,0,t)}L=!L}k.onclick=function(){B()}}}();