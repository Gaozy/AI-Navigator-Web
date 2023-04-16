// 本项目实际使用了next.js内部构建工具 next build命令，Next.js 内部实际上使用了 Webpack 来处理构建过程，但它封装了大部分细节，使得开发者可以更简单地配置和使用

// 以下是一个配置模板，实际未使用
// 上述配置文件中定义了以下内容：
//
// mode：设置构建模式为 development。这将优化构建速度并生成未压缩的代码。在生产环境中，您应该将模式设置为 production。
// entry：指定入口文件的路径，这是 Webpack 开始打包的文件。
// output：定义输出配置，包括输出文件的名称 (filename) 和输出目录的路径 (path)。
// module.rules：定义资源处理规则。在这个例子中，我们配置了三个规则：
// 使用 style-loader 和 css-loader 处理 CSS 文件。
// 使用 asset/resource 类型处理图片资源。
// 使用 babel-loader 和 @babel/preset-env 处理 JavaScript 文件，以实现跨浏览器兼容性。
// 您可以根据项目需求自定义 webpack.config.js 文件，例如添加插件、配置代码拆分和优化等。更多关于 Webpack 配置的信息，请查阅 Webpack 官方文档。

// const path = require('path');
//
// module.exports = {
//     mode: 'development',
//     entry: './src/index.js',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader']
//             },
//             {
//                 test: /\.(png|svg|jpg|jpeg|gif)$/i,
//                 type: 'asset/resource'
//             },
//             {
//                 test: /\.m?js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-env']
//                     }
//                 }
//             }
//         ]
//     }
// };

