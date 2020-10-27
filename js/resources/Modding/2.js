Modding.prototype.stopped = function() {
    var run;
    return run=document.querySelector("#runstopmod"),run.setAttribute("cmd","start"),run.setAttribute("data-tooltip","Run Mod"),run.getElementsByTagName("i")[0].setAttribute("class","fa fa-fw fa-play"),document.querySelector("#test").setAttribute("style","display:none"),this.terminal.echo("Mod stopped"), this.context = null, null != this.field_view && (this.field_view.killed = !0), this.field_view = null, document.getElementById("editor").style.height = "100%", document.getElementById("editor").style.bottom = "0px", document.getElementById("gameframe").style.height = "0%", document.getElementById("gameframe").innerHTML = "", this.editor.resize()
};
Modding.prototype.modStarted = function(t) {
    var run;
    return run=document.querySelector("#runstopmod"),run.setAttribute("cmd","stop"),run.setAttribute("data-tooltip","Terminate Mod"),run.getElementsByTagName("i")[0].setAttribute("class","fa fa-fw fa-stop"),document.querySelector("#test").removeAttribute("style"),this.address = t, this.terminal.echo("Mod started"), this.terminal.echo("https://starblast.io#" + this.address), this.terminal.echo("Use 'test' to open game frame for testing"), this.field_view = new FieldView(this.game)
};
Modding.prototype.run = function() {
    var t, run;
    return null != this.context ? void this.terminal.echo("Mod already running, use stop first") : (run=document.querySelector("#runstopmod"),run.setAttribute("cmd","stop"),run.setAttribute("data-tooltip","Terminate Mod"),run.getElementsByTagName("i")[0].setAttribute("class","fa fa-fw fa-stop"),this.game = new llOl0(this), t = Date.now(), this.compile(), this.terminal.echo("Code initialization took " + (Date.now() - t) + "ms"), null == this.context.options && (this.context.options = {}), new PrivateServerFinder(this, this.region, function(t) {
        return function(e) {
            return t.address = e, window.parent.postMessage(JSON.stringify({
                name: "get_token",
                address: t.address
            }), "*")
        }
    }(this), !0))
};
Modding.prototype.stop = function() {
    var run;
    return null != this.l1II0 ? (run=document.querySelector("#runstopmod"),run.setAttribute("cmd","start"),run.setAttribute("data-tooltip","Run Mod"),run.getElementsByTagName("i")[0].setAttribute("class","fa fa-fw fa-play"),this.l1II0.stop()) : this.context = null
};
Modding.prototype.tick = function(t) {
    var e;
    if (this.game.tick(t), e = Date.now(), null != this.context.tick && this.context.tick(this.game), e = Date.now() - e, this.max_tick_time = Math.max(this.max_tick_time, e), this.tick_time += e, this.tick_count += 1, this.tick_count >= 600) return (localStorage.getItem("showtick") == "true") ? (this.terminal.echo("Tick CPU time: average " + Math.round(this.tick_time / this.tick_count) + " ms ; max " + Math.round(this.max_tick_time) + " ms"), this.terminal.echo("Data sent: " + Math.round(this.l1II0.log_sent / this.tick_count * 60) + " bytes per second")) : (void 0), this.tick_count = 0, this.tick_time = 0, this.max_tick_time = 0, this.l1II0.log_sent = 0
};
Modding.prototype.setRegion = function(t) {
    return "Europe" === t || "Asia" === t || "America" === t ? (localStorage.setItem("modding_region", t), this.region = t, this.terminal.echo("Region set to " + t),document.querySelector("#region-select").options.selectedIndex=["Asia","America","Europe"].indexOf(t)+1) : this.terminal.error("Unknown region: " + t)
};
