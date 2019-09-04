# hexo-theme-book

## Installation

```
git clone https://github.com/AngelName/hexo-theme-book.git themes/book
```

If you don't have scss renderer, follow this:

```
npm install hexo-renderer-scss --save
```

Modify `theme` entry in `_config.yml`

```
theme: book
```

## Change markdown renderer

为了更好的渲染质量,我建议你应该改变默认渲染
详情请看 [change markdown renderer](https://github.com/AngelName/hexo-theme-book/wiki/Change-markdown-renderer)
For better render quality, I suggest that you should change the default renderer.

The detail, see [change markdown renderer](https://github.com/AngelName/hexo-theme-book/wiki/Change-markdown-renderer)

## Katex support

为了支持 katex 把渲染器修改成hexo-renderer-markdown-it
然后,在看下支持列表[katex support](https://github.com/AngelName/hexo-theme-book/wiki/Katex-support)

For Katex support, please follow the instruction above to change your renderer to `hexo-renderer-markdown-it`, after that, see [katex support](https://github.com/AngelName/hexo-theme-book/wiki/Katex-support)

## Configuration

详细的配置索命看这个
The detail of config, see [Configuration](https://github.com/AngelName/hexo-theme-book/wiki/Configuration)

### Smooth Update

For smoothly updating, I recommand to create a config file named `book.yml` in `/source/_data` folder (If it doesn't exist, create one)

> **Notice: source folder is under your hexo work directory, not the theme one!**

Copy the contents of `/themes/book/_config.yml` to `/source/_data/book.yml`, it will replace the contents of config in `/themes/book/_config.yml`. Now you can configure it independently and also, you can update theme more smoothly.

## Post front-matter

```
---
title: <string>
comments: <boolean> (default: true)
---
```

## Update

进入主题目录,运行`git pull`.如果你是用/source/_data/book/yml,请注意更新不同的_config.yml
Jump into the theme folder, run `git pull`. If you use `/source/_data/book.yml`, please note the diffrence of updated `_config.yml`.


## Feature List
- [ ] 标签分类
- [ ] 归档 
- [ ] 门户首页
- [ ] 时间线
