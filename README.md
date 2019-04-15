


##### demo1 
  打包默认入口 js;
##### demo2 
  ###### 生成 和开发模式
    1 用于开发的配置文件，配置热更新、跨域配置、端口设置等
    2 用于生产的配置文件，配置 js 压缩、代码拆分等
    在 webpack4中引入了 production(生产) 和 development(开发) 模式；
    在package.json 并填充 script 部分
      "dev": "webpack --mode development",
      "build": "webpack --mode production"

    开发模式：此时运行 npm run dev  会打包 ， 打出来的包很在4kb 左右； 但是代码莫有压缩, <br>
    生产模式：运行npm run build 打出来的包，更小； 只有900字节左右； 对比发现： 包的体积很小，优化方面比较的给力;代码就会压缩；
#### demo3 
    1 利用插件clean-webpack-plugin 清除以前打包的文件；就是将删除webpack output.path目录中的所有文件,
      保证打包的文件是最新的；

#### demo4
    1 babel-laoder 是webapck 的一个加载器，用于将 es6以及以上版本转义为 es5；

    2 babel-core 的作用是把 js 代码分析成 ast ，方便各个插件分析语法进行相应的处理；

    3 @babel/preset-env: 包含 ES6、7 等版本的语法转化规则；

    4 @babel/plugin-transform-runtime: 避免 polyfill 污染全局变量，减小打包体积；

    5 @babel/polyfill: ES6 内置方法和函数转化垫片；

    6 babel-loader: 负责 ES6 语法转化；


## 注意点：

  1 在 webpack4 以前的版本中，必须在名为 webpack.config.js 的配置文件中 通过 entry 属性定义 entry point(入口点)，<br>
    从 webpack4 开始，不再必须定义 entry point(入口点) ：它将默认为 ./src/index.js;

  2 在 webpack4 中如果没有 mode 模式的配置 在打包的时候 可能会产生一个警告：
    WARNING in configuration
    The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
    You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/ 
