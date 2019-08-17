// 订阅者 Dep 用来存放Watcher观察者对象
class Dep {
  constructor(options) {
    this.subs = []
  }
  // 用addSubs方法可以在目前的Dep对象中增加一个Watcher的订阅操作
  addSubs(sub) {
    this.subs.push(sub);
  }
  // 用notify方法通知目前Dep对象的subs中的所有Watcher对象触发更新操作
  notify() {
    if (this.subs) {
      this.subs.forEach(sub => {
        sub.update();
      })
    }
  }
}

// 观察者 Watcher
class Watcher {
  constructor() {
    Dep.target = this;
  }
  update() {
    console.log('Watcher updated')
  }
}

Dep.target = null;



// 封装一个响应式reactive
function defineRactive(obj, key, value) {
  const dep = new Dep();
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get:() => {
      dep.addSubs(Dep.target)
      return value;
    },
    set:(newVal) => {
      if (value === newVal) return;
      dep.notify()
      console.log('视图更新了~')
    }
  })
}

// 观察者模式
function Observer(value) {
  if (!value || typeof value !== 'object' || value === null) return;
  Object.keys(value).forEach(key => {
    defineRactive(value, key, value[key])
  })
}

// 生命Vue
class Vue {
  constructor(options) {
    this._data = options.data;
    Observer(this._data)
    new Watcher()
  }
}



let vm = new Vue({
  data: {
    name: 'vm'
  }
})

console.log(vm._data.name)

vm._data.name = 'vue'

