module.exports = ({env}) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "default"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", ""),
    },
    useNullAsDefault: true,
  },
});
