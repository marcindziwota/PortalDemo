module.exports = function(client) {

  client.query(`DROP TABLE IF EXISTS hce__c`);
  client.query(`DROP TABLE IF EXISTS hce1__c`);
 
  client.query(`CREATE TABLE hce__c (
   id SERIAL NOT NULL,
   sfid CHARACTER VARYING(18) UNIQUE,
   name CHARACTER VARYING(80),
   gsd_hcetype__c CHARACTER VARYING(20)
  );`);

  client.query(`INSERT INTO hce__c (name, gsd_hcetype__c) VALUES ('Berlin Hospital', 'HCO');`);
  client.query(`INSERT INTO hce__c (name, gsd_hcetype__c) VALUES ('London Hospital', 'PO');`);
  client.query(`INSERT INTO hce__c (name, gsd_hcetype__c) VALUES ('Warsaw Hospital', 'HCO');`);
  client.query(`INSERT INTO hce__c (name, gsd_hcetype__c) VALUES ('Paris Hospital', 'HCO');`);
  client.query(`INSERT INTO hce__c (name, gsd_hcetype__c) VALUES ('Cracow Hospital', 'PO');`);
};