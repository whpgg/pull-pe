//避免触发过度频繁，书写了一个截留函数
export function throttle (fn, delay, mustRunDelay = 0) {
    let timer = null;
    let startTime;
    return function () {
      const context = this;
      const args = arguments;
      const now = +new Date();
      clearTimeout(timer);
      if (!startTime) {
        startTime = now;
      }
      if (mustRunDelay !== 0 && now - startTime >= mustRunDelay) {
        fn.apply(context, args);
        startTime = now;
      } else {
        timer = setTimeout(function () {
          fn.apply(context, args);
        }, delay);
      }
    };
  }