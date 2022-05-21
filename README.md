# MSF Database

## Getting Started

It it vital that you set up the database using the Excel, CSV, Ruby and JSON Files in the db folder. To do so, you can directly edit the csv file, or you can open the excel file and edit it there. Once done editing, you must save your file as a csv with the title msfList. Once you have your msfList.csv save, you need to run `ruby convertToJSON.rb` from inside the db folder (or add the path to the file from your current directory). This process should create and save a msfDB.json file.