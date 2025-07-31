import { platform, release, arch, cpus, totalmem, uptime } from 'node:os'

console.log('Info del sistema operativo:')
console.log('---------------------------')
console.log(`Nombre del sistema operativo: ${platform()}`)
console.log(`Versión del sistema operativo: ${release()}`)
console.log(`Arquitectura del sistema operativo: ${arch()}`)
console.log('CPUs:', cpus())
console.log(`Memoria total: ${totalmem() / (1024 * 1024)} MB`)
console.log('uptime del sistema: ' + uptime() / 60 / 60 + ' horas')
