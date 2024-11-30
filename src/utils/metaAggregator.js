const metaAggregator = {
  registry: {}, // Stores manually registered functions
  cache: {}, // Caches results of dynamically executed functions

  // Registers a function manually for reuse
  registerFunction(name, func) {
    this.registry[name] = func;
  },

  // Dynamically imports and executes a function
  async execute(modulePath, functionName, params) {
    if (this.cache[functionName]) {
      return this.cache[functionName];
    }

    if (this.registry[functionName]) {
      return await this.registry[functionName](params);
    }

    const module = await import(`${modulePath}/${functionName}`);
    const resolvedFunction = module.default || module[functionName];
    if (!resolvedFunction) {
      throw new Error(`Function ${functionName} not found in module ${modulePath}`);
    }

    this.registerFunction(functionName, resolvedFunction);
    const result = await resolvedFunction(params);
    this.cache[functionName] = result;

    return result;
  },
};

export default metaAggregator;
