# sixstone

[中文](./readme_Chinese.md)

#### Description

  This is a package, the aim is through a number of simple commands to achieve the function of the rapid generation of directory structure,which is similar to the express-generator, koa-generator. In which I put a set of KOA document structure and a set of front-end gulp document structure. Of course, you can also use this package to build their own personalized DIY package, will 
be mentioned in the back.

## Installation

    $ npm install sixstone -g     Global installation only;

## Command Line Options
         -h, --help            output usage information
         -V, --version         output the version number
         sixstone koa [name]   get environment of koa
         sixstone web [name]   get environment of Front end project(PC and Mobile)

## License

MIT


## Expand: generate a personalized directory structure package;

1. Cloning of the project and installation related dependency

        git clone https://github.com/winterZhao/sixstone.git
        cd sixstone;
        npm install;

2.  Put your own directory structure in the `dist` folder; `express` as an example;
3.  Open the `sixstone-config.js` file, fill in your own configuration item;

        {
            'command': 'express',                   // command
            'description': 'express-generator'      // description;
        }
4. Open the `package.json`, modify the `bin` field;Can only change the name of the attribute

        "bin": {
            "zhangsan": "./bin/index.js"
        },

5. Execute link` `npm command;
6. Upload packets to NPM, this can be read online tutorial.
