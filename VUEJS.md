# Vue.js 정리

## 데이터 바인딩  => 자주 바뀌는/중요한 데이터만 사용
```html
 <template>
  <div>
    <h4>{{products[0]}} 원룸</h4>
    <p>{{ price1 }} 만원</p>
  </div>
  <div>
    <h4>{{products[1]}} 원룸</h4>
    <p>70 만원</p>
  </div>
  <div>
    <h4>{{products[2]}} 원룸</h4>
    <h2>80 만원</h2>
  </div>
</template>
```

```javascript
  export default {
    name: 'App',
    data(){
      return {
        price1 : 60,
        products : ['성수동원룸', '천호동원룸', '마포구원룸']
      }
    },
    components: {
    }
  }
```

## HTML 반복문 => nav
```html
<template>
  <div class="menu">
    <a v-for="a in 메뉴들" :key="a"> {{ a }} </a>
  </div>
  <div v-for="(b,i) in products" :key="i">
    <h4>{{ b }}</h4>
    <p>50 만원</p>
  </div>
</template>
```

```javascript
 export default {
    name: 'App',
    data(){
      return {
        메뉴들 : ['Home', 'Shop', 'About'],
        products : ['역삼동원룸', '천호동원룸', '마포구원룸']
      }
    },
    components: {
    }
  }
```

## 이벤트 핸들러
v-on: => @

```html
<template>
  <div>
    <h4>{{products[0]}} 원룸</h4>
    <p>50 만원</p>
    <button @click="신고수++">허위매물신고</button> <span>신고수 : {{신고수}}</span>
  </div>
  <div>
    <h4>{{products[1]}} 원룸</h4>
    <p>60 만원</p>
  </div>
  <div>
    <h4>{{products[2]}} 원룸</h4>
    <p>70 만원</p>
  </div>
</template>
```

```javascript
export default {
    name: 'App',
    data(){
      return {
        신고수 : 0,
        메뉴들 : ['Home', 'Shop', 'About'],
        products : ['역삼동원룸', '천호동원룸', '마포구원룸']
      }
    },
    components: {
    }
  }
```
