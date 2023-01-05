interface Storage {
  [key: string]: WeakRef<object>;
}

/**
 * A native-like object, but with a weak reference to all values, automatically deleting the corresponding property when the value is recycled
 */
class WeakObject {
  #storage: Storage = {};

  #registry = new FinalizationRegistry(this.#callback.bind(this));

  #callback(prop: string): void {
    delete this.#storage[prop];
  }

  /**
   * Get a property of WeakObject
   * @param {string} prop property name
   * @returns {object|undefined} value of property or undefined if the property not exists
   */
  get(prop: string): object | undefined {
    return this.#storage[prop]?.deref();
  }

  /**
   * Set a property of WeakObject
   * @param {string} prop property name
   * @param {object} value value
   * @returns {WeakObject} the WeakObject that called this method
   */
  set(prop: string, value: object): WeakObject {
    if (typeof prop !== "string")
      throw TypeError("Argument 'prop' must be a string!");
    if (!(value instanceof Object))
      throw TypeError("Argument 'value' must be an object!");

    const currentOriginObj = this.#storage[prop]?.deref();
    if (currentOriginObj) this.#registry.unregister(currentOriginObj);
    const ref = new WeakRef(value);
    this.#registry.register(value, prop, ref);
    this.#storage[prop] = ref;
    return this;
  }

  /**
   * Determine if a property exists in WeakObject
   * @param {string} prop property name
   * @returns {boolean} returns true if the property exists, otherwise false
   */
  has(prop: string): boolean {
    return this.#storage[prop]?.deref() !== undefined;
  }

  /**
   * Delete a property of WeakObject if exists
   * @param {string} prop property name
   * @returns {boolean} returns true when the property exists and is successfully deleted, otherwise false
   */
  delete(prop: string): boolean {
    if (this.#storage[prop]) {
      const originObj = this.#storage[prop]?.deref();
      if (originObj) this.#registry.unregister(originObj);
      delete this.#storage[prop];
      return true;
    }
    return false;
  }
}

export default WeakObject;
