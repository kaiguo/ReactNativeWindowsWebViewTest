window.alert = function (msg) { window.external.notify(`{"type":"alert","message":"${msg}"}`) }
