
### 使用;
1. 这是一个sixstone生成的前端项目结果。
2. 前端代码文件夹在`source/src`里,`source/build`里为gulp处理后的文件;
3. 没有模块化思想在里面,公共模块方法直接`<script src='xx'></script>`引入即可;
4. gulp使用:
    1. 使用前需全局安装`gulp`；
    2. 项目开发过程中使用`gulp getSpriter`生成雪碧图,放在`source/src/images/sprite.png`位置;
    3. 项目开发完成后使用`gulp`命令将css/js合并压缩生成到`buid`文件下;
    4. 将`layout`/`images`文件夹手动复制到`build`文件夹下;
    5. 修改`layout`文件夹下的所有css和js文件统一为各自index文件的名字加`.min.css/.min.js`。比如:`layout`内文件名为`index.html`;则只需要把`index.html`里所有的本地css link和js scripts标签都删掉,只写入`<link href='../css/index.min.css'/><script src='../js/index.min.js'>即可`。
       **注意**:index文件里的CDN路径保持不变,不能删除;

5. 完成:
      * 如果是前端项目,则`build`文件夹里的代码就是最终的代码;
      * 如果是后端node项目,则将`build`文件夹里的`layout`内的所有文件放到`views`目录里,其余文件夹放到`public`目录下。