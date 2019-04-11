# Vue reactive clock plugin


## What is it good for ?

This plugin helps build time reactive UIs

A few examples where it might be useful :

- If you want to display a clock that updates as time goes by
- If you have a live dashboard with the current day's info, when passing to the next day, you'll want it to automatically update.

## Usage:

Hook up the plugin to your Vue

```javascript

import Clock from 'vue-reactive-clock'

Vue.use(Clock);

```

This will add a `$clock` property to your Vue which self updates.

It can be used directly in the templates ...

```
<template>
 <div>
    Today's date : {{ $clock.now | formatFilter }}
 </div>
</template>
```

You can use `$clock` programatically in your computed properties to have your UI update as time passes

```
computed: {
  isUrgent() {
    let d =  new Date(this.$clock.now);
    return d.getHours() > 18;
  }
}
```




