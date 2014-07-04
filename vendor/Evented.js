var Evented = (function() {
  function initEventsIfUndef(eventName) {
    if (!this._events)
      this._events = {};
    if (!this._events[eventName])
      this._events[eventName] = [];
  }

  var Evented = {
    on: function(eventName, listener) {
      initEventsIfUndef.call(this, eventName);
      this._events[eventName].push(listener);
    },
    trigger: function(eventName, args) {
      initEventsIfUndef.call(this, eventName);
      args = args || [];
      var listeners = this._events[eventName];
      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        listener.apply(this, args);
      }
    },
    off: function(eventName) {
      initEventsIfUndef.call(this, eventName);
      this._events[eventName] = [];
    }
  };

  return Evented;
})();
