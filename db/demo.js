module.exports = function(client) {

  client.query(`DROP TABLE IF EXISTS hce__c`);
  client.query(`DROP TABLE IF EXISTS hce1__c`);
 
  client.query(`CREATE TABLE hce__c (
   id SERIAL NOT NULL,
   sfid CHARACTER VARYING(18) UNIQUE,
   name CHARACTER VARYING(80),
   type__c CHARACTER VARYING(20)
  );`);

  client.query(`INSERT INTO hce__c (name, type__c) VALUES ('Berlin Hospital', 'HCO');`);
  client.query(`INSERT INTO hce__c (name, type__c) VALUES ('London Hospital', 'PO');`);
  client.query(`INSERT INTO hce__c (name, type__c) VALUES ('Warsaw Hospital', 'HCO');`);
  client.query(`INSERT INTO hce__c (name, type__c) VALUES ('Paris Hospital', 'HCO');`);
  client.query(`INSERT INTO hce__c (name, type__c) VALUES ('Cracow Hospital', 'PO');`);
};