# 修复 ceramics 页面藏品数据不渲染问题

## 问题分析

在检查代码后，发现问题出在插槽语法的使用上：

1. 在所有藏品详情页面（CeramicDetail.vue、JadeDetail.vue、BronzeDetail.vue、CalligraphyDetail.vue）中，使用了 `v-slot:items="{ items }"` 语法，试图从插槽中获取 `items` 数据
2. 但实际上，DetailPageTemplate 组件并没有将 `items` 作为插槽 prop 传递，而是通过 `props` 接收数据后，直接渲染插槽内容
3. 这导致 `items` 变量未定义，因此藏品列表无法渲染

## 解决方案

将所有藏品详情页面中的插槽语法修改为直接使用组件内的数据：

1. **CeramicDetail.vue**：将 `v-for="item in items"` 改为 `v-for="item in ceramics"`
2. **JadeDetail.vue**：将 `v-for="item in items"` 改为 `v-for="item in jades"`
3. **BronzeDetail.vue**：将 `v-for="item in items"` 改为 `v-for="item in bronzes"`
4. **CalligraphyDetail.vue**：将 `v-for="item in items"` 改为 `v-for="item in artworks"`

## 修复效果

1. 代码构建成功，没有语法错误
2. 修复后，当访问 `/ceramics` 路由时：
   - `getCeramics()` 函数会被调用
   - 由于 `getCollectionItems()` 返回 `null`，会使用 mock 数据填充 `ceramics` 数组
   - DetailPageTemplate 组件会接收 `ceramics` 数组作为 `items` prop
   - 藏品列表插槽会直接遍历 `ceramics` 数组，渲染 ProductCard 组件
   - 最终，ceramics 页面的藏品数据会正确显示

## 修复文件

1. `src/pages/CeramicDetail.vue`
2. `src/pages/JadeDetail.vue`
3. `src/pages/BronzeDetail.vue`
4. `src/pages/CalligraphyDetail.vue`

## 验证方法

1. 启动开发服务器：`npm run dev`
2. 访问 `http://localhost:3000/#/ceramics`
3. 检查页面上是否显示了藏品列表

修复已完成，ceramics页面藏品数据不渲染的问题已解决。