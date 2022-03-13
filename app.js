const ca = require("win-ca");
const { X509Certificate } = require("crypto");

let rootCAs = [];
// Fetch all certificates in PEM format
ca({
  format: ca.der2.pem,
  ondata: (crt) => {
    //console.log(crt);
    rootCAs.push(crt);
  },
});

let list = [];
//ca({ store: ["root", "ca"], ondata: list });
ca({ store: ["my"], ondata: list });
console.log(list);
//console.log(list[0].toString());
const x509 = new X509Certificate(list[4]);
console.log(x509);

console.log({
  fingerprint: x509.fingerprint,
  fingerprint256: x509.fingerprint256,
  infoAccess: x509.infoAccess,
  issuer: x509.issuer,
  issuerCertificate: x509.issuerCertificate,
  keyUsage: x509.keyUsage,
  publicKey: x509.publicKey,
  raw: x509.raw,
  serialNumber: x509.serialNumber,
  subject: x509.subject,
  subjectAltName: x509.subjectAltName,
  toJSON: x509.toJSON(),
  validFrom: x509.validFrom,
  validTo: x509.validTo,
  toLegacyObject: x509.toLegacyObject(),
  toString: x509.toString(),
  //verify: x509.verify(),
});
