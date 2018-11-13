const pg = require("pg");
const db = {};

let tables = {};
let uri;
let client;

db.connect = (req, res, next) => {
  uri =
    "postgres://dbomqaen:FUKYQ_vrQCHbBzHwBpBDAHfUw5R6DzO6@elmer.db.elephantsql.com:5432/dbomqaen";
  client = new pg.Client(uri);
  client.connect(err => {
    if (err) return console.log("Could not connect to postgres ", err);
  });

  console.log("First");
  next();
};

db.getTables = (req, res, next) => {
  client.query(
    "SELECT*FROM pg_catalog.pg_tables WHERE schemaname = 'public'",
    (err, result) => {
      if (err) throw new Error("Error querying database");
      result.rows.map(table => (tables[table.tablename] = {}));
      next();
    }
  );
};

db.getFields = (req, res) => {
  Object.keys(tables).map((element, index) => {
    client.query(
      `SELECT column_name, data_type FROM information_schema.columns WHERE table_name = '${element}'`,
      (err, result) => {
        if (err) reject(err);

        tables[element] = result.rows.reduce((acc, curr) => {
          acc[curr.column_name] = curr.data_type;
          return acc;
        }, {});

        console.log(index, tables, Object.keys(tables).length);
        if (index === Object.keys(tables).length - 1) {
          res.end(JSON.stringify(tables));
        }
      }
    );
  });
};

module.exports = db;