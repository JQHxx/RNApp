# RNApp

#### 一、mac react-native环境搭建

工具：vscode

- 1.1 安装brew
```
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

- 1.2 安装node和webpack
```
brew install node
brew install webpack
```

- 1.3 设置国内镜像
```
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

- 1.4 安装React Native
```
npm install -g react-native-cli
```

- 1.5 初始化项目和导入依赖模块
```
react-native init ProjectName
创建完成后在工程目录中执行： npm install 
```


