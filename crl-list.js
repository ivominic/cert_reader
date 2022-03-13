const asn1 = require("asn1js");
const pkijs = require("pkijs");
const pvutils = require("pvutils");
const fs = require("fs");

fs.readFile("./MNEeIDCA1.crl", (err, crlData) => {
  if (err) {
    throw err;
  }
  const buffer = new Uint8Array(crlData).buffer;
  const asn1crl = asn1.fromBER(buffer);
  const crl = new pkijs.CertificateRevocationList({
    schema: asn1crl.result,
  });

  for (const { userCertificate } of crl.revokedCertificates) {
    //prints serial numbers of revoced certificates
    console.log(pvutils.bufferToHexCodes(userCertificate.valueBlock.valueHex));
  }
});
