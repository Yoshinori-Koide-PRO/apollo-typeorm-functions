import { initTracer } from 'jaeger-client';

const config = {
  serviceName: 'apollo-typeorm-opentracing',
  sampler: {
    type: 'const',
    param: 1,
  },
  reporter: {
    logSpans: true,
    collectorEndpoint: 'http://172.17.0.1:14268/api/traces',
  },
}

const options = {
  logger: {
    info(msg: string) {
      console.log('INFO ', msg)
    },
    error(msg: string) {
      console.log('ERROR', msg)
    },
  },
}

export const tracer = initTracer(config, options)
