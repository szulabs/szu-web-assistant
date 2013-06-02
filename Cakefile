fs = require "fs"
path = require "path"
rimraf = require "rimraf"
crx = require "crx"

{print} = require "sys"
{spawn} = require "child_process"
{log} = require "util"

EXTENSION_NAME = "szu-web-assistant"
EXTENSION_MANIFEST = ["assets", "deps", "lib", "views", "manifest.json"]

# --------------------
# Functions Defination
# --------------------


# Gets the user home directory
getHomeDirectory = ->
  envname = if process.platform == 'win32' then "USERPROFILE" else "HOME"
  process.env[envname]


# Runs shell command as a child process
shellRun = (command, args=[], cb=null) ->
  cmd = spawn(command, args)
  cmd.stderr.on("data", (data) -> process.stderr.write(data.toString()))
  cmd.stdout.on("data", (data) -> print(data.toString()))
  cmd.on("close", cb) if cb


# Builds with coffee-script command utility
build = (args=[], cb=undefined) ->
  shellRun "coffee", args.concat(["-c", "-o", "lib", "src"]), ->
    log "build finished"
    cb?()


# Removes files
removeFiles = (paths, cb) ->
  _rm = (path) ->
    if path
      rimraf path, (error) ->
        throw error if error
        log "clean #{path}"
        _rm(paths.pop())
    else
      cb?()
  _rm(paths.pop())


# Cleans files in current working directory
clean = (filenames, cb=undefined) ->
  paths = (path.join(__dirname, filename) for filename in filenames)
  removeFiles(paths, cb)


# Creates or uses exists private key
findPrivateKey = (location, cb) ->
  # create private key if not exists
  if fs.existsSync(location)
    log "exists private key: #{location}"
    cb?(location)
  else
    sshArgs = ["-N", "", "-b", "1024", "-t", "rsa", "-f", location]
    shellRun "ssh-keygen", sshArgs, (exitCode)->
      # remove public key and callback
      fs.unlink("#{location}.pub") if fs.existsSync("#{location}.pub")
      log "created private key: #{location}"
      cb?(location)


# Packages the crx archive
packageCrx = (args, cb) ->
  findPrivateKey args.key, ->
    # read the private key content
    privateKey = fs.readFileSync(args.key)
    # package extension
    extension = new crx(rootDirectory: args.source, privateKey: privateKey)
    loadContents = extension.loadContents
    # remove useless files
    extension.loadContents = (cb) ->
      allFiles = fs.readdirSync(this.path)
      isUseless = (filename) -> filename not in EXTENSION_MANIFEST
      uselessFiles = (path.resolve(this.path, f) for f in allFiles when isUseless(f))
      removeFiles uselessFiles, =>
        loadContents.call?(this, cb)
    extension.pack (error, data) ->
      throw error if error
      fs.writeFileSync(args.target, data)
      log "package created: #{args.target}"
      @destroy()
      cb?()


# ----------------
# Tasks Defination
# ----------------


task "watch", "watch src/ for changes and build it to lib/", ->
  build(["-w", "-m"])

task "build", "build src/ to lib/", ->
  build()

task "clean", "remove all compiled files.", ->
  clean(["lib", "#{EXTENSION_NAME}.crx"])

task "package", "package the crx file.", ->
  clean ["lib", "#{EXTENSION_NAME}.crx"], ->
    build [], ->
      packageCrx
        source: __dirname,
        target: path.join(__dirname, "#{EXTENSION_NAME}.crx"),
        key: path.join(getHomeDirectory(), ".#{EXTENSION_NAME}.pem")
