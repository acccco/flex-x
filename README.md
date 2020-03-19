## flex-x

更加优雅的使用 flex

## 解释

flex 分为主轴和交叉轴两个方式。flex-x 从这个方式来使用 flex。

## 使用

### 安装

```html
<script src="https://cdn.jsdelivr.net/npm/flex-x/dist/class.css"></script>
```

```shell script
npm install flex-x

## or

yarn add  flex-x
```

### 使用

```javascript
import 'flex-x'
```

默认提供一系列的 class 更加简单的使用 flex

| className | 含义        |
| ---:      | :---      |
| flex-x    | 生成 flex 容器    |
| m-t-b     | 规定 flex 容器的主轴方向从上到下    |
| m-b-t     | 规定 flex 容器的主轴方向从下到上    |
| m-l-r     | 规定 flex 容器的主轴方向从左往右    |
| m-r-l     | 规定 flex 容器的主轴方向从右到左    |
| c-t-b     | 规定 flex 容器的交叉轴方向从上到下  |
| c-b-t     | 规定 flex 容器的交叉轴方向从下到上  |
| c-l-r     | 规定 flex 容器的交叉轴方向从左往右  |
| c-r-l     | 规定 flex 容器的交叉轴方向从右到左  |
| m-[s\space]-[x]   | x 可用值为: start,end,center,average,around,between,evenly 规定主轴方向上，元素的空间分配 |
| c-[s\space]-[x]   | x 可选值为: start,end,center,baseline,stretch 规定交叉轴方向上，元素的空间分配 |
| r-[s\space]-[x]   | x 可选值为: start,end,center,around,between,evenly,stretch 交叉轴上容器行的分布 |

[对于 flex 的理解](https://blog.acohome.cn/how-to-use-flex/)


