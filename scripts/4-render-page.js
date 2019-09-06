/* global hexo */

'use strict';

hexo.extend.generator.register('post', function (locals) {
  var posts = locals.posts.toArray();
  var pattern = /(?<=\(\/).*?(?=\))/g;
  var titlePattern = /(?<=\[).*(?=\])/g;
  var menu = hexo.theme.config.menu_page;
  var pages = hexo.locals.get('pages')
  var match;
  var matchTitle;
  pages.forEach(function(page){
    if(page.source ===  menu) {
     match= page.raw.match(pattern);
     matchTitle = page.raw.match(titlePattern);
      if(match.length!=matchTitle.length){
        throw TypeError("两个匹配的不相同",match,matchTitle);
      }
    }
  })
  return locals.posts.map(function (post, i) {
    post.hasNext=post.hasPrev = true;
    var current =match.indexOf(post.slug);
    if(current!=-1){
      post.nextPath = match[current+1]||null;
      post.nextTitle = matchTitle[current+1]||null;
      post.prevPath = match[current-1]||null;
      post.prevTitle = match[current-1]||null;
    }
    if(i===0)post.hasPrev = false;
    if(i===locals.posts.length-1) post.hasNext = false;
    return {
      path: post.path,
      data: post,
      layout: 'post'
    };
  });
});