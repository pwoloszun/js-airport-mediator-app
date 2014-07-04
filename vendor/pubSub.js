var pubSub = (function(mixin, Evented) {
  var evented = mixin({}, Evented);

  function subscribe(topic, handler) {
    evented.on(topic, handler);
  }

  function publish(topic, args) {
    evented.trigger(topic, args);
  }

  function unsubscribe(topic) {
    evented.off(topic);
  }

  return {
    subscribe: subscribe,
    publish: publish,
    unsubscribe: unsubscribe
  };
})(mixin, Evented);
