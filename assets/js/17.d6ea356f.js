(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{499:function(t,a,v){"use strict";v.r(a);var s=v(15),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("说明：本章内容是博主的Java学习笔记，")])]),t._v(" "),v("h2",{attrs:{id:"锁的升级"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#锁的升级"}},[t._v("#")]),t._v(" 锁的升级")]),t._v(" "),v("p",[t._v("在Java早期版本中，synchronized属于重量级锁，效率低下，因为操作系统实现线程之间的切换时需要从用户态转换到核心态，这个状态之间的转换需要相对比较长的时间，时间成本相对较高。")]),t._v(" "),v("p",[v("strong",[t._v("偏向锁")]),t._v(" "),v("strong",[t._v("为什么要引入偏向锁？")])]),t._v(" "),v("p",[t._v("因为经过HotSpot的作者大量的研究发现，大多数时候是不存在锁竞争的，常常是一个线程多次获得同一个锁，因此如果每次都要竞争锁会增大很多没有必要付出的代价，为了降低获取锁的代价，才引入的偏向锁。")]),t._v(" "),v("p",[v("strong",[t._v("偏向锁原理和升级过程")])]),t._v(" "),v("p",[t._v("当线程1访问代码块并获取锁对象时，会在java对象头和栈帧中记录偏向的锁的threadID，因为偏向锁不会主动释放锁，因此以后线程1再次获取锁的时候，需要比较当前线程的threadID和Java对象头中的threadID是否一致，如果一致（还是线程1获取锁对象），则无需使用CAS来加锁、解锁；如果不一致（其他线程，如线程2要竞争锁对象，而偏向锁不会主动释放因此还是存储的线程1的threadID），那么需要查看Java对象头中记录的线程1是否存活，如果没有存活，那么锁对象被重置为无锁状态，其它线程（线程2）可以竞争将其设置为偏向锁；如果存活，那么立刻查找该线程（线程1）的栈帧信息，如果还是需要继续持有这个锁对象，那么暂停当前线程1，撤销偏向锁，升级为轻量级锁，如果线程1 不再使用该锁对象，那么将锁对象状态设为无锁状态，重新偏向新的线程。")]),t._v(" "),v("p",[v("strong",[t._v("轻量级锁")]),t._v(" "),v("strong",[t._v("为什么要引入轻量级锁？")])]),t._v(" "),v("p",[t._v("轻量级锁考虑的是竞争锁对象的线程不多，而且线程持有锁的时间也不长的情景。因为阻塞线程需要CPU从用户态转到内核态，代价较大，如果刚刚阻塞不久这个锁就被释放了，那这个代价就有点得不偿失了，因此这个时候就干脆不阻塞这个线程，让它自旋这等待锁释放。")]),t._v(" "),v("p",[v("strong",[t._v("轻量级锁原理和升级过程")])]),t._v(" "),v("p",[t._v("线程1获取轻量级锁时会先把锁对象的对象头MarkWord复制一份到线程1的栈帧中创建的用于存储锁记录的空间（称为DisplacedMarkWord），然后使用CAS把对象头中的内容替换为线程1存储的锁记录（DisplacedMarkWord）的地址；")]),t._v(" "),v("p",[t._v("如果在线程1复制对象头的同时（在线程1CAS之前），线程2也准备获取锁，复制了对象头到线程2的锁记录空间中，但是在线程2CAS的时候，发现线程1已经把对象头换了，线程2的CAS失败，那么线程2就尝试使用自旋锁来等待线程1释放锁。 自旋锁简单来说就是让线程2在循环中不断CAS")]),t._v(" "),v("p",[t._v("但是如果自旋的时间太长也不行，因为自旋是要消耗CPU的，因此自旋的次数是有限制的，比如10次或者100次，如果自旋次数到了线程1还没有释放锁，或者线程1还在执行，线程2还在自旋等待，这时又有一个线程3过来竞争这个锁对象，那么这个时候轻量级锁就会膨胀为重量级锁。重量级锁把除了拥有锁的线程都阻塞，防止CPU空转。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/wqm_104/mypic/raw/master/img/synchronize%E9%94%81.png",alt:"img"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);