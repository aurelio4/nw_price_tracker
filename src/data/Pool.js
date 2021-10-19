const { Pool } = require('pg');

const pool = new Pool({
  user: 'sgiuztofumpoqb',
  host: 'ec2-35-170-123-64.compute-1.amazonaws.com',
  database: 'db6ee860to813b',
  password: '628563d7e5b32fe0e956495f7271067ea16680512684297f86ee777cd2ef337c',
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
