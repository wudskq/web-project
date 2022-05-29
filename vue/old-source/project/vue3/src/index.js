//使用es6导入语法
import $ from 'jquery';

//定义jquery入口函数
$(function() {
    //实现奇数行变色
    $('li:odd').css('background-color', 'skyblue');
    $('li:even').css('background-color', 'pink');
})