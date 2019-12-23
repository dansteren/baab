switch (process.env.NODE_ENV) {
  case 'production':
  case 'staging':
    folder = 'dist'
    extension = 'js'
    break
  case 'development':
  default:
    folder = 'src'
    extension = 'ts'
    break
}

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: 'baab',
  synchronize: false,
  logging: false,
  entities: [`${folder}/entity/**/*.${extension}`],
  migrations: [`${folder}/migration/**/*.${extension}`],
  subscribers: [`${folder}/subscriber/**/*.${extension}`],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  }
}
