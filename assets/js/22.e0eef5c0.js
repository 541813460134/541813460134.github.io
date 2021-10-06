(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{504:function(v,t,_){"use strict";_.r(t);var p=_(15),s=Object(p.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),_("p",[v._v("说明：本章内容是博主的Java学习笔记，")])]),v._v(" "),_("p",[_("strong",[v._v("可见性")])]),v._v(" "),_("p",[v._v("在多线程环境中, 一个线程对某个共享变量进行更新之后 , 后续 其他的线程可能无法立即读到这个更新的结果, 这就是线程安全问 题的另外一种形式: 可见性(visibility).")]),v._v(" "),_("p",[v._v("如果一个线程对共享变量更新后, 后续访问该变量的其他线程可以读到更新的结果, 称这个线程对共享变量的更新对其他线程可见, 否则称这个线程对共享变量的更新对其他线程不可见.")]),v._v(" "),_("p",[v._v("多线程程序因为可见性问题可能会导致其他线程读取到了旧数据(脏数据).")]),v._v(" "),_("p",[_("strong",[v._v("重排序")])]),v._v(" "),_("p",[v._v("在多核处理器的环境下,编写的顺序结构,这种操作执行的顺序可能是没有保障的:")]),v._v(" "),_("p",[v._v("编译器可能会改变两个操作的先后顺序;")]),v._v(" "),_("p",[v._v("处理器也可能不会按照目标代码的顺序执行;")]),v._v(" "),_("p",[v._v("这种一个处理器上执行的多个操作,在其他处理器来看它的顺序与目标代码指定的顺序可能不一样,这种现象称为重排序.")]),v._v(" "),_("p",[v._v("重排序是对内存访问有序操作的一种优化,可以在不影响单线程 程序正确的情况下提升程序的性能.但是,可能对多线程程序的正确 性产生影响,即可能导致线程安全问题")]),v._v(" "),_("p",[v._v("重排序与可见性问题类似,不是必然出现的.")]),v._v(" "),_("p",[v._v("与内存操作顺序有关的几个概念:")]),v._v(" "),_("p",[v._v("源代码顺序, 就是源码中指定的内存访问顺序.")]),v._v(" "),_("p",[v._v("程序顺序, 处理器上运行的目标代码所指定的内存访问顺序")]),v._v(" "),_("p",[v._v("执行顺序,内存访问操作在处理器上的实际执行顺序")]),v._v(" "),_("p",[v._v("感知顺序,给定处理器所感知到的该处理器及其他处理器的内存访问操作的顺序")]),v._v(" "),_("p",[v._v("JVM与计算机内存模型")]),v._v(" "),_("img",{staticStyle:{zoom:"150%"},attrs:{src:"https://gitee.com/wqm_104/mypic/raw/master/img/java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B.png",alt:"java内存模型"}})])}),[],!1,null,null,null);t.default=s.exports}}]);