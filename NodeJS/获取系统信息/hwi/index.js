import * as os from 'os'

// CPU 信息
const cpuInfo = () => {
  const cpus = os.cpus()
  const utilizationRate = {
    user: 0,
    nice: 0,
    sys: 0,
    idle: 0,
    irq: 0,
    total: 0
  }

  cpus.forEach(cpu => {
    const { times } = cpu
    utilizationRate.user += times.user
    utilizationRate.nice += times.nice
    utilizationRate.sys += times.sys
    utilizationRate.idle += times.idle
    utilizationRate.irq += times.irq
    utilizationRate.total += times.total
  })

  return {
    total: utilizationRate.user + utilizationRate.nice + utilizationRate.sys + utilizationRate.idle + utilizationRate.irq,
    idle: utilizationRate.idle
  }
}

/**
 * CPU 状态
 * @param { function } callback 回调函数（接收数据）
 * @param { boolean } free [true] CPU空闲率 | [false] CPU使用率
 */
const _cpuStatus = async (callback, mode = false) => {
  const stats1 = cpuInfo()

  await setTimeout(() => {
    const stats2 = cpuInfo()
    const perc	= (stats2.idle - stats1.idle) / (stats2.total - stats1.total)

    if (mode) callback(perc)
    else callback(1 - perc)
  }, 1000)
}

// CPU核心数
const _cpuCount = () => {
  return os.cpus().length
}

// 系统运行时间
const _systemUptime = () => {
  return os.uptime()
}

// 剩余内存（MB）
const _freeMemory = () => {
  return Math.round(os.freemem() / 1048576)
}

// 总内存（MB）
const _totalMemory = () => {
  return Math.round(os.totalmem() / 1048576)
}

// 内存使用率
const _memoryUsagePercentage = () => {
  return (1 - (os.freemem() / os.totalmem())).toFixed(2)
}

// 内存空闲率
const _memoryFreePercentage = () => {
  return (os.freemem() / os.totalmem()).toFixed(2)
}

export {
  _cpuStatus,              // CPU状态
  _cpuCount,               // CPU核心数
  _systemUptime,           // 系统运行时间
  _freeMemory,             // 剩余RAM
  _totalMemory,            // 总RAM
  _memoryUsagePercentage,  // RAM使用率
  _memoryFreePercentage    // RAM空闲率
}

export default {
  _cpuStatus,              // CPU状态
  _cpuCount,               // CPU核心数
  _systemUptime,           // 系统运行时间
  _freeMemory,             // 剩余RAM
  _totalMemory,            // 总RAM
  _memoryUsagePercentage,  // RAM使用率
  _memoryFreePercentage    // RAM空闲率
}
