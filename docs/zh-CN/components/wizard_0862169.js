amis.define('docs/zh-CN/components/wizard.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Wizard 向导",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Wizard 向导",
    "icon": null,
    "order": 73,
    "html": "<div class=\"markdown-body\"><p>表单向导，能够配置多个步骤引导用户一步一步完成表单提交。</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" href=\"#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本使用</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"wizard\",\n    \"initApi\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm?waitSeconds=2\",\n    \"steps\": [\n        {\n            \"title\": \"第一步\",\n            \"body\": [\n                {\n                    \"name\": \"website\",\n                    \"label\": \"网址\",\n                    \"type\": \"input-url\",\n                    \"required\": true\n                },\n                {\n                    \"name\": \"email\",\n                    \"label\": \"邮箱\",\n                    \"type\": \"input-email\",\n                    \"required\": true\n                }\n            ]\n        },\n        {\n            \"title\": \"Step 2\",\n            \"body\": [\n                {\n                    \"name\": \"email2\",\n                    \"label\": \"邮箱\",\n                    \"type\": \"input-email\",\n                    \"required\": true\n                }\n            ]\n        },\n        {\n            \"title\": \"Step 3\",\n            \"body\": [\n                \"这是最后一步了\"\n            ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%89%E9%92%AE\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%89%E9%92%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自定义按钮</h2><p>可以在每个 <code>step</code> 中配置 <code>actions</code> 来自定义按钮。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"wizard\",\n    \"steps\": [\n        {\n            \"title\": \"第一步\",\n            \"body\": [\n                {\n                    \"name\": \"website\",\n                    \"label\": \"网址\",\n                    \"type\": \"input-url\"\n                },\n                {\n                    \"name\": \"email\",\n                    \"label\": \"邮箱\",\n                    \"type\": \"input-email\"\n                }\n            ],\n            actions: [\n                {\n                    label: \"Next\",\n                    type: 'button',\n                    actionType: 'next'\n                }\n            ]\n        },\n        {\n            \"title\": \"Step 2\",\n            \"body\": [\n                {\n                    \"name\": \"email2\",\n                    \"label\": \"邮箱\",\n                    \"type\": \"input-email\"\n                }\n            ],\n            actions: [\n                {\n                    label: \"Prev\",\n                    type: 'button',\n                    actionType: 'prev'\n                },\n\n                {\n                    label: \"Submit\",\n                    type: 'button',\n                    actionType: 'next'\n                }\n            ]\n        },\n        {\n            \"title\": \"Step 3\",\n            \"body\": [\n                \"这是最后一步了, 没有按钮\"\n            ],\n            actions: []\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%88%9D%E5%A7%8B%E5%8C%96%E5%88%B0%E6%9F%90%E4%B8%80%E6%AD%A5\" href=\"#%E5%88%9D%E5%A7%8B%E5%8C%96%E5%88%B0%E6%9F%90%E4%B8%80%E6%AD%A5\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>初始化到某一步</h2><p><code>initApi</code> 接口返回 <code>step</code> 字段即可，注意得是数字类型。<code>1</code> 表示第一步，<code>2</code> 表示第二步，以此类推</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"wizard\",\n    \"initApi\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/initWizard\",\n    \"steps\": [\n        {\n            \"title\": \"第一步\",\n            \"body\": [\n                {\n                    \"name\": \"website\",\n                    \"label\": \"网址\",\n                    \"type\": \"input-url\",\n                    \"required\": true\n                },\n                {\n                    \"name\": \"email\",\n                    \"label\": \"邮箱\",\n                    \"type\": \"input-email\",\n                    \"required\": true\n                }\n            ]\n        },\n        {\n            \"title\": \"Step 2\",\n            \"body\": [\n                {\n                    \"name\": \"email2\",\n                    \"label\": \"邮箱\",\n                    \"type\": \"input-email\",\n                    \"required\": true\n                }\n            ]\n        },\n        {\n            \"title\": \"Step 3\",\n            \"body\": [\n                \"这是最后一步了\"\n            ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%99%90%E5%88%B6%E8%B7%B3%E8%BD%AC\" href=\"#%E9%99%90%E5%88%B6%E8%B7%B3%E8%BD%AC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>限制跳转</h2><p>可以通过在 step 上配置 <code>jumpableOn</code> 来限制跳转，可以基于整体 wizard 数据，或者基于 <code>currentStep</code> 来判断。</p>\n<p>比如：<code>&quot;jumpableOn&quot;: &quot;${!website}&quot;,</code> 当设置完成了 website 后不可以回去跳转</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"wizard\",\n    \"initApi\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/initWizard\",\n    \"steps\": [\n        {\n            \"title\": \"第一步\",\n            \"jumpableOn\": \"${!website}\",\n            \"body\": [\n                {\n                    \"name\": \"website\",\n                    \"label\": \"网址\",\n                    \"type\": \"input-url\",\n                    \"required\": true\n                },\n                {\n                    \"name\": \"email\",\n                    \"label\": \"邮箱\",\n                    \"type\": \"input-email\",\n                    \"required\": true\n                }\n            ]\n        },\n        {\n            \"title\": \"Step 2\",\n            \"body\": [\n                {\n                    \"name\": \"email2\",\n                    \"label\": \"邮箱\",\n                    \"type\": \"input-email\",\n                    \"required\": true\n                }\n            ]\n        },\n        {\n            \"title\": \"Step 3\",\n            \"body\": [\n                \"这是最后一步了\"\n            ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;wizard&quot;</code></td>\n<td>指定为 <code>Wizard</code> 组件</td>\n</tr>\n<tr>\n<td>mode</td>\n<td><code>string</code></td>\n<td><code>&quot;horizontal&quot;</code></td>\n<td>展示模式，选择：<code>horizontal</code> 或者 <code>vertical</code></td>\n</tr>\n<tr>\n<td>api</td>\n<td><a href=\"../../docs/types/api\">API</a></td>\n<td></td>\n<td>最后一步保存的接口。</td>\n</tr>\n<tr>\n<td>initApi</td>\n<td><a href=\"../../docs/types/api\">API</a></td>\n<td></td>\n<td>初始化数据接口</td>\n</tr>\n<tr>\n<td>initFetch</td>\n<td><a href=\"../../docs/types/api\">API</a></td>\n<td></td>\n<td>初始是否拉取数据。</td>\n</tr>\n<tr>\n<td>initFetchOn</td>\n<td><a href=\"../../docs/concepts/expression\">表达式</a></td>\n<td></td>\n<td>初始是否拉取数据，通过表达式来配置</td>\n</tr>\n<tr>\n<td>actionPrevLabel</td>\n<td><code>string</code></td>\n<td><code>上一步</code></td>\n<td>上一步按钮文本</td>\n</tr>\n<tr>\n<td>actionNextLabel</td>\n<td><code>string</code></td>\n<td><code>下一步</code></td>\n<td>下一步按钮文本</td>\n</tr>\n<tr>\n<td>actionNextSaveLabel</td>\n<td><code>string</code></td>\n<td><code>保存并下一步</code></td>\n<td>保存并下一步按钮文本</td>\n</tr>\n<tr>\n<td>actionFinishLabel</td>\n<td><code>string</code></td>\n<td><code>完成</code></td>\n<td>完成按钮文本</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 CSS 类名</td>\n</tr>\n<tr>\n<td>actionClassName</td>\n<td><code>string</code></td>\n<td><code>btn-sm btn-default</code></td>\n<td>按钮 CSS 类名</td>\n</tr>\n<tr>\n<td>reload</td>\n<td><code>string</code></td>\n<td></td>\n<td>操作完后刷新目标对象。请填写目标组件设置的 name 值，如果填写为 <code>window</code> 则让当前页面整体刷新。</td>\n</tr>\n<tr>\n<td>redirect</td>\n<td><a href=\"../../docs/concepts/template\">模板</a></td>\n<td><code>3000</code></td>\n<td>操作完后跳转。</td>\n</tr>\n<tr>\n<td>target</td>\n<td><code>string</code></td>\n<td><code>false</code></td>\n<td>可以把数据提交给别的组件而不是自己保存。请填写目标组件设置的 name 值，如果填写为 <code>window</code> 则把数据同步到地址栏上，同时依赖这些数据的组件会自动重新刷新。</td>\n</tr>\n<tr>\n<td>steps</td>\n<td>Array&lt;<a href=\"#step\">step</a>&gt;</td>\n<td></td>\n<td>数组，配置步骤信息</td>\n</tr>\n<tr>\n<td>startStep</td>\n<td><code>string</code></td>\n<td><code>1</code></td>\n<td>起始默认值，从第几步开始。可支持模版，但是只有在组件创建时渲染模版并设置当前步数，在之后组件被刷新时，当前 step 不会根据 startStep 改变</td>\n</tr>\n</tbody></table>\n<h3><a class=\"anchor\" name=\"step\" href=\"#step\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>step</h3><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>title</td>\n<td><code>string</code></td>\n<td></td>\n<td>步骤标题</td>\n</tr>\n<tr>\n<td>mode</td>\n<td><code>string</code></td>\n<td></td>\n<td>展示默认，跟 <a href=\"./Form/Form\">Form</a> 中的模式一样，选择： <code>normal</code>、<code>horizontal</code>或者<code>inline</code>。</td>\n</tr>\n<tr>\n<td>horizontal</td>\n<td><code>Object</code></td>\n<td></td>\n<td>当为水平模式时，用来控制左右占比</td>\n</tr>\n<tr>\n<td>horizontal.label</td>\n<td><code>number</code></td>\n<td></td>\n<td>左边 label 的宽度占比</td>\n</tr>\n<tr>\n<td>horizontal.right</td>\n<td><code>number</code></td>\n<td></td>\n<td>右边控制器的宽度占比。</td>\n</tr>\n<tr>\n<td>horizontal.offset</td>\n<td><code>number</code></td>\n<td></td>\n<td>当没有设置 label 时，右边控制器的偏移量</td>\n</tr>\n<tr>\n<td>api</td>\n<td><a href=\"../../docs/types/api\">API</a></td>\n<td></td>\n<td>当前步骤保存接口，可以不配置。</td>\n</tr>\n<tr>\n<td>initApi</td>\n<td><a href=\"../../docs/types/api\">API</a></td>\n<td></td>\n<td>当前步骤数据初始化接口。</td>\n</tr>\n<tr>\n<td>initFetch</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>当前步骤数据初始化接口是否初始拉取。</td>\n</tr>\n<tr>\n<td>initFetchOn</td>\n<td><a href=\"../../docs/concepts/expression\">表达式</a></td>\n<td></td>\n<td>当前步骤数据初始化接口是否初始拉取，用表达式来决定。</td>\n</tr>\n<tr>\n<td>body</td>\n<td>Array&lt;<a href=\"./form/formItem\">FormItem</a>&gt;</td>\n<td></td>\n<td>当前步骤的表单项集合，请参考 <a href=\"./form/formItem\">FormItem</a>。</td>\n</tr>\n<tr>\n<td>closeDialogOnSubmit</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>提交的时候是否关闭弹窗。当 widzard 里面有且只有一个弹窗的时候，本身提交会触发弹窗关闭，此属性可以关闭此行为</td>\n</tr>\n<tr>\n<td>jumpableOn</td>\n<td><code>string</code></td>\n<td></td>\n<td>配置是否可跳转的表达式</td>\n</tr>\n<tr>\n<td>actions</td>\n<td><code>Array&lt;Schema&gt;</code></td>\n<td></td>\n<td>自定义每一步的操作按钮</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E8%A1%A8\" href=\"#%E4%BA%8B%E4%BB%B6%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件表</h2><p>当前组件会对外派发以下事件，可以通过<code>onEvent</code>来监听这些事件，并通过<code>actions</code>来配置执行的动作，在<code>actions</code>中可以通过<code>${事件参数名}</code>或<code>${event.data.[事件参数名]}</code>来获取事件产生的数据，详细请查看<a href=\"../../docs/concepts/event-action\">事件动作</a>。</p>\n<blockquote>\n<p><code>[name]</code>为当前数据域中的字段名，例如：当前数据域为 {username: &#39;amis&#39;}，则可以通过${username}获取对应的值。</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>inited</td>\n<td><code>responseData: any</code> 请求的响应数据</br><code>responseStatus: number</code> 响应状态，0 表示成功</br><code>responseMsg: string</code>响应消息, <code>error</code>表示接口是否成功<br/><code>[name]: any</code> 当前数据域中指定字段的值</td>\n<td>initApi 接口请求完成时触发</td>\n</tr>\n<tr>\n<td>stepChange</td>\n<td><code>step: number</code> 步骤索引</td>\n<td>切换步骤时触发</td>\n</tr>\n<tr>\n<td>change</td>\n<td><code>event.data: object</code> 当前表单数据<br/><code>[name]: any</code> 当前数据域中指定字段的值</td>\n<td>表单值变化时触发</td>\n</tr>\n<tr>\n<td>stepSubmitSucc</td>\n<td>-</td>\n<td>单个步骤提交成功</td>\n</tr>\n<tr>\n<td>stepSubmitFail</td>\n<td><code>error: object</code> 单个步骤 api 远程请求失败后返回的错误信息</td>\n<td>单个步骤提交失败</td>\n</tr>\n<tr>\n<td>finished</td>\n<td><code>event.data: object</code> 即将提交的表单数据<br/><code>[name]: any</code> 当前数据域中指定字段的值</td>\n<td>最终提交时触发</td>\n</tr>\n<tr>\n<td>submitSucc</td>\n<td><code>result: object</code> api 远程请求成功后返回的结果数据</td>\n<td>最终提交成功时触发</td>\n</tr>\n<tr>\n<td>submitFail</td>\n<td><code>error: object</code> api 远程请求失败后返回的错误信息</td>\n<td>最终提交失败时触发</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><p>当前组件对外暴露以下特性动作，其他组件可以通过指定<code>actionType: 动作名称</code>、<code>componentId: 该组件id</code>来触发这些动作，动作配置可以通过<code>args: {动作配置项名称: xxx}</code>来配置具体的参数，详细请查看<a href=\"../../docs/concepts/event-action#触发其他组件的动作\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>submit</td>\n<td>-</td>\n<td>全部提交</td>\n</tr>\n<tr>\n<td>step-submit</td>\n<td>-</td>\n<td>分步提交</td>\n</tr>\n<tr>\n<td>next</td>\n<td>-</td>\n<td>下一步</td>\n</tr>\n<tr>\n<td>prev</td>\n<td>-</td>\n<td>上一步</td>\n</tr>\n<tr>\n<td>goto-step</td>\n<td><code>step: number</code> 目标步骤</td>\n<td>定位步骤</td>\n</tr>\n<tr>\n<td>reload</td>\n<td>-</td>\n<td>重新加载，调用 <code>intiApi</code>，刷新数据域数据</td>\n</tr>\n<tr>\n<td>setValue</td>\n<td><code>value: object</code> 更新的数据</td>\n<td>更新数据</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本使用",
          "fragment": "%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "level": 2
        },
        {
          "label": "自定义按钮",
          "fragment": "%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%89%E9%92%AE",
          "fullPath": "#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%89%E9%92%AE",
          "level": 2
        },
        {
          "label": "初始化到某一步",
          "fragment": "%E5%88%9D%E5%A7%8B%E5%8C%96%E5%88%B0%E6%9F%90%E4%B8%80%E6%AD%A5",
          "fullPath": "#%E5%88%9D%E5%A7%8B%E5%8C%96%E5%88%B0%E6%9F%90%E4%B8%80%E6%AD%A5",
          "level": 2
        },
        {
          "label": "限制跳转",
          "fragment": "%E9%99%90%E5%88%B6%E8%B7%B3%E8%BD%AC",
          "fullPath": "#%E9%99%90%E5%88%B6%E8%B7%B3%E8%BD%AC",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2,
          "children": [
            {
              "label": "step",
              "fragment": "step",
              "fullPath": "#step",
              "level": 3
            }
          ]
        },
        {
          "label": "事件表",
          "fragment": "%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "fullPath": "#%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "level": 2
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
