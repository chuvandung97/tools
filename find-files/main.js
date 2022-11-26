var fs = require("fs");
var files = fs.readdirSync(
  "G:\\Inovaantage\\Temp\\20220716\\.git\\lost-found\\other"
);
for (var i = 0; i < files.length; i++) {
  try {
    const data = fs.readFileSync(
      `G:\\Inovaantage\\Temp\\20220716\\.git\\lost-found\\other\\${files[i]}`,
      "utf8"
    );
    if (
      data.includes(
        "DROP FUNCTION IF EXISTS PUBLIC.FN_Array_Sort_Unique(ANYARRAY);"
      )
    ) {
      console.log(files[i]);
    }
  } catch (err) {
    console.error(err);
  }
}
