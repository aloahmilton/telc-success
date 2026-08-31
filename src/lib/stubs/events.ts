// Browser stub for Node.js 'events' module
export class EventEmitter {
  private _listeners: Record<string, ((...args: unknown[]) => void)[]> = {};
  on(_event: string, _listener: (...args: unknown[]) => void) { return this; }
  off(_event: string, _listener: (...args: unknown[]) => void) { return this; }
  emit(_event: string, ..._args: unknown[]) { return false; }
  once(_event: string, _listener: (...args: unknown[]) => void) { return this; }
  removeListener(_event: string, _listener: (...args: unknown[]) => void) { return this; }
  removeAllListeners(_event?: string) { return this; }
  setMaxListeners(_n: number) { return this; }
  getMaxListeners() { return 10; }
  listeners(_event: string) { return this._listeners[_event] || []; }
  listenerCount(_event: string) { return (this._listeners[_event] || []).length; }
  eventNames() { return Object.keys(this._listeners); }
}

export default { EventEmitter };
