fs = require "fs"

{print} = require "sys"
{spawn} = require "child_process"

task "watch", "watch src/ for changes and build it to lib/", ->
    coffee = spawn("coffee", ["-w", "-c", "-o", "lib", "src"])
    coffee.stderr.on("data", (data) -> process.stderr.write(data.toString()))
    coffee.stdout.on("data", (data) -> print(data.toString()))
