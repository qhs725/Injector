Cu.import("resource://gre/modules/FileUtils.jsm");
 Cu.import("resource://gre/modules/Services.jsm");

var file = FileUtils.getFile("ProfD", ["codeStapler.sqlite"]);
var dbConn = Services.storage.openDatabase(file); // Will also create the file if it does not exist
dbConn.executeSimpleSQL("CREATE TABLE table_name (column_name INTEGER)");

var numb = 1234;
dbConn.executeSimpleSQL("INSERT INTO table_name (column_name)"				
				+ " VALUES (" + numb + ")");
console.log("Number: " + numb);

var statement = dbConn.createStatement("SELECT * FROM table_name; OUTPUT TO 'c:\\codeStapler.csv' FORMAT TEXT QUOTE '\"' WITH COLUMN NAMES;");
