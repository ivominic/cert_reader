const ca = require("win-ca");
const pemtools = require("pemtools");
const pki = require("node-forge").pki;

let list = [];
ca({ store: ["my"], ondata: list });
let certInPem = pemtools(list[4], "CERTIFICATE").toString();
let extensions = pki.certificateFromPem(certInPem).extensions;

extensions.forEach((item) => {
  if (item.name == "cRLDistributionPoints") {
    console.log(item);
  }
});
