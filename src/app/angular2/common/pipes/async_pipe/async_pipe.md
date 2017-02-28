asyncPipe

---

```typescript
Observable.interval(1000)
    .scan((acc, cur)=>[cur, ...acc].slice(0, 5), []);

```

```html

    <ul>
      <li *ngFor="let item of items | async">{{item}}</li>
    </ul>

```

如果不加 async:
<br>
![错误](https://ww2.sinaimg.cn/large/006tKfTcgy1fd69lnj75qj31kw0ao7gc.jpg)

---
