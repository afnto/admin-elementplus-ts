import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import * as ElIconModules from "@element-plus/icons-vue";

createApp(App).use(store).use(router).mount('#app')

const app = createApp(App);
for (const iconName in ElIconModules) {
    if (Reflect.has(ElIconModules, iconName)) {
      const item = ElIconModules[iconName];
      app.component(iconName, item);
    }
  }
app.use(ElementPlus, { size: 'small', locale: zhCn,zIndex: 3000 });
app.use(store).use(router).mount('#app');
