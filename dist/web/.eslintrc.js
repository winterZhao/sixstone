module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true
    },
    "globals": {

    },
    "parserOptions": {
        "ecmaVersion": 6,  // 可选 3 5（默认） 6 7
        "sourceType": "module" // 可选script（默认） module
    },
    "rules": {
        // 峰驼命名格式;
        "camelcase": 0,
        // 语句强制分号结尾;
        "semi": [2, "always"],
        // 逗号风格，换行时在行首还是行尾
        "comma-style": [2, "last"],
        // 控制逗号前后的空格。前没有后有;
        "comma-spacing": [2, {"before": false,"after": true}],
        // 指定数组的元素之间要以空格隔开(,后面): never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格;
        "array-bracket-spacing": [2, "never"],
        // 对象字面量项尾不能有逗号;
        "comma-dangle": [2, "never"],
        // 对象冒号前不能有空格，冒号后必须有空格;
        "key-spacing": [2, {
            "beforeColon": false,
            "afterColon": true
        }],
        // 对象属性操作符.和[]的前面禁止有空格;
        "no-whitespace-before-property": 2,
        // ()内是否需要在 ( 右边和 ）左边加空格;
        "space-in-parens": [2, "never"],
        //中缀操作符周围要不要有空格,例如 var a = 23;
        "space-infix-ops": 2,
        // 禁止使用console;
        "no-console": 2,
        // 禁止使用debugger;
        "no-debugger": 2,
        // 禁止使用alert confirm prompt;
        "no-alert": 2,
        // 缩进风格;
        "indent": [2, 4],
        // 换行风格;
        "linebreak-style": [2, "unix"],
        // 引号类型 `` "" '';
        "quotes": [2, "single"],
        // function与()之间必须有小括号;
        "space-before-function-paren": [2, "always"],
        // 行内注释 '//'和内容中必须空一格;
        "spaced-comment": [2, "always"],
    }
}