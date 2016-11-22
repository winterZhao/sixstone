# sixstone

#### 作用描述

这是一个包,作用是通过一些简单的命令实现快速生成目录结构的功能.作用类似于express-generator,koa-generator。在其中我放置了一套koa的文档结构和一套前端gulp的文档结构。当然，你也可以通过使用这个包搭建自己个性化DIY的包,后面会讲到。

### 安装

    npm install sixstone -g    只能全局安装;

### 命令行工具
         -h, --help            输出帮助信息
         -V, --version         版本号
         sixstone koa [name]   生成一个koa项目结构
         sixstone web [name]   生成一个前端项目结构



### 协议

MIT


### 扩展: 生成一个自己的个性化的目录结构包;

1. 克隆本项目并安装相关依赖

        git clone https://github.com/winterZhao/sixstone.git
        cd sixstone;
        npm install;

2.  将自己的目录结构放到`dist`文件夹下;这里以`express`为例;
3.  打开`conf/sixstone-config.js`文件，将自己的配置项填写进去;

        {
            'command': 'express',                   //命令
            'description': 'express-generator'  //命令描述;
        }
4. 打开`package.json`,修改`bin`字段对象的属性名为自己的定制名;

        "bin": {
            "zhangsan": "./bin/index.js"
        },
        
5. 执行 `npm link`命令;
6. 上传包到npm,这个可以看网上的教程。

欢迎提issue,fork,star。
